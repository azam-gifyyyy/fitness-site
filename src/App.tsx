/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Ticker } from './components/Ticker';
import { Manifesto } from './components/Manifesto';
import { Sanctuary } from './components/Sanctuary';
import { CapsuleDrop, ProductItem, PRODUCTS } from './components/CapsuleDrop';
import { GlobalHouses } from './components/GlobalHouses';
import { MembershipSection } from './components/MembershipSection';
import { MembershipModal } from './components/MembershipModal';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { Footer } from './components/Footer';

export default function App() {
  const [isMembershipOpen, setIsMembershipOpen] = useState(false);
  const [membershipTier, setMembershipTier] = useState('House Resident');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: PRODUCTS[0],
      size: 'L',
      quantity: 1,
    },
  ]);

  const handleOpenMembership = (tierName: string = 'House Resident') => {
    setMembershipTier(tierName);
    setIsMembershipOpen(true);
  };

  const handleExploreCapsule = () => {
    const el = document.getElementById('capsule');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddToCart = (product: ProductItem, size: string) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) => item.product.id === product.id && item.size === size
      );
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, size, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, size: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId && item.size === size) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (productId: string, size: string) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.size === size))
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen bg-[#080808] text-[#FAFAFA] font-sans selection:bg-[#D4FF00] selection:text-black">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenMembership={() => handleOpenMembership('House Resident')}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={totalCartCount}
      />

      {/* Main Content Area */}
      <main>
        {/* Hero Screen */}
        <Hero
          onOpenMembership={() => handleOpenMembership('House Resident')}
          onExploreCapsule={handleExploreCapsule}
        />

        {/* Animated Horizontal Typography Ticker */}
        <Ticker />

        {/* Section 01: Manifesto & Biomechanical Modalities */}
        <Manifesto />

        {/* Section 02: Brutalist Recovery Sanctuary */}
        <Sanctuary />

        {/* Section 03: Streetwear Capsule 04 Drop */}
        <CapsuleDrop onAddToCart={handleAddToCart} />

        {/* Section 04: Global Houses Network */}
        <GlobalHouses />

        {/* Section 05: Membership Admission Protocol */}
        <MembershipSection onOpenModal={handleOpenMembership} />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Vetting & Membership Application Modal */}
      <MembershipModal
        isOpen={isMembershipOpen}
        onClose={() => setIsMembershipOpen(false)}
        defaultTier={membershipTier}
      />

      {/* Technical Streetwear Drop Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
