import { useEffect, useRef, useState } from "react";
import Reveal from "~/components/Reveal";
import ScrambleText from "~/components/ScrambleText";
import GradientOrb from "~/components/ui/GradientOrb";

export interface TypeSenior {
  readonly name: string;
  readonly role: string;
  readonly company: string;
  readonly logo: string;
  readonly prodi: string;
  readonly batch: string;
}

interface SeniorsProps {
  seniors: readonly TypeSenior[];
}

export default function Seniors({ seniors }: SeniorsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const safeSeniors = Array.isArray(seniors) ? seniors : [];

  useEffect(() => {
    let animationFrameId: number;
    const scrollNode = scrollRef.current;

    const autoScroll = () => {
      if (scrollNode && !isHovered && !isDragging && safeSeniors.length > 0) {
        scrollNode.scrollLeft += 1;
        if (scrollNode.scrollLeft >= scrollNode.scrollWidth / 2) {
          scrollNode.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, isDragging, safeSeniors.length]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    if (scrollRef.current) {
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovered(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section
      aria-labelledby="placements-heading"
      className="relative bg-white dark:bg-neutral-950 border-t border-gray-200 dark:border-neutral-800 overflow-hidden"
    >
      <GradientOrb color="green" position="top-right" size="md" />
      <div className="max-w-480 mx-auto w-full sm:border-x border-gray-200 dark:border-neutral-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-gray-200 dark:border-neutral-800">
          <div className="lg:col-span-4 p-6 sm:p-12 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-neutral-800 bg-hatching relative">
            <Reveal>
              <ScrambleText
                as="p"
                text="Internships"
                className="text-sm font-mono uppercase tracking-wider text-gray-500 dark:text-neutral-400"
              />
            </Reveal>
            <span
              className="absolute bottom-2 right-4 text-[4rem] sm:text-[6rem] font-mono font-bold leading-none text-gray-100 dark:text-neutral-800 select-none pointer-events-none"
              aria-hidden="true"
            >
              05
            </span>
          </div>
          <div className="lg:col-span-8 p-6 sm:p-12">
            <Reveal delay={0.1}>
              <h2
                id="placements-heading"
                className="text-3xl sm:text-4xl font-medium text-gray-900 dark:text-neutral-100 leading-tight"
              >
                Where our members have interned.
              </h2>
            </Reveal>
          </div>
        </div>

        <div
          ref={scrollRef}
          role="marquee"
          className={`flex overflow-x-auto w-full bg-white dark:bg-neutral-950 no-scrollbar border-b border-gray-200 dark:border-neutral-800 ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          } mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
          style={{ scrollBehavior: "auto" }}
        >
          <div className="flex w-max">
            {safeSeniors.length > 0 ? (
              [...safeSeniors, ...safeSeniors].map((senior, index) => (
                <SeniorCell key={`${senior.name}-${index}`} senior={senior} />
              ))
            ) : (
              <div className="p-6 text-gray-500">Loading data...</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function SeniorCell({ senior }: { senior: TypeSenior }) {
  return (
    <article
      className={[
        "group p-6 sm:p-10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "w-75 sm:w-87.5 shrink-0",
        "hover:bg-gray-50 dark:hover:bg-neutral-900",
        "border-r border-gray-200 dark:border-neutral-800",
        "select-none",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <figure className="mb-6 pointer-events-none">
        <img
          src={senior.logo}
          alt={senior.company}
          className="h-10 w-10 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
          loading="lazy"
          draggable="false"
        />
      </figure>

      <h3 className="text-xl sm:text-2xl font-medium text-gray-900 dark:text-neutral-100 leading-tight truncate pointer-events-none">
        {senior.company}
      </h3>

      <p className="text-base text-gray-500 dark:text-neutral-400 mt-2 truncate pointer-events-none">
        {senior.name}
      </p>
      <p className="text-sm text-gray-400 dark:text-neutral-500 mt-0.5 truncate pointer-events-none">
        {senior.role}
      </p>

      <div className="flex items-center gap-3 mt-4 pointer-events-none">
        <span className="text-xs font-mono uppercase tracking-wider text-gray-400 dark:text-neutral-500 border border-gray-200 dark:border-neutral-800 px-2.5 py-1 group-hover:border-gray-300 dark:group-hover:border-neutral-700 transition-colors duration-300">
          {senior.prodi}
        </span>
        <time
          dateTime={senior.batch}
          className="text-xs font-mono text-gray-400 dark:text-neutral-600"
        >
          {senior.batch}
        </time>
      </div>
    </article>
  );
}
