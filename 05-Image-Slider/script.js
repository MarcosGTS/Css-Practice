const imgSliders = [...document.querySelectorAll('.image-slider')];

function sliderFactory(sliderHtml) {
  const imgFrame = sliderHtml.querySelector('.image-slider__frame');
  const dotsNav = sliderHtml.querySelector('.image-slider__dots');
  const slides = [...imgFrame.querySelectorAll('.image-slider__item')];

  const arrowNav = document.createElement('div');
  const leftArrow = document.createElement('button');
  const rightArrow = document.createElement('button');

  leftArrow.className = 'left-arrow';
  rightArrow.classList = 'right-arrow';

  arrowNav.className = 'image-slider__arrow-nav';
  arrowNav.appendChild(leftArrow);
  arrowNav.appendChild(rightArrow);
  sliderHtml.appendChild(arrowNav);

  slides.forEach(() => {
    const navDot = document.createElement('button');
    navDot.classList.add('image-slider__dot');
    dotsNav.appendChild(navDot);
  });

  let currentSlide = 0; 

  function slideRight() {
    currentSlide = (currentSlide + 1) % slides.length;
    render();
  }

  function slideLeft() {
    currentSlide = (currentSlide - 1) >= 0 ? currentSlide - 1 : slides.length - 1;
    render();
  }

  function setSlide(index) {
    currentSlide = index;
    render();
  }

  function renderSlide() {
    slides.forEach((slide, index) => {
      if (index !== currentSlide) {
        slide.style.display = 'none';
      } else {
        slide.style.display = 'block';
      }
    });
  }

  function renderButtons() {
    const dots = [...dotsNav.children]
    dots.forEach((dot, index) => {
      if (index === currentSlide) {
        dot.classList.add('selected');
      } else {
        dot.classList.remove('selected');
      }
    });
  }

  function bindEvents() {
    const dots = [...dotsNav.children];

    rightArrow.addEventListener('click', slideRight);
    leftArrow.addEventListener('click', slideLeft);

    dots.forEach((dot, index) => 
      dot.addEventListener('click', () => setSlide(index)) 
    )
  }

  function render() {
    renderSlide();
    renderButtons();
  }

  render();
  bindEvents();
}

imgSliders.forEach((slider) => {
  sliderFactory(slider);
});