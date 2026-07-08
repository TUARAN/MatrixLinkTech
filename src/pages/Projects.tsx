import type { CSSProperties } from "react";
import { MatrixStrategyMap } from "../components/MatrixStrategyMap";
import {
  matrixEngines,
  projects,
  type Project,
  type ProjectStatus
} from "../data/site";

const statusMeta: Record<
  ProjectStatus,
  {
    label: string;
    chip: string;
    sectionTitle: string;
    sectionHint: string;
    ctaLabel: string;
    ctaClass: string;
  }
> = {
  live: {
    label: "已上线",
    chip: "rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300",
    sectionTitle: "已上线项目",
    sectionHint: "可直接访问独立站点，了解内容、申请合作或订阅更新。",
    ctaLabel: "前往项目站点 →",
    ctaClass:
      "focus-ring inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-cyan-300"
  },
  incubating: {
    label: "孵化中",
    chip: "rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs text-amber-300",
    sectionTitle: "孵化中方向",
    sectionHint: "尚无独立站点，相关思考与实验记录沉淀在 2aran.com。",
    ctaLabel: "查看相关记录 →",
    ctaClass:
      "focus-ring inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-100 hover:border-cyan-400/40 hover:bg-cyan-400/10"
  }
};

function ProjectCard({ project }: { project: Project }) {
  const meta = statusMeta[project.status];
  const color =
    project.title === "博主联盟"
      ? matrixEngines[0].color
      : project.title === "前端周刊"
        ? matrixEngines[1].color
        : matrixEngines[5].color;

  return (
    <article
      className="neon-panel space-y-5 p-5 sm:p-6"
      style={{ "--panel-color": color } as CSSProperties}
    >
      <div className="flex flex-wrap items-center gap-3">
        <span className="badge-soft text-[11px]">{project.label}</span>
        <span className={meta.chip}>{meta.label}</span>
      </div>
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-slate-50 sm:text-2xl">
          {project.title}
        </h3>
        <p className="text-sm leading-7 text-slate-300">
          {project.description}
        </p>
      </div>
      <dl className="grid gap-3 border-t border-white/5 pt-4 sm:grid-cols-2">
        <div>
          <dt className="text-xs font-medium text-slate-500">面向对象</dt>
          <dd className="mt-1.5 text-sm leading-6 text-slate-200">
            {project.audience}
          </dd>
        </div>
        <div>
          <dt className="text-xs font-medium text-slate-500">可信依据</dt>
          <dd className="mt-1.5 text-sm leading-6 text-slate-200">
            {project.proof}
          </dd>
        </div>
      </dl>
      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className={meta.ctaClass}
      >
        {meta.ctaLabel}
      </a>
    </article>
  );
}

export function ProjectsPage() {
  const liveProjects = projects.filter((p) => p.status === "live");
  const incubatingProjects = projects.filter((p) => p.status === "incubating");

  return (
    <main className="flex-1 bg-transparent">
      <section className="section">
        <div className="container-main max-w-4xl space-y-4">
          <p className="badge-soft text-[11px]">项目 · 真实进度</p>
          <h1 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
            项目进入六大增长引擎
          </h1>
          <p className="text-sm leading-7 text-slate-300 sm:text-base">
            已上线项目给出独立站点入口，孵化中方向标注明确，并引导到 2aran.com 查看相关思考。展示方式跟随 MatrixLinkTech 的内容与产品矩阵。
          </p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-matrix">
          <MatrixStrategyMap compact />
        </div>
      </section>

      {liveProjects.length > 0 && (
        <section className="section pt-0">
          <div className="container-main space-y-5">
            <header className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-300/80">
                  Live · {liveProjects.length}
                </p>
                <h2 className="mt-2 text-xl font-semibold text-slate-50 sm:text-2xl">
                  {statusMeta.live.sectionTitle}
                </h2>
              </div>
              <p className="max-w-md text-sm text-slate-400">
                {statusMeta.live.sectionHint}
              </p>
            </header>
            <div className="grid gap-5 md:grid-cols-2">
              {liveProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {incubatingProjects.length > 0 && (
        <section className="section pt-0">
          <div className="container-main space-y-5">
            <header className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-amber-300/80">
                  Incubating · {incubatingProjects.length}
                </p>
                <h2 className="mt-2 text-xl font-semibold text-slate-50 sm:text-2xl">
                  {statusMeta.incubating.sectionTitle}
                </h2>
              </div>
              <p className="max-w-md text-sm text-slate-400">
                {statusMeta.incubating.sectionHint}
              </p>
            </header>
            <div className="grid gap-5 md:grid-cols-2">
              {incubatingProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
