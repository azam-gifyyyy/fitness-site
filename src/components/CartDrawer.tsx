import React, { useState } from 'react';
import { sound } from '../utils/sound';
import { ProductItem } from './CapsuleDrop';
import { X, Trash2, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export interface CartItem {
  product: ProductItem;
  size: string;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, size: string, delta: number) => void;
  onRemoveItem: (productId: string, size: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  if (!isOpen) return null;

  const total = items.reduce((acc, curr) => acc + curr.product.price * curr.quantity, 0);

  const handleCheckout = () => {
    sound.playImpact();
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutComplete(true);
      onClearCart();
    }, 1200);
  };

  const handleClose = () => {
    sound.playClick();
    setCheckoutComplete(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-[#0C0C0E] border-l border-white/15 h-full flex flex-col justify-between shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-mono-code text-[#D4FF00] uppercase tracking-widest">
              CAPSULE 04 // DROP BAG
            </div>
            <h3 className="font-display text-2xl font-bold uppercase text-white">
              YOUR ARCHIVE ({items.reduce((acc, i) => acc + i.quantity, 0)})
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="p-2 text-zinc-400 hover:text-white transition-colors"
            aria-label="Close bag drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {checkoutComplete ? (
            <div className="text-center py-12">
              <div className="w-14 h-14 bg-[#D4FF00]/10 border border-[#D4FF00] text-[#D4FF00] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div className="text-xs font-mono-code text-[#D4FF00] tracking-widest uppercase mb-1">
                ORDER DISPATCH QUEUED
              </div>
              <h4 className="font-display text-2xl font-bold uppercase text-white mb-2">
                DROP CONFIRMED
              </h4>
              <p className="text-xs text-zinc-400 font-sans mb-6">
                Your technical pieces are allocated from the Tokyo Atelier. Tracking dispatch will be sent to your member address.
              </p>
              <button
                onClick={handleClose}
                className="w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-mono-code text-xs font-bold uppercase tracking-wider"
              >
                Close Drawer
              </button>
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xs font-mono-code text-zinc-500 uppercase tracking-widest mb-3">
                BAG IS CURRENTLY EMPTY
              </p>
              <p className="text-sm text-zinc-400 font-sans max-w-xs mx-auto mb-6">
                Select pieces from Capsule 04 to reserve limited allocations before stock depletes.
              </p>
              <button
                onClick={handleClose}
                className="px-6 py-3 border border-white/20 hover:border-[#D4FF00] text-xs font-mono-code uppercase text-white hover:text-[#D4FF00] transition-colors"
              >
                Browse Capsule 04
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={`${item.product.id}-${item.size}`}
                className="p-4 bg-black/60 border border-white/10 flex items-start justify-between gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-[10px] font-mono-code text-[#D4FF00] mb-0.5">
                    <span>{item.product.dropCode}</span>
                    <span>· SIZE: {item.size}</span>
                  </div>
                  <div className="font-display text-lg font-bold uppercase text-white leading-tight mb-1">
                    {item.product.name}
                  </div>
                  <div className="text-xs font-mono-code text-zinc-400">
                    ${item.product.price} USD each
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-2 mt-3">
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, item.size, -1)}
                      className="w-6 h-6 border border-white/20 text-white flex items-center justify-center text-xs hover:border-[#D4FF00]"
                    >
                      -
                    </button>
                    <span className="font-mono-code text-xs text-white px-2">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, item.size, 1)}
                      className="w-6 h-6 border border-white/20 text-white flex items-center justify-center text-xs hover:border-[#D4FF00]"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="text-right flex flex-col justify-between items-end h-full">
                  <span className="font-mono-code text-base font-bold text-white tabular-nums">
                    ${item.product.price * item.quantity}
                  </span>
                  <button
                    onClick={() => onRemoveItem(item.product.id, item.size)}
                    className="mt-6 text-zinc-500 hover:text-red-400 transition-colors p-1"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with Checkout CTA */}
        {!checkoutComplete && items.length > 0 && (
          <div className="p-6 border-t border-white/10 bg-black/80">
            <div className="flex items-center justify-between text-xs font-mono-code mb-2">
              <span className="text-zinc-400">ESTIMATED TOTAL</span>
              <span className="text-xl font-bold font-mono-code text-[#D4FF00] tabular-nums">
                ${total} USD
              </span>
            </div>

            <div className="text-[11px] font-mono-code text-zinc-500 mb-4">
              * INCLUDES EXPRESS COURIER & ARCHIVAL PACKAGING
            </div>

            <button
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full py-4 bg-[#D4FF00] hover:bg-[#bbf400] text-black font-display font-bold text-base tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_24px_rgba(212,255,0,0.3)] disabled:opacity-50"
            >
              {isCheckingOut ? (
                <span>SECURING ALLOCATION...</span>
              ) : (
                <>
                  <span>CONFIRM DROP CHECKOUT</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
