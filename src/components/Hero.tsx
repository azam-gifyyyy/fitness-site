import React from 'react';
import { sound } from '../utils/sound';
import { ArrowDownRight, Compass, ShieldCheck } from 'lucide-react';
import heroAthleteImg from '../assets/images/hero_athlete_editorial_1794312875464.jpg';

interface HeroProps {
  onOpenMembership: () => void;
  onExploreCapsule: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenMembership, onExploreCapsule }) => {
  return (
    <section className="relative min-h-screen w-full flex items-end justify-start overflow-hidden pt-28 pb-16 md:pb-24">
      {/* Full-bleed cinematic athlete background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroAthleteImg}
          alt="Motion House elite athlete in explosive training motion inside concrete arena"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter grayscale-[15%] contrast-110 brightness-[85%] scale-100 md:scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Measured scrims and atmospheric lighting */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/90 via-[#080808]/40 to-transparent" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/80" />
      </div>

      {/* Editorial top micro-details */}
      <div className="absolute top-24 left-0 right-0 z-10 hidden sm:block">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex items-center justify-between text-[11px] font-mono-code tracking-[0.25em] text-zinc-400 uppercase">
          <div className="flex items-center gap-3">
            <span className="text-[#D4FF00]">MH-SPEC 04</span>
            <span aria-hidden="true" className="text-zinc-600">/</span>
            <span>HIGH PERFORMANCE PROTOCOL</span>
            <span aria-hidden="true" className="text-zinc-600">/</span>
            <span className="text-zinc-300">LIMITED ACCESS</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <Compass className="w-3.5 h-3.5 text-[#D4FF00]" />
              GLOBAL NETWORK: TYO · BER · LDN · NYC
            </span>
          </div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 md:px-10">
        <div className="max-w-4xl">
          {/* Editorial tag line */}
          <div className="flex items-center gap-3 text-xs md:text-sm font-mono-code text-[#D4FF00] tracking-[0.25em] uppercase mb-4">
            <span className="w-2 h-2 bg-[#D4FF00]" />
            <span>ATHLETIC CLUB & TECHNICAL ATELIER</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span className="text-zinc-300">FOUNDED ON DISCIPLINE</span>
          </div>

          {/* Hero Headline: Oversized Condensed Typography */}
          <h1 className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[11.5rem] leading-[0.88] font-bold tracking-tighter text-white uppercase mb-6 select-none">
            MOVE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#D4FF00]">
              DIFFERENT.
            </span>
          </h1>

          {/* Subheading & Editorial Narrative */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end pt-2">
            <div className="md:col-span-7">
              <p className="text-xl md:text-2xl font-light text-zinc-200 tracking-tight leading-relaxed mb-4">
                Built for movement. Made for progress.
              </p>
              <p className="text-sm md:text-base text-zinc-400 font-sans leading-relaxed max-w-xl">
                An underground sanctuary where elite human mechanics meet relentless streetwear culture. 
                Raw iron, contrast thermal recovery, and engineered apparel designed for those who refuse the standard.
              </p>
            </div>

            {/* CTAs and quick stats */}
            <div className="md:col-span-5 flex flex-col sm:flex-row md:flex-col gap-4">
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => {
                    sound.playImpact();
                    onOpenMembership();
                  }}
                  className="bg-[#D4FF00] hover:bg-[#bbf400] text-black font-display font-bold text-base tracking-wider uppercase px-7 py-4 transition-all duration-200 flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(212,255,0,0.25)] hover:shadow-[0_0_40px_rgba(212,255,0,0.45)] cursor-pointer"
                >
                  <span>Apply For Membership</span>
                  <ArrowDownRight className="w-5 h-5 text-black" />
                </button>

                <button
                  onClick={() => {
                    sound.playClick();
                    onExploreCapsule();
                  }}
                  className="border border-white/30 hover:border-[#D4FF00] bg-black/40 backdrop-blur-sm text-white hover:text-[#D4FF00] font-display font-bold text-base tracking-wider uppercase px-6 py-4 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Capsule 04 Drop</span>
                  <span className="text-xs font-mono-code text-[#D4FF00]">[LIMITED]</span>
                </button>
              </div>

              {/* Sub-kicker metadata */}
              <div className="flex items-center gap-4 text-xs font-mono-code text-zinc-500 pt-2 border-t border-white/10">
                <span className="flex items-center gap-1.5 text-zinc-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4FF00]" />
                  250 MEMBERS / HOUSE CAP
                </span>
                <span aria-hidden="true">·</span>
                <span>NO PUBLIC DROP RESTOCKS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative vertical coordinates watermark / side label */}
      <div className="hidden xl:block absolute right-10 bottom-24 z-10 origin-bottom-right rotate-90 text-[11px] font-mono-code tracking-[0.3em] text-zinc-600 uppercase">
        MOTION HOUSE · EDITION IV // TOKYO · BERLIN · LONDON · NEW YORK
      </div>
    </section>
  );
};
