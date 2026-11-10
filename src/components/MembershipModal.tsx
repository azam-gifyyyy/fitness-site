import React, { useState } from 'react';
import { sound } from '../utils/sound';
import { X, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

interface MembershipModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTier?: string;
}

export const MembershipModal: React.FC<MembershipModalProps> = ({
  isOpen,
  onClose,
  defaultTier = 'House Resident',
}) => {
  const [tier, setTier] = useState(defaultTier);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('TOKYO');
  const [discipline, setDiscipline] = useState('Olympic Lifting / Barbell');
  const [intent, setIntent] = useState('');
  const [error, setError] = useState('');
  const [submittedData, setSubmittedData] = useState<{ id: string; name: string } | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) {
      setError('Please provide your name and email address.');
      sound.playClick();
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      setError('Please provide a valid email format.');
      sound.playClick();
      return;
    }

    sound.playImpact();
    setError('');
    const randomId = `MH-APP-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedData({
      id: randomId,
      name: fullName.trim(),
    });
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFullName('');
    setEmail('');
    setIntent('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-xl bg-[#0F0F11] border border-white/20 p-6 md:p-8 shadow-[0_0_60px_rgba(0,0,0,0.8)] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors p-2"
          aria-label="Close application modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submittedData ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-[#D4FF00]/10 border border-[#D4FF00] text-[#D4FF00] flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="text-xs font-mono-code text-[#D4FF00] tracking-widest uppercase mb-2">
              APPLICATION RECEIVED · IN VETTING QUEUE
            </div>

            <h3 className="font-display text-3xl font-bold uppercase text-white mb-2">
              WELCOME, {submittedData.name.toUpperCase()}
            </h3>

            <p className="text-zinc-400 text-sm font-sans max-w-md mx-auto mb-6">
              Your application has been logged to the admissions ledger under candidate code{' '}
              <span className="font-mono-code text-white font-bold">{submittedData.id}</span>.
              Our athletic director for {city} will contact you within 48 hours for your onboarding protocol.
            </p>

            <div className="bg-black/60 p-4 border border-white/10 text-xs font-mono-code text-zinc-300 max-w-md mx-auto mb-8 text-left space-y-1">
              <div><span className="text-zinc-500">SELECTED TIER:</span> {tier}</div>
              <div><span className="text-zinc-500">PRIMARY HOUSE:</span> {city}</div>
              <div><span className="text-zinc-500">PRIMARY DISCIPLINE:</span> {discipline}</div>
              <div><span className="text-zinc-500">STATUS:</span> PENDING DIRECT REVIEW</div>
            </div>

            <button
              onClick={handleReset}
              className="bg-[#D4FF00] hover:bg-[#bbf400] text-black font-display font-bold text-sm tracking-wider uppercase px-8 py-3.5 transition-all cursor-pointer"
            >
              Return To Motion House
            </button>
          </div>
        ) : (
          <div>
            <div className="text-xs font-mono-code text-[#D4FF00] tracking-widest uppercase mb-2">
              MOTION HOUSE ADMISSIONS · 2026 ROSTER
            </div>

            <h3 className="font-display text-3xl md:text-4xl font-bold uppercase text-white mb-2">
              APPLICATION FOR ACCESS
            </h3>

            <p className="text-zinc-400 text-xs font-sans mb-6">
              Every applicant is reviewed to maintain training floor standards and member culture.
            </p>

            {error && (
              <div className="mb-4 p-3 bg-red-950/50 border border-red-500/50 text-red-200 text-xs font-mono-code">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Membership Tier Picker */}
              <div>
                <label className="block text-xs font-mono-code text-zinc-400 uppercase mb-1.5">
                  MEMBERSHIP PROGRAM
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      sound.playClick();
                      setTier('House Resident');
                    }}
                    className={`p-3 text-left border text-xs font-mono-code cursor-pointer transition-colors ${
                      tier === 'House Resident'
                        ? 'bg-zinc-900 border-[#D4FF00] text-white'
                        : 'bg-black border-white/10 text-zinc-400 hover:border-white/30'
                    }`}
                  >
                    <div className="font-bold text-sm">HOUSE RESIDENT</div>
                    <div className="text-[10px] text-zinc-500">$320 / MO</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      sound.playClick();
                      setTier('Global Archive');
                    }}
                    className={`p-3 text-left border text-xs font-mono-code cursor-pointer transition-colors ${
                      tier === 'Global Archive'
                        ? 'bg-zinc-900 border-[#D4FF00] text-white'
                        : 'bg-black border-white/10 text-zinc-400 hover:border-white/30'
                    }`}
                  >
                    <div className="font-bold text-sm text-[#D4FF00]">GLOBAL ARCHIVE</div>
                    <div className="text-[10px] text-zinc-500">$480 / MO</div>
                  </button>
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-code text-zinc-400 uppercase mb-1">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Liam Tanaka"
                    className="w-full bg-black border border-white/20 px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#D4FF00]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono-code text-zinc-400 uppercase mb-1">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="liam@domain.com"
                    className="w-full bg-black border border-white/20 px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#D4FF00]"
                  />
                </div>
              </div>

              {/* Home House & Discipline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-code text-zinc-400 uppercase mb-1">
                    PRIMARY BASE CITY
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-black border border-white/20 px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4FF00]"
                  >
                    <option value="TOKYO">TOKYO (SHIBUYA)</option>
                    <option value="BERLIN">BERLIN (KREUZBERG)</option>
                    <option value="LONDON">LONDON (SHOREDITCH)</option>
                    <option value="NEW YORK">NEW YORK (LES)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono-code text-zinc-400 uppercase mb-1">
                    PRIMARY DISCIPLINE
                  </label>
                  <select
                    value={discipline}
                    onChange={(e) => setDiscipline(e.target.value)}
                    className="w-full bg-black border border-white/20 px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4FF00]"
                  >
                    <option value="Olympic Lifting / Barbell">Olympic Lifting / Barbell</option>
                    <option value="Sprint & Hyrox Conditioning">Sprint & Hyrox Conditioning</option>
                    <option value="Combat & Calisthenics">Combat & Calisthenics</option>
                    <option value="Longevity & Recovery">Longevity & Recovery</option>
                  </select>
                </div>
              </div>

              {/* Intent statement */}
              <div>
                <label className="block text-xs font-mono-code text-zinc-400 uppercase mb-1">
                  BRIEF INTENT STATEMENT (OPTIONAL)
                </label>
                <textarea
                  rows={2}
                  value={intent}
                  onChange={(e) => setIntent(e.target.value)}
                  placeholder="What is your training background and why Motion House?"
                  className="w-full bg-black border border-white/20 px-3.5 py-2 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#D4FF00] resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full mt-2 py-4 bg-[#D4FF00] hover:bg-[#bbf400] text-black font-display font-bold text-base tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_24px_rgba(212,255,0,0.3)]"
              >
                <span>Submit Vetting Application</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
