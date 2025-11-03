const games = [
  {
    title: 'Neon Drift',
    tag: 'Arcade',
    gradient: 'from-fuchsia-600 via-violet-600 to-indigo-600',
  },
  {
    title: 'Skyforge Arena',
    tag: 'PVP',
    gradient: 'from-amber-500 via-pink-500 to-rose-600',
  },
  {
    title: 'Echoes of Orion',
    tag: 'Adventure',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
  },
  {
    title: 'Void Runner',
    tag: 'Rogue‑Lite',
    gradient: 'from-sky-500 via-blue-600 to-indigo-700',
  },
];

export default function GamesShowcase() {
  return (
    <section id="games" className="relative w-full bg-[#090013] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Featured Worlds</h2>
            <p className="mt-2 max-w-2xl text-sm text-white/70">
              Dive into hand‑picked experiences crafted by top creators.
            </p>
          </div>
          <a href="#" className="hidden sm:inline-flex text-sm text-fuchsia-300 hover:text-fuchsia-200">See all</a>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {games.map((g) => (
            <article
              key={g.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className={`h-40 bg-gradient-to-br ${g.gradient}`} />
              <div className="p-4">
                <span className="inline-flex items-center rounded-full bg-white/10 px-2 py-1 text-xs text-white/80 ring-1 ring-white/10">
                  {g.tag}
                </span>
                <h3 className="mt-3 text-white font-semibold">{g.title}</h3>
                <p className="mt-1 text-sm text-white/70">
                  Fast‑paced action with stunning visuals and deep progression.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <button className="rounded-md bg-white/10 px-3 py-2 text-sm text-white/90 ring-1 ring-white/15 hover:bg-white/15">
                    Play
                  </button>
                  <a href="#" className="text-sm text-fuchsia-300 hover:text-fuchsia-200">
                    Details
                  </a>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
