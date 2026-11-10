import React, { useState } from 'react';
import { sound } from '../utils/sound';
import { Plus, Check, Eye, Tag, Sparkles } from 'lucide-react';
import capsuleLookbookImg from '../assets/images/capsule_streetwear_drop_1794312875437.jpg';

export interface ProductItem {
  id: string;
  name: string;
  dropCode: string;
  price: number;
  weight: string;
  fabric: string;
  description: string;
  availableSizes: string[];
  tag: string;
}

export const PRODUCTS: ProductItem[] = [
  {
    id: 'hoodie-04',
    name: '04 Overhead Heavyweight Technical Hoodie',
    dropCode: 'MH-AP-0401',
    price: 220,
    weight: '520 GSM French Terry Cotton',
    fabric: '100% Organic Heavyweight Cotton with Teflon™ Water-Repellent Treatment',
    description: 'Double-layered oversized ergonomic hood, articulated elbow darts, hidden zipper kangaroo pocket, matte black anodized hardware, and tonal rubberized silicone Motion House graphic insignia.',
    availableSizes: ['S', 'M', 'L', 'XL'],
    tag: 'LIMITED DROP — 300 UNITS',
  },
  {
    id: 'pant-04',
    name: 'Modular Utility Cargo Track Pant',
    dropCode: 'MH-AP-0402',
    price: 195,
    weight: '320 GSM Cordura® Stretch Twill',
    fabric: '88% Technical Polyamide, 12% Elastane with 4-Way Mobility Weave',
    description: 'Tapered anatomical knee articulation, fidlock magnetic cargo tension buckle, reinforced gusset for unrestricted squat depth, and concealed ankle cinch toggles.',
    availableSizes: ['S', 'M', 'L', 'XL'],
    tag: 'LIMITED DROP — 250 UNITS',
  },
  {
    id: 'tee-04',
    name: 'Boxy Heavyweight Graphic Tee — "MOVE DIFFERENT"',
    dropCode: 'MH-AP-0403',
    price: 85,
    weight: '280 GSM Combed Cotton Jersey',
    fabric: 'Pre-shrunk vintage mineral washed dense organic yarn',
    description: 'Dropped shoulders, reinforced thick ribbed collar that never sags, discharge-printed archival typography across back spine with tactile high-density chest print.',
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tag: 'SELLING FAST',
  },
  {
    id: 'duffel-04',
    name: 'Tactical Duffel 38L Ultra-Dyneema®',
    dropCode: 'MH-EQ-0404',
    price: 260,
    weight: 'Composite Dyneema® CTF3 & YKK Aquaguard',
    fabric: '15x stronger than steel by weight, completely waterproof sub-compartments',
    description: 'Ventilated separate shoe/chalk compartment, internal padded 16" laptop sleeve, luggage pass-through, and modular magnetic sternum strap.',
    availableSizes: ['ONE SIZE (38L)'],
    tag: 'ARCHIVAL GRADE',
  },
];

interface CapsuleDropProps {
  onAddToCart: (item: ProductItem, size: string) => void;
}

