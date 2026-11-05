import type { CSSProperties } from "react";
import { company } from "@/data/content";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

const rings: { size: number; duration: string; reverse?: boolean; opacity: number }[] = [
  { size: 460, duration: "36s", opacity: 1 },
  { size: 340, duration: "24s", reverse: true, opacity: 0.7 },
  { size: 230, duration: "16s", opacity: 0.45 },
];

const ringStyle = (r: (typeof rings)[number]): CSSProperties => ({
  width: r.size,
  height: r.size,
  opacity: r.opacity,
  animationDuration: r.duration,
  animationDirection: r.reverse ? "reverse" : "normal",
});

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-dark-gradient text-white">
      <div aria-hidden className="bg-grid absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-2">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/80">
            <span className="size-2 animate-pulse rounded-full bg-brand" />
            Now taking new projects
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[1.08] tracking-tight">{company.tagline}</h1>
          <p className="mt-6 max-w-lg text-base sm:text-lg text-white/70">{company.intro}</p>
          <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4">
            <Button href="#work">View our work</Button>
            <Button href="#contact" variant="outline-light">Talk to us</Button>
          </div>
          <ul className="mt-10 sm:mt-12 flex flex-wrap gap-x-6 sm:gap-x-8 gap-y-2 text-xs sm:text-sm text-white/60">
            <li>On-time delivery</li>
            <li>Dedicated team</li>
            <li>Post-launch support</li>
          </ul>
        </div>

        <div className="relative flex h-[440px] sm:h-[500px] w-full items-center justify-center overflow-hidden sm:overflow-visible">
          {/* Central vortex rings & glowing ambient backdrop */}
          <div className="stack absolute inset-0 place-items-center" aria-hidden>
            <div className="size-48 sm:size-64 rounded-full bg-brand/30 blur-3xl" />
            {rings.map((ring) => (
              <div key={ring.size} className="vortex-ring max-w-full" style={ringStyle(ring)} />
            ))}
          </div>

          {/* Floating Achievement Bubbles */}
          <div className="pointer-events-none relative z-10 h-full w-full">
            {/* Bubble 1: Projects Delivered */}
            <div className="animate-float pointer-events-auto absolute left-0 top-3 sm:left-4 sm:top-8 max-w-[165px] sm:max-w-[220px] rounded-2xl border border-white/15 bg-black/75 p-3 sm:p-4 shadow-xl shadow-brand/15 backdrop-blur-xl transition duration-300 hover:scale-105 hover:border-brand/50">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="flex size-8 sm:size-10 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-md shadow-brand/30">
                  <Icon name="code" className="size-4 sm:size-5" />
                </span>
                <div>
                  <div className="text-base sm:text-xl font-extrabold text-white">120+</div>
                  <div className="text-[11px] sm:text-xs text-white/60">Projects Built</div>
                </div>
              </div>
              <p className="mt-1.5 sm:mt-2 text-[10px] sm:text-[11px] font-medium text-white/50">Web, Mobile & AI</p>
            </div>

            {/* Bubble 2: Client Rating / Satisfaction */}
            <div className="animate-float-slow pointer-events-auto absolute right-0 top-8 sm:right-4 sm:top-14 max-w-[155px] sm:max-w-[210px] rounded-2xl border border-white/15 bg-black/75 p-3 sm:p-4 shadow-xl shadow-brand/15 backdrop-blur-xl transition duration-300 hover:scale-105 hover:border-brand/50">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="flex size-8 sm:size-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-light">
                  <Icon name="spark" className="size-4 sm:size-5" />
                </span>
                <div>
                  <div className="text-base sm:text-xl font-extrabold text-white">99%</div>
                  <div className="text-[11px] sm:text-xs text-white/60">Rating</div>
                </div>
              </div>
              <div className="mt-1.5 sm:mt-2 flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-brand-light">
                <span>★★★★★</span>
                <span className="text-[9px] sm:text-[10px] font-normal text-white/50">5.0 Star</span>
              </div>
            </div>

            {/* Bubble 3: Years of Experience */}
            <div className="animate-float-reverse pointer-events-auto absolute bottom-10 left-0 sm:bottom-16 sm:left-6 max-w-[155px] sm:max-w-[210px] rounded-2xl border border-white/15 bg-black/75 p-3 sm:p-4 shadow-xl shadow-brand/15 backdrop-blur-xl transition duration-300 hover:scale-105 hover:border-brand/50">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="flex size-8 sm:size-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                  <Icon name="compass" className="size-4 sm:size-5" />
                </span>
                <div>
                  <div className="text-base sm:text-xl font-extrabold text-white">8+ Years</div>
                  <div className="text-[11px] sm:text-xs text-white/60">Experience</div>
                </div>
              </div>
              <p className="mt-1.5 sm:mt-2 text-[10px] sm:text-[11px] font-medium text-white/50">Proven Record</p>
            </div>

            {/* Bubble 4: On-time Delivery */}
            <div className="animate-float pointer-events-auto absolute bottom-3 right-0 sm:bottom-6 sm:right-4 max-w-[165px] sm:max-w-[220px] rounded-2xl border border-white/15 bg-black/75 p-3 sm:p-4 shadow-xl shadow-brand/15 backdrop-blur-xl transition duration-300 hover:scale-105 hover:border-brand/50">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="flex size-8 sm:size-10 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-md shadow-brand/30">
                  <Icon name="layout" className="size-4 sm:size-5" />
                </span>
                <div>
                  <div className="text-base sm:text-xl font-extrabold text-white">100%</div>
                  <div className="text-[11px] sm:text-xs text-white/60">On-Time</div>
                </div>
              </div>
              <div className="mt-1.5 sm:mt-2 flex items-center gap-1.5 text-[10px] sm:text-[11px] font-medium text-white/60">
                <span className="size-1.5 sm:size-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>SLA Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
