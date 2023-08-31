// vue
import { createApp } from 'petite-vue';
// smoothscroll
import SmoothScroll from 'smoothscroll-for-websites';
// fancyapps
import '@fancyapps/ui/dist/fancybox.esm';
import '@fancyapps/ui/dist/fancybox.css';
// bootstrap icons
import 'bootstrap-icons/font/bootstrap-icons.css';
// countUp
import initCountUp from './countup';
// swiper
import initSwiper from './swiper';
// gsap
import initGSAP from './gsap';
// tailwindcss
import '../css/input.css';

createApp({
  // data
  toPosi: Function,
  // methods
  // mounted
  mounted() {
    // initCountUp
    initCountUp();
    // initSwiper
    initSwiper();
    // initGSAP
    const gsapObj = initGSAP();
    this.toPosi = gsapObj.scrollTo;
    // SmoothScroll
    SmoothScroll({ animationTime: 800 });
    // scroll
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // do something...
          ticking = false;
        });
        ticking = true;
      }
    });
  },
}).mount('#app');
