import { useEffect, useRef, useState } from "react";

// Returns [ref, isVisible] — attach ref to any element to animate on scroll
export function useScrollAnimation(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el); // animate only once
        }
      },
      {
        threshold: options.threshold || 0.12,
        rootMargin: options.rootMargin || "0px 0px -40px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}