export interface MenuItem {
  id: string;
  name: string;
  category: 'welcome-sip' | 'classic-dosas' | 'specialty-benne' | 'accompaniments';
  description: string;
  image: string;
  priceButter?: number;
  priceGhee?: number;
  priceFixed?: number;
  isHouseSpecial?: boolean;
  isChefSpecial?: boolean;
  isComplimentary?: boolean;
  spiceLevel: 'mild' | 'medium' | 'fiery';
  dietary: 'pure-veg' | 'jain-available';
  ingredients: string[];
}

export type PricingPreference = 'butter' | 'ghee';

export interface PlatterItem {
  menuItem: MenuItem;
  preference: PricingPreference;
  quantity: number;
}

export interface TableReservation {
  id: string;
  guestName: string;
  phone: string;
  guests: number;
  date: string;
  timeSlot: string;
  seatingPreference: 'main-dining' | 'hearth-counter' | 'family-alcove';
  notes?: string;
  status: 'confirmed' | 'pending';
}

export interface FoodGalleryItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tag: string;
  description: string;
}
