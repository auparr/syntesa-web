import type React from "react";
import { useRef } from "react";
import { useInView } from "~/hooks/useInView";

interface MarqueeDividerProps {
  words?: string[];
  duration?: number;
}

const DEFAULT_WORDS = ["Research", "Develop", "Ship", "Repeat"];

export default function MarqueeDivider({
  words = DEFAULT_WORDS,
  duration = 25,
}: MarqueeDividerProps) {
  const segment = `${words.map((w) => w.toUpperCase()).join(" · ")} · `;

  const repeated = Array.from({ length: 8 }, () => segment).join("");

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <section
      aria-hidden="true"
      className="bg-white dark:bg-neutral-950 border-b border-gray-200 dark:border-neutral-800 overflow-hidden"
    >
      <div className="max-w-480 mx-auto w-full sm:border-x border-gray-200 dark:border-neutral-800">
        <div
          ref={ref}
          className={`py-4 sm:py-6 overflow-hidden transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isInView ? "opacity-100" : "opacity-0"}`}
          style={{ contentVisibility: "auto", containIntrinsicSize: "0 60px" }}
        >
          <div
            className="whitespace-nowrap font-mono text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light uppercase tracking-wider select-none motion-safe:animate-[marquee_var(--marquee-duration)_linear_infinite_reverse] text-stroke"
            style={
              {
                width: "fit-content",
                "--marquee-duration": `${duration}s`,
                animationPlayState: isInView ? "running" : "paused",
              } as React.CSSProperties
            }
          >
            {repeated}
          </div>
        </div>
      </div>
    </section>
  );
}
