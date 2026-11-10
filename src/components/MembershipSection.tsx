import React, { useState } from 'react';
import { sound } from '../utils/sound';
import { ShieldCheck, ArrowRight, CheckCircle2, Lock } from 'lucide-react';

interface MembershipSectionProps {
  onOpenModal: (tierName?: string) => void;
}

export const MembershipSection: React.FC<MembershipSectionProps> = ({ onOpenModal }) => {
  return (
    <section id="membership" className="relative w-full py-24 md:py-36 bg-[#080808] border-b border-white/10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* Section Header with Oversized Number */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10 mb-16">
          <div className="flex items-start gap-6">
            <span className="font-display text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#D4FF00] to-zinc-700 leading-none select-none">
              05
            </span>
            <div>
              <div className="text-xs font-mono-code text-[#D4FF00] tracking-[0.25em] uppercase mb-2">
                APPLICATION & VETTING PROTOCOL
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight text-white">
                APPLY FOR <br />
                <span className="text-zinc-400">MEMBERSHIP ACCESS</span>
              </h2>
            </div>
          </div>

          <div className="text-left md:text-right max-w-sm">
            <p className="text-xs font-mono-code text-zinc-400 uppercase tracking-widest leading-relaxed">
              INTENTIONAL CAP · 250 ACTIVE MEMBERS / HOUSE
            </p>
            <div className="mt-3 text-xs text-zinc-500">
              We do not accept walk-in signups or open gym traffic. Every member is vetted for dedication to craft, respect for shared space, and consistency.
            </div>
          </div>
        </div>

        {/* Membership Tier Cards (Asymmetric Black & Off-White Contrast) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Tier 1: Local House Resident (col-span-6) */}
          <div className="lg:col-span-6 bg-[#111113] border border-white/15 p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono-code mb-4">
                <span className="text-zinc-400">TIER 01 // SINGLE HOUSE</span>
                <span className="text-[#D4FF00] font-bold">LIMITED COHORT</span>
              </div>

              <h3 className="font-display text-4xl md:text-5xl font-bold uppercase text-white mb-2">
                HOUSE RESIDENT
              </h3>
              <p className="text-zinc-400 text-sm font-sans mb-6">
                Dedicated home house access for resident athletes focused on continuous structured progress.
              </p>

              <div className="py-6 border-y border-white/10 mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono-code text-4xl md:text-5xl font-bold text-white tabular-nums">$320</span>
                  <span className="text-xs font-mono-code text-zinc-400 uppercase">/ MONTH · BILLED MONTHLY</span>
                </div>
              </div>

              {/* Inclusions list */}
              <ul className="space-y-3 text-xs text-zinc-300 font-sans mb-8">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#D4FF00]" />
                  <span>Unlimited floor access to chosen Home House (Tokyo, Berlin, London, or NYC)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#D4FF00]" />
                  <span>Sub-Zero Basalt Plunge & Sauna Recovery access (unrestricted)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#D4FF00]" />
                  <span>Private digital locker + complementary luxury wash service</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#D4FF00]" />
                  <span>24-Hour Priority Drop Access to all Technical Streetwear Capsules</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => {
                sound.playImpact();
                onOpenModal('House Resident');
              }}
              className="w-full py-4 border border-white/30 hover:border-[#D4FF00] bg-black/50 hover:bg-black text-white hover:text-[#D4FF00] font-display font-bold text-base tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer"
            >
              <span>Submit Application</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Tier 2: Global Nomad / Universal Access (col-span-6, high visual prominence) */}
          <div className="lg:col-span-6 bg-zinc-950 border-2 border-[#D4FF00] p-8 md:p-10 flex flex-col justify-between shadow-[0_0_40px_rgba(212,255,0,0.1)] relative">
            {/* Top Badge */}
            <div className="absolute -top-3 right-6 bg-[#D4FF00] text-black font-mono-code font-bold text-[10px] tracking-widest px-3 py-1 uppercase">
              UNIVERSAL PASSPORT
            </div>

            <div>
              <div className="flex items-center justify-between text-xs font-mono-code mb-4">
                <span className="text-[#D4FF00]">TIER 02 // ALL HUBS</span>
                <span className="text-zinc-400 font-bold">RECIPROCAL ENTRY</span>
              </div>

              <h3 className="font-display text-4xl md:text-5xl font-bold uppercase text-white mb-2">
                GLOBAL ARCHIVE
              </h3>
              <p className="text-zinc-400 text-sm font-sans mb-6">
                Universal access across all international metropolitan houses. Made for nomadic high-performers.
              </p>

              <div className="py-6 border-y border-white/10 mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono-code text-4xl md:text-5xl font-bold text-[#D4FF00] tabular-nums">$480</span>
                  <span className="text-xs font-mono-code text-zinc-400 uppercase">/ MONTH · ANNUAL COMMITMENT</span>
                </div>
              </div>

              {/* Inclusions list */}
              <ul className="space-y-3 text-xs text-zinc-300 font-sans mb-8">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#D4FF00]" />
                  <span>Unrestricted reciprocal entry to ALL Motion Houses (Tokyo, Berlin, London, New York)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#D4FF00]" />
                  <span>Dedicated quarterly 1-on-1 Biomechanical & Force Velocity assessment</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#D4FF00]" />
                  <span>Complimentary annual Motion House Technical Atelier Capsule bundle ($600 value)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#D4FF00]" />
                  <span>Hyperbaric 1.5 ATA chamber reservations + infrared light therapy suite</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#D4FF00]" />
                  <span>4 guest passes per month with full recovery floor privileges</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => {
                sound.playImpact();
                onOpenModal('Global Archive');
              }}
              className="w-full py-4 bg-[#D4FF00] hover:bg-[#bbf400] text-black font-display font-bold text-base tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-3 shadow-[0_0_24px_rgba(212,255,0,0.3)] hover:shadow-[0_0_36px_rgba(212,255,0,0.5)] cursor-pointer"
            >
              <span>Apply For Global Passport</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>
          </div>
        </div>

        {/* Security & Integrity Note */}
        <div className="mt-12 p-6 bg-[#111113] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-zinc-400">
          <div className="flex items-center gap-3">
            <Lock className="w-4 h-4 text-[#D4FF00] shrink-0" />
            <span>APPLICATIONS ARE REVIEWED WITHIN 48 HOURS BY THE ADMISSIONS COMMITTEE.</span>
          </div>
          <span className="text-[#D4FF00]">CONFIDENTIAL & ENCRYPTED</span>
        </div>
      </div>
    </section>
  );
};
