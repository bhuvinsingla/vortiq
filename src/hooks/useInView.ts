import { useEffect, useState } from "react";

/** Returns a ref callback and whether the element has entered the viewport (fires once). */
export function useInView(threshold = 0.2) {
  const [node, setNode] = useState<Element | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [node, threshold]);

  return { ref: setNode, inView };
}
