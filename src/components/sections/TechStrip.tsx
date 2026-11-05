import { techStack } from "@/data/content";

export default function TechStrip() {
  const items = [...techStack, ...techStack];

  return (
    <section aria-label="Technologies we use" className="overflow-hidden border-b border-ink/10 bg-white py-10">
      <p className="mb-6 text-center text-sm font-bold text-ink/50">Technologies we build with</p>
      <div className="flex w-max animate-marquee gap-14 hover:[animation-play-state:paused]">
        {items.map((name, i) => (
          <span key={`${name}-${i}`} aria-hidden={i >= techStack.length} className="text-2xl font-extrabold text-ink/25">
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
