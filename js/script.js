const windows = [
  'subnav-all-products',
  'subnav-more',
  'subnav-more-sm',
  'subnav-hamburguer',
]

const isOpenWindows = []

windows.forEach(el => {
  isOpenWindows[el] = false
})

const closeAllMenus = _ => {
  //close each menu window
  windows.forEach(win => {
      const el = document.getElementById(win)
      el.style.display='none'
      isOpenWindows[win] = false
  })
}

const openMenu = (id) => {
  //iterating windows by windows to check which one was invoked
  windows.forEach(win => {
      const el = document.getElementById(win)
      const elTrigger = document.getElementById(win+'-handler')
      if(id===win){
          //if that window has been invoked, show it
          el.style.display=isOpenWindows[id] ? 'none' : 'block'
          elTrigger.style.background=isOpenWindows[id] ? 'white' : '#ededed'
          //set true to its window flag
          isOpenWindows[id] = !isOpenWindows[id]
          
      }
      else{
          //if that window has not been invoked, close it
          el.style.display='none'
          //set true to its window flag
          isOpenWindows[win] = false
      }
  })
  updateIcons()
}

const updateIcons = _ => {
  const hamburguerIcon = document.getElementById("subnav-hamburguer-handler")
  hamburguerIcon.innerHTML = isOpenWindows['subnav-hamburguer'] ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>'
  hamburguerIcon.style.background='white'
}

const closeLearn = _ =>{
    const learnClose = document.getElementById('learn_close')
    learnClose.style.display = 'none'
}

let slideIndex = 1;

const updateColorPauseButtonCarousel = _ => {
  const iconPause = document.getElementsByClassName("fa-pause");
  const iconPlay = document.getElementsByClassName("fa-play");
  const pauseBoxCarousel = document.getElementsByClassName("pausebox");
  switch(slideIndex){
    case(1):
      iconPause[0].classList.remove('icon-pause')
      iconPause[0].classList.add('icon-pause-reverse')
      iconPlay[0].classList.remove('icon-pause')
      iconPlay[0].classList.add('icon-pause-reverse')
      pauseBoxCarousel[0].classList.remove('pause-carousel')
      pauseBoxCarousel[0].classList.add('pause-carousel-reverse')
      pauseBoxCarousel[1].classList.remove('pause-carousel')
      pauseBoxCarousel[1].classList.add('pause-carousel-reverse')
      break
    case(2):
      iconPause[0].classList.add('icon-pause')
      iconPause[0].classList.remove('icon-pause-reverse')
      iconPlay[0].classList.add('icon-pause')
      iconPlay[0].classList.remove('icon-pause-reverse')
      pauseBoxCarousel[0].classList.add('pause-carousel')
      pauseBoxCarousel[0].classList.remove('pause-carousel-reverse')
      pauseBoxCarousel[1].classList.add('pause-carousel')
      pauseBoxCarousel[1].classList.remove('pause-carousel-reverse')
      break
  }
}

const showSlides = n => {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  updateColorPauseButtonCarousel()
}

const plusSlides = n => {
  showSlides(slideIndex += n)
}

const currentSlide = n => {
  showSlides(slideIndex = n)
}

showSlides(slideIndex)

const plusSlideAdd1 = () => {
  plusSlides(1)
}

let carouselInterval = setInterval(plusSlideAdd1, 6000)

const pauseCarousel = _ =>{
  const pauseGroup = document.getElementsByClassName("pause-group");
  const playGroup = document.getElementsByClassName("play-group");
  clearInterval(carouselInterval)
  pauseGroup[0].style.display = 'none'
  playGroup[0].style.display = 'inline'
}

const resumeCarousel = _ =>{
  const pauseGroup = document.getElementsByClassName("pause-group");
  const playGroup = document.getElementsByClassName("play-group");
  carouselInterval = setInterval(plusSlideAdd1, 6000)
  pauseGroup[0].style.display = 'inline'
  playGroup[0].style.display = 'none'
}

const endListProducts = _ => {
  const listProducts = document.getElementsByClassName('list-products')
  const prevProducts = document.getElementsByClassName("prev-products")
  const nextProducts = document.getElementsByClassName("next-products")
  prevProducts[0].style.visibility = 'visible'
  nextProducts[0].style.visibility = 'hidden'
  listProducts[0].style.left=`${-1 * (1100 - window.innerWidth)}px`
}

const beginListProducts = _ => {
  const listProducts = document.getElementsByClassName('list-products')
  const prevProducts = document.getElementsByClassName("prev-products")
  const nextProducts = document.getElementsByClassName("next-products")
  prevProducts[0].style.visibility = 'hidden'
  nextProducts[0].style.visibility = 'visible'
  listProducts[0].style.left='0px'
}

window.onresize = _ =>{
  const prevProducts = document.getElementsByClassName("prev-products")
  const nextProducts = document.getElementsByClassName("next-products")
  const listProducts = document.getElementsByClassName('list-products')
  if(window.innerWidth>1180){
    listProducts[0].style.justifyContent='center'
    prevProducts[0].style.visibility = 'hidden'
    nextProducts[0].style.visibility = 'hidden'
  }
  else{
    if(listProducts[0].style.justifyContent=='center'){
      nextProducts[0].style.visibility = 'visible'
      listProducts[0].style.justifyContent='flex-start'
    }
  }

  //handling menu windows
  if(isOpenWindows['subnav-all-products'] && (window.innerWidth<859)){
    closeAllMenus()
  }
  if(isOpenWindows['subnav-more'] && (window.innerWidth>944 || window.innerWidth<865)){
    closeAllMenus()
  }
  if(isOpenWindows['subnav-more-sm'] && (window.innerWidth>864 || window.innerWidth<859)){
    closeAllMenus()
  }
  if(isOpenWindows['subnav-hamburguer'] && (window.innerWidth>859)){
    closeAllMenus()
  }
  updateIcons()
}

const submenus = document.querySelectorAll('.submenu')
Array.from(submenus).forEach(submenu => {
  submenu.addEventListener('click', (ev)=>{
    submenu.children.item(1).style.display = submenu.children.item(1).style.display == 'block' ? 'none' : 'block'
    submenu.children.item(0).children.item(1).className = submenu.children.item(0).children.item(1).className == 'fas fa-chevron-up' ? 'fas fa-chevron-down' : 'fas fa-chevron-up'
  })
}, true)


