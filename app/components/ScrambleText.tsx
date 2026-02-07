import { useTextScramble } from "~/hooks/useTextScramble";

interface ScrambleTextProps {
  text: string;
  duration?: number;
  delay?: number;
  className?: string;
  as?: "h2" | "h3" | "h4" | "span" | "p";
}

export default function ScrambleText({
  text,
  duration = 800,
  delay = 0,
  className,
  as: Tag = "span",
}: ScrambleTextProps) {
  const { ref } = useTextScramble({ text, duration, delay });

  return (
    // biome-ignore lint/suspicious/noExplicitAny: polymorphic ref type
    <Tag ref={ref as any} className={className}>
      {text}
    </Tag>
  );
}
