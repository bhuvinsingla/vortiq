import { useMemo, useState } from "react";
import { projects } from "@/data/content";
import type { ProjectCategory } from "@/types";
import Section from "@/components/ui/Section";
import Icon from "@/components/ui/Icon";

type Filter = ProjectCategory | "All";

const covers: Record<ProjectCategory, string> = {
  Web: "from-brand via-red-900 to-ink",
  Mobile: "from-white/80 via-brand to-ink",
  Cloud: "from-ink via-red-950 to-brand",
  AI: "from-brand-light via-brand-dark to-black",
};

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All");

  const filters = useMemo<Filter[]>(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    [],
  );
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section
      id="work"
      tone="dark"
      title="Projects That Make an Impact"
      intro="Explore some of the solutions we've brought to life through technology, creativity, and strategic thinking."
    >
      <div className="mb-10 flex flex-wrap gap-3" role="group" aria-label="Filter projects">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
            className={`rounded-full px-5 py-2 text-sm font-bold transition ${
              filter === item ? "bg-brand-gradient text-white" : "border border-white/25 text-white/80 hover:border-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <li key={project.title}>
            <article className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-brand/60">
              <div className="relative h-44 overflow-hidden">
                <div className={`absolute inset-0 bg-linear-to-br transition duration-500 group-hover:scale-110 ${covers[project.category]}`} />
                <div aria-hidden className="bg-grid absolute inset-0 opacity-60" />
                <span className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs font-bold backdrop-blur">
                  {project.category}
                </span>
                <span className="absolute bottom-3 right-4 text-6xl font-extrabold text-white/15">{project.client.slice(-1)}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm text-white/50">{project.client}</p>
                <p className="mt-4 text-white/70">{project.summary}</p>
                <p className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 font-bold">
                  {project.result}
                  <Icon name="arrow" className="size-5 text-brand transition group-hover:translate-x-1" />
                </p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
