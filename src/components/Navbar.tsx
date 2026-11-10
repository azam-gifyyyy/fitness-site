import React, { useState, useEffect } from 'react';
import { sound } from '../utils/sound';
import { ShoppingBag, Volume2, VolumeX } from 'lucide-react';

interface NavbarProps {
  onOpenMembership: () => void;
  onOpenCart: () => void;
  cartCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenMembership,
  onOpenCart,
  cartCount,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleSound = () => {
    const isEnabled = sound.toggle();
    setSoundOn(isEnabled);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080808]/95 backdrop-blur-md border-b border-white/10 py-3.5'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark in condensed display face */}
        <a
          href="#"
          onClick={() => sound.playClick()}
          className="font-display text-2xl md:text-3xl font-bold tracking-tight text-white hover:text-[#D4FF00] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
        >
          <span>MOTION HOUSE</span>
          <span className="text-[10px] text-[#D4FF00] tracking-widest uppercase font-mono-code -mt-3">®</span>
        </a>

        {/* Zone 2: 4-5 single-line clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
          <a
            href="#manifesto"
            onClick={() => sound.playClick()}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:text-[#D4FF00]"
          >
            Philosophy
          </a>
          <a
            href="#sanctuary"
            onClick={() => sound.playClick()}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:text-[#D4FF00]"
          >
            Sanctuary
          </a>
          <a
            href="#capsule"
            onClick={() => sound.playClick()}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:text-[#D4FF00]"
          >
            Capsule 04
          </a>
          <a
            href="#houses"
            onClick={() => sound.playClick()}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:text-[#D4FF00]"
          >
            Global Houses
          </a>
          <a
            href="#membership"
            onClick={() => sound.playClick()}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:text-[#D4FF00]"
          >
            Membership
          </a>
        </nav>

        {/* Zone 3: 1 primary action + audio & drop cart triggers */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={handleToggleSound}
            aria-label="Toggle sound feedback"
            title={soundOn ? 'Sound feedback active' : 'Enable tactile audio'}
            className="text-zinc-400 hover:text-white transition-colors p-2 text-xs font-mono-code flex items-center gap-1.5"
          >
            {soundOn ? (
              <>
                <Volume2 className="w-4 h-4 text-[#D4FF00]" />
                <span className="hidden sm:inline text-[11px] text-[#D4FF00]">AUDIO ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-zinc-500" />
                <span className="hidden sm:inline text-[11px] text-zinc-500">MUTE</span>
              </>
            )}
          </button>

          <button
            onClick={() => {
              sound.playClick();
              onOpenCart();
            }}
            className="relative p-2 text-zinc-300 hover:text-white transition-colors flex items-center justify-center"
            aria-label="Open Streetwear Drop Bag"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#D4FF00] text-black font-mono-code font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => {
              sound.playImpact();
              onOpenMembership();
            }}
            className="group relative overflow-hidden bg-white hover:bg-[#D4FF00] text-black font-display font-bold text-sm tracking-wider uppercase px-5 py-2.5 transition-all duration-200 whitespace-nowrap shrink-0 hover:shadow-[0_0_24px_rgba(212,255,0,0.35)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Apply For Access
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
