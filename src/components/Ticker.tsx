import React from 'react';

const TICKER_ITEMS = [
  'MOVE DIFFERENT',
  'RAW RESISTANCE',
  'TECHNICAL ATHLETICISM',
  'CRYOGENIC RECOVERY',
  'CAPSULE 04 LIVE NOW',
  'UNCOMPROMISED FORM',
  'UNDERGROUND ATHLETIC CLUB',
  '500 GSM FRENCH TERRY',
  '4°C BASALT PLUNGE',
  'NO GIMMICKS',
  'ENGINEERED DISCIPLINE',
];

export const Ticker: React.FC = () => {
  return (
    <div className="relative w-full bg-[#D4FF00] text-black overflow-hidden py-3 border-y border-black select-none z-20">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {/* Render sequence twice for continuous seamless loop */}
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 text-black">
            <span className="font-display font-bold text-lg md:text-2xl uppercase tracking-tighter">
              {item}
            </span>
            <span className="w-2 h-2 bg-black rotate-45 shrink-0" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  );
};