export const CapsuleDrop: React.FC<CapsuleDropProps> = ({ onAddToCart }) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem>(PRODUCTS[0]);
  const [selectedSize, setSelectedSize] = useState<string>(PRODUCTS[0].availableSizes[0]);
  const [addedAnimation, setAddedAnimation] = useState<boolean>(false);

  const handleSelectProduct = (product: ProductItem) => {
    sound.playClick();
    setSelectedProduct(product);
    setSelectedSize(product.availableSizes[0]);
  };

  const handleAdd = () => {
    sound.playImpact();
    onAddToCart(selectedProduct, selectedSize);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  return (
    <section id="capsule" className="relative w-full py-24 md:py-36 bg-[#080808] border-b border-white/10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* Section Header with Oversized Number */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10 mb-16">
          <div className="flex items-start gap-6">
            <span className="font-display text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#D4FF00] to-zinc-700 leading-none select-none">
              03
            </span>
            <div>
              <div className="text-xs font-mono-code text-[#D4FF00] tracking-[0.25em] uppercase mb-2">
                TECHNICAL ATELIER & STREETWEAR
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight text-white">
                CAPSULE 04 <br />
                <span className="text-zinc-400">OBJECTS OF DISCIPLINE</span>
              </h2>
            </div>
          </div>

          <div className="text-left md:text-right max-w-sm">
            <p className="text-xs font-mono-code text-zinc-400 uppercase tracking-widest leading-relaxed">
              HEAVYWEIGHT COTTON · BONDED SEAMS · ZERO MASS-PRODUCTION
            </p>
            <div className="mt-3 text-xs text-zinc-500">
              Technical sportswear engineered with high fashion proportion. Every piece is numbered, tested under load, and built for both arena training and city pavement.
            </div>
          </div>
        </div>

        {/* Dynamic Asymmetric Grid: Lookbook Editorial Photo + Interactive Garment Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Lookbook Hero Photo (col-span-6) */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[3/4] w-full border border-white/15 overflow-hidden bg-zinc-950 group">
              <img
                src={capsuleLookbookImg}
                alt="Motion House technical streetwear model against brutalist raw concrete architecture wearing heavyweight black hoodie"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Graphic Editorial Watermark / Stamp */}
              <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-md px-3.5 py-2 border border-white/15 text-xs font-mono-code text-white">
                <span className="text-[#D4FF00] mr-2">LOOKBOOK 04</span>
                <span className="text-zinc-400">BERLIN EDITORIAL</span>
              </div>

              {/* Floating garment label */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#080808]/95 backdrop-blur-md p-6 border border-white/15">
                <div className="flex items-center justify-between text-xs font-mono-code text-zinc-400 mb-1">
                  <span>GARMENT SPEC</span>
                  <span className="text-[#D4FF00]">PARALLEL RUN / WINTER</span>
                </div>
                <div className="font-display text-2xl font-bold uppercase text-white tracking-tight">
                  FEATURED: OVERHEAD HOODIE & UTILITY PANT
                </div>
                <div className="text-xs text-zinc-400 font-sans mt-2">
                  520 GSM custom loopback knit. Hand-finished in limited runs. Designed in Tokyo, forged for world movement.
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Garment Customizer & Product List (col-span-6) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            {/* Products selector list */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono-code text-zinc-400 uppercase tracking-widest">
                  DROP PIECES (4 OF 4 AVAILABLE)
                </span>
                <span className="text-xs font-mono-code text-[#D4FF00]">
                  WORLDWIDE SHIPPING
                </span>
              </div>

              <div className="space-y-3 mb-6">
                {PRODUCTS.map((prod) => {
                  const isCur = prod.id === selectedProduct.id;
                  return (
                    <div
                      key={prod.id}
                      onClick={() => handleSelectProduct(prod)}
                      className={`p-4 border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                        isCur
                          ? 'bg-zinc-900 border-[#D4FF00] shadow-[0_0_20px_rgba(212,255,0,0.1)]'
                          : 'bg-zinc-950/60 border-white/10 hover:border-white/30 hover:bg-zinc-900/40'
                      }`}
                    >
                      <div className="pr-4">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-[10px] font-mono-code ${isCur ? 'text-[#D4FF00]' : 'text-zinc-500'}`}>
                            {prod.dropCode}
                          </span>
                          <span className="text-[10px] font-mono-code text-zinc-400">· {prod.weight}</span>
                        </div>
                        <div className={`font-display text-lg font-bold uppercase tracking-tight ${isCur ? 'text-white' : 'text-zinc-300'}`}>
                          {prod.name}
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <div className="font-mono-code text-lg font-bold text-white tabular-nums">
                          ${prod.price}
                        </div>
                        <div className="text-[10px] font-mono-code text-[#D4FF00]">
                          {prod.tag}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Active Item Technical Configuration */}
              <div className="bg-[#111113] p-6 border border-white/15">
                <div className="flex items-start justify-between pb-4 border-b border-white/10 mb-4">
                  <div>
                    <div className="text-[10px] font-mono-code text-[#D4FF00] uppercase tracking-widest mb-1">
                      {selectedProduct.dropCode}
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold uppercase text-white">
                      {selectedProduct.name}
                    </h3>
                  </div>
                  <div className="font-mono-code text-2xl font-bold text-white tabular-nums">
                    ${selectedProduct.price}
                  </div>
                </div>

                <p className="text-xs md:text-sm text-zinc-300 font-sans leading-relaxed mb-6">
                  {selectedProduct.description}
                </p>

                {/* Technical specs pills/rows */}
                <div className="p-3 bg-black/60 border border-white/10 text-xs font-mono-code mb-6 space-y-1.5">
                  <div className="text-zinc-400">
                    <span className="text-zinc-500">FABRICATION:</span> {selectedProduct.fabric}
                  </div>
                  <div className="text-zinc-400">
                    <span className="text-zinc-500">DENSITY:</span> {selectedProduct.weight}
                  </div>
                </div>

                {/* Size Selector */}
                <div className="mb-6">
                  <div className="flex items-center justify-between text-xs font-mono-code text-zinc-400 mb-2">
                    <span>SELECT SIZE (MEN / UNISEX FIT):</span>
                    <span className="text-zinc-500 underline cursor-pointer">SIZE GUIDE</span>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    {selectedProduct.availableSizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => {
                          sound.playClick();
                          setSelectedSize(size);
                        }}
                        className={`px-4 py-2 font-mono-code text-xs font-bold transition-all cursor-pointer border ${
                          selectedSize === size
                            ? 'bg-[#D4FF00] text-black border-[#D4FF00]'
                            : 'bg-black text-white border-white/20 hover:border-white'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Add To Bag Button */}
                <button
                  onClick={handleAdd}
                  className={`w-full py-4 font-display font-bold text-base tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer ${
                    addedAnimation
                      ? 'bg-emerald-400 text-black shadow-[0_0_30px_rgba(52,211,153,0.4)]'
                      : 'bg-[#D4FF00] hover:bg-[#bbf400] text-black shadow-[0_0_24px_rgba(212,255,0,0.25)] hover:shadow-[0_0_36px_rgba(212,255,0,0.4)]'
                  }`}
                >
                  {addedAnimation ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span>ADDED TO DROP BAG ({selectedSize})</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-5 h-5 text-black" />
                      <span>ADD TO BAG · ${selectedProduct.price} USD</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Micro Details note */}
            <div className="flex items-center justify-between text-[11px] font-mono-code text-zinc-500 pt-2 border-t border-white/10">
              <span>DUTIES & TAXES INCLUDED AT CHECKOUT</span>
              <span>14-DAY WORLDWIDE EXCHANGE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
