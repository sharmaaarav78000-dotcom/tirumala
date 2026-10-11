import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SignatureExperience } from './components/SignatureExperience';
import { MenuSection } from './components/MenuSection';
import { SignatureFavorites } from './components/SignatureFavorites';
import { FoodExperience } from './components/FoodExperience';
import { CulinaryGallery } from './components/CulinaryGallery';
import { AboutSection } from './components/AboutSection';
import { VisitUs } from './components/VisitUs';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { PlatterDrawer } from './components/PlatterDrawer';
import { CinematicIntro } from './components/CinematicIntro';
import { MenuItem, PlatterItem, PricingPreference } from './types/cafe';

export default function App() {
  const [showIntro, setShowIntro] = useState<boolean>(() => {
    // Show intro on first visit of session
    return !sessionStorage.getItem('tirumala_intro_seen');
  });
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const [platterDrawerOpen, setPlatterDrawerOpen] = useState(false);
  const [platterItems, setPlatterItems] = useState<PlatterItem[]>([]);

  const handleIntroComplete = () => {
    sessionStorage.setItem('tirumala_intro_seen', 'true');
    setShowIntro(false);
  };

  const handleReplayIntro = () => {
    setShowIntro(true);
  };

  // Add or toggle item in platter
  const handleAddToPlatter = (item: MenuItem, pref: PricingPreference) => {
    setPlatterItems((prev) => {
      const existing = prev.find((p) => p.menuItem.id === item.id);
      if (existing) {
        return prev.filter((p) => p.menuItem.id !== item.id);
      }
      return [...prev, { menuItem: item, preference: pref, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setPlatterItems((prev) =>
      prev
        .map((p) => {
          if (p.menuItem.id === id) {
            const newQty = p.quantity + delta;
            return newQty > 0 ? { ...p, quantity: newQty } : null;
          }
          return p;
        })
        .filter(Boolean) as PlatterItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setPlatterItems((prev) => prev.filter((p) => p.menuItem.id !== id));
  };

  const handleClearPlatter = () => {
    setPlatterItems([]);
  };

  const handleChangePreference = (id: string, pref: PricingPreference) => {
    setPlatterItems((prev) =>
      prev.map((p) => (p.menuItem.id === id ? { ...p, preference: pref } : p))
    );
  };

  const handleScrollTo = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0a09] text-[#f7f4ec] font-sans selection:bg-[#d4af37] selection:text-[#0c0a09]">
      {/* 5-Second Cinematic 3D Logo Intro Animation */}
      {showIntro && <CinematicIntro onComplete={handleIntroComplete} />}

      {/* Refined Navigation Bar */}
      <Navbar
        onOpenReservation={() => setReservationModalOpen(true)}
        onOpenPlatter={() => setPlatterDrawerOpen(true)}
        onReplayIntro={handleReplayIntro}
        platterCount={platterItems.length}
      />

      <main>
        {/* Cinematic Hero */}
        <HeroSection
          onExploreMenu={() => handleScrollTo('menu')}
          onDiscoverStory={() => handleScrollTo('experience')}
        />

        {/* Section A: Signature Experience & Welcome Sip Tradition */}
        <SignatureExperience onExploreMenu={() => handleScrollTo('menu')} />

        {/* Section B: Explore The Menu with High-Resolution Food Images and Butter/Ghee Toggle */}
        <MenuSection
          onAddToPlatter={handleAddToPlatter}
          selectedItemIds={platterItems.map((p) => p.menuItem.id)}
        />

        {/* Section C: Signature Favourites Showcase */}
        <SignatureFavorites
          onAddToPlatter={handleAddToPlatter}
          onOpenReservation={() => setReservationModalOpen(true)}
        />

        {/* Section D: The Food Experience / Live Tawa Craft */}
        <FoodExperience />

        {/* Section E: Artisanal Food Gallery */}
        <CulinaryGallery />

        {/* Section F: About Tirumala Cafe */}
        <AboutSection />

        {/* Section G: Visit Us / Verified Agra DayalBagh Location & 12-11 PM Hours */}
        <VisitUs onOpenReservation={() => setReservationModalOpen(true)} />
      </main>

      {/* Section H & Footer: Final Call to Action */}
      <Footer
        onExploreMenu={() => handleScrollTo('menu')}
        onOpenReservation={() => setReservationModalOpen(true)}
      />

      {/* Seamless Table Reservation Modal */}
      <ReservationModal
        isOpen={reservationModalOpen}
        onClose={() => setReservationModalOpen(false)}
      />

      {/* Curated Tasting Platter Drawer */}
      <PlatterDrawer
        isOpen={platterDrawerOpen}
        onClose={() => setPlatterDrawerOpen(false)}
        items={platterItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearPlatter={handleClearPlatter}
        onChangePreference={handleChangePreference}
      />
    </div>
  );
}
