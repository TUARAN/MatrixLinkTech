import { useEffect, useRef, useState } from "react";

const navItems = [
  { href: "#home", label: "首页" },
  { href: "#matrix", label: "矩阵" },
  { href: "#projects", label: "项目" },
  { href: "#updates", label: "动态" },
  { href: "#about", label: "关于" },
  { href: "#contact", label: "合作" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");
  const manualActive = useRef(false);
  const manualActiveTimer = useRef<number | null>(null);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is HTMLElement => section instanceof HTMLElement);

    const observer = new IntersectionObserver(
      (entries) => {
        if (manualActive.current) {
          return;
        }

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveHash(`#${visible.target.id}`);
        }
      },
      {
        rootMargin: "-18% 0px -68% 0px",
        threshold: [0.08, 0.18, 0.32]
      }
    );

    sections.forEach((section) => observer.observe(section));

    const syncHash = () => {
      if (window.location.hash) {
        setActiveHash(window.location.hash);
      }
    };
    syncHash();
    window.addEventListener("hashchange", syncHash);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", syncHash);
      if (manualActiveTimer.current) {
        window.clearTimeout(manualActiveTimer.current);
      }
    };
  }, []);

  const handleNavClick = (href: string) => {
    manualActive.current = true;
    if (manualActiveTimer.current) {
      window.clearTimeout(manualActiveTimer.current);
    }
    manualActiveTimer.current = window.setTimeout(() => {
      manualActive.current = false;
    }, 900);
    setActiveHash(href);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/55 backdrop-blur-xl">
      <div className="container-main flex h-16 items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-3" aria-label="返回首页">
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
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="页面锚点导航">
          {navItems.map((item) => {
            const isActive = activeHash === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={(isActive ? "nav-link-active" : "nav-link") + " relative px-1 py-1"}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute inset-x-1 -bottom-1 h-px rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500" />
                )}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a href="#contact" onClick={() => handleNavClick("#contact")} className="badge-soft">
            <span className="contact-indicator mr-1.5" />
            联系：微信 atar24
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/70 p-2 text-slate-200 hover:bg-slate-800/80 focus-ring md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="切换导航"
          aria-expanded={open}
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
          <nav className="container-main flex flex-col gap-1 py-3" aria-label="移动端页面锚点导航">
            {navItems.map((item) => {
              const isActive = activeHash === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={
                    (isActive
                      ? "nav-link-active bg-slate-900/70"
                      : "nav-link hover:bg-slate-900/40") + " rounded-lg px-3 py-2"
                  }
                >
                  {item.label}
                </a>
              );
            })}
            <div className="mt-3 flex flex-wrap gap-2">
              <a href="#contact" onClick={() => handleNavClick("#contact")} className="badge-soft">
                <span className="contact-indicator mr-1.5" />
                联系：微信 atar24
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
