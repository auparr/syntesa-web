import { useTextScramble } from "~/hooks/useTextScramble";

interface ScrambleTextProps {
  text: string;
  duration?: number;
  delay?: number;
  className?: string;
  id?: string;
  as?: "h2" | "h3" | "h4" | "span" | "p";
}

export default function ScrambleText({
  text,
  duration = 800,
  delay = 0,
  className,
  id,
  as: Tag = "span",
}: ScrambleTextProps) {
  const { ref } = useTextScramble({ text, duration, delay });

  return (
    <Tag id={id} className={className}>
      <span className="sr-only">{text}</span>
      <span
        // biome-ignore lint/suspicious/noExplicitAny: polymorphic ref type
        ref={ref as any}
        aria-hidden="true"
      >
        {text}
      </span>
    </Tag>
  );
}
