import Lenis from "lenis";
import { useEffect } from "react";
import { prefersReducedMotion } from "~/utils/prefersReducedMotion";

export function useSmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      touchMultiplier: 2,
      infinite: false,
    });

    return () => {
      lenis.destroy();
    };
  }, []);
}
