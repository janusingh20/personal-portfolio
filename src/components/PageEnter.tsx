import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  delayMs?: number;     // stagger start
  durationMs?: number;  // animation speed
  y?: number;           // px to slide up from
};

export default function PageEnter({
  children,
  delayMs = 0,
  durationMs = 700,
  y = 12,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const id = requestAnimationFrame(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: `translateY(${y}px)`,
        transition: `opacity ${durationMs}ms ease-out ${delayMs}ms, transform ${durationMs}ms ease-out ${delayMs}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
