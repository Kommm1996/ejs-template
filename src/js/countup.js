import { CountUp } from 'countup.js';
// utilities
import { isElementInViewport } from './utilities';

const initCountUp = () => {
  const countUpFn = (trigger, stati) => {
    const numAnim = [];
    document.querySelectorAll(stati).forEach((e) => {
      numAnim.push(
        new CountUp(e, parseInt(e.getAttribute('data-num'), 10), {
          duration: 3,
        }),
      );
    });
    const statiTiggerEl = document.querySelector(trigger);
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
        '0%',
      );
    }
  };
  if (document.querySelector('#countUpTrigger-0')) {
    countUpFn('#countUpTrigger-0', '.countUpTrigger-0-item');
  }
};

export default initCountUp;
