import React, { useState } from 'react';
import { sound } from '../utils/sound';
import { MapPin, Clock, Users, Disc3, Radio } from 'lucide-react';

interface House {
  id: string;
  city: string;
  country: string;
  district: string;
  coordinates: string;
  address: string;
  buildingType: string;
  hours: string;
  headCoach: string;
  soundSpec: string;
  capacity: string;
  curatorNote: string;
}

const HOUSES: House[] = [
  {
    id: 'tyo',
    city: 'TOKYO',
    country: 'JAPAN',
    district: 'SHIBUYA SUB-LEVEL 02',
    coordinates: '35.6580° N, 139.7016° E',
    address: 'B2F Concrete Vault, 1-18-2 Jinnan, Shibuya-ku',
    buildingType: 'Subterranean Earthquake-Dampened Vault',
    hours: '05:30 — 23:30 DAILY',
    headCoach: 'Kenji Sato (Olympic Weightlifting / Mobility)',
    soundSpec: 'Custom Void Acoustics Sub-Bass Arrays',
    capacity: '180 MEMBERS CAPPED',
    curatorNote: 'Carved beneath the sensory storm of Shibuya. A pitch-dark concrete bunker illuminated strictly by narrow 4000K linear diodes and natural stone reflections.',
  },
  {
    id: 'ber',
    city: 'BERLIN',
    country: 'GERMANY',
    district: 'KREUZBERG INDUSTRIAL',
    coordinates: '52.4986° N, 13.4180° E',
    address: 'Kraftwerk Annex, Köpenicker Str. 124',
    buildingType: '1960s Decommissioned Power Plant Hall',
    hours: '06:00 — 00:00 DAILY',
    headCoach: 'Marta Lindqvist (Kettlebell Sport & Anaerobic Engine)',
    soundSpec: 'Funktion-One Modular Resolution Audio',
    capacity: '200 MEMBERS CAPPED',
    curatorNote: 'Twelve-meter high ceilings of raw board-formed concrete. Industrial heavy iron rigs surrounded by winter cold plunge baths fed by deep geothermal wells.',
  },
  {
    id: 'ldn',
    city: 'LONDON',
    country: 'UNITED KINGDOM',
    district: 'SHOREDITCH ARCH 14',
    coordinates: '51.5235° N, 0.0786° W',
    address: 'Rail Arch 14, Holywell Lane, EC2A',
    buildingType: 'Victorian Vitrified Brick Railway Viaduct',
    hours: '06:00 — 23:00 DAILY',
    headCoach: 'Tariq Adeleke (Calisthenics & Powerlifting)',
    soundSpec: 'L-Acoustics Point Source Spatial Array',
    capacity: '160 MEMBERS CAPPED',
    curatorNote: 'Exposed dark Victorian brickwork, black powder-coated steel racks, and an underground recovery cave built into the viaduct foundations.',
  },
  {
    id: 'nyc',
    city: 'NEW YORK',
    country: 'UNITED STATES',
    district: 'LOWER EAST SIDE',
    coordinates: '40.7180° N, 73.9890° W',
    address: 'Sub-Level B, 142 Orchard Street',
    buildingType: 'Turn-of-the-Century Cold Storage Bunker',
    hours: '05:00 — 23:00 DAILY',
    headCoach: 'Chloe Vance (Sprint Mechanics & Hyrox Specialist)',
    soundSpec: 'Danley Sound Labs Subwoofer Matrix',
    capacity: '220 MEMBERS CAPPED',
    curatorNote: 'Discreet unmarked steel door on Orchard. Dual-lane indoor turf track, Eleiko competition platforms, and an infrared cellular therapy bar.',
  },
];

