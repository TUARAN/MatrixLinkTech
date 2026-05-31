import { company, cooperationTracks, projects } from "../data/site";

export function CooperationPage() {
  const creatorProject = projects.find((project) => project.title === "博主联盟");

  return (
    <main className="flex-1 bg-transparent">
      <section className="section">
        <div className="container-main max-w-4xl space-y-4">
          <p className="badge-soft text-[11px]">合作 · 联系入口</p>
          <h1 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
            围绕技术内容、创作者网络和 AI 工作流展开合作
          </h1>
          <p className="text-sm leading-7 text-slate-300 sm:text-base">
            如果你希望触达开发者、共创技术内容、连接创作者，或一起验证 AI 工具在真实工作流中的落地方式，可以从这里开始。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-main grid gap-5 md:grid-cols-3">
          {cooperationTracks.map((track) => (
            <div key={track.title} className="glass-card p-5">
              <h2 className="text-lg font-semibold text-slate-50">
                {track.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {track.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-main grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.75fr)]">
          <div className="glass-card p-5 sm:p-6">
            <h2 className="text-xl font-semibold text-slate-50">
              联系方式
            </h2>
            <div className="mt-5 grid gap-3 text-sm text-slate-300">
              <p>
                <span className="text-slate-500">邮箱：</span>
                <a href={`mailto:${company.email}`} className="text-cyan-300 hover:text-cyan-200">
                  {company.email}
                </a>
              </p>
              <p>
                <span className="text-slate-500">微信：</span>
                {company.wechat}
              </p>
              <p>
                <span className="text-slate-500">相关内容：</span>
                <a
                  href={company.relatedContentUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-300 hover:text-cyan-200"
                >
                  2aran.com
                </a>
              </p>
            </div>
          </div>
          {creatorProject && (
            <a
              href={creatorProject.url}
              target="_blank"
              rel="noreferrer"
              className="glass-card block p-5 transition hover:border-cyan-400/40 hover:bg-cyan-400/5 sm:p-6"
            >
              <div className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                Creator Network
              </div>
              <h2 className="mt-3 text-xl font-semibold text-slate-50">
                创作者合作从博主联盟开始
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                技术创作者、品牌方或社区项目可以先查看博主联盟的介绍和申请方式。
              </p>
              <div className="mt-5 text-sm text-cyan-300">前往博主联盟 →</div>
            </a>
          )}
        </div>
      </section>
    </main>
  );
}
