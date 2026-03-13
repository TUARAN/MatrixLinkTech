type BlogCategory = "Weekly" | "DeepDives" | "Stories";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string;
  readingTime: string;
}

const posts: BlogPost[] = [
  {
    id: 1,
    title: "前端周刊 #01：LLM 时代的前端工作流",
    excerpt: "从框架演进到 AI 工具接入，梳理构建现代前端应用时需要关注的关键能力。",
    category: "Weekly",
    date: "2026-03-01",
    readingTime: "8 min"
  },
  {
    id: 2,
    title: "Deep Dive：从工具到工作流的 AI 设计视角",
    excerpt: "为什么我们更应该从「工作流」而不是「功能列表」出发设计 AI 工具矩阵。",
    category: "DeepDives",
    date: "2026-02-20",
    readingTime: "12 min"
  },
  {
    id: 3,
    title: "Story：一位前端开发者的 AI Builder 升级之路",
    excerpt: "一位个人开发者如何把多个 Agent 变成自己的日常团队成员。",
    category: "Stories",
    date: "2026-02-10",
    readingTime: "9 min"
  }
];

export function BlogPage() {
  const active: BlogCategory = "Weekly"; // 简单占位，后续可接入状态切换
  const categoryLabels: Record<BlogCategory, string> = {
    Weekly: "每周精选",
    DeepDives: "深度解读",
    Stories: "实践故事"
  };

  const filtered = posts.filter((p) => p.category === active);

  return (
    <main className="flex-1 bg-transparent">
      <section className="section">
        <div className="container-main space-y-6">
          <div className="max-w-3xl space-y-3">
            <p className="badge-soft text-[11px]">博客 · 最新动态</p>
            <h1 className="text-2xl sm:text-3xl font-semibold text-slate-50">
              在 AI 时代保持技术领先
            </h1>
            <p className="text-sm sm:text-base text-slate-300">
              不只是新闻流，而是为开发者与创作者设计的高信噪比内容流：周刊、深度文章、实践案例与生态观察。
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-main space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <button className="badge-soft bg-slate-900/90 text-xs text-cyan-300">
              每周精选
            </button>
            <button className="badge-soft text-xs text-slate-400">
              深度解读
            </button>
            <button className="badge-soft text-xs text-slate-400">
              实践故事
            </button>
          </div>

          <div className="grid gap-4">
            {filtered.map((post) => (
              <article
                key={post.id}
                className="glass-card flex flex-col gap-2 p-4 sm:p-5"
              >
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readingTime}</span>
                  <span>·</span>
                  <span className="text-cyan-300">{categoryLabels[post.category]}</span>
                </div>
                <h2 className="text-base sm:text-lg font-semibold text-slate-50">
                  {post.title}
                </h2>
                <p className="text-sm text-slate-300">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-main space-y-6">
          <div className="max-w-xl space-y-3">
            <h2 className="text-xl font-semibold text-slate-50">
              订阅矩阵，而不是单篇文章
            </h2>
            <p className="text-sm text-slate-300">
              通过订阅，你将持续收到：
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300">
              <li>每周一次的前端周刊</li>
              <li>精选的 AI &amp; LLM 生态洞察</li>
              <li>MatrixLinkTech 项目与工具的最新进展</li>
            </ul>
          </div>

          <form className="glass-card flex flex-col gap-3 p-4 sm:p-5 text-sm text-slate-200">
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="your@email"
                className="w-full rounded-full border border-slate-700/80 bg-slate-950/70 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus-ring"
              />
              <button className="focus-ring mt-1 inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-medium text-slate-950 shadow-[0_10px_35px_rgba(34,211,238,0.45)] hover:bg-cyan-400 sm:mt-0">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-slate-500">
              我们只在有价值的时候发邮件，不做打扰式推送。
            </p>
          </form>
        </div>
      </section>

      <section className="section">
        <div className="container-main">
          <div className="glass-card flex flex-col gap-3 border-dashed p-4 sm:p-5 text-sm text-slate-200 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-xs font-medium text-slate-400">
                面向创作者与品牌方
              </div>
              <h2 className="mt-1 text-base font-semibold text-slate-50">
                想在这里分享你的故事或项目？
              </h2>
              <p className="mt-1 text-sm text-slate-300">
                如果你是技术创作者、开源作者或科技品牌，欢迎与我们联系，共同构建 AI 时代的技术内容矩阵。
              </p>
            </div>
            <button className="focus-ring inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2.5 text-sm font-medium text-slate-100 hover:bg-slate-800">
              提交内容 / 合作意向 →
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

