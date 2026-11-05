import type { ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";

type Tone = "dark" | "light" | "muted";

interface SectionProps {
  id: string;
  tone: Tone;
  title?: string;
  intro?: string;
  children: ReactNode;
}

const palette: Record<Tone, string> = {
  dark: "bg-dark-gradient text-white",
  light: "bg-white text-ink",
  muted: "bg-neutral-50 text-ink",
};

export default function Section({ id, tone, title, intro, children }: SectionProps) {
  const muted = tone === "dark" ? "text-white/70" : "text-ink/70";

  return (
    <section id={id} className={`relative overflow-hidden py-20 md:py-28 ${palette[tone]}`}>
      <div className="mx-auto max-w-6xl px-6">
        {title && (
          <Reveal className="mb-14 max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">{title}</h2>
            {intro && <p className={`mt-4 text-lg ${muted}`}>{intro}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
