import { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "首页" },
  { to: "/about", label: "关于我们" },
  { to: "/projects", label: "项目矩阵" },
  { to: "/ecosystem", label: "AI 生态" },
  { to: "/blog", label: "博客" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/55 backdrop-blur-xl">
        <div className="container-main flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500/80 via-sky-500/80 to-indigo-500/80 shadow-lg shadow-cyan-500/30">
              <div className="h-4 w-4 rounded-[0.7rem] border border-teal-100/70 bg-slate-950/60" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-[0.18em] text-slate-200 uppercase">
                MatrixLinkTech
              </div>
              <div className="text-[11px] text-slate-400">
                矩阵联合 科创技联 传播技术 相信价值
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  (isActive ? "nav-link-active" : "nav-link") +
                  " relative px-1 py-1"
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute inset-x-1 -bottom-1 h-px rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <div className="badge-soft">
              <span className="contact-indicator mr-1.5" />
              联系我们：请添加微信 atar24
            </div>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/70 p-2 text-slate-200 hover:bg-slate-800/80 focus-ring md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="切换导航"
          >
            <span className="sr-only">打开导航</span>
            <div className="space-y-1">
              <span className="block h-0.5 w-4 rounded-full bg-slate-200" />
              <span className="block h-0.5 w-3.5 rounded-full bg-slate-400" />
            </div>
          </button>
        </div>

        {open && (
          <div className="border-t border-white/10 bg-slate-950/75 backdrop-blur-xl md:hidden">
            <nav className="container-main flex flex-col gap-1 py-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    (isActive
                      ? "nav-link-active bg-slate-900/70"
                      : "nav-link hover:bg-slate-900/40") +
                    " rounded-lg px-3 py-2"
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="mt-3 flex flex-wrap gap-2">
                <div className="badge-soft">
                  <span className="contact-indicator mr-1.5" />
                  联系我们：请添加微信 atar24
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
    
  );
}
