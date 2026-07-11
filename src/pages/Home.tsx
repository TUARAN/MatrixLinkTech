import { useState, type CSSProperties } from "react";
import { MatrixStrategyMap } from "../components/MatrixStrategyMap";
import {
  cadenceLabel,
  company,
  cooperationTracks,
  matrixEngines,
  projects,
  updates,
  type Project,
  type ProjectStatus,
  type UpdateCadence
} from "../data/site";

const liveProjects = projects.filter((project) => project.status === "live");
const incubatingProjects = projects.filter((project) => project.status === "incubating");

const creditCheckUrl = "https://www.gsxt.gov.cn/index.html";

const mapUrl = `https://uri.amap.com/marker?name=${encodeURIComponent(
  company.name
)}&src=${encodeURIComponent(company.name)}&coordinate=gaode&callnative=0`;

const statusMeta: Record<
  ProjectStatus,
  {
    label: string;
    chip: string;
    ctaLabel: string;
    ctaClass: string;
  }
> = {
  live: {
    label: "已上线",
    chip: "rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300",
    ctaLabel: "前往项目站点 →",
    ctaClass:
      "focus-ring inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-cyan-300"
  },
  incubating: {
    label: "孵化中",
    chip: "rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs text-amber-300",
    ctaLabel: "查看相关记录 →",
    ctaClass:
      "focus-ring inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-100 hover:border-cyan-400/40 hover:bg-cyan-400/10"
  }
};

const cadenceChip: Record<UpdateCadence, string> = {
  daily:
    "rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1 text-[11px] font-medium text-cyan-200",
  weekly:
    "rounded-full border border-sky-400/25 bg-sky-400/10 px-2.5 py-1 text-[11px] font-medium text-sky-200",
  ongoing:
    "rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-300"
};