export const GlobalHouses: React.FC = () => {
  const [selectedHouse, setSelectedHouse] = useState<House>(HOUSES[0]);

  return (
    <section id="houses" className="relative w-full py-24 md:py-36 bg-[#0B0B0D] border-b border-white/10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* Section Header with Oversized Number */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10 mb-16">
          <div className="flex items-start gap-6">
            <span className="font-display text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#D4FF00] to-zinc-700 leading-none select-none">
              04
            </span>
            <div>
              <div className="text-xs font-mono-code text-[#D4FF00] tracking-[0.25em] uppercase mb-2">
                GLOBAL SANCTUARIES & HUBS
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight text-white">
                THE UNDERGROUND <br />
                <span className="text-zinc-400">NETWORK</span>
              </h2>
            </div>
          </div>

          <div className="text-left md:text-right max-w-sm">
            <p className="text-xs font-mono-code text-zinc-400 uppercase tracking-widest leading-relaxed">
              ONE KEYCARD · FOUR METROPOLITAN HOUSES
            </p>
            <div className="mt-3 text-xs text-zinc-500">
              Members hold universal reciprocal access to all Motion House facilities worldwide. Uncompromising standards wherever you land.
            </div>
          </div>
        </div>

        {/* Global Cities Selector Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {HOUSES.map((h) => {
            const isSelected = h.id === selectedHouse.id;
            return (
              <button
                key={h.id}
                onClick={() => {
                  sound.playClick();
                  setSelectedHouse(h);
                }}
                className={`p-5 text-left transition-all duration-200 border cursor-pointer ${
                  isSelected
                    ? 'bg-zinc-900 border-[#D4FF00] shadow-[0_0_24px_rgba(212,255,0,0.15)]'
                    : 'bg-zinc-950 border-white/10 hover:border-white/30 hover:bg-zinc-900/50'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono-code mb-2">
                  <span className={isSelected ? 'text-[#D4FF00]' : 'text-zinc-500'}>
                    0{HOUSES.indexOf(h) + 1}
                  </span>
                  <span className="text-[10px] text-zinc-400">{h.country}</span>
                </div>
                <div className={`font-display text-2xl md:text-3xl font-bold uppercase tracking-tight ${isSelected ? 'text-white' : 'text-zinc-300'}`}>
                  {h.city}
                </div>
                <div className="text-xs font-mono-code text-zinc-500 mt-1 truncate">
                  {h.district}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected House Architectural Spec Card */}
        <div className="bg-[#111113] border border-white/15 p-6 md:p-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: House identity & Curators note (col-span-7) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono-code text-[#D4FF00]">
                <span className="flex items-center gap-1.5 bg-black px-2.5 py-1 border border-white/15">
                  <MapPin className="w-3.5 h-3.5" />
                  {selectedHouse.coordinates}
                </span>
                <span className="flex items-center gap-1.5 bg-black px-2.5 py-1 border border-white/15 text-zinc-300">
                  <Clock className="w-3.5 h-3.5 text-[#D4FF00]" />
                  {selectedHouse.hours}
                </span>
              </div>

              <div>
                <h3 className="font-display text-4xl md:text-5xl font-bold uppercase text-white tracking-tight">
                  MOTION HOUSE {selectedHouse.city}
                </h3>
                <p className="text-sm font-mono-code text-zinc-400 mt-1">
                  {selectedHouse.address}
                </p>
              </div>

              <p className="text-zinc-300 font-sans text-base leading-relaxed">
                {selectedHouse.curatorNote}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs">
                <div>
                  <span className="text-zinc-500 font-mono-code uppercase block mb-1">FACILITY TYPOLOGY</span>
                  <span className="text-white font-medium">{selectedHouse.buildingType}</span>
                </div>
                <div>
                  <span className="text-zinc-500 font-mono-code uppercase block mb-1">HEAD OF PERFORMANCE</span>
                  <span className="text-white font-medium">{selectedHouse.headCoach}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Technical Club Specs (col-span-5) */}
            <div className="lg:col-span-5 bg-black/60 p-6 border border-white/10 space-y-4">
              <div className="text-xs font-mono-code text-[#D4FF00] uppercase tracking-widest pb-2 border-b border-white/10">
                HOUSE SPECIFICATIONS
              </div>

              <div className="flex items-center justify-between text-xs py-2 border-b border-white/5">
                <span className="text-zinc-400 flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#D4FF00]" />
                  MEMBERSHIP ROSTER
                </span>
                <span className="font-mono-code text-white font-bold">{selectedHouse.capacity}</span>
              </div>

              <div className="flex items-center justify-between text-xs py-2 border-b border-white/5">
                <span className="text-zinc-400 flex items-center gap-2">
                  <Disc3 className="w-4 h-4 text-[#D4FF00]" />
                  ACOUSTIC RIGGING
                </span>
                <span className="font-mono-code text-zinc-200 text-right">{selectedHouse.soundSpec}</span>
              </div>

              <div className="flex items-center justify-between text-xs py-2 border-b border-white/5">
                <span className="text-zinc-400 flex items-center gap-2">
                  <Radio className="w-4 h-4 text-[#D4FF00]" />
                  RECIPROCAL ENTRY
                </span>
                <span className="font-mono-code text-[#D4FF00] font-bold">ALL TIERS INCLUDED</span>
              </div>

              <div className="pt-2">
                <div className="text-[11px] font-mono-code text-zinc-500 leading-relaxed">
                  * Guest passes limited to 2 per month to maintain training volume, floor density, and uncompromised focus.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
