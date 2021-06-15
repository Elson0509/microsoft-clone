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