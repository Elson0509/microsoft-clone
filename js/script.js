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
}

