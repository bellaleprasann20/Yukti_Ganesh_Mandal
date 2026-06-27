import { useScrollAnimation } from "../hooks/useScrollAnimation";

// Wrap any section/card with <FadeIn> to animate it on scroll
// direction: "up" | "down" | "left" | "right" | "none"
// delay: CSS delay string e.g. "0ms", "100ms", "200ms"
export default function FadeIn({
  children,
  direction = "up",
  delay = "0ms",
  duration = "600ms",
  className = "",
  threshold = 0.12,
}) {
  const [ref, isVisible] = useScrollAnimation({ threshold });

  const transforms = {
    up:    "translateY(32px)",
    down:  "translateY(-32px)",
    left:  "translateX(-32px)",
    right: "translateX(32px)",
    none:  "none",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity:    isVisible ? 1 : 0,
        transform:  isVisible ? "translate(0,0)" : transforms[direction],
        transition: `opacity ${duration} ease-out ${delay}, transform ${duration} ease-out ${delay}`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}