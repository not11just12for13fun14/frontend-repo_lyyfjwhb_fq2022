import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between rounded-xl border border-white/10 bg-slate-900/70 backdrop-blur-md px-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-fuchsia-500 to-indigo-500 shadow-lg shadow-fuchsia-500/30" />
            <span className="text-white font-semibold tracking-tight">NovaStack Labs</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a className="text-slate-300 hover:text-white transition" href="#services">Services</a>
            <a className="text-slate-300 hover:text-white transition" href="#work">Work</a>
            <a className="text-slate-300 hover:text-white transition" href="#about">About</a>
            <a className="text-slate-300 hover:text-white transition" href="#contact">Contact</a>
            <a className="inline-flex items-center rounded-lg bg-white/10 px-4 py-2 text-white hover:bg-white/20 transition border border-white/10" href="#contact">Get a quote</a>
          </nav>

          <button aria-label="Toggle menu" className="md:hidden text-white" onClick={() => setOpen(v => !v)}>
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile */}
      {open && (
        <div className="md:hidden mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-2">
          <div className="rounded-xl border border-white/10 bg-slate-900/80 backdrop-blur-md p-4 space-y-2">
            {[
              ["Services", "#services"],
              ["Work", "#work"],
              ["About", "#about"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a key={label} href={href} className="block text-slate-200 py-2 rounded-lg hover:bg-white/5">
                {label}
              </a>
            ))}
            <a href="#contact" className="block text-center rounded-lg bg-white/10 px-4 py-2 text-white hover:bg-white/20 transition border border-white/10">Get a quote</a>
          </div>
        </div>
      )}
    </header>
  );
}