function CopyButton({ value, label }: { value: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const fallbackCopy = (text: string) => {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch {
      ok = false;
    }
    document.body.removeChild(ta);
    return ok;
  };

  const handleCopy = async () => {
    let ok = false;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
        ok = true;
      }
    } catch {
      ok = false;
    }
    if (!ok) {
      ok = fallbackCopy(value);
    }
    if (ok) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="focus-ring inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-slate-200 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-200"
      aria-label={label ? `复制${label}` : "复制"}
    >
      {copied ? "已复制" : "复制"}
    </button>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-4xl space-y-4">
      <p className="badge-soft text-[11px]">{eyebrow}</p>
      <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-sm leading-7 text-slate-300 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

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

export function HomePage() {
  const highlight = updates.find((item) => item.highlight);
  const restUpdates = updates.filter((item) => item !== highlight);
  const sloganParts = company.slogan.split(/\s+/).filter(Boolean);

  return (
    <main className="flex-1 bg-transparent">
      <section id="home" className="anchor-section border-b border-white/8 bg-slate-950/35">
        <div className="container-main grid gap-10 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-center">
          <div className="space-y-7">
            <div className="badge-soft">
              <span className="contact-indicator mr-2" />
              {company.name}
            </div>
            <div className="space-y-4">
              <p className="text-xs font-medium uppercase tracking-[0.34em] text-slate-500">
                MATRIXLINKTECH / GUANGZHOU
              </p>
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
              <p className="max-w-2xl text-base leading-8 text-slate-300">
                MatrixLinkTech 是技术内容、创作者网络与 AI 工作流的长期建设者，运营面向开发者和技术创作者的真实项目。
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="focus-ring inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_45px_rgba(34,211,238,0.32)] transition hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                查看真实项目
              </a>
              <a
                href="#contact"
                className="focus-ring inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 transition hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-cyan-400/10"
              >
                合作咨询
              </a>
              <a
                href={company.relatedContentUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 transition hover:-translate-y-0.5 hover:border-slate-400/40 hover:bg-white/10"
              >
                阅读 2aran.com
              </a>
            </div>
          </div>

          <aside className="glass-card p-5 sm:p-6">
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
              Current Focus
            </div>
            <div className="mt-5 space-y-4">
              {liveProjects.map((project) => (
                <a
                  key={project.title}
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan-400/40 hover:bg-cyan-400/5"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="text-base font-semibold text-slate-50">
                      {project.title}
                    </h2>
                    <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-emerald-300">
                      Live
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {project.description}
                  </p>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section id="matrix" className="anchor-section section">
        <div className="container-matrix">
          <MatrixStrategyMap />
        </div>
      </section>

      <section id="projects" className="anchor-section section">
        <div className="container-main space-y-8">
          <SectionHeader
            eyebrow="项目 · 真实进度"
            title="已上线的可直接访问，孵化中的同步研发记录"
            description="项目入口集中在这一屏内，不再拆成独立页面。已上线项目给出独立站点入口，孵化中方向标注明确，并引导到 2aran.com 查看相关思考。"
          />

          {liveProjects.length > 0 && (
            <div className="space-y-5">
              <header className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-300/80">
                    Live · {liveProjects.length}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-50 sm:text-2xl">
                    已上线项目
                  </h3>
                </div>
                <p className="max-w-md text-sm text-slate-400">
                  可直接访问独立站点，了解内容、申请合作或订阅更新。
                </p>
              </header>
              <div className="grid gap-5 md:grid-cols-2">
                {liveProjects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            </div>
          )}

          {incubatingProjects.length > 0 && (
            <div className="space-y-5">
              <header className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-amber-300/80">
                    Incubating · {incubatingProjects.length}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-50 sm:text-2xl">
                    孵化中方向
                  </h3>
                </div>
                <p className="max-w-md text-sm text-slate-400">
                  尚无独立站点，相关思考与实验记录沉淀在 2aran.com。
                </p>
              </header>
              <div className="grid gap-5 md:grid-cols-2">
                {incubatingProjects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="updates" className="anchor-section section">
        <div className="container-main space-y-8">
          <SectionHeader
            eyebrow="动态 · 内容矩阵"
            title="内容更新优先回到真实来源"
            description="这里不二次搬运站外内容，而是把 MatrixLinkTech 实际维护的内容入口集中起来，标注各自的更新节奏，方便订阅与跟进。"
          />

          {highlight && (
            <a
              href={highlight.url}
              target="_blank"
              rel="noreferrer"
              className="neon-panel group flex flex-col gap-6 p-6 transition hover:-translate-y-1 sm:p-7 lg:flex-row lg:items-center lg:justify-between"
              style={{ "--panel-color": matrixEngines[5].color } as CSSProperties}
            >
              <div className="space-y-4 lg:max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="badge-soft text-[11px]">主要内容源</span>
                  <span className={cadenceChip[highlight.cadence]}>
                    {cadenceLabel[highlight.cadence]}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
                  {highlight.title}
                </h3>
                <p className="text-sm leading-7 text-slate-300">
                  {highlight.description}
                </p>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                  {highlight.source}
                </p>
              </div>
              <div className="shrink-0">
                <span className="focus-ring inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition group-hover:bg-cyan-300">
                  打开 {highlight.source} →
                </span>
              </div>
            </a>
          )}

          {restUpdates.length > 0 && (
            <div className="grid gap-4 md:grid-cols-2">
              {restUpdates.map((item, index) => (
                <a
                  key={item.url}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="neon-panel group flex h-full flex-col gap-4 p-5 transition hover:-translate-y-1"
                  style={{
                    "--panel-color": [matrixEngines[1].color, matrixEngines[0].color][index % 2]
                  } as CSSProperties}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                      {item.source}
                    </span>
                    <span className={cadenceChip[item.cadence]}>
                      {cadenceLabel[item.cadence]}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-50">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-6 text-slate-300">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-auto text-sm text-cyan-300 transition group-hover:text-cyan-200">
                    打开来源 →
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="about" className="anchor-section section">
        <div className="container-main grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.85fr)]">
          <div className="space-y-5">
            <p className="badge-soft text-[11px]">关于 · 公司信息</p>
            <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
              {company.name}
            </h2>
            <div className="flex flex-wrap gap-2 pt-1">
              {sloganParts.map((part, idx) => (
                <span
                  key={part + idx}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-200"
                >
                  {part}
                </span>
              ))}
            </div>
            <p className="text-sm leading-7 text-slate-300 sm:text-base">
              MatrixLinkTech 专注技术内容、开发者社群、创作者连接和 AI 工作流方向，通过已上线项目持续沉淀可复用的内容与合作能力。我们倾向用真实项目、可访问的入口和清晰的联系方式说明公司在做什么。
            </p>
            <div className="grid gap-5 pt-2 md:grid-cols-3">
              {[
                ["业务方向", "内容 · 网络 · 工作流", "围绕技术内容生产、创作者网络运营、AI 工作流共创三条主线展开。", matrixEngines[5].color],
                ["内容来源", "更新优先回到 2aran.com", "技术调研、项目记录、AI 工作流实验基本每天更新。", matrixEngines[1].color],
                ["合作方式", "直接对应项目入口", "内容合作、创作者连接、AI 工作流共创都可以从项目站点或联系方式开始。", matrixEngines[0].color]
              ].map(([eyebrow, title, description, color]) => (
                <div
                  key={title}
                  className="neon-panel p-5"
                  style={{ "--panel-color": color } as CSSProperties}
                >
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300/80">
                    {eyebrow}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-slate-50">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="neon-panel space-y-4 p-5 text-sm text-slate-300"
            style={{ "--panel-color": matrixEngines[2].color } as CSSProperties}
          >
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                  统一社会信用代码
                </span>
                <CopyButton value={company.creditCode} label="信用代码" />
              </div>
              <div className="mt-2 break-all font-mono text-sm text-slate-100">
                {company.creditCode}
              </div>
              <a
                href={creditCheckUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-block text-xs text-cyan-300 hover:text-cyan-200"
              >
                到国家企业信用信息公示系统核验 →
              </a>
            </div>

            <div className="border-t border-white/5 pt-4">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                  企业地址
                </span>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-slate-200 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-200"
                >
                  地图
                </a>
              </div>
              <div className="mt-2 leading-6 text-slate-100">
                {company.address}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="anchor-section section">
        <div className="container-main space-y-8">
          <SectionHeader
            eyebrow="合作 · 联系入口"
            title="围绕技术内容、创作者网络和 AI 工作流展开合作"
            description="如果你希望触达开发者、共创技术内容、连接创作者，或一起验证 AI 工具在真实工作流中的落地方式，可以从这里开始。"
          />

          <div className="grid gap-5 md:grid-cols-3">
            {cooperationTracks.map((track, index) => (
              <div
                key={track.title}
                className="neon-panel p-5"
                style={{
                  "--panel-color": [matrixEngines[1].color, matrixEngines[0].color, matrixEngines[5].color][index]
                } as CSSProperties}
              >
                <h3 className="text-lg font-semibold text-slate-50">
                  {track.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {track.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.75fr)]">
            <div
              className="neon-panel p-5 sm:p-6"
              style={{ "--panel-color": matrixEngines[2].color } as CSSProperties}
            >
              <h3 className="text-xl font-semibold text-slate-50">
                联系方式
              </h3>
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
                  <span className="ml-2 inline-block">
                    <CopyButton value={company.wechat} label="微信号" />
                  </span>
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

            {liveProjects[0] && (
              <a
                href={liveProjects[0].url}
                target="_blank"
                rel="noreferrer"
                className="neon-panel block p-5 transition hover:-translate-y-1 sm:p-6"
                style={{ "--panel-color": matrixEngines[0].color } as CSSProperties}
              >
                <div className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                  Creator Network
                </div>
                <h3 className="mt-3 text-xl font-semibold text-slate-50">
                  创作者合作从博主联盟开始
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  技术创作者、品牌方或社区项目可以先查看博主联盟的介绍和申请方式。
                </p>
                <div className="mt-5 text-sm text-cyan-300">前往博主联盟 →</div>
              </a>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
