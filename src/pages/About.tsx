export function AboutPage() {
  return (
    <main className="flex-1 bg-transparent">
      <section className="section">
        <div className="container-main space-y-8">
          <div className="max-w-3xl space-y-3">
            <p className="badge-soft text-[11px]">关于我们 · 广州矩联科技有限公司</p>
            <h1 className="text-2xl sm:text-3xl font-semibold text-slate-50">
              从技术矩阵到创作者网络
            </h1>
            <p className="text-sm sm:text-base text-slate-300">
              广州矩联科技有限公司是一家专注 AI + 开发者生态的技术品牌，通过技术矩阵与创作者网络，组织起一张面向 LLM 时代的开发者协作网络。
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-main grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-50">
              使命：为 AI 时代重构开发者协作方式
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              传统开发者生态围绕「公司 / 产品」组织，而在 LLM
              时代，我们希望围绕「开发者与创作者」组织一张更加开放的网络，让个体在
              AI 的加持下，拥有构建产品与影响世界的能力。
            </p>
          </div>
          <div className="glass-card p-4 sm:p-5 text-xs text-slate-300">
            <p>
              我们关心的问题是：当每一位开发者与创作者都可以调用强大的
              LLM，与多个 Agent 协同工作时，「协作」与「分发」应该如何被重新设计？
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-main space-y-6">
          <h2 className="text-xl font-semibold text-slate-50">
            我们解决什么问题
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="glass-card flex flex-col gap-2 p-4 sm:p-5">
              <div className="text-xs font-medium text-slate-400">
                信息碎片化
              </div>
              <p className="text-xs text-slate-400">
                开发者每天被无数技术信息淹没，很难知道什么真正值得关注。
              </p>
              <p className="mt-2 text-sm text-slate-200">
                通过「前端周刊」等内容矩阵，提供高信噪比的技术筛选，让你在固定节奏中更新技术雷达。
              </p>
            </div>
            <div className="glass-card flex flex-col gap-2 p-4 sm:p-5">
              <div className="text-xs font-medium text-slate-400">
                创作者机会分散
              </div>
              <p className="text-xs text-slate-400">
                技术博主与创作者难以系统地连接到合适的品牌与项目。
              </p>
              <p className="mt-2 text-sm text-slate-200">
                通过博主联盟，搭建创作者与品牌之间的结构化接口，让合作不再靠运气与私信。
              </p>
            </div>
            <div className="glass-card flex flex-col gap-2 p-4 sm:p-5">
              <div className="text-xs font-medium text-slate-400">
                AI 能力难以落地到工作流
              </div>
              <p className="text-xs text-slate-400">
                AI 工具多，但很少真正融入开发者的日常工作与内容生产。
              </p>
              <p className="mt-2 text-sm text-slate-200">
                围绕 LLM 与 Agent，构建与现有工具链兼容的 AI
                工具矩阵，直接接入 IDE、写作与运营工作流。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-main space-y-6">
          <h2 className="text-xl font-semibold text-slate-50">
            方法：矩阵化、网络化、工具化
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="glass-card p-4 sm:p-5 text-sm text-slate-200">
              <div className="text-xs font-medium text-slate-400">矩阵化</div>
              <p className="mt-2">
                用主题 / 技术栈 / 角色维度搭建内容与项目矩阵，让开发者在不同维度之间自由切换视角。
              </p>
            </div>
            <div className="glass-card p-4 sm:p-5 text-sm text-slate-200">
              <div className="text-xs font-medium text-slate-400">网络化</div>
              <p className="mt-2">
                把个人创作者与项目连接成网络，而不是孤立的账号或单一媒体，让每一次输出都能在网络中被再次引用与扩散。
              </p>
            </div>
            <div className="glass-card p-4 sm:p-5 text-sm text-slate-200">
              <div className="text-xs font-medium text-slate-400">工具化</div>
              <p className="mt-2">
                在矩阵与网络之上，通过 AI 工具与 Agent
                降低协作与创作门槛，把「好用的流程」变成可复用的工具。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-main space-y-6">
          <h2 className="text-xl font-semibold text-slate-50">
            面向谁
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="glass-card flex flex-col gap-2 p-4 sm:p-5">
              <div className="text-xs font-medium text-slate-400">
                面向开发者
              </div>
              <p className="text-sm text-slate-200">
                想要更好获取 AI 时代的技术信息、提高生产力的前端与 AI
                开发者，通过周刊、工具矩阵与案例获得有节奏的升级路径。
              </p>
            </div>
            <div className="glass-card flex flex-col gap-2 p-4 sm:p-5">
              <div className="text-xs font-medium text-slate-400">
                面向创作者
              </div>
              <p className="text-sm text-slate-200">
                想要系统运营技术内容、获得更多合作机会的创作者，通过博主联盟与生态项目找到长期共创伙伴。
              </p>
            </div>
            <div className="glass-card flex flex-col gap-2 p-4 sm:p-5">
              <div className="text-xs font-medium text-slate-400">
                面向科技品牌
              </div>
              <p className="text-sm text-slate-200">
                想要真正走近开发者与 Builder
                社群的科技品牌，通过矩阵化内容与网络协作，获得更真实、更长期的连接。
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

