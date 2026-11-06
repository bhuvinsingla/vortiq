"use client";

import { useEffect, useState } from "react";

/** Thin top progress bar that tracks page scroll — Peppermint-style. */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? (doc.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[70] h-[3px] bg-brand transition-[width,opacity] duration-200 ease-out"
      style={{
        width: `${progress}%`,
        opacity: progress > 0.5 ? 1 : 0,
      }}
    />
  );
}
