// Type declarations for untyped dependencies used in this project

declare module "smoothscroll-for-websites" {
  interface SmoothScrollOptions {
    animationTime?: number;
    stepSize?: number;
    accelerationMax?: number;
    accelerationDelta?: number;
    keyboardSupport?: boolean;
    arrowScroll?: number;
    pulseAlgorithm?: boolean;
    pulseScale?: number;
    pulseNormalize?: number;
    touchpadSupport?: boolean;
    fixedBackground?: boolean;
    excluded?: string;
  }

  function SmoothScroll(options?: SmoothScrollOptions): void;

  export default SmoothScroll;
}

declare module "template-ejs-loader" {
  interface LoaderOptions {
    data?: Record<string, unknown>;
  }

  // webpack loader — no explicit exports needed
  const loader: unknown;
  export default loader;
}
