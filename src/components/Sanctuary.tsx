import React, { useState } from 'react';
import { sound } from '../utils/sound';
import { ThermometerSnowflake, Flame, SunMedium, Wind } from 'lucide-react';
import recoverySpaImg from '../assets/images/recovery_brutalist_spa_1794312875710.jpg';

interface Chamber {
  id: string;
  name: string;
  temperature: string;
  effect: string;
  biology: string;
  duration: string;
  details: string;
}

const CHAMBERS: Chamber[] = [
  {
    id: 'plunge',
    name: 'Sub-Zero Monolithic Basalt Plunge',
    temperature: '3.8°C / 38.8°F',
    effect: 'Acute Vasoconstriction & Norepinephrine Surge',
    biology: '+250% Dopamine elevation, rapid clearance of inflammatory cytokines',
    duration: '3–5 MIN REPEATED CYCLES',
    details: 'Carved from raw Italian basalt stone slabs with continuous recirculating laminar flow and particulate UV filtration. Unyielding thermal contrast that resets the central nervous system.',
  },
  {
    id: 'sauna',
    name: 'Brutalist Finnish Birch & Charcoal Sauna',
    temperature: '92.0°C / 197.6°F',
    effect: 'Heat Shock Protein Induction & Vasodilation',
    biology: 'Stimulates vascular endothelial growth factor (VEGF) and arterial elasticity',
    duration: '15–20 MIN PROTOCOL',
    details: 'Constructed from charred Siberian cedar and Swedish volcanic stones. Low-lux recessed linear illumination designed to induce meditative sensory deprivation.',
  },
  {
    id: 'infrared',
    name: 'Full-Spectrum Photobiomodulation Suite',
    temperature: '660nm & 850nm',
    effect: 'Mitochondrial ATP Synthesis Amplification',
    biology: 'Direct cytochrome c oxidase stimulation accelerating muscular micro-repair',
    duration: '20 MIN DIRECT EXPOSURE',
    details: 'Medical-grade dual-wavelength light arrays calibrated for deep tissue and collagen matrix regeneration after heavy spinal and skeletal loading.',
  },
  {
    id: 'hyperbaric',
    name: 'Mild Hyperbaric Oxygen Chambers (1.5 ATA)',
    temperature: '100% O₂ ENRICHED',
    effect: 'Plasma Oxygen Dissolution & Hypoxic Rebound',
    biology: 'Delivers hyper-concentrated cellular oxygen to poorly vascularized cartilage and tendons',
    duration: '45 MIN PRESSURIZED SESSION',
    details: 'Soft-shell sub-level pods engineered for rapid post-competition recovery, reducing systemic soreness and restoring cognitive focus.',
  },
];

