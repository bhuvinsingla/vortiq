import type { AppScreen } from "@/types";

export default function ProductScreen({ screen }: { screen: AppScreen }) {
  const frame =
    screen.device === "mobile"
      ? "mx-auto w-full max-w-[280px] rounded-[1.6rem] border border-white/15 bg-ink p-2 shadow-2xl shadow-black/40"
      : "w-full overflow-hidden rounded-2xl border border-white/15 bg-ink shadow-2xl shadow-black/40";

  return (
    <div className={frame}>
      <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
        <span className="size-2 rounded-full bg-brand" />
        <span className="size-2 rounded-full bg-white/20" />
        <span className="size-2 rounded-full bg-white/20" />
        <span className="ml-2 truncate text-[11px] font-medium text-white/55">{screen.product}</span>
      </div>
      <div className={screen.device === "mobile" ? "p-3" : "grid sm:grid-cols-[7.5rem_1fr]"}>
        {screen.device === "web" && (
          <div className="hidden space-y-2 border-r border-white/10 p-3 sm:block">
            {["Home", "Queue", "Reports"].map((item, index) => (
              <div
                key={item}
                className={`rounded-lg px-2 py-1.5 text-[11px] font-semibold ${
                  index === 0 ? "bg-brand text-white" : "text-white/45"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        )}
        <div className={screen.device === "web" ? "p-3 sm:p-4" : ""}>
          <p className="text-[11px] font-medium tracking-wide text-white/45 uppercase">{screen.caption}</p>
          <dl className="mt-3 grid grid-cols-3 gap-2">
            {screen.metrics.map((metric) => (
              <div key={metric.label} className="rounded-xl bg-white/5 px-2 py-2">
                <dt className="text-[10px] text-white/45">{metric.label}</dt>
                <dd className="text-sm font-extrabold text-white">{metric.value}</dd>
              </div>
            ))}
          </dl>
          <ul className="mt-3 space-y-2">
            {screen.rows.map((row) => (
              <li
                key={row.label}
                className="flex items-center justify-between gap-3 rounded-xl border border-white/10 px-3 py-2"
              >
                <span className="truncate text-xs font-semibold text-white">{row.label}</span>
                <span className="shrink-0 text-[11px] text-brand-light">{row.meta}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
