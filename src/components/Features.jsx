import { Code2, Cpu, Shield, Rocket } from "lucide-react";

const items = [
  {
    icon: Code2,
    title: "Full‑stack Craft",
    desc: "Elegant frontends, robust backends, and everything in between — designed for maintainability and speed.",
  },
  {
    icon: Cpu,
    title: "Scalable Systems",
    desc: "Cloud‑native architectures that autoscale, self‑heal, and monitor themselves.",
  },
  {
    icon: Shield,
    title: "Security by Design",
    desc: "Built‑in security reviews, threat modeling, and compliance‑ready workflows.",
  },
  {
    icon: Rocket,
    title: "Velocity & Reliability",
    desc: "Continuous delivery pipelines and rigorous testing keep you shipping confidently.",
  },
];

export default function Features() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(139,92,246,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Services</h2>
          <p className="mt-3 text-slate-300">From zero to production — and beyond.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-md hover:bg-slate-900/70 transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-fuchsia-500 to-indigo-500 text-white flex items-center justify-center shadow-lg shadow-fuchsia-500/20">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-white font-medium">{title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
