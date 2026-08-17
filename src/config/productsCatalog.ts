export interface SubCategoryItem {
  id: string;
  name: string;
  iconName?: string;
}

export interface CatalogProduct {
  id: string;
  code: string;
  name: string;
  category: string;
  subCategory: string;
  description: string;
  image: string;
  badge?: string;
  material?: string;
  finish?: string;
  features?: string[];
  compliance?: string[];
  moq?: string;
  leadTime?: string;
  applications?: string[];
  optionsCount?: string;
  specifications?: Record<string, string>;
}

export interface CategoryData {
  id: string;
  title: string;
  titleLight: string;
  titleGold: string;
  breadcrumb: string;
  heroImage: string;
  heroTagline: string;
  description: string;
  badges: string[];
  subCategories: { id: string; name: string; icon?: string }[];
  products: CatalogProduct[];
  sourcingBrands: { name: string; logoText: string; isBold?: boolean }[];
  stats: { value: string; label: string }[];
}

export const MAIN_CATEGORY_CARDS = [
  {
    id: 'sanitary',
    slug: 'sanitary',
    title: 'Sanitaryware',
    description: 'Wash Basins, WC, Urinals & more',
    image: '/senitary bath/sink-faucet.jpg',
    subCategories: ['Wash Basins', 'Water Closets', 'Urinals', 'Bidets'],
  },
  {
    id: 'faucets',
    slug: 'sanitary',
    title: 'Faucets & Taps',
    description: 'Basin Mixer, Wall Mixer, Pillar Cock & more',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    subCategories: ['Basin Mixer', 'Wall Mixer', 'Pillar Cock'],
  },
  {
    id: 'showers',
    slug: 'sanitary',
    title: 'Showers',
    description: 'Overhead, Hand Showers, Shower Panels & more',
    image: '/senitary bath/modern-bathroom-with-blue-tile-glass-shower.jpg',
    subCategories: ['Overhead Showers', 'Hand Showers', 'Thermostatic Columns'],
  },
  {
    id: 'bathroom-accessories',
    slug: 'sanitary',
    title: 'Bathroom Accessories',
    description: 'Towel Rack, Soap Dispenser, Grab Bars & more',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    subCategories: ['Towel Racks', 'Soap Dispensers', 'Grab Bars'],
  },
  {
    id: 'commercial-washroom',
    slug: 'sanitary',
    title: 'Commercial Washroom',
    description: 'Hand Dryers, Paper Dispensers, Waste Bins & more',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    subCategories: ['Hand Dryers', 'Sensor Soap Dispensers', 'Waste Bins'],
  },
  {
    id: 'entrance-solutions',
    slug: 'entrance',
    title: 'Entrance Solutions',
    description: 'Door Hardware, Access Control, Automatic Doors & more',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    subCategories: ['Revolving Doors', 'Automatic Sliding Doors', 'Turnstiles'],
  },
  {
    id: 'plumbing-hardware',
    slug: 'sanitary',
    title: 'Plumbing & Hardware',
    description: 'Pipes, Fittings, Valves, Drainage & more',
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    subCategories: ['Pipes', 'Valves', 'Floor Drains'],
  },
  {
    id: 'industrial-supplies',
    slug: 'industrial',
    title: 'Industrial Supplies',
    description: 'Safety Equipment, Tools, Adhesives & more',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    subCategories: ['Air Curtains', 'PVC Strip Curtains', 'Safety Gear'],
  },
];

