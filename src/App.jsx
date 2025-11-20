import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-fuchsia-500/30 selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} NovaStack Labs. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#work" className="hover:text-white">Case Studies</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
