"use client";

import type { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

type Variant = "up" | "fade" | "scale" | "left";

interface RevealProps {
  children: ReactNode;
  as?: "div" | "li";
  delay?: number;
  className?: string;
  variant?: Variant;
}

export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
  variant = "up",
}: RevealProps) {
  const { ref, inView } = useInView(0.15);
  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal reveal-${variant} ${inView ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
