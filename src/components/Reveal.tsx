import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  delayMs?: number;      // start delay when entering
  durationMs?: number;   // animation speed
  y?: number;            // px to slide up from
  threshold?: number;    // how much of element must be visible
  repeat?: boolean;      // animate every time it enters (default true)
  className?: string;    // optional extra classes for wrapper
};

export default function Reveal({
  children,
  delayMs = 0,
  durationMs = 650,
  y = 12,
  threshold = 0.15,
  repeat = true,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true); // avoid SSR flashes
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timer: number | undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = window.setTimeout(() => setVisible(true), delayMs);
        } else if (repeat) {
          setVisible(false);
        }
      },
      { threshold }
    );

    io.observe(el);
    return () => {
      if (timer) window.clearTimeout(timer);
      io.disconnect();
    };
  }, [delayMs, threshold, repeat]);

  return (
    <div
      ref={ref}
      style={{
        transition: `opacity ${durationMs}ms ease-out, transform ${durationMs}ms ease-out`,
        willChange: "opacity, transform",
      }}
      className={[
        hasMounted ? "" : "opacity-0", // mount safety
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
        "transform-gpu",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
