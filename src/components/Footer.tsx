import React from 'react';
import { sound } from '../utils/sound';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#050506] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          {/* Brand & Manifesto (col-span-5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white flex items-center gap-2">
              <span>MOTION HOUSE</span>
              <span className="text-xs text-[#D4FF00] font-mono-code font-normal">®</span>
            </div>
            <p className="text-zinc-400 text-sm font-sans max-w-sm leading-relaxed">
              High-end urban athletic club mixed with a technical streetwear atelier. Built for movement. Made for progress.
            </p>
            <div className="text-xs font-mono-code text-[#D4FF00] tracking-widest uppercase">
              EST. 2024 · TOKYO · BERLIN · LONDON · NYC
            </div>
          </div>

          {/* Navigation Mirrors (col-span-4) */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6 text-xs font-mono-code uppercase tracking-wider">
            <div>
              <div className="text-zinc-500 mb-3 font-bold">DISCIPLINES</div>
              <ul className="space-y-2 text-zinc-400">
                <li><a href="#manifesto" onClick={() => sound.playClick()} className="hover:text-white transition-colors">Kinetic Strength</a></li>
                <li><a href="#manifesto" onClick={() => sound.playClick()} className="hover:text-white transition-colors">Anaerobic Engine</a></li>
                <li><a href="#manifesto" onClick={() => sound.playClick()} className="hover:text-white transition-colors">Combat Conditioning</a></li>
                <li><a href="#sanctuary" onClick={() => sound.playClick()} className="hover:text-white transition-colors">Thermal Sanctuary</a></li>
              </ul>
            </div>
            <div>
              <div className="text-zinc-500 mb-3 font-bold">ATELIER & HOUSES</div>
              <ul className="space-y-2 text-zinc-400">
                <li><a href="#capsule" onClick={() => sound.playClick()} className="hover:text-white transition-colors">Capsule 04 Drop</a></li>
                <li><a href="#houses" onClick={() => sound.playClick()} className="hover:text-white transition-colors">Tokyo Bunker</a></li>
                <li><a href="#houses" onClick={() => sound.playClick()} className="hover:text-white transition-colors">Berlin Boiler</a></li>
                <li><a href="#membership" onClick={() => sound.playClick()} className="hover:text-white transition-colors">Admission Protocol</a></li>
              </ul>
            </div>
          </div>

          {/* House Policy & Vetting Notice (col-span-3) */}
          <div className="md:col-span-3 text-xs font-mono-code text-zinc-400 space-y-3">
            <div className="text-zinc-500 font-bold uppercase tracking-wider">ETHOS</div>
            <p className="leading-relaxed">
              No sponsored influencers. No unauthorized videography on the training floor. Respect the space and respect the work.
            </p>
            <div className="pt-2 text-[11px] text-zinc-500">
              MEMBER RELATIONS: <span className="text-zinc-300">CONCIERGE@MOTIONHOUSE.CLUB</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-zinc-500">
          <div>
            © {new Date().getFullYear()} MOTION HOUSE ATHLETIC CLUB LTD. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-zinc-300 transition-colors cursor-pointer">PRIVACY PROTOCOL</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-zinc-300 transition-colors cursor-pointer">HOUSE BYLAWS</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-zinc-300 transition-colors cursor-pointer">TERMS OF ENTRY</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
