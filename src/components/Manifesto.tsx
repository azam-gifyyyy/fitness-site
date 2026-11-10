import React, { useState } from 'react';
import { sound } from '../utils/sound';
import { Zap, Activity, Flame, Shield, ChevronRight } from 'lucide-react';
import deadliftImg from '../assets/images/training_strength_raw_1794312876162.jpg';

interface Modality {
  id: string;
  name: string;
  code: string;
  category: string;
  focus: string;
  rigs: string;
  duration: string;
  intensity: string;
  description: string;
}

const MODALITIES: Modality[] = [
  {
    id: 'power',
    name: 'Kinetic Velocity & Strength',
    code: 'MOD_01',
    category: 'Biomechanical Power',
    focus: 'Barbell Force Output · Olympic Bar Mechanics · Heavy Inertia',
    rigs: 'Custom Eleiko Competition Black Zinc Bars · calibrated steel plates',
    duration: '60 MIN HIGH DENSITY',
    intensity: 'RPE 9.0+',
    description: 'Stripped of trends and digital distraction. We apply progressive overload, rate of force development, and raw kinetic output to forge unbreakable functional horsepower.',
  },
  {
    id: 'conditioning',
    name: 'Anaerobic Engine & Threshold',
    code: 'MOD_02',
    category: 'Cardiovascular Grit',
    focus: 'Lactate Clearing · Ergometer Assaults · Sled Drags',
    rigs: 'Concept2 Skiergs · Custom Tank Sleds · Woodway Curve Treks',
    duration: '50 MIN BRUTAL TEMPO',
    intensity: 'MAX HEART RATE 88–95%',
    description: 'Pushing the anaerobic boundary. High-output metabolic intervals programmed to heighten cardiovascular ceiling, muscular endurance, and mental composure under acute fatigue.',
  },
  {
    id: 'combat',
    name: 'Underground Striking & Calisthenics',
    code: 'MOD_03',
    category: 'Combat Mechanics',
    focus: 'Heavy Bag Rotational Power · Footwork · Ring Gymnastics',
    rigs: 'Fairtex Heavy Teardrop Bags · Solid Wood Gymnastic Rings',
    duration: '55 MIN FLUID EXPLOSION',
    intensity: 'HIGH DYNAMIC IMPACT',
    description: 'Precision striking drills combined with strict bodyweight calisthenics. Build devastating rotational torque, core resilience, and spatial awareness.',
  },
  {
    id: 'restoration',
    name: 'Structural Alignment & Mobility',
    code: 'MOD_04',
    category: 'Biomechanics',
    focus: 'Hip Capsule Decompression · Thoracic Rotation · Tendon Loading',
    rigs: 'Banded Rig Decompression · Indian Clubs · Slant Boards',
    duration: '45 MIN DEEP FOCUS',
    intensity: 'RESTORATIVE RECALIBRATION',
    description: 'The foundation that allows extreme output. Restoring joint capacity, myofascial release, and structural stability so you can train with zero compromise year-round.',
  },
];

