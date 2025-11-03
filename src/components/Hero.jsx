import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-black via-[#0b0116] to-[#090013]">
      {/* Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/jQwvQSncGp8maF9S/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft glow overlay that does not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(168,85,247,0.15),_transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-4 text-center text-white">
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-fuchsia-300/80">Playful • Interactive • Immersive</p>
        <h1 className="max-w-3xl bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl md:text-6xl">
          Level Up Your Gaming Universe
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          Discover futuristic worlds, join epic communities, and play the latest interactive experiences—all in one place.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#games"
            className="inline-flex items-center rounded-md bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-700/30 transition hover:brightness-110"
          >
            Explore Games
          </a>
          <a
            href="#community"
            className="inline-flex items-center rounded-md border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur hover:bg-white/10"
          >
            Join Community
          </a>
        </div>
      </div>

      {/* bottom gradient edge - doesn't block interactions */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#090013] to-transparent" />
    </section>
  );
}
