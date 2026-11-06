"use client";

import { useMemo, useState } from "react";
import { projects } from "@/data/content";
import type { Project, ProjectCategory } from "@/types";
import Section from "@/components/ui/Section";
import Icon from "@/components/ui/Icon";
import ProductScreen from "@/components/ui/ProductScreen";

type Filter = ProjectCategory | "All";

const covers: Record<ProjectCategory, string> = {
  Web: "from-brand via-red-900 to-ink",
  Mobile: "from-white/80 via-brand to-ink",
  Cloud: "from-ink via-red-950 to-brand",
  AI: "from-brand-light via-brand-dark to-black",
};

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const [openId, setOpenId] = useState<string | null>(projects[0]?.id ?? null);

  const filters = useMemo<Filter[]>(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    [],
  );
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);
  const open = visible.find((project) => project.id === openId) ?? visible[0];

  return (
    <Section
      id="work"
      tone="dark"
      title="Platforms we have shipped"
      intro="Six products across healthcare, logistics, retail, manufacturing, finance and supply chain. Open one to see the screen, what was built, and the result."
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

      {open && <ProjectDetail project={open} />}

      <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => {
          const selected = project.id === open?.id;
          return (
            <li key={project.id} id={project.id} className="scroll-mt-28">
              <button
                type="button"
                onClick={() => setOpenId(project.id)}
                aria-pressed={selected}
                className={`card-lift group h-full w-full overflow-hidden rounded-2xl border bg-white/5 text-left hover:border-brand/60 hover:shadow-xl hover:shadow-brand/20 ${
                  selected ? "border-brand" : "border-white/10"
                }`}
              >
                <div className="relative h-36 overflow-hidden">
                  <div className={`absolute inset-0 bg-linear-to-br transition duration-700 ease-out group-hover:scale-110 ${covers[project.category]}`} />
                  <div aria-hidden className="bg-grid absolute inset-0 opacity-60" />
                  <span className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs font-bold backdrop-blur">
                    {project.vertical}
                  </span>
                  <span className="absolute right-4 bottom-3 text-xs font-bold text-white/80">{project.category}</span>
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
              </button>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

function ProjectDetail({ project }: { project: Project }) {
  return (
    <article className="grid items-start gap-8 rounded-3xl border border-white/10 bg-white/5 p-5 md:p-8 lg:grid-cols-2">
      <div>
        <p className="text-xs font-bold tracking-wider text-brand-light uppercase">
          {project.vertical} · {project.category}
        </p>
        <h3 className="mt-2 text-3xl font-extrabold">{project.title}</h3>
        <p className="mt-2 text-sm text-white/50">{project.client}</p>
        <p className="mt-4 text-white/80">{project.description}</p>
        <ul className="mt-5 space-y-2">
          {project.built.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-white/75">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className="rounded-full border border-white/15 px-3 py-1 text-xs font-bold text-white/70">
              {item}
            </span>
          ))}
        </div>
        <p className="mt-6 text-lg font-extrabold text-white">{project.result}</p>
      </div>
      <ProductScreen screen={project.screen} />
    </article>
  );
}
