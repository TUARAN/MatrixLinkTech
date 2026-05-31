import { updates } from "../data/site";

export function UpdatesPage() {
  const researchUpdate = updates.find((item) => item.url === "https://2aran.com/articles");

  return (
    <main className="flex-1 bg-transparent">
      <section className="section">
        <div className="container-main max-w-4xl space-y-4">
          <p className="badge-soft text-[11px]">动态 · 真实来源</p>
          <h1 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
            动态、文章与项目记录
          </h1>
          <p className="text-sm leading-7 text-slate-300 sm:text-base">
            这里汇总 MatrixLinkTech 相关的内容入口，包括技术文章、周刊更新、创作者合作和 AI 工作流实验记录。
          </p>
        </div>
      </section>

      {researchUpdate && (
        <section className="section">
          <div className="container-main space-y-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-2">
                <p className="badge-soft text-[11px]">调研预览</p>
                <h2 className="text-2xl font-semibold text-slate-50">
                  基本每天更新的调研内容
                </h2>
                <p className="max-w-2xl text-sm leading-7 text-slate-300">
                  直接预览 2aran.com/articles 的最新内容，适合快速查看近期调研和项目记录。
                </p>
              </div>
              <a
                href={researchUpdate.url}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-100 hover:border-cyan-400/40 hover:bg-cyan-400/10"
              >
                打开完整页面 →
              </a>
            </div>
            <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-950/70 shadow-soft-glass">
              <iframe
                title="2aran.com articles"
                src={researchUpdate.url}
                className="h-[720px] w-full bg-white"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              />
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container-main grid gap-4 md:grid-cols-3">
          {updates.map((item) => (
            <a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="glass-card block p-5 transition hover:border-cyan-400/40 hover:bg-cyan-400/5"
            >
              <div className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                {item.source}
              </div>
              <h2 className="mt-3 text-lg font-semibold text-slate-50">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {item.description}
              </p>
              <div className="mt-5 text-sm text-cyan-300">打开来源 →</div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
