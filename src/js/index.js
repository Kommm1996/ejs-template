// vue
import { createApp } from 'petite-vue';
// smoothscroll
import SmoothScroll from 'smoothscroll-for-websites';
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
  isDark: false,
  toPosi: Function,
  // methods
  isDarkMode() {
    if (
      localStorage.theme === 'dark'
      || (!('theme' in localStorage)
        && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      this.isDark = true;
    } else {
      document.documentElement.classList.remove('dark');
      this.isDark = false;
    }
  },
  toggleDarkMode(toggle) {
    if (toggle) {
      localStorage.theme = 'dark';
    } else {
      localStorage.theme = 'light';
    }
    this.isDarkMode();
  },
  // mounted
  mounted() {
    // isDarkMode
    this.isDarkMode();
    // initCountUp
    initCountUp();
    // initSwiper
    initSwiper();
    // initGSAP
    const gsapObj = initGSAP();
    this.toPosi = gsapObj.scrollTo;
    // SmoothScroll
    SmoothScroll({ animationTime: 800 });
  },
}).mount('#app');
