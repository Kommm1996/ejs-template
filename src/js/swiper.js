import Swiper from 'swiper/swiper-bundle.esm.js';
import 'swiper/swiper-bundle.min.css';

const initSwiper = () => {
  const swipers = [];
  if (document.querySelector('.swiper')) {
    swipers.push(
      new Swiper('.swiper', {
        speed: 600,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        parallax: true,
        observer: true,
        observeParents: true,
        autoplay: {
          delay: 5000,
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
          1280: {
            speed: 1000,
          },
        },
      }),
    );
  }
};

export default initSwiper;
