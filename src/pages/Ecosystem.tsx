export function EcosystemPage() {
  return (
    <main className="flex-1 bg-transparent">
      <section className="section">
        <div className="container-main space-y-6">
          <div className="max-w-3xl space-y-3">
            <p className="badge-soft text-[11px]">AI 生态 · 官网视角</p>
            <h1 className="text-2xl sm:text-3xl font-semibold text-slate-50">
              构建 AI 开发者协作网络
            </h1>
            <p className="text-sm sm:text-base text-slate-300">
              在这里，开发者、创作者、AI 工具与科技品牌被编织进同一张网络。
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-main space-y-6">
          <h2 className="text-xl font-semibold text-slate-50">
            一个由四类参与者构成的生态
          </h2>
          <div className="grid gap-5 md:grid-cols-4">
            {[
              {
                title: "开发者",
                desc: "前端 / 全栈 / AI 工程师",
                give: "我们提供高信噪比信息流、AI 工具与实践案例。",
                join: "关注内容更新、参与工具内测、分享技术文章。"
              },
              {
                title: "创作者",
                desc: "技术博主、视频创作者、课程作者",
                give: "我们提供选题支持、矩阵分发与商业合作机会。",
                join: "申请加入博主联盟，一起共建内容矩阵。"
              },
              {
                title: "AI 工具与 Agents",
                desc: "模型、工具链、生产力应用",
                give: "我们通过真实工作流与开发者反馈帮助工具演进。",
                join: "与我们一起在典型开发场景中验证与集成。"
              },
              {
                title: "科技品牌",
                desc: "云服务、DevTools、AI 产品团队",
                give: "我们提供面向 Builders 的叙事空间与共创机制。",
                join: "通过内容与活动，与核心开发者群体深度对话。"
              }
            ].map((card) => (
              <div key={card.title} className="glass-card flex flex-col gap-3 p-4 sm:p-5">
                <div className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
                  {card.title}
                </div>
                <p className="text-xs text-slate-400">{card.desc}</p>
                <div className="mt-1 space-y-1.5 text-xs text-slate-300">
                  <p>· 我们为 TA 提供什么：{card.give}</p>
                  <p>· TA 如何加入 / 参与：{card.join}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-main space-y-6">
          <h2 className="text-xl font-semibold text-slate-50">
            从单点合作，到网络协作
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="glass-card p-4 sm:p-5 text-sm text-slate-200">
              <div className="text-xs font-medium text-slate-400">内容协作</div>
              <p className="mt-2">
                联合周刊、专栏、直播、技术白皮书。通过多节点、多渠道的内容矩阵，让一篇好内容在网络中持续产生长尾影响。
              </p>
            </div>
            <div className="glass-card p-4 sm:p-5 text-sm text-slate-200">
              <div className="text-xs font-medium text-slate-400">产品协作</div>
              <p className="mt-2">
                围绕 AI 工具与开发者工具进行评测、共创与反馈迭代，让产品团队直接接触真实使用场景，而不是停留在 Demo。
              </p>
            </div>
            <div className="glass-card p-4 sm:p-5 text-sm text-slate-200">
              <div className="text-xs font-medium text-slate-400">社区协作</div>
              <p className="mt-2">
                线下活动、黑客松、技术沙龙，把线上内容与线下社群连接起来，让生态关系更立体、更持久。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-main space-y-6">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-xl font-semibold text-slate-50">
              矩阵中的真实故事
            </h2>
            <p className="text-sm text-slate-300">
              未来放入典型开发者 / 创作者 / 品牌的真实故事，目前先放 2–3 个占位卡。
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {["开发者故事（占位）", "创作者故事（占位）", "品牌故事（占位）"].map(
              (title) => (
                <div key={title} className="glass-card p-4 sm:p-5">
                  <div className="text-xs font-medium text-slate-400">
                    {title}
                  </div>
                  <p className="mt-2 text-sm text-slate-200">
                    这里将展示一个真实的场景：某位开发者或创作者如何借助广州矩联科技有限公司
                    的内容与工具，在 AI 时代升级自己的工作方式。
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-main space-y-6">
          <h2 className="text-xl font-semibold text-slate-50">
            加入 MatrixLinkTech 生态网络
          </h2>
          <div className="grid gap-5 md:grid-cols-3 text-sm text-slate-200">
            <div className="glass-card p-4 sm:p-5">
              <div className="text-xs font-medium text-slate-400">
                面向开发者
              </div>
              <p className="mt-2">
                订阅前端周刊、关注后续 AI 工具内测，参与工作流实验，一起探索「个人 + Agent 团队」的新协作方式。
              </p>
            </div>
            <div className="glass-card p-4 sm:p-5">
              <div className="text-xs font-medium text-slate-400">
                面向创作者
              </div>
              <p className="mt-2">
                申请加入博主联盟，一起设计适合 AI
                时代的技术内容形态与分发路径，让创作成为一份长期复利资产。
              </p>
            </div>
            <div className="glass-card p-4 sm:p-5">
              <div className="text-xs font-medium text-slate-400">
                面向品牌
              </div>
              <p className="mt-2">
                品牌合作与赞助：围绕产品与生态，共同策划内容矩阵、活动与工具共创项目，走近真正的
                Builder 群体。
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

