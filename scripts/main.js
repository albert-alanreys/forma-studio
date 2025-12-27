const initMenu = () => {
  const menuBtn = document.querySelector('.menu__btn');
  const menuList = document.querySelector('.menu__list');

  if (!menuBtn || !menuList) return;

  menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('active');
  });
};

const initProjectsSlider = () => {
  const sliderEl = document.querySelector('.projects__slider');

  if (!sliderEl || typeof Swiper === 'undefined') return;

  new Swiper(sliderEl, {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    navigation: {
      nextEl: '.projects__arrow--next',
      prevEl: '.projects__arrow--prev',
    },
  });
};

initMenu();
initProjectsSlider();
