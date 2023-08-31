import { gsap, ScrollTrigger, ScrollToPlugin } from 'gsap/all';

const initGSAP = () => {
  // don't forget to register plugins
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  // gsap.matchMedia().add('(min-width: 1280px)', () => {
  // code
  // });

  // scroll fade
  gsap.utils.toArray('.scrollFadeZoomIn').forEach((e) => {
    gsap.from(e, {
      scrollTrigger: {
        trigger: e,
        start: 'top bottom',
        end: 'top 80%',
        scrub: 1,
      },
      scale: 0,
      autoAlpha: 0,
      duration: 1,
    });
  });
  const scrollTo = (top) => {
    gsap.to('html', {
      scrollTo: top || 0,
      duration: 1,
      ease: 'power3.out',
    });
  };

  const scrollPosi = (e, start, end, startCallback) => {
    ScrollTrigger.create({
      trigger: e,
      start,
      end,
      onToggle: startCallback,
    });
  };

  return {
    scrollTo,
    scrollPosi,
  };
};

export default initGSAP;
