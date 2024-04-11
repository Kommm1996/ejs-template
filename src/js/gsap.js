import { gsap, ScrollTrigger, ScrollToPlugin } from 'gsap/all';

const initGSAP = () => {
  // don't forget to register plugins
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  // gsap.matchMedia().add('(min-width: 1280px)', () => {
  // code
  // });

  // scroll fade
  gsap.utils.toArray('.fadeZoomIn').forEach((e) => {
    gsap.from(e, {
      scrollTrigger: {
        trigger: e,
        start: 'top bottom',
        end: 'top top',
        toggleActions: 'play none none reset',
        // scrub: 1,
        // markers: 1,
      },
      scale: 0.8,
      autoAlpha: 0,
      duration: 0.6,
      delay: e.dataset.delay || 0.2,
    });
  });

  const scrollTo = (top) => {
    gsap.to('html,body', {
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
