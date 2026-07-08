import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { company, projects, updates } from "../data/site";
import { MatrixStrategyMap } from "../components/MatrixStrategyMap";

const liveProjects = projects.filter((project) => project.status === "live");

export function HomePage() {
  return (
    <main className="flex-1 bg-transparent">
      <section className="border-b border-white/8 bg-slate-950/35">
        <div className="container-main grid gap-10 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-center">
          <div className="space-y-7">
            <div className="badge-soft">
              <span className="contact-indicator mr-2" />
              {company.name}
            </div>
            <div className="space-y-4">
              <p className="text-xs font-medium uppercase tracking-[0.34em] text-slate-500">
                MATRIXLINKTECH / GUANGZHOU
              </p>
              <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
                <span className="block whitespace-nowrap text-[0.9em] sm:text-[1em]">
                  <span className="text-rose-400 drop-shadow-[0_0_22px_rgba(251,113,133,0.35)]">
                    矩
                  </span>
                  <span className="text-slate-50">阵</span>
                  <span className="text-rose-400 drop-shadow-[0_0_22px_rgba(251,113,133,0.35)]">
                    联
                  </span>
                  <span className="mr-[0.28em] text-slate-50 sm:mr-[0.34em]">合</span>
                  <span className="text-rose-400 drop-shadow-[0_0_22px_rgba(251,113,133,0.35)]">
                    科
                  </span>
                  <span className="text-slate-50">创</span>
                  <span className="text-rose-400 drop-shadow-[0_0_22px_rgba(251,113,133,0.35)]">
                    技
                  </span>
                  <span className="text-slate-50">联</span>
                </span>
                <span className="mt-2 block text-2xl font-medium tracking-[0.2em] text-slate-200 sm:text-3xl lg:text-4xl">
                  “传播技术 相信价值”
                </span>
              </h1>
              <div className="h-px w-28 bg-gradient-to-r from-rose-400 via-cyan-400 to-transparent" />
              <p className="max-w-2xl text-base leading-8 text-slate-300">
                MatrixLinkTech 是技术内容、创作者网络与 AI 工作流的长期建设者，运营面向开发者和技术创作者的真实项目。
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="focus-ring inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_45px_rgba(34,211,238,0.32)] transition hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                查看真实项目
              </Link>
              <Link
                to="/cooperation"
                className="focus-ring inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 transition hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-cyan-400/10"
              >
                合作咨询
              </Link>
              <a
                href={company.relatedContentUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 transition hover:-translate-y-0.5 hover:border-slate-400/40 hover:bg-white/10"
              >
                阅读 2aran.com
              </a>
            </div>
          </div>

          <aside className="glass-card p-5 sm:p-6">
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
              Current Focus
            </div>
            <div className="mt-5 space-y-4">
              {liveProjects.map((project) => (
                <a
                  key={project.title}
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan-400/40 hover:bg-cyan-400/5"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="text-base font-semibold text-slate-50">
                      {project.title}
                    </h2>
                    <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-emerald-300">
                      Live
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {project.description}
                  </p>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container-matrix">
          <MatrixStrategyMap />
        </div>
      </section>

      <section className="section">
        <div className="container-main space-y-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="badge-soft text-[11px]">相关内容</p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-50">
                内容和项目更新优先回到真实来源
              </h2>
            </div>
            <Link to="/updates" className="text-sm text-cyan-300 hover:text-cyan-200">
              查看全部动态 →
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {updates.map((item, index) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="neon-panel block p-4 transition hover:-translate-y-1 sm:p-5"
                style={{
                  "--panel-color": ["#2f8cff", "#ff8a4c", "#44df9a"][index % 3]
                } as CSSProperties}
              >
                <div className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                  {item.source}
                </div>
                <h3 className="mt-3 text-base font-semibold text-slate-50">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
