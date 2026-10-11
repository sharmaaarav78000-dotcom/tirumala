import { MenuItem, FoodGalleryItem } from '../types/cafe';

export const MENU_ITEMS: MenuItem[] = [
  // Welcome Sip
  {
    id: 'welcome-rasam',
    name: 'Hot Rasam (Served in a Bowl)',
    category: 'welcome-sip',
    description: 'Traditional South Indian spiced tomato-tamarind broth infused with black pepper, garlic and fresh curry leaves, served piping hot in a bowl on arrival (no full plate).',
    image: '/images/rasam_bowl_pure.jpg',
    isComplimentary: true,
    priceFixed: 39, // Extra ₹39
    spiceLevel: 'medium',
    dietary: 'pure-veg',
    ingredients: ['Ripe Farm Tomatoes', 'Tamarind Pulp', 'Cracked Black Pepper', 'Crushed Garlic', 'Fresh Curry Leaves', 'Mustard Seeds', 'Asafoetida']
  },

  // Classic Dosas
  {
    id: 'plain-dosa',
    name: 'Plain Dosa',
    category: 'classic-dosas',
    description: 'Crispy golden fermented rice & lentil crepe cooked to delicate paper-thin crispness on heavy cast-iron tawa.',
    image: '/images/hero_dosa.jpg',
    priceButter: 139,
    priceGhee: 149,
    spiceLevel: 'mild',
    dietary: 'jain-available',
    ingredients: ['Stone-ground Rice & Urad Batter', 'Cultured Butter / Desi Ghee', 'Served with Chutney Trio & Sambar']
  },
  {
    id: 'masala-dosa',
    name: 'Masala Dosa',
    category: 'classic-dosas',
    description: 'Timeless South Indian classic with crispy golden crust folded over mildly spiced, tempered mustard & curry leaf potato mash.',
    image: '/images/masala_dosa.jpg',
    priceButter: 159,
    priceGhee: 169,
    spiceLevel: 'mild',
    dietary: 'pure-veg',
    ingredients: ['Crisp Batter Crepe', 'Tempered Potato Masala', 'Green Chillies', 'Curry Leaves', 'Mustard Seeds']
  },
  {
    id: 'onion-masala-dosa',
    name: 'Onion Masala Dosa',
    category: 'classic-dosas',
    description: 'Generously sprinkled with hand-chopped caramelized onions roasted on the tawa, folded with seasoned potato filling.',
    image: '/images/masala_dosa.jpg',
    priceButter: 169,
    priceGhee: 179,
    spiceLevel: 'medium',
    dietary: 'pure-veg',
    ingredients: ['Golden Crepe', 'Crunchy Roasted Red Onions', 'Spiced Potato Filling', 'Coriander Garnish']
  },
  {
    id: 'paneer-masala-dosa',
    name: 'Paneer Masala Dosa',
    category: 'classic-dosas',
    description: 'Loaded with tender crumbled cottage cheese sautéed in South Indian coastal spices over hearty potato masala.',
    image: '/images/paneer_dosa_exact.jpg',
    priceButter: 179,
    priceGhee: 189,
    spiceLevel: 'medium',
    dietary: 'jain-available',
    ingredients: ['Fresh Malai Paneer', 'Aromatic Masala', 'Golden Crepe', 'Fresh Herbs']
  },
  {
    id: 'cheese-masala-dosa',
    name: 'Cheese Masala Dosa',
    category: 'classic-dosas',
    description: 'Grated cheese blanket melted over a crisp dosa shell, paired with our comforting spiced potato core.',
    image: '/images/cheese_dosa_exact.jpg',
    priceButter: 179,
    priceGhee: 189,
    spiceLevel: 'mild',
    dietary: 'pure-veg',
    ingredients: ['Aged Dairy Cheese Blend', 'Classic Potato Masala', 'Golden Crispy Dosa']
  },
  {
    id: 'cheese-corn-masala-dosa',
    name: 'Cheese Corn Masala Dosa',
    category: 'classic-dosas',
    description: 'Sweet tender corn kernels and molten cheese layered seamlessly over seasoned potato filling and crispy dosa.',
    image: '/images/cheese_corn_dosa_exact.jpg',
    priceButter: 189,
    priceGhee: 199,
    spiceLevel: 'mild',
    dietary: 'pure-veg',
    ingredients: ['Golden Sweet Corn', 'Melted Cheese Blend', 'Potato Masala', 'Fresh Herbs']
  },
  {
    id: 'rawa-masala-dosa',
    name: 'Rawa Masala Dosa',
    category: 'classic-dosas',
    description: 'Lacy, netted semolina crepe specked with whole black pepper, crushed cumin, and green chillies, served with spiced potato.',
    image: '/images/rawa_dosa.jpg',
    priceButter: 199,
    priceGhee: 209,
    spiceLevel: 'medium',
    dietary: 'pure-veg',
    ingredients: ['Roasted Semolina (Rawa)', 'Black Peppercorns', 'Cumin Seeds', 'Ginger Bits', 'Spiced Aloo']
  },
  {
    id: 'rawa-onion-masala-dosa',
    name: 'Rawa Onion Masala Dosa',
    category: 'classic-dosas',
    description: 'Extra-crunchy semolina net dosa roasted with caramelized shallots, fresh curry leaves, and traditional potato masala.',
    image: '/images/rawa_dosa.jpg',
    priceButter: 209,
    priceGhee: 219,
    spiceLevel: 'medium',
    dietary: 'pure-veg',
    ingredients: ['Lacy Rawa Crust', 'Crisp Sautéed Onions', 'Black Pepper', 'Spiced Potato Masala']
  },
  {
    id: 'mysore-masala-dosa',
    name: 'Mysore Masala Dosa',
    category: 'classic-dosas',
    description: 'Inner crust generously smeared with artisanal fiery red Mysore chili-garlic chutney, folded around turmeric potato mash.',
    image: '/images/dosa_mysore_exact.jpg',
    priceButter: 199,
    priceGhee: 209,
    spiceLevel: 'fiery',
    dietary: 'pure-veg',
    ingredients: ['Red Byadgi Chilli Chutney', 'Roasted Garlic Paste', 'Spiced Potato Mash', 'Crisp Crepe']
  },
  {
    id: 'roast-garlic-dosa-plain',
    name: 'Roast Garlic Dosa (Plain)',
    category: 'classic-dosas',
    description: 'Crispy wafer-thin dosa brushed with fragrant slow-roasted garlic and golden butter essence.',
    image: '/images/hero_dosa.jpg',
    priceButter: 169,
    priceGhee: 179,
    spiceLevel: 'medium',
    dietary: 'pure-veg',
    ingredients: ['Slow-Confit Garlic Puree', 'Stone-ground Crepe', 'Butter or Ghee Glaze']
  },
  {
    id: 'roast-garlic-dosa-masala',
    name: 'Roast Garlic Dosa (Masala)',
    category: 'classic-dosas',
    description: 'Aromatic roasted garlic spread layered with our signature spiced potato filling inside a crunchy crepe.',
    image: '/images/masala_dosa.jpg',
    priceButter: 189,
    priceGhee: 199,
    spiceLevel: 'medium',
    dietary: 'pure-veg',
    ingredients: ['Roasted Garlic Infusion', 'Tempered Potato Masala', 'Crispy Golden Batter']
  },
  {
    id: 'roast-garlic-dosa-paneer',
    name: 'Roast Garlic Dosa (Paneer)',
    category: 'classic-dosas',
    description: 'Roasted garlic aroma combined with delicate seasoned malai paneer for a rich, aromatic specialty experience.',
    image: '/images/paneer_dosa_exact.jpg',
    priceButter: 209,
    priceGhee: 219,
    spiceLevel: 'medium',
    dietary: 'pure-veg',
    ingredients: ['Roasted Garlic Spread', 'Spiced Crumbled Paneer', 'Golden Crepe']
  },

  // Specialty Creations & Benne Dosas
  {
    id: 'tirumala-special-dosa',
    name: 'Tirumala Special Dosa',
    category: 'specialty-benne',
    description: 'House Special. An exquisite open-faced feast loaded with roasted dry fruits, marinated paneer, sweet corn, green peas, and molten cheese.',
    image: '/images/paneer_dosa_exact.jpg',
    priceButter: 269,
    priceGhee: 279,
    isHouseSpecial: true,
    spiceLevel: 'medium',
    dietary: 'pure-veg',
    ingredients: ['Cashews & Dry Fruits', 'Fresh Malai Paneer', 'Green Peas & Sweet Corn', 'House Special Spices', 'Melted Cheese Glaze']
  },
  {
    id: 'benne-podi-masala-dosa',
    name: 'Benne Podi Masala Dosa',
    category: 'specialty-benne',
    description: 'Chef\'s Special. Iconic Davangere-style thick, fluffy, ultra-crispy dosa slathered with freshly churned white butter (benne) and coarse gun powder podi.',
    image: '/images/benne_podi_dosa.jpg',
    priceFixed: 199,
    isChefSpecial: true,
    spiceLevel: 'medium',
    dietary: 'jain-available',
    ingredients: ['Davangere-style Thick Batter', 'Fresh Churned White Butter (Benne)', 'Spicy Gunpowder Podi', 'Spiced Potato Filling']
  },
  {
    id: 'paneer-benne-dosa',
    name: 'Paneer Benne Dosa',
    category: 'specialty-benne',
    description: 'Thick pillowy butter dosa crusted in white butter, layered with succulent seasoned paneer and aromatic South Indian herbs.',
    image: '/images/paneer_dosa_exact.jpg',
    priceFixed: 219,
    spiceLevel: 'medium',
    dietary: 'jain-available',
    ingredients: ['Churned White Butter', 'Spiced Crumbled Paneer', 'Crisp Base', 'Curry Leaf Podi']
  },
  {
    id: 'cheese-benne-dosa',
    name: 'Cheese Benne Dosa',
    category: 'specialty-benne',
    description: 'The ultimate indulgence of churned white benne butter topped with generous strings of bubbling melted cheese.',
    image: '/images/cheese_dosa_exact.jpg',
    priceFixed: 229,
    spiceLevel: 'mild',
    dietary: 'pure-veg',
    ingredients: ['Fresh White Benne Butter', 'Aged Cheese Blend', 'Thick Golden Dosa Base']
  },
  {
    id: 'mysore-benne-masala-dosa',
    name: 'Mysore Benne Masala Dosa',
    category: 'specialty-benne',
    description: 'Crispy thick Davangere benne base glazed with red Byadgi chili-garlic paste and topped with comforting potato mash.',
    image: '/images/dosa_cheese_mysore_opt.jpg',
    priceFixed: 209,
    spiceLevel: 'fiery',
    dietary: 'pure-veg',
    ingredients: ['White Butter (Benne)', 'Fiery Mysore Red Chutney', 'Potato Masala', 'Thick Crispy Crepe']
  },
  {
    id: 'roast-garlic-cheese-dosa',
    name: 'Roast Garlic Cheese Dosa',
    category: 'specialty-benne',
    description: 'Slow-roasted nutty garlic butter spread topped with rich melted cheese for an unforgettable savory explosion.',
    image: '/images/cheese_dosa_exact.jpg',
    priceButter: 219,
    priceGhee: 229,
    spiceLevel: 'medium',
    dietary: 'pure-veg',
    ingredients: ['Confit Roasted Garlic', 'Molten Cheese', 'Crisp Butter Dosa']
  },
  {
    id: 'surting-dosa',
    name: 'Surting Dosa',
    category: 'specialty-benne',
    description: 'Sizzling open-top specialty dosa layered with finely chopped vegetables, special masala gravy, and fresh cheese shavings.',
    image: '/images/cheese_corn_dosa_exact.jpg',
    priceButter: 239,
    priceGhee: 249,
    spiceLevel: 'medium',
    dietary: 'pure-veg',
    ingredients: ['Open-top Crispy Crepe', 'Mixed Garden Vegetables', 'Sizzling Special Masala', 'Grated Cheese']
  },
  {
    id: 'south-indian-platter',
    name: 'South Indian Platter',
    category: 'specialty-benne',
    description: 'Grand chef assortment: tasting portions of specialty dosas, piping hot complimentary rasam, fragrant drumstick sambar, and artisanal chutney trio.',
    image: '/images/south_indian_platter.jpg',
    priceFixed: 329,
    isHouseSpecial: true,
    spiceLevel: 'medium',
    dietary: 'pure-veg',
    ingredients: ['Specialty Dosa Sampler', 'Hot Rasam Broth', 'Simmered Sambar', 'Coconut, Tomato & Mint Chutneys']
  },

  // Accompaniments & Beverages
  {
    id: 'traditional-filter-coffee',
    name: 'Traditional Filter Coffee',
    category: 'accompaniments',
    description: 'Authentic South Indian chicory blend brewed in brass filters, frothed with hot rich milk in traditional brass davarah & tumbler.',
    image: '/images/filter_coffee.jpg',
    priceFixed: 65,
    spiceLevel: 'mild',
    dietary: 'pure-veg',
    ingredients: ['Plantation A Coffee Beans', 'Roasted Chicory Extract', 'Fresh Full-Cream Milk', 'Jaggery/Sugar']
  },
  {
    id: 'chutney-trio-sambar',
    name: 'Heritage Chutney Trio & Sambar',
    category: 'accompaniments',
    description: 'Complimentary with every dosa: freshly grated coconut chutney with mustard tempering, roasted shallot tomato chutney, and drumstick sambar.',
    image: '/images/south_indian_platter.jpg',
    isComplimentary: true,
    priceFixed: 0,
    spiceLevel: 'medium',
    dietary: 'pure-veg',
    ingredients: ['Fresh Coconut Chutney', 'Fiery Tomato Chutney', 'Mint-Coriander Chutney', 'Shallot Drumstick Sambar']
  }
];

