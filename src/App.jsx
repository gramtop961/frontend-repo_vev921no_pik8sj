import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import GamesShowcase from './components/GamesShowcase.jsx';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Features />
        <GamesShowcase />
        <section id="support" className="bg-[#090013] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Ready to play?</h2>
            <p className="mt-3 text-white/70 max-w-2xl mx-auto">
              Jump into live worlds, meet your squad, and start your next adventure.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <a
                href="#get-started"
                className="inline-flex items-center rounded-md bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-700/30 transition hover:brightness-110"
              >
                Get Started
              </a>
              <a
                href="#community"
                className="inline-flex items-center rounded-md border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur hover:bg-white/10"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10 bg-black/60 py-8 text-center text-white/60">
        <p>© {new Date().getFullYear()} GameVerse. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
