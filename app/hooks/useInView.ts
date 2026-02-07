import type React from "react";
import { useEffect, useRef, useState } from "react";

export function useInView(
  ref: React.RefObject<Element | null>,
  options?: { once?: boolean; amount?: number },
): boolean {
  const [isInView, setIsInView] = useState(false);
  const once = options?.once ?? false;
  const amount = options?.amount ?? 0;

  const firedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (once && firedRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) {
            firedRef.current = true;
            observer.disconnect();
          }
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold: amount },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, once, amount]);

  return isInView;
}