export const CATEGORIES_DATA: Record<string, CategoryData> = {
  sanitary: {
    id: 'sanitary',
    title: 'Sanitary & Bathroom Solutions',
    titleLight: 'Sanitary &',
    titleGold: 'Bathroom Solutions',
    breadcrumb: 'Sanitary & Bathroom Solutions',
    heroImage: '/verona_hero_bathroom.jpg',
    heroTagline: 'Complete range of premium sanitary ware, faucets, showers and bathroom accessories for every type of space. Multiple brands. Multiple options. Right fit for your project.',
    description: 'From elegant basins to water closets and urinals – explore a wide range of designs, materials and configurations to suit every project requirement.',
    badges: [
      'Wide Range of Products',
      'Multiple Brands & Specifications',
      'Quality Assured',
      'Best Price Guaranteed',
      'On-time Delivery',
    ],
    subCategories: [
      { id: 'sanitaryware', name: 'Sanitaryware', icon: 'bath' },
      { id: 'faucets', name: 'Faucets & Taps', icon: 'faucet' },
      { id: 'showers', name: 'Showers', icon: 'shower' },
      { id: 'accessories', name: 'Bathroom Accessories', icon: 'accessory' },
      { id: 'flush-systems', name: 'Flush Systems', icon: 'flush' },
      { id: 'bathtubs', name: 'Bathtubs', icon: 'tub' },
      { id: 'urinals-bidets', name: 'Urinals & Bidets', icon: 'urinal' },
      { id: 'health-faucets', name: 'Health Faucets', icon: 'health' },
      { id: 'drains', name: 'Floor Drains & Channels', icon: 'drain' },
      { id: 'soap-dispensers', name: 'Soap Dispensers', icon: 'soap' },
      { id: 'safety', name: 'Grab Bars & Safety', icon: 'safety' },
      { id: 'mirrors', name: 'Mirrors', icon: 'mirror' },
    ],
    stats: [
      { value: '500+', label: 'Products' },
      { value: '25+', label: 'Brands' },
      { value: '1000+', label: 'Projects Supplied' },
      { value: 'Pan India', label: 'Delivery' },
    ],
    sourcingBrands: [
      { name: 'KOHLER', logoText: 'KOHLER', isBold: true },
      { name: 'Jaquar', logoText: 'Jaquar', isBold: true },
      { name: 'GROHE', logoText: 'GROHE', isBold: true },
      { name: 'hindware', logoText: 'hindware' },
      { name: 'CERA', logoText: 'CERA', isBold: true },
      { name: 'Parryware', logoText: 'Parryware' },
      { name: 'American Standard', logoText: 'American Standard' },
    ],
    products: [
      {
        id: 'counter-top-basin',
        code: 'SPEC-SAN-01',
        name: 'Counter Top Basin',
        category: 'Sanitaryware',
        subCategory: 'Wash Basins',
        description: 'Premium Porcelain, Multiple Sizes Available',
        image: '/senitary bath/sink-faucet.jpg',
        material: 'Fine Vitreous China',
        finish: 'HygieneGlaze Gloss White / Matte Anthracite',
        moq: '20 Units',
        leadTime: '5-7 Days',
        optionsCount: '12 Configurations',
      },
      {
        id: 'one-piece-closet',
        code: 'SPEC-SAN-02',
        name: 'One Piece Closet',
        category: 'Sanitaryware',
        subCategory: 'Water Closets',
        description: 'Siphonic Flushing, Multiple Configurations',
        image: '/senitary bath/pexels-artbovich-7534282.jpg',
        material: 'High-Density Vitreous China',
        finish: 'Gloss White Dual Flush',
        moq: '15 Units',
        leadTime: '7-10 Days',
        optionsCount: '8 Configurations',
      },
      {
        id: 'wall-hung-closet',
        code: 'SPEC-SAN-03',
        name: 'Wall Hung Closet',
        category: 'Sanitaryware',
        subCategory: 'Wall Hung WC',
        description: 'Concealed Installation, Space Saving Design',
        image: '/senitary bath/small-bathroom-with-modern-style-ai-generated.jpg',
        material: 'Vitreous China & Steel Frame',
        finish: 'Matte Black / Alpine White',
        moq: '25 Units',
        leadTime: '5-7 Days',
        optionsCount: '10 Configurations',
      },
      {
        id: 'urinal-wall-mounted',
        code: 'SPEC-SAN-04',
        name: 'Urinal',
        category: 'Sanitaryware',
        subCategory: 'Urinals',
        description: 'Wall Mounted, Water Efficient',
        image: '/senitary bath/pexels-matreding-11299685.jpg',
        material: 'Antimicrobial Porcelain',
        finish: 'Gloss White / Sensor Operated',
        moq: '30 Units',
        leadTime: '7-12 Days',
        optionsCount: '6 Configurations',
      },
      {
        id: 'bidet-modern',
        code: 'SPEC-SAN-05',
        name: 'Bidet',
        category: 'Sanitaryware',
        subCategory: 'Bidets',
        description: 'Modern Design, Premium Quality',
        image: '/senitary bath/pexels-artbovich-6933779.jpg',
        material: 'Vitreous Ceramic',
        finish: 'Satin White / Chrome Fitting',
        moq: '10 Units',
        leadTime: '10 Days',
        optionsCount: '4 Configurations',
      },
      {
        id: 'wall-mounted-basin',
        code: 'SPEC-SAN-06',
        name: 'Wall Mounted Basin',
        category: 'Sanitaryware',
        subCategory: 'Wash Basins',
        description: 'Space Saving, Multiple Sizes Available',
        image: '/senitary bath/sink-faucet.jpg',
        material: 'Fine Fireclay',
        finish: 'White Glossy',
        moq: '20 Units',
        leadTime: '5 Days',
        optionsCount: '15 Configurations',
      },
      {
        id: 'pedestal-basin',
        code: 'SPEC-SAN-07',
        name: 'Pedestal Basin',
        category: 'Sanitaryware',
        subCategory: 'Wash Basins',
        description: 'Elegant & Durable, Easy to Install',
        image: '/senitary bath/pexels-artbovich-7534282.jpg',
        material: 'Vitreous China',
        finish: 'Alpine White',
        moq: '15 Units',
        leadTime: '7 Days',
        optionsCount: '6 Configurations',
      },
      {
        id: 'smart-closet',
        code: 'SPEC-SAN-08',
        name: 'Smart Closet',
        category: 'Sanitaryware',
        subCategory: 'Water Closets',
        description: 'Advanced Features, Premium Experience',
        image: '/senitary bath/small-bathroom-with-modern-style-ai-generated.jpg',
        material: 'Smart Ceramic & Bidet Seat',
        finish: 'Gloss White / Remote Control',
        moq: '5 Units',
        leadTime: '12 Days',
        optionsCount: '5 Configurations',
      },
    ],
  },

  hospitality: {
    id: 'hospitality',
    title: 'Hotel Amenities & Hospitality Supplies',
    titleLight: 'Hotel Amenities &',
    titleGold: 'Hospitality Supplies',
    breadcrumb: 'Hotel Amenities & Hospitality Supplies',
    heroImage: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
    heroTagline: 'Complete range of premium hotel amenities, guestroom essentials and hospitality supplies to elevate guest experience and operational efficiency.',
    description: 'Explore our complete range of premium hotel amenities and hospitality supplies.',
    badges: [
      'Wide Range of Products',
      'Multiple Brands & Options',
      'Premium Quality',
      'Reliable Delivery',
    ],
    subCategories: [
      { id: 'in-room-amenities', name: 'In Room Amenities' },
      { id: 'in-room-bathroom-amenities', name: 'In Room Bathroom Amenities' },
      { id: 'common-lobby-accessories', name: 'Common Lobby Accessories' },
      { id: 'hotel-banquet-accessories', name: 'Hotel Banquet Accessories & Furniture' },
    ],
    stats: [
      { value: '500+', label: 'Products' },
      { value: 'Multiple', label: 'Brands' },
      { value: 'Premium', label: 'Quality' },
      { value: 'Pan India', label: 'Delivery' },
    ],
    sourcingBrands: [
      { name: 'Diversey', logoText: 'Diversey', isBold: true },
      { name: 'TORK', logoText: 'TORK', isBold: true },
      { name: 'Kimberly-Clark', logoText: 'Kimberly-Clark Professional' },
      { name: 'ITC HOTELS', logoText: 'ITC HOTELS', isBold: true },
      { name: 'HÄFELE', logoText: 'HÄFELE', isBold: true },
    ],
    products: [
      // In Room Amenities
      {
        id: 'electric-kettle',
        code: 'HOSP-01',
        name: 'Electric Kettle',
        category: 'In Room Amenities',
        subCategory: 'In Room Amenities',
        description: '0.8L Double Wall Cool Touch Stainless Kettle',
        image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'rfid-door-lock',
        code: 'HOSP-02',
        name: 'RFID Door Lock',
        category: 'In Room Amenities',
        subCategory: 'In Room Amenities',
        description: 'Contactless Smart Access Control Card Lock',
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'digital-safe-locker',
        code: 'HOSP-03',
        name: 'Digital Safe Locker',
        category: 'In Room Amenities',
        subCategory: 'In Room Amenities',
        description: 'Motorized Electronic Laptop Safe with Master Key',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'mini-bar-fridge',
        code: 'HOSP-04',
        name: 'Mini Bar Fridge',
        category: 'In Room Amenities',
        subCategory: 'In Room Amenities',
        description: 'Zero Decibel Silent Absorption Refrigeration 40L',
        image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'coffee-machine',
        code: 'HOSP-05',
        name: 'Coffee Machine',
        category: 'In Room Amenities',
        subCategory: 'In Room Amenities',
        description: 'Compact Espresso Capsule Coffee Brewer',
        image: 'https://images.unsplash.com/photo-1517668808822-9ebe02f2a6ee?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'landline-phone',
        code: 'HOSP-06',
        name: 'Landline Phones',
        category: 'In Room Amenities',
        subCategory: 'In Room Amenities',
        description: 'Hotel Guestroom IP / Analog Desk Telephone',
        image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80',
      },

      // In Room Bathroom Amenities
      {
        id: 'hair-dryer',
        code: 'HOSP-07',
        name: 'Hair Dryers',
        category: 'In Room Bathroom Amenities',
        subCategory: 'In Room Bathroom Amenities',
        description: 'Wall Mounted 1600W Ionic Hotel Hair Dryer',
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'magnifying-mirror',
        code: 'HOSP-08',
        name: 'Magnifying Mirror',
        category: 'In Room Bathroom Amenities',
        subCategory: 'In Room Bathroom Amenities',
        description: 'LED Illuminated Wall Dual Arm 3X/5X Mirror',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'soap-dispenser-set',
        code: 'HOSP-09',
        name: 'Soap / Shampoo Dispensers',
        category: 'In Room Bathroom Amenities',
        subCategory: 'In Room Bathroom Amenities',
        description: 'Tamper Proof Refillable Wall Mounted Dispenser',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'digital-weight-scale',
        code: 'HOSP-10',
        name: 'Digital Weight Scale',
        category: 'In Room Bathroom Amenities',
        subCategory: 'In Room Bathroom Amenities',
        description: 'Tempered Glass Precision Hotel Body Scale',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      },

      // Common Lobby Accessories
      {
        id: 'room-dustbin',
        code: 'HOSP-11',
        name: 'Room Dustbin',
        category: 'Common Lobby Accessories',
        subCategory: 'Common Lobby Accessories',
        description: 'Stainless Steel Double Layer Fire-Safe Waste Bin',
        image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'steam-iron',
        code: 'HOSP-12',
        name: 'Steam Iron',
        category: 'Common Lobby Accessories',
        subCategory: 'Common Lobby Accessories',
        description: 'Auto-Off Safety Dry & Steam Iron',
        image: 'https://images.unsplash.com/photo-1585832770485-e68a5fcfad52?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'luggage-rack',
        code: 'HOSP-13',
        name: 'Luggage Rack',
        category: 'Common Lobby Accessories',
        subCategory: 'Common Lobby Accessories',
        description: 'Folding Wooden / Stainless Luggage Stand',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      },

      // Banquet & Furniture
      {
        id: 'hotel-trolley',
        code: 'HOSP-14',
        name: 'Hotel Trolleys',
        category: 'Hotel Banquet Accessories & Furniture',
        subCategory: 'Hotel Banquet Accessories & Furniture',
        description: 'Brass Bellman Luggage Cart & Service Trolley',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'handicap-wheelchair',
        code: 'HOSP-15',
        name: 'Handicap Wheelchair',
        category: 'Hotel Banquet Accessories & Furniture',
        subCategory: 'Hotel Banquet Accessories & Furniture',
        description: 'Foldable Lightweight Assistive Mobility Chair',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },

  industrial: {
    id: 'industrial',
    title: 'Industrial Solutions',
    titleLight: 'Industrial',
    titleGold: 'Solutions',
    breadcrumb: 'Industrial Solutions',
    heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    heroTagline: 'High-performance industrial products and solutions designed to improve safety, hygiene, efficiency, and workplace productivity.',
    description: 'Explore our complete range of industrial products and workplace solutions.',
    badges: [
      'Wide Range of Products',
      'Premium Quality',
      'Reliable Delivery',
      'Expert Support',
    ],
    subCategories: [
      { id: 'air-curtain', name: 'Air Curtain' },
      { id: 'pvc-strip-curtains', name: 'PVC Strip Curtains' },
      { id: 'eye-wash-station', name: 'Eye Wash Station' },
      { id: 'queue-managers', name: 'Queue Managers' },
      { id: 'shoe-shining-machine', name: 'Shoe Shining Machine' },
      { id: 'shoe-cover-dispenser', name: 'Shoe Cover Dispenser' },
      { id: 'sole-cleaning-machine', name: 'Sole Cleaning Machine' },
      { id: 'other-industrial', name: 'Other Industrial Solutions' },
    ],
    stats: [
      { value: '1000+', label: 'Industrial SKUs' },
      { value: 'ATEX', label: 'Compliance' },
      { value: '24/7', label: 'Support' },
      { value: 'Pan India', label: 'Logistics' },
    ],
    sourcingBrands: [
      { name: 'DORMA', logoText: 'DORMA', isBold: true },
      { name: '3M', logoText: '3M', isBold: true },
      { name: 'Nilfisk', logoText: 'Nilfisk' },
      { name: 'KÄRCHER', logoText: 'KÄRCHER', isBold: true },
      { name: 'TORK', logoText: 'TORK' },
      { name: 'Honeywell', logoText: 'Honeywell', isBold: true },
    ],
    products: [
      // Air Curtain
      {
        id: 'wall-mounted-air-curtain',
        code: 'IND-01',
        name: 'Wall Mounted Air Curtain',
        category: 'Air Curtain',
        subCategory: 'Air Curtain',
        description: 'High-Velocity Commercial Air Barrier 1.2M - 2.0M',
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'ceiling-mounted-air-curtain',
        code: 'IND-02',
        name: 'Ceiling Mounted Air Curtain',
        category: 'Air Curtain',
        subCategory: 'Air Curtain',
        description: 'Recessed Invisible False Ceiling Climate Barrier',
        image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'cassette-air-curtain',
        code: 'IND-03',
        name: 'Cassette Air Curtain',
        category: 'Air Curtain',
        subCategory: 'Air Curtain',
        description: 'Compact 360-Degree Modular Discharge Air Shield',
        image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
      },

      // PVC Strip Curtains
      {
        id: 'standard-ribbed-pvc',
        code: 'IND-04',
        name: 'Standard Ribbed PVC Strip',
        category: 'PVC Strip Curtains',
        subCategory: 'PVC Strip Curtains',
        description: 'Transparent Heavy Duty Industrial Warehouse Curtain',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'smooth-pvc-strip',
        code: 'IND-05',
        name: 'Smooth PVC Strip',
        category: 'PVC Strip Curtains',
        subCategory: 'PVC Strip Curtains',
        description: 'Clear Dust and Insect Isolation Strip Door',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      },

      // Eye Wash Station
      {
        id: 'wall-mounted-eyewash',
        code: 'IND-06',
        name: 'Wall Mounted Eye Wash',
        category: 'Eye Wash Station',
        subCategory: 'Eye Wash Station',
        description: 'ANSI Z358.1 Emergency Stainless Dual Spray Station',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'floor-mounted-eyewash',
        code: 'IND-07',
        name: 'Floor Mounted Eye Wash',
        category: 'Eye Wash Station',
        subCategory: 'Eye Wash Station',
        description: 'Pedestal Combination Eye & Face Wash Shower Unit',
        image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
      },

      // Queue Managers
      {
        id: 'retractable-belt-stanchion',
        code: 'IND-08',
        name: 'Retractable Belt Stanchion',
        category: 'Queue Managers',
        subCategory: 'Queue Managers',
        description: 'Heavy Base 3M Retractable Crowd Control Barrier',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'fixed-rope-stanchion',
        code: 'IND-09',
        name: 'Fixed Rope Stanchion',
        category: 'Queue Managers',
        subCategory: 'Queue Managers',
        description: 'Polished Brass Velvet Rope VIP Barrier Post',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
      },

      // Shoe Shining Machine
      {
        id: 'automatic-shoe-shiner',
        code: 'IND-10',
        name: 'Automatic Shoe Shiner',
        category: 'Shoe Shining Machine',
        subCategory: 'Shoe Shining Machine',
        description: 'Infrared Sensor Motorized Dual Brush Shoe Polisher',
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      },

      // Shoe Cover Dispenser
      {
        id: 'automatic-shoe-cover',
        code: 'IND-11',
        name: 'Automatic Shoe Cover Dispenser',
        category: 'Shoe Cover Dispenser',
        subCategory: 'Shoe Cover Dispenser',
        description: 'Hands-Free Cleanroom Disposable Shoe Bootie Applicator',
        image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
      },

      // Sole Cleaning Machine
      {
        id: 'sole-cleaning-machine',
        code: 'IND-12',
        name: 'Automatic Sole Cleaner',
        category: 'Sole Cleaning Machine',
        subCategory: 'Sole Cleaning Machine',
        description: 'Pass-Through Wet Brush Shoe Sole Washer Station',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
};

export const ENTRANCE_CATEGORY = CATEGORIES_DATA.industrial; // Fallback mapping for entrance
