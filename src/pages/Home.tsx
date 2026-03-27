export function HomePage() {
  const bloggerAllianceUrl = "https://blogger-alliance.cn/";
  const frontendWeeklyUrl = "https://frontendweekly.cn/";
  const heroPanels = [
    {
      title: "内容矩阵",
      value: "3 大板块",
      desc: "博主联盟、前端周刊、AI 工具矩阵形成协同联动。"
    },
    {
      title: "合作模式",
      value: "长期共创",
      desc: "连接开发者、创作者与科技品牌，沉淀稳定合作关系。"
    },
    {
      title: "品牌实力",
      value: "合作广泛",
      desc: "覆盖云厂商、开发工具、AI 产品与技术社区等生态伙伴。"
    }
  ];
  return (
    <main className="flex-1 bg-transparent">
      <div className="relative overflow-hidden border-b border-white/8 bg-gradient-to-b from-slate-950/55 via-slate-950/28 to-slate-950/45">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(79,70,229,0.2),_transparent_60%)]" />
        <div className="absolute inset-0 bg-grid opacity-35 mix-blend-soft-light" />
        <div className="pointer-events-none absolute left-[-10%] top-10 h-56 w-56 rounded-full bg-rose-500/10 blur-3xl" />
        <div className="pointer-events-none absolute right-[-4%] top-16 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-48 w-[36rem] -translate-x-1/2 rounded-full bg-indigo-500/7 blur-3xl" />

        <div className="relative container-main pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-center xl:gap-14">
            <div className="space-y-7 lg:pr-4">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-gradient-to-r from-white/10 via-slate-900/80 to-cyan-500/10 px-5 py-2.5 text-sm font-medium text-slate-100 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_50px_rgba(8,15,30,0.45)] sm:text-base">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.9)]" />
                广州矩联科技有限公司 · AI 生态连接者
              </div>
              <div className="space-y-3">
                <div className="text-xs font-medium uppercase tracking-[0.38em] text-slate-500">
                  MATRIXLINKTECH / GUANGZHOU
                </div>
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
              </div>
              <p className="max-w-2xl text-pretty text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                我们专注于 AI + 开发者生态，通过技术内容矩阵、创作者网络与 AI 工具，
                构建面向开发者和 AI 用户的共生网络。
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={bloggerAllianceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_45px_rgba(34,211,238,0.42)] transition hover:-translate-y-0.5 hover:bg-cyan-300"
                >
                  加入博主联盟
                </a>
                <a
                  href={frontendWeeklyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 shadow-[0_12px_30px_rgba(15,23,42,0.28)] transition hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-cyan-400/10"
                >
                  订阅前端周刊
                </a>
                <button className="focus-ring inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 shadow-[0_12px_30px_rgba(15,23,42,0.28)] transition hover:-translate-y-0.5 hover:border-rose-400/40 hover:bg-rose-400/10">
                  查看项目矩阵
                </button>
              </div>
              <div className="glass-card space-y-3 border-white/10 bg-slate-900/28 p-4 shadow-[0_20px_60px_rgba(2,8,23,0.38)] sm:p-5">
                <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  企业信息公示
                </div>
                <div className="space-y-2 text-sm text-slate-300">
                  <p>
                    <span className="text-slate-500">公司名称：</span>
                    广州矩联科技有限公司
                  </p>
                  <p>
                    <span className="text-slate-500">统一社会信用代码：</span>
                    91440106MAK565BF7N
                  </p>
                  <p>
                    <span className="text-slate-500">企业地址：</span>
                    广州市天河区中山大道建中路5号3A03房W45室
                  </p>
                </div>
              </div>
            </div>

            <div className="relative w-full lg:self-stretch">
              <div className="flex h-full flex-col gap-5">
                <div className="glass-card relative overflow-hidden border-white/10 bg-slate-900/30 p-5 shadow-[0_25px_90px_rgba(2,8,23,0.48)] sm:p-6 lg:min-h-[420px]">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,_rgba(244,63,94,0.1),_transparent_28%),radial-gradient(circle_at_85%_15%,_rgba(34,211,238,0.12),_transparent_30%),linear-gradient(135deg,rgba(15,23,42,0.06),rgba(15,23,42,0.32))]" />
                  <div className="pointer-events-none absolute inset-x-6 top-16 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
                  <div className="pointer-events-none absolute bottom-10 right-10 h-28 w-28 rounded-full border border-cyan-400/20" />
                  <div className="pointer-events-none absolute bottom-5 right-5 h-40 w-40 rounded-full border border-rose-400/10" />
                  <div className="relative flex h-full flex-col justify-between gap-6">
                    <div className="space-y-5">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="text-xs font-medium uppercase tracking-[0.26em] text-slate-500">
                            Brand Signal Panel
                          </div>
                          <h3 className="mt-2 text-2xl font-semibold text-slate-50">
                            矩联官网概览
                          </h3>
                        </div>
                        <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] font-medium text-emerald-300">
                          LIVE / OFFICIAL
                        </span>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-sm">
                          <div className="text-[11px] tracking-[0.18em] text-slate-500">
                            NETWORK INDEX
                          </div>
                          <div className="mt-3 flex items-end gap-2">
                            <span className="text-4xl font-semibold text-white">87</span>
                            <span className="pb-1 text-sm text-cyan-300">/ 100</span>
                          </div>
                          <p className="mt-2 text-xs leading-6 text-slate-400">
                            以内容矩阵、开发者连接与品牌协同构成综合信号强度。
                          </p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-sm">
                          <div className="text-[11px] tracking-[0.18em] text-slate-500">
                            ACTIVE CHANNELS
                          </div>
                          <div className="mt-4 space-y-3">
                            <div>
                              <div className="mb-1 flex items-center justify-between text-xs text-slate-400">
                                <span>博主联盟</span>
                                <span>92%</span>
                              </div>
                              <div className="h-2 rounded-full bg-white/5">
                                <div className="h-2 w-[92%] rounded-full bg-gradient-to-r from-cyan-400 to-sky-500" />
                              </div>
                            </div>
                            <div>
                              <div className="mb-1 flex items-center justify-between text-xs text-slate-400">
                                <span>前端周刊</span>
                                <span>84%</span>
                              </div>
                              <div className="h-2 rounded-full bg-white/5">
                                <div className="h-2 w-[84%] rounded-full bg-gradient-to-r from-rose-400 to-fuchsia-500" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-[11px] text-slate-200">
                        <div className="rounded-xl border border-white/8 bg-white/5 p-3">
                          <div className="mb-2 text-[11px] font-semibold text-slate-100">开发者节点</div>
                          <div className="text-lg font-semibold text-emerald-300">3,241</div>
                          <p className="mt-1 text-[10px] text-slate-400">前端 / 全栈 / AI 工程师持续协作。</p>
                        </div>
                        <div className="rounded-xl border border-white/8 bg-white/5 p-3">
                          <div className="mb-2 text-[11px] font-semibold text-slate-100">创作者网络</div>
                          <div className="text-lg font-semibold text-sky-300">870</div>
                          <p className="mt-1 text-[10px] text-slate-400">技术博主与内容创作者形成矩阵分发。</p>
                        </div>
                        <div className="rounded-xl border border-white/8 bg-white/5 p-3">
                          <div className="mb-2 text-[11px] font-semibold text-slate-100">AI 工具层</div>
                          <div className="text-lg font-semibold text-indigo-300">24</div>
                          <p className="mt-1 text-[10px] text-slate-400">工具与 Agent 持续嵌入真实工作流。</p>
                        </div>
                        <div className="rounded-xl border border-white/8 bg-white/5 p-3">
                          <div className="mb-2 text-[11px] font-semibold text-slate-100">科技品牌</div>
                          <div className="text-lg font-semibold text-fuchsia-300">32</div>
                          <p className="mt-1 text-[10px] text-slate-400">云厂商、DevTools 与 AI 初创协同共创。</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                      {heroPanels.map((item) => (
                        <div key={item.title} className="rounded-2xl border border-white/8 bg-white/5 p-4 backdrop-blur-sm">
                          <div className="text-[11px] font-medium tracking-[0.16em] text-slate-500">
                            {item.title}
                          </div>
                          <div className="mt-2 text-base font-semibold text-slate-100">
                            {item.value}
                          </div>
                          <p className="mt-2 text-xs leading-6 text-slate-400">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container-main grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">
              AI 时代的开发者生态组织者
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              在 LLM 时代，MatrixLinkTech 通过技术矩阵与创作者网络，连接开发者、技术创作者与科技品牌，搭建一个开放的 AI 协作网络。
            </p>
          </div>
          <div className="grid gap-4 text-sm text-slate-300">
            <p>
              我们相信，下一代开发者生态不再只是围绕单一产品，而是围绕「开发者与创作者」这两个核心角色，通过内容、工具与网络持续进化。
            </p>
            <p>
              从技术周刊到 Agent 工具矩阵，我们在同一张技术底图上，为 AI Builders
              提供可组合的积木。
            </p>
          </div>
        </div>
        <div className="container-main mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "技术矩阵",
              desc: "汇聚前端、AI、工程效率等领域的技术内容与项目，形成结构化的知识图谱与内容矩阵。"
            },
            {
              title: "创作者网络",
              desc: "连接技术博主、内容创作者与开源贡献者，放大每一次技术输出的影响力。"
            },
            {
              title: "AI 工具与生态",
              desc: "围绕 LLM 与 Agent 构建工具矩阵，支持开发者在熟悉的工作流中叠加 AI 能力。"
            }
          ].map((item) => (
            <div
              key={item.title}
              className="glass-card flex flex-col gap-2 p-4 sm:p-5"
            >
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                {item.title}
              </div>
              <p className="text-sm text-slate-200">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-main space-y-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">
                从内容到工具的 AI 开发者矩阵
              </h2>
              <p className="mt-2 max-w-2xl text-sm sm:text-base text-slate-300">
                每一个项目都是矩阵中的一个节点：它们彼此连接，共同服务于「构建 AI
                时代的开发者协作网络」这一件事。
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {/* 博主联盟 */}
            <article className="glass-card flex flex-col justify-between p-5">
              <div className="space-y-3">
                <span className="badge-soft text-[11px] text-cyan-300">
                  Creator Alliance
                </span>
                <h3 className="text-base font-semibold text-slate-50">
                  博主联盟：开发者创作者网络
                </h3>
                <p className="text-sm text-slate-300">
                  连接技术博主、AI 开发者与科技品牌，通过内容合作与矩阵分发，构建高信噪比的技术传播网络。
                </p>
              </div>
              <a
                href={bloggerAllianceUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center text-sm text-cyan-300 hover:text-cyan-200"
              >
                了解博主联盟 →
              </a>
            </article>

            {/* 前端周刊 */}
            <article className="glass-card flex flex-col justify-between p-5">
              <div className="space-y-3">
                <span className="badge-soft text-[11px] text-sky-300">
                  前端技术周刊
                </span>
                <h3 className="text-base font-semibold text-slate-50">
                  前端周刊：每周一次技术雷达
                </h3>
                <p className="text-sm text-slate-300">
                  聚焦前端技术、AI &amp; LLM
                  生态与开发者工具，帮你在信息过载中抓住真正重要的更新。
                </p>
              </div>
              <a
                href={frontendWeeklyUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center text-sm text-cyan-300 hover:text-cyan-200"
              >
                查看周刊与往期 →
              </a>
            </article>

            {/* AI 工具矩阵 */}
            <article className="glass-card flex flex-col justify-between p-5 border-dashed">
              <div className="space-y-3">
                <span className="badge-soft text-[11px] text-fuchsia-300">
                  即将上线
                </span>
                <h3 className="text-base font-semibold text-slate-50">
                  AI 工具矩阵：面向 Builders 的 Agent 层
                </h3>
                <p className="text-sm text-slate-300">
                  围绕 LLM 与 Agent，为开发者与创作者构建一组可叠加的 AI
                  工具，融入日常工作流。
                </p>
              </div>
              <button className="mt-4 inline-flex items-center text-sm text-cyan-300 hover:text-cyan-200">
                加入内测名单 →
              </button>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-main space-y-8">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">
              一张连接开发者、创作者与 AI 工具的网络
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              MatrixLinkTech 不是单一产品，而是一张网络：一端是开发者与 AI Builders，一端是技术创作者与品牌，中间由
              AI 工具与技术内容矩阵连接。
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Developers",
                desc: "前端 / 全栈 / AI 工程师，在这里获取高信噪比信息与工具。"
              },
              {
                title: "Creators",
                desc: "技术博主、内容创作者、讲师，通过矩阵分发放大影响力。"
              },
              {
                title: "AI Tools & Agents",
                desc: "LLM、开发工具与创作助手，嵌入工作流的 Agent 层。"
              },
              {
                title: "Tech Brands",
                desc: "云厂商、DevTools、AI 初创公司，与真实开发者社群对话。"
              }
            ].map((item) => (
              <div key={item.title} className="glass-card p-4 sm:p-5">
                <div className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                  {item.title}
                </div>
                <p className="mt-2 text-sm text-slate-200">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-main space-y-6">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">
              AI 时代的开发者协作网络
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "AI Builders 社区",
                desc: "让「个人 + 多个 Agent」成为新型开发团队单元。"
              },
              {
                title: "工具矩阵层",
                desc: "在现有开发工具之上，叠加一层面向工作流的 AI 助手。"
              },
              {
                title: "技术内容矩阵",
                desc: "用 AI 与创作者网络，重构技术内容的生产与分发。"
              }
            ].map((item) => (
              <div
                key={item.title}
                className="glass-card flex flex-col gap-2 p-4 sm:p-5"
              >
                <div className="text-xs font-medium text-slate-400">
                  {item.title}
                </div>
                <p className="text-sm text-slate-200">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="max-w-3xl text-sm sm:text-base text-slate-300">
            在 LLM
            时代，让每一位开发者与创作者，都能在一张共享的技术矩阵中协作、学习与构建产品。
          </p>
        </div>
      </section>
    </main>
  );
}
