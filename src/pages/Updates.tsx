import type { CSSProperties } from "react";
import {
  matrixEngines,
  updates,
  cadenceLabel,
  type UpdateCadence
} from "../data/site";

const cadenceChip: Record<UpdateCadence, string> = {
  daily:
    "rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1 text-[11px] font-medium text-cyan-200",
  weekly:
    "rounded-full border border-sky-400/25 bg-sky-400/10 px-2.5 py-1 text-[11px] font-medium text-sky-200",
  ongoing:
    "rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-300"
};

export function UpdatesPage() {
  const highlight = updates.find((item) => item.highlight);
  const rest = updates.filter((item) => item !== highlight);

  return (
    <main className="flex-1 bg-transparent">
      <section className="section">
        <div className="container-main space-y-4">
          <p className="badge-soft text-[11px]">动态 · 内容矩阵</p>
          <h1 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
            内容更新优先回到真实来源
          </h1>
          <p className="text-sm leading-7 text-slate-300 sm:text-base">
            这里不二次搬运站外内容，而是把 MatrixLinkTech 实际维护的内容入口集中起来，标注各自的更新节奏，方便订阅与跟进。
          </p>
        </div>
      </section>

      {highlight && (
        <section className="section pt-0">
          <div className="container-main">
            <a
              href={highlight.url}
              target="_blank"
              rel="noreferrer"
              className="neon-panel group flex flex-col gap-6 p-6 transition hover:-translate-y-1 sm:p-7 lg:flex-row lg:items-center lg:justify-between"
              style={{ "--panel-color": matrixEngines[5].color } as CSSProperties}
            >
              <div className="space-y-4 lg:max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="badge-soft text-[11px]">主要内容源</span>
                  <span className={cadenceChip[highlight.cadence]}>
                    {cadenceLabel[highlight.cadence]}
                  </span>
                </div>
                <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
                  {highlight.title}
                </h2>
                <p className="text-sm leading-7 text-slate-300">
                  {highlight.description}
                </p>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                  {highlight.source}
                </p>
              </div>
              <div className="shrink-0">
                <span className="focus-ring inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition group-hover:bg-cyan-300">
                  打开 {highlight.source} →
                </span>
              </div>
            </a>
          </div>
        </section>
      )}

      {rest.length > 0 && (
        <section className="section pt-0">
          <div className="container-main space-y-5">
            <header className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                  其他更新入口
                </p>
                <h2 className="mt-2 text-xl font-semibold text-slate-50 sm:text-2xl">
                  按更新节奏跟进
                </h2>
              </div>
              <p className="max-w-md text-sm text-slate-400">
                每个入口都是独立站点，可以按自己习惯的节奏订阅或查看。
              </p>
            </header>
            <div className="grid gap-4 md:grid-cols-2">
              {rest.map((item, index) => (
                <a
                  key={item.url}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="neon-panel group flex h-full flex-col gap-4 p-5 transition hover:-translate-y-1"
                  style={{
                    "--panel-color": [matrixEngines[1].color, matrixEngines[0].color][index % 2]
                  } as CSSProperties}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                      {item.source}
                    </span>
                    <span className={cadenceChip[item.cadence]}>
                      {cadenceLabel[item.cadence]}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-50">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-6 text-slate-300">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-auto text-sm text-cyan-300 transition group-hover:text-cyan-200">
                    打开来源 →
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
