export function ProjectsPage() {
  const bloggerAllianceUrl = "https://blogger-alliance.cn/";
  const frontendWeeklyUrl = "https://frontendweekly.cn/";

  return (
    <main className="flex-1 bg-transparent">
      <section className="section">
        <div className="container-main space-y-6">
          <div className="max-w-3xl space-y-3">
            <p className="badge-soft text-[11px]">项目矩阵 · 官网总览</p>
            <h1 className="text-2xl sm:text-3xl font-semibold text-slate-50">
              矩阵中的每一个项目，都是一个节点
            </h1>
            <p className="text-sm sm:text-base text-slate-300">
              从技术周刊到创作者联盟，再到 AI
              工具矩阵，每一个项目都服务于同一件事：构建 AI 时代的开发者协作网络。
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-main space-y-10">
          {/* 博主联盟 */}
          <section className="grid gap-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-50">
                开发者创作者联盟 / 博主联盟
              </h2>
              <p className="text-sm sm:text-base text-slate-300">
                面向开发者与技术博主的创作者联盟，用 AI
                与内容矩阵放大每一次技术输出的价值。
              </p>
            </div>
            <div className="glass-card p-4 sm:p-5 text-xs text-slate-300">
              <p>
                通过统一的合作接口与矩阵化分发策略，我们帮助创作者在多个渠道上持续积累长期资产，而不是被单一平台的算法左右。
              </p>
            </div>
          </section>

          <section className="grid gap-5 md:grid-cols-3">
            <div className="glass-card flex flex-col gap-2 p-4 sm:p-5">
              <div className="text-xs font-medium text-slate-400">
                项目定位
              </div>
              <p className="text-sm text-slate-200">
                一个连接技术博主、开源贡献者与 AI
                开发者的创作者联盟，通过联合选题、共创内容与工具支持，形成高质量的技术内容网络。
              </p>
            </div>
            <div className="glass-card flex flex-col gap-2 p-4 sm:p-5">
              <div className="text-xs font-medium text-slate-400">
                面向创作者
              </div>
              <p className="text-sm text-slate-200">
                内容合作、流量放大、品牌对接、矩阵分发。你可以专注于创作，我们帮助你把好内容送达合适的开发者与品牌。
              </p>
            </div>
            <div className="glass-card flex flex-col gap-2 p-4 sm:p-5">
              <div className="text-xs font-medium text-slate-400">
                面向品牌方
              </div>
              <p className="text-sm text-slate-200">
                真实开发者触达、技术原生内容、长期内容资产。通过与创作者网络共创，而不是一次性投放，沉淀面向
                Builder 的产品叙事。
              </p>
            </div>
          </section>

          <div className="container-main">
            <a
              href={bloggerAllianceUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-medium text-slate-950 shadow-[0_10px_35px_rgba(34,211,238,0.45)] hover:bg-cyan-400"
            >
              加入博主联盟 →
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-main space-y-8">
          {/* 前端周刊 */}
          <section className="grid gap-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-50">
                前端技术周刊 / 前端周刊
              </h2>
              <p className="text-sm sm:text-base text-slate-300">
                一份面向前端与 AI
                开发者的高信噪比技术周刊，每周一次更新你的技术雷达。
              </p>
            </div>
            <div className="glass-card p-4 sm:p-5 text-xs text-slate-300">
              <p>
                比起「刷不完的资讯流」，我们更希望通过稳定节奏和精挑细选，让你在有限时间内获取真正重要的变化。
              </p>
            </div>
          </section>

          <section className="grid gap-5 md:grid-cols-4">
            <div className="glass-card p-4 sm:p-5 text-sm text-slate-200">
              <div className="text-xs font-medium text-slate-400">
                What&apos;s inside
              </div>
              <p className="mt-2">
                前端框架 &amp; 工程化、AI &amp; LLM
                生态、开发者工具、开源项目与值得收藏的实践文章。
              </p>
            </div>
            <div className="glass-card p-4 sm:p-5 text-sm text-slate-200">
              <div className="text-xs font-medium text-slate-400">
                Why it matters
              </div>
              <p className="mt-2">
                帮助你在信息爆炸中保持技术敏锐度，不被「今天又出了哪个新库」所淹没，而是看到长期趋势。
              </p>
            </div>
            <div className="glass-card p-4 sm:p-5 text-sm text-slate-200">
              <div className="text-xs font-medium text-slate-400">
                Subscribe
              </div>
              <p className="mt-2">
                订阅即可在每周固定时间收到更新，也可以在工作流中把它当作复盘与补课清单。
              </p>
            </div>
            <div className="glass-card p-4 sm:p-5 text-sm text-slate-200">
              <div className="text-xs font-medium text-slate-400">
                Browse archive
              </div>
              <p className="mt-2">
                即将上线的归档页，将支持按主题与时间维度浏览，让周刊本身成为一张知识地图。
              </p>
            </div>
          </section>

          <div className="container-main">
            <a
              href={frontendWeeklyUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center rounded-full border border-slate-700/80 bg-slate-950/60 px-5 py-2.5 text-sm font-medium text-slate-100 hover:border-slate-500/80"
            >
              前往前端周刊 →
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-main space-y-8">
          {/* AI 工具矩阵 */}
          <section className="grid gap-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-50">
                AI Tools &amp; Agents Matrix（In Progress）
              </h2>
              <p className="text-sm sm:text-base text-slate-300">
                一组面向开发者与技术创作者的 AI 工具与 Agent，嵌入现有工具链，而不是替代它。
              </p>
            </div>
            <div className="glass-card p-4 sm:p-5 text-xs text-slate-300">
              <p>
                目标是把「好用的 AI 工作流」变成模块化的工具，叠加在 IDE、写作工具、项目管理与社区运营之上。
              </p>
            </div>
          </section>

          <section className="grid gap-5 md:grid-cols-4">
            <div className="glass-card p-4 sm:p-5 text-sm text-slate-200">
              <div className="text-xs font-medium text-slate-400">Problem</div>
              <p className="mt-2">
                很多 AI
                工具停留在 Demo，而不是稳定融入开发者的日常工作：要么流程割裂，要么学习成本过高。
              </p>
            </div>
            <div className="glass-card p-4 sm:p-5 text-sm text-slate-200">
              <div className="text-xs font-medium text-slate-400">Concept</div>
              <p className="mt-2">
                以「工作流」为单位设计 AI 助手：写代码、写文档、做内容、运营社区，而不是一次性的大而全工具。
              </p>
            </div>
            <div className="glass-card p-4 sm:p-5 text-sm text-slate-200">
              <div className="text-xs font-medium text-slate-400">Roadmap</div>
              <p className="mt-2 text-xs text-slate-300">
                V1：内容创作助手{" "}
                <span className="text-slate-500">→</span> V2：开发者工作流
                Agent <span className="text-slate-500">→</span> V3：生态洞察仪表盘。
              </p>
            </div>
            <div className="glass-card p-4 sm:p-5 text-sm text-slate-200">
              <div className="text-xs font-medium text-slate-400">
                Early Access
              </div>
              <p className="mt-2">
                欢迎提交你的使用场景与期待，我们会优先在「真实工作流」中验证与迭代这些工具。
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

