export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-slate-950/65 backdrop-blur-xl">
      <div className="container-main py-8 text-sm text-slate-400">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="font-medium text-slate-200">
              广州矩联科技有限公司 / MatrixLinkTech
            </div>
            <div className="mt-1 text-xs text-slate-500">
              矩阵联合 科创技联 传播技术 相信价值
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <span>统一社会信用代码：91440106MAK565BF7N</span>
              <button
                type="button"
                className="rounded-full border border-slate-700/80 px-2.5 py-1 text-slate-300 hover:text-white hover:border-slate-500/80"
                onClick={() => navigator.clipboard.writeText("91440106MAK565BF7N")}
              >
                复制
              </button>
            </div>
            <div className="mt-2 text-xs text-slate-500">
              企业地址：广州市天河区中山大道建中路5号3A03房W45室
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5">
              <span className="text-slate-500">友情链接</span>
              <a
                href="https://tuaran.me"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-cyan-300"
              >
                tuaran.me
              </a>
            </div>
            <span className="hidden h-3 w-px bg-slate-700/80 sm:inline-block" />
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-slate-500">联系方式</span>
              <a
                href="mailto:hello@matrixlink.tech"
                className="hover:text-slate-200"
              >
                邮箱
              </a>
              <a
                href="https://github.com/matrixlinktech"
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-200"
              >
                GitHub
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-200"
              >
                X
              </a>
            </div>
          </div>
        </div>
        <div className="mt-4 border-t border-slate-800/70 pt-4 text-xs text-slate-600">
          © {new Date().getFullYear()} 广州矩联科技有限公司（MatrixLinkTech）. 保留所有权利。
        </div>
      </div>
    </footer>
  );
}
