export function isElementInViewport(
  el: Element | null,
  inCB: Function,
  outCB: Function,
  rootMargin: string,
) {
  if (!el) return;
  const margin = rootMargin || "-10%";
  function handleIntersect(entries: IntersectionObserverEntry[]) {
    const entry = entries[0];
    if (entry.isIntersecting) {
      if (inCB && typeof inCB === "function") inCB(el, entry);
    } else if (outCB && typeof outCB === "function") outCB(el, entry);
  }
  const observer = new IntersectionObserver(handleIntersect, {
    rootMargin: margin,
  });
  observer.observe(el);
}

export function getElementTop(element: HTMLElement): number {
  if (!element) return 0;
  let top = element.offsetTop;
  let parent: Element | null = element.offsetParent ?? null;
  while (parent != null) {
    if (parent instanceof HTMLElement) {
      top += parent.offsetTop;
      parent = parent.offsetParent ?? null;
    }
  }
  return top;
}
