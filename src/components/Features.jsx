import { Trophy, Users, Shield, Gamepad2 } from 'lucide-react';

const features = [
  {
    title: 'Next‑Gen Gameplay',
    desc: 'Ultra‑smooth performance and immersive 3D worlds powered by cutting‑edge tech.',
    Icon: Gamepad2,
    color: 'from-fuchsia-500/20 to-indigo-500/20',
  },
  {
    title: 'Competitive Ladders',
    desc: 'Rise through seasonal leaderboards and unlock exclusive rewards.',
    Icon: Trophy,
    color: 'from-amber-500/20 to-pink-500/20',
  },
  {
    title: 'Guilds & Parties',
    desc: 'Create clans, team up with friends, and conquer raids together.',
    Icon: Users,
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    title: 'Safe & Secure',
    desc: 'Encrypted profiles, protected payments, and anti‑cheat systems.',
    Icon: Shield,
    color: 'from-sky-500/20 to-cyan-500/20',
  },
];

export default function Features() {
  return (
    <section className="relative w-full bg-[#090013] py-16 sm:py-20" id="community">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Built for Players</h2>
            <p className="mt-2 max-w-2xl text-sm text-white/70">
              Everything you need to discover, compete, and connect in a vibrant gaming world.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, desc, Icon, color }) => (
            <div
              key={title}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:shadow-[0_0_0_1px_rgba(255,255,255,0.15)]`}
            >
              <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-br ${color} opacity-0 blur-xl transition group-hover:opacity-100 pointer-events-none`} />
              <div className="relative">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-white font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
