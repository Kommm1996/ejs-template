import { CountUp } from "countup.js";
// utilities
import { isElementInViewport } from "./utilities";

export const initCountUp = () => {
  const countUpFn = (trigger: string, stati: string) => {
    const numAnim: CountUp[] = [];
    document.querySelectorAll(stati).forEach((e: Element) => {
      // Skip elements marked with data-no-animate (suffix spans)
      if (e.hasAttribute("data-no-animate")) return;

      numAnim.push(
        new CountUp(
          e as HTMLElement,
          parseInt(e.getAttribute("data-num") ?? "0", 10),
          {
            duration: 3,
            startVal: 0,
          },
        ),
      );
    });

    if (numAnim.length === 0) return;

    const statiTiggerEl: Element | null = document.querySelector(trigger);
    if (statiTiggerEl) {
      isElementInViewport(
        statiTiggerEl,
        () => {
          numAnim.forEach((e) => {
            e.start();
          });
        },
        () => {
          numAnim.forEach((e) => {
            e.reset();
          });
        },
        "0%",
      );
    }
  };
  if (document.querySelector("#countUpTrigger-0")) {
    countUpFn("#countUpTrigger-0", ".countUpTrigger-0-item");
  }
};
