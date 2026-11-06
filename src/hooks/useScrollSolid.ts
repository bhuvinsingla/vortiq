import { useEffect, useState } from "react";

/** True once the page has scrolled past a small threshold (for nav elevation). */
export function useScrollSolid(threshold = 12) {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return solid;
}
