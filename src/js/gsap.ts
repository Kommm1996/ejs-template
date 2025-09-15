import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export const initGSAP = () => {
  // don't forget to register plugins
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  // gsap.matchMedia().add('(min-width: 1280px)', () => {
  // code
  // });

  // scroll fade
  gsap.utils.toArray<HTMLElement>(".fadeZoomIn").forEach((e: HTMLElement) => {
    gsap.from(e, {
      scrollTrigger: {
        trigger: e,
        start: "top bottom",
        end: "top top",
        toggleActions: "play none none reset",
        // scrub: 1,
        // markers: 1,
      },
      scale: 0.8,
      autoAlpha: 0,
      duration: 0.6,
      delay: e.dataset.delay || 0.2,
    });
  });

  const scrollTo = (top: number) => {
    gsap.to("html,body", {
      scrollTo: top || 0,
      duration: 1,
      ease: "power3.out",
    });
  };

  const scrollPosi = (
    e: Element | string,
    start: string,
    end: string,
    startCallback: () => void,
  ) => {
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
