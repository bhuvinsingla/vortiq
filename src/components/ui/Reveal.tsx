import type { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

interface RevealProps {
  children: ReactNode;
  as?: "div" | "li";
  delay?: number;
  className?: string;
}

export default function Reveal({ children, as: Tag = "div", delay = 0, className = "" }: RevealProps) {
  const { ref, inView } = useInView();
  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