export const CULINARY_GALLERY: FoodGalleryItem[] = [
  {
    id: 'gal-1',
    title: 'The Cast-Iron Hearth Sizzle',
    subtitle: 'Crispy Lattice Perfection',
    image: '/images/live_tawa.jpg',
    tag: 'Live Tawa',
    description: 'Watch our craftsmen swirl fermented stone-ground batter on seasoned iron griddles at 300°C with generous pure desi ghee.'
  },
  {
    id: 'gal-2',
    title: 'Hot Rasam (Bowl Only)',
    subtitle: 'Signature Welcome Sip',
    image: '/images/rasam_bowl_pure.jpg',
    tag: 'Welcome Sip',
    description: 'Piping hot tomato-tamarind broth in a standalone bowl infused with crushed black pepper, garlic, and fresh curry leaves (served in a bowl, not a full plate).'
  },
  {
    id: 'gal-3',
    title: 'Davangere Benne Podi Dosa',
    subtitle: 'Fresh Churned White Butter',
    image: '/images/benne_podi_dosa.jpg',
    tag: 'Chef Special',
    description: 'A thick, pillowy, crispy crust slathered with freshly churned white butter (benne) and coarse gun powder podi.'
  },
  {
    id: 'gal-4',
    title: 'Tirumala Special Dosa',
    subtitle: 'House Creation with Dry Fruits & Paneer',
    image: '/images/paneer_dosa_exact.jpg',
    tag: 'House Special',
    description: 'Our luxurious signature creation topped with roasted cashews, fresh malai paneer, sweet corn, green peas, and molten cheese.'
  },
  {
    id: 'gal-5',
    title: 'Grand South Indian Platter',
    subtitle: 'The Ultimate Authentic Feast',
    image: '/images/south_indian_platter.jpg',
    tag: 'Grand Feast',
    description: 'A grand banana leaf banquet with crispy dosa varieties, steaming sambar, complimentary hot rasam, and coconut chutney trio.'
  },
  {
    id: 'gal-6',
    title: 'Brass Davarah Filter Coffee',
    subtitle: 'Slow-Drip Heritage Brew',
    image: '/images/filter_coffee.jpg',
    tag: 'South Indian Brew',
    description: 'Fresh decoction frothed from arm’s height in traditional brass ware with full-cream milk and rich aroma.'
  }
];
