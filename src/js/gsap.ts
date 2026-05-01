import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export const initGSAP = () => {
  // don't forget to register plugins
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  // ─── Gallery: fade-zoom-in staggered ───
  gsap.utils.toArray<HTMLElement>(".fadeZoomIn").forEach((e: HTMLElement) => {
    gsap.from(e, {
      scrollTrigger: {
        trigger: e,
        start: "top bottom",
        end: "top top",
        toggleActions: "play none none none",
      },
      scale: 0.85,
      autoAlpha: 0,
      duration: 0.6,
      delay: e.dataset.delay || 0.15,
    });
  });

  // ─── Feature cards: staggered slide-up ───
  gsap.utils.toArray<HTMLElement>("#features .card-hover").forEach(
    (e: HTMLElement, i: number) => {
      gsap.from(e, {
        scrollTrigger: {
          trigger: e,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        y: 30,
        autoAlpha: 0,
        duration: 0.5,
        delay: i * 0.1,
        ease: "power2.out",
      });
    },
  );

  // ─── Stats cards: stagger ───
  gsap.utils.toArray<HTMLElement>("#stats .card").forEach(
    (e: HTMLElement, i: number) => {
      gsap.from(e, {
        scrollTrigger: {
          trigger: e,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        y: 40,
        autoAlpha: 0,
        duration: 0.5,
        delay: i * 0.1,
        ease: "power2.out",
      });
    },
  );

  // ─── CTA section: scale-in ───
  gsap.from("#stats + section .fadeZoomIn", {
    scrollTrigger: {
      trigger: "#stats + section",
      start: "top 85%",
      toggleActions: "play none none none",
    },
    scale: 0.9,
    autoAlpha: 0,
    duration: 0.7,
    ease: "power2.out",
  });

  // ─── Section titles: fade-in ───
  gsap.utils.toArray<HTMLElement>(".section-title").forEach(
    (e: HTMLElement, i: number) => {
      gsap.from(e, {
        scrollTrigger: {
          trigger: e,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        y: 20,
        autoAlpha: 0,
        duration: 0.6,
        delay: 0.1,
        ease: "power2.out",
      });
    },
  );

  // ─── Scroll to top ───
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