export const Manifesto: React.FC = () => {
  const [activeModality, setActiveModality] = useState<Modality>(MODALITIES[0]);

  return (
    <section id="manifesto" className="relative w-full py-24 md:py-36 bg-[#080808] border-b border-white/10 overflow-hidden">
      {/* Background subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header with Oversized Number */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10 mb-16">
          <div className="flex items-start gap-6">
            <span className="font-display text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#D4FF00] to-zinc-700 leading-none select-none">
              01
            </span>
            <div>
              <div className="text-xs font-mono-code text-[#D4FF00] tracking-[0.25em] uppercase mb-2">
                THE MANIFESTO & DISCIPLINES
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight text-white">
                WE DO NOT DO ROUTINES. <br />
                <span className="text-zinc-400">WE ENGINEER CAPABILITY.</span>
              </h2>
            </div>
          </div>

          <div className="text-left md:text-right max-w-sm">
            <p className="text-xs font-mono-code text-zinc-400 uppercase tracking-widest leading-relaxed">
              NO CELEBRITY MIRRORS · NO FLUORESCENT BULBS · NO REPETITIVE APPS
            </p>
            <div className="mt-3 text-xs text-zinc-500">
              Every square meter is calibrated for purposeful biomechanics, sensory focus, and uncompromising training standards.
            </div>
          </div>
        </div>

        {/* Dynamic Asymmetric Layout: Image Overlap + Interactive Modalities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Creative Image Overlap with Technical Metadata (col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative group overflow-hidden border border-white/15 bg-zinc-950">
              {/* High-contrast deadlift athlete photo */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={deadliftImg}
                  alt="Motion House athlete lifting heavy barbell with chalk explosion"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter grayscale contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
                
                {/* Visual crop angle accent badge */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm border border-[#D4FF00]/40 px-3 py-1.5 text-[11px] font-mono-code text-[#D4FF00] uppercase tracking-wider">
                  RAW CHAMBER · SECTOR B
                </div>

                {/* Bottom photo overlay spec */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#080808]/90 backdrop-blur-md p-4 border border-white/10">
                  <div className="flex items-center justify-between text-xs font-mono-code text-zinc-400 mb-1">
                    <span>RECORDED FORCE</span>
                    <span className="text-[#D4FF00]">220 KG DEADLIFT</span>
                  </div>
                  <div className="text-xs text-zinc-300 font-sans">
                    Captured on 35mm monochrome stock inside the East Vault. High velocity, zero momentum bleed.
                  </div>
                </div>
              </div>
            </div>

            {/* Micro proof bar below the image */}
            <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="font-display text-2xl font-bold text-white">1,200</div>
                <div className="text-[10px] font-mono-code text-zinc-500 uppercase tracking-wider">SQM ARENA</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-[#D4FF00]">100%</div>
                <div className="text-[10px] font-mono-code text-zinc-500 uppercase tracking-wider">CUSTOM STEEL</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-white">0</div>
                <div className="text-[10px] font-mono-code text-zinc-500 uppercase tracking-wider">GIMMICKS</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Modality Selector & Technical Breakdown (col-span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono-code tracking-[0.2em] text-zinc-400 uppercase">
                  SELECT TRAINING PROTOCOL
                </span>
                <span className="text-xs font-mono-code text-[#D4FF00]">
                  ACTIVE SPEC: {activeModality.code}
                </span>
              </div>

              {/* Modality selector buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {MODALITIES.map((mod) => {
                  const isActive = mod.id === activeModality.id;
                  return (
                    <button
                      key={mod.id}
                      onClick={() => {
                        sound.playClick();
                        setActiveModality(mod);
                      }}
                      className={`text-left p-4 transition-all duration-200 border cursor-pointer ${
                        isActive
                          ? 'bg-zinc-900 border-[#D4FF00] shadow-[0_0_20px_rgba(212,255,0,0.15)]'
                          : 'bg-zinc-950/60 border-white/10 hover:border-white/30 hover:bg-zinc-900/60'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-[10px] font-mono-code ${isActive ? 'text-[#D4FF00]' : 'text-zinc-500'}`}>
                          {mod.code}
                        </span>
                        <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-[#D4FF00] translate-x-1' : 'text-zinc-600'}`} />
                      </div>
                      <div className={`font-display text-lg font-bold tracking-tight uppercase ${isActive ? 'text-white' : 'text-zinc-300'}`}>
                        {mod.name}
                      </div>
                      <div className="text-xs text-zinc-500 mt-1">
                        {mod.category}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Detailed Active Modality Card */}
              <div className="p-6 md:p-8 bg-[#111113] border border-white/15 relative">
                {/* Accent corner tag */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#D4FF00]" />

                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
                  <div>
                    <span className="text-[11px] font-mono-code text-[#D4FF00] tracking-widest uppercase">
                      BIOMECHANICAL BRIEF
                    </span>
                    <h3 className="font-display text-3xl font-bold uppercase text-white mt-1">
                      {activeModality.name}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono-code text-zinc-400 block">{activeModality.duration}</span>
                    <span className="text-xs font-mono-code text-[#D4FF00] font-bold block">{activeModality.intensity}</span>
                  </div>
                </div>

                <p className="text-zinc-300 font-sans text-sm md:text-base leading-relaxed py-6">
                  {activeModality.description}
                </p>

                {/* Specs breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs">
                  <div>
                    <span className="text-zinc-500 font-mono-code uppercase block mb-1">PRIMARY PHYSIOLOGY</span>
                    <span className="text-zinc-200 font-medium">{activeModality.focus}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 font-mono-code uppercase block mb-1">EQUIPMENT ALLOCATION</span>
                    <span className="text-zinc-200 font-medium">{activeModality.rigs}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Statement */}
            <div className="flex items-center justify-between gap-4 p-4 border border-zinc-800 bg-black/40 text-xs font-mono-code text-zinc-400">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#D4FF00]" />
                MAX 8 ATHLETES PER SPRINT SESSION
              </span>
              <span className="text-zinc-500">COACH DIRECTED ONLY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
