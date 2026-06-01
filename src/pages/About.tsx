import { useState } from "react";
import { Link } from "react-router-dom";
import { company } from "../data/site";

const creditCheckUrl =
  "https://www.gsxt.gov.cn/index.html";

const mapUrl = `https://uri.amap.com/marker?name=${encodeURIComponent(
  company.name
)}&src=${encodeURIComponent(company.name)}&coordinate=gaode&callnative=0`;

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

export function AboutPage() {
  const sloganParts = company.slogan.split(/\s+/).filter(Boolean);

  return (
    <main className="flex-1 bg-transparent">
      <section className="section">
        <div className="container-main grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.85fr)]">
          <div className="space-y-5">
            <p className="badge-soft text-[11px]">关于 · 公司信息</p>
            <h1 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
              {company.name}
            </h1>
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
          </div>

          <div className="glass-card space-y-4 p-5 text-sm text-slate-300">
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

            <div className="border-t border-white/5 pt-4">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                  联系邮箱
                </span>
                <CopyButton value={company.email} label="邮箱" />
              </div>
              <a
                href={`mailto:${company.email}`}
                className="mt-2 inline-block text-sm text-cyan-300 hover:text-cyan-200"
              >
                {company.email}
              </a>
            </div>

            <div className="border-t border-white/5 pt-4">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                  微信
                </span>
                <CopyButton value={company.wechat} label="微信号" />
              </div>
              <div className="mt-2 font-mono text-sm text-slate-100">
                {company.wechat}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-main grid gap-5 md:grid-cols-3">
          <div className="glass-card space-y-3 p-5 sm:p-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300/80">
              业务方向
            </p>
            <h2 className="text-lg font-semibold text-slate-50">
              内容 · 网络 · 工作流
            </h2>
            <p className="text-sm leading-6 text-slate-300">
              围绕技术内容生产、创作者网络运营、AI 工作流共创三条主线展开，所有方向都对应一个已上线或孵化中的项目。
            </p>
            <Link
              to="/projects"
              className="inline-block text-sm text-cyan-300 hover:text-cyan-200"
            >
              查看项目矩阵 →
            </Link>
          </div>
          <div className="glass-card space-y-3 p-5 sm:p-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300/80">
              内容来源
            </p>
            <h2 className="text-lg font-semibold text-slate-50">
              更新优先回到 2aran.com
            </h2>
            <p className="text-sm leading-6 text-slate-300">
              技术调研、项目记录、AI 工作流实验基本每天更新，公司动态与团队思考的长期沉淀都在这里。
            </p>
            <Link
              to="/updates"
              className="inline-block text-sm text-cyan-300 hover:text-cyan-200"
            >
              查看内容矩阵 →
            </Link>
          </div>
          <div className="glass-card space-y-3 p-5 sm:p-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300/80">
              合作方式
            </p>
            <h2 className="text-lg font-semibold text-slate-50">
              直接对应项目入口
            </h2>
            <p className="text-sm leading-6 text-slate-300">
              内容合作、创作者连接、AI 工作流共创三类需求都可以从对应项目站点或邮件 / 微信入口开始。
            </p>
            <Link
              to="/cooperation"
              className="inline-block text-sm text-cyan-300 hover:text-cyan-200"
            >
              查看合作入口 →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
