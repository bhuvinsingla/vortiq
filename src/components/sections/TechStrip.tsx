import { techStack } from "@/data/content";

export default function TechStrip() {
  const items = [...techStack, ...techStack];

  return (
    <section aria-label="Technologies we use" className="overflow-hidden border-b border-ink/10 bg-white py-10">
      <p className="mb-6 text-center text-sm font-bold tracking-wide text-ink/50 uppercase">
        Technologies we build with
      </p>
      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-white to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-white to-transparent"
        />
        <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap px-6">
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              aria-hidden={i >= techStack.length}
              className="inline-flex items-center gap-10 text-2xl font-extrabold text-ink/25 transition-colors duration-200 hover:text-brand"
            >
              {name}
              <span className="size-1.5 rounded-full bg-brand/40" aria-hidden />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
