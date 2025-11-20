import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden pt-20">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradients */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950/90" />
      <div className="pointer-events-none absolute -inset-x-20 -bottom-32 h-64 blur-3xl opacity-50" style={{ background: 'radial-gradient(60% 60% at 50% 40%, rgba(139,92,246,0.45) 0%, rgba(56,189,248,0.25) 40%, transparent 70%)' }} />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 text-xs text-slate-200">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Now booking Q1 builds</span>
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white leading-tight">
            Futuristic Software Engineering, built for ambitious teams
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-slate-300">
            We design, architect, and ship resilient platforms — from prototypes to planet-scale systems. Partner with a team that blends craft, speed, and reliability.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 font-medium px-5 py-3 hover:bg-slate-100 transition">
              Start your project
            </a>
            <a href="#work" className="inline-flex items-center justify-center rounded-lg bg-white/10 text-white font-medium px-5 py-3 hover:bg-white/20 transition border border-white/10">
              View our work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
