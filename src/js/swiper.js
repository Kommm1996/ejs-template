import Swiper from 'swiper/swiper-bundle.esm.js';
import 'swiper/swiper-bundle.min.css';

const initSwiper = () => {
  const swipers = [];
  if (document.querySelector('.swiper')) {
    swipers.push(
      new Swiper('.swiper', {
        speed: 600,
        loop: true,
        slidesPerView: 1.2,
        spaceBetween: 20,
        parallax: true,
        observer: true,
        observeParents: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          768: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 3.2,
          },
          1280: {
            slidesPerView: 4,
            speed: 1000,
          },
        },
      }),
    );
  }
};

export default initSwiper;
