import type { AnchorHTMLAttributes } from "react";

type Variant = "primary" | "light" | "outline-light" | "outline-dark";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
}

const variants: Record<Variant, string> = {
  primary: "bg-brand-gradient text-white shadow-lg shadow-brand/30 hover:brightness-110",
  light: "bg-white text-ink hover:bg-ink hover:text-white",
  "outline-light": "border border-white/40 text-white hover:bg-white hover:text-ink",
  "outline-dark": "border border-ink text-ink hover:bg-ink hover:text-white",
};

export default function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-bold transition duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