export const Sanctuary: React.FC = () => {
  const [activeChamber, setActiveChamber] = useState<Chamber>(CHAMBERS[0]);

  return (
    <section id="sanctuary" className="relative w-full py-24 md:py-36 bg-[#0B0B0D] border-b border-white/10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* Section Header with Oversized Number */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10 mb-16">
          <div className="flex items-start gap-6">
            <span className="font-display text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#D4FF00] to-zinc-700 leading-none select-none">
              02
            </span>
            <div>
              <div className="text-xs font-mono-code text-[#D4FF00] tracking-[0.25em] uppercase mb-2">
                CELLULAR REGENERATION & HYDROTHERAPY
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight text-white">
                THE UNDERGROUND <br />
                <span className="text-zinc-400">RECOVERY SANCTUARY</span>
              </h2>
            </div>
          </div>

          <div className="text-left md:text-right max-w-sm">
            <p className="text-xs font-mono-code text-zinc-400 uppercase tracking-widest leading-relaxed">
              RAW BASALT · ACOUSTIC ISOLATION · THERMAL CONTRAST
            </p>
            <div className="mt-3 text-xs text-zinc-500">
              Output is worthless without adaptation. Our recovery floor is an engineered brutalist haven for physiological recalibration.
            </div>
          </div>
        </div>

        {/* Full-width Panoramic Basalt Spa Photo Showcase */}
        <div className="relative mb-12 border border-white/15 overflow-hidden group bg-black">
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
            <img
              src={recoverySpaImg}
              alt="Motion House underground monolithic basalt stone cold plunge pools and linear ambient light"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter brightness-95 contrast-110 group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            {/* Scrims */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />

            {/* Corner architectural stamps */}
            <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-md px-4 py-2 border border-white/15 text-xs font-mono-code text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-[#D4FF00]" />
              <span>SUB-TERRAIN VAULT 03 · THERMAL ARC</span>
            </div>

            <div className="hidden sm:flex absolute bottom-6 right-6 bg-black/80 backdrop-blur-md px-4 py-2 border border-white/15 text-xs font-mono-code text-zinc-300 items-center gap-3">
              <span>WATER FLOW: CONTINUOUS LAMINAR</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-[#D4FF00]">TEMPERATURE: 3.8°C</span>
            </div>
          </div>
        </div>

        {/* Chamber Details & Interactive Thermal Switcher */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Chamber buttons (col-span-5) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono-code text-zinc-400 uppercase tracking-widest mb-2">
              CHAMBERS & MODES
            </div>
            {CHAMBERS.map((ch) => {
              const isSelected = ch.id === activeChamber.id;
              return (
                <button
                  key={ch.id}
                  onClick={() => {
                    sound.playClick();
                    setActiveChamber(ch);
                  }}
                  className={`w-full text-left p-5 transition-all duration-200 border cursor-pointer ${
                    isSelected
                      ? 'bg-zinc-900 border-[#D4FF00] shadow-[0_0_20px_rgba(212,255,0,0.12)]'
                      : 'bg-zinc-950 border-white/10 hover:border-white/25 hover:bg-zinc-900/40'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono-code mb-1">
                    <span className={isSelected ? 'text-[#D4FF00]' : 'text-zinc-500'}>
                      {ch.id.toUpperCase()}
                    </span>
                    <span className="font-mono-code text-zinc-400 tabular-nums">
                      {ch.temperature}
                    </span>
                  </div>
                  <div className={`font-display text-xl font-bold uppercase tracking-tight ${isSelected ? 'text-white' : 'text-zinc-300'}`}>
                    {ch.name}
                  </div>
                  <div className="text-xs text-zinc-500 mt-1 line-clamp-1">
                    {ch.effect}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Chamber Technical Profile (col-span-7) */}
          <div className="lg:col-span-7 bg-[#111113] p-8 border border-white/15">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div>
                <span className="text-xs font-mono-code text-[#D4FF00] uppercase tracking-widest">
                  ENGINEERED ENVIRONMENT
                </span>
                <h3 className="font-display text-3xl md:text-4xl font-bold uppercase text-white mt-1">
                  {activeChamber.name}
                </h3>
              </div>
              <div className="text-right">
                <span className="font-mono-code text-xl md:text-2xl font-bold text-[#D4FF00] block tabular-nums">
                  {activeChamber.temperature}
                </span>
                <span className="text-[10px] font-mono-code text-zinc-500 uppercase">CALIBRATED STANDARD</span>
              </div>
            </div>

            <p className="text-zinc-300 font-sans text-base leading-relaxed mb-6">
              {activeChamber.details}
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-black/40 border border-white/5">
                <span className="text-zinc-400 font-mono-code uppercase">PRIMARY PHYSIOLOGICAL RESPONSE:</span>
                <span className="text-white font-medium">{activeChamber.effect}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-black/40 border border-white/5">
                <span className="text-zinc-400 font-mono-code uppercase">CELLULAR BIOMARKER IMPACT:</span>
                <span className="text-[#D4FF00] font-mono-code">{activeChamber.biology}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-black/40 border border-white/5">
                <span className="text-zinc-400 font-mono-code uppercase">RECOMMENDED REPETITION:</span>
                <span className="text-zinc-300 font-mono-code">{activeChamber.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
