export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(56,189,248,0.1),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-10 backdrop-blur-md text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold text-white">Have an ambitious idea?</h3>
          <p className="mt-3 text-slate-300">Tell us about your goals and timeline — we’ll propose the most effective path to launch.</p>
          <form className="mt-8 grid sm:grid-cols-3 gap-3">
            <input className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="Your name" />
            <input className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="Email" type="email" />
            <button className="w-full rounded-lg bg-white text-slate-900 font-medium px-4 py-3 hover:bg-slate-100 transition">Request a call</button>
          </form>
        </div>
      </div>
    </section>
  );
}
