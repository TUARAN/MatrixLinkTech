import { company } from "../data/site";

export function AboutPage() {
  return (
    <main className="flex-1 bg-transparent">
      <section className="section">
        <div className="container-main grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.8fr)]">
          <div className="space-y-4">
            <p className="badge-soft text-[11px]">关于 · 公司信息</p>
            <h1 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
              广州矩联科技有限公司
            </h1>
            <p className="text-sm leading-7 text-slate-300 sm:text-base">
              MatrixLinkTech 专注技术内容、开发者社群、创作者连接和 AI 工作流方向，通过已上线项目持续沉淀可复用的内容与合作能力。
            </p>
          </div>
          <div className="glass-card space-y-3 p-5 text-sm text-slate-300">
            <div>
              <span className="text-slate-500">统一社会信用代码：</span>
              {company.creditCode}
            </div>
            <div>
              <span className="text-slate-500">企业地址：</span>
              {company.address}
            </div>
            <div>
              <span className="text-slate-500">联系邮箱：</span>
              <a href={`mailto:${company.email}`} className="text-cyan-300 hover:text-cyan-200">
                {company.email}
              </a>
            </div>
            <div>
              <span className="text-slate-500">微信：</span>
              {company.wechat}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-main grid gap-5 md:grid-cols-3">
          {[
            {
              title: "真实项目优先",
              desc: "围绕已经上线的站点、持续更新的内容和清晰的合作入口组织公司信息。"
            },
            {
              title: "内容长期沉淀",
              desc: "项目经验、技术观察和 AI 工作流实验会回到 2aran.com 等真实内容源。"
            },
            {
              title: "合作路径清楚",
              desc: "创作者、开发者和品牌方都能直接找到对应项目、联系方式和下一步入口。"
            }
          ].map((item) => (
            <div key={item.title} className="glass-card p-4 sm:p-5">
              <h2 className="text-base font-semibold text-slate-50">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
