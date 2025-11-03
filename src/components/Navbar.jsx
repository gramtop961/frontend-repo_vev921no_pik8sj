import { useState } from 'react';
import { Menu, X, Gamepad2 } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: 'Home', href: '#' },
    { name: 'Games', href: '#games' },
    { name: 'Community', href: '#community' },
    { name: 'Support', href: '#support' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-white">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-purple-600/20 ring-1 ring-purple-400/30">
              <Gamepad2 className="h-5 w-5 text-purple-300" />
            </div>
            <span className="font-semibold tracking-wide">GameVerse</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.name} href={l.href} className="text-sm text-white/80 hover:text-white transition-colors">
                {l.name}
              </a>
            ))}
            <a
              href="#get-started"
              className="inline-flex items-center rounded-md bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-fuchsia-700/30 hover:brightness-110 transition"
            >
              Sign In
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:text-white hover:bg-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="space-y-1 rounded-lg border border-white/10 bg-black/40 p-2">
              {links.map((l) => (
                <a
                  key={l.name}
                  href={l.href}
                  className="block rounded-md px-3 py-2 text-white/90 hover:bg-white/10"
                  onClick={() => setOpen(false)}
                >
                  {l.name}
                </a>
              ))}
              <a
                href="#get-started"
                className="mt-2 block rounded-md bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-3 py-2 text-center font-medium text-white"
                onClick={() => setOpen(false)}
              >
                Sign In
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
