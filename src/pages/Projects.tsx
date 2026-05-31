import { projects } from "../data/site";

const statusLabel = {
  live: "已上线",
  incubating: "孵化中"
};

export function ProjectsPage() {
  return (
    <main className="flex-1 bg-transparent">
      <section className="section">
        <div className="container-main max-w-4xl space-y-4">
          <p className="badge-soft text-[11px]">项目 · 真实入口</p>
          <h1 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
            每个项目都对应一个可访问的内容或合作入口
          </h1>
          <p className="text-sm leading-7 text-slate-300 sm:text-base">
            已上线项目给出独立站点，孵化中方向会明确标注，并引导到 2aran.com 查看相关记录。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-main space-y-5">
          {projects.map((project) => (
            <article
              key={project.title}
              className="glass-card grid gap-5 p-5 sm:p-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="badge-soft text-[11px]">{project.label}</span>
                  <span
                    className={
                      project.status === "live"
                        ? "rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300"
                        : "rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs text-amber-300"
                    }
                  >
                    {statusLabel[project.status]}
                  </span>
                </div>
                <h2 className="text-2xl font-semibold text-slate-50">
                  {project.title}
                </h2>
                <p className="text-sm leading-7 text-slate-300">
                  {project.description}
                </p>
              </div>
              <div className="space-y-4">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-xs font-medium text-slate-500">
                      面向对象
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-200">
                      {project.audience}
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-xs font-medium text-slate-500">
                      可信依据
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-200">
                      {project.proof}
                    </p>
                  </div>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-cyan-300"
                >
                  前往查看 →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
