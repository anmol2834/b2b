export interface ProductSpecItem {
  id: string;
  code: string;
  name: string;
  category: string;
  image: string;
  summary: string;
  material: string;
  finish: string;
  compliance: string[];
  moq: string;
  leadTime: string;
  applications: string[];
}

export interface DivisionData {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  targetSectors: string[];
  capabilities: string[];
  categories?: string[];
  certifications: string[];
  specSheetDoc: string;
  skuCount: string;
  metrics: { label: string; value: string }[];
  products: ProductSpecItem[];
}

export const DIVISIONS: Record<string, DivisionData> = {
  sanitary: {
    id: 'sanitary',
    name: 'Sanitary Fixtures & Commercial Bathroom Solutions',
    shortName: 'Sanitary & Bath',
    tagline: 'High-traffic commercial hygiene, sensor automation & LEED compliance',
    description: 'Commercial sensor faucets, concealed in-wall cistern systems, vitreous china sanitaryware, thermostatic shower columns, and ADA compliant fixtures for grade-A commercial towers and 5-star hospitality developments.',
    targetSectors: ['Luxury Hotels', 'Commercial Towers', 'Hospitals & Clinics', 'Premium Residential Estates'],
    skuCount: '18,500+ SKUs',
    capabilities: [
      'Concealed Cistern Systems',
      'Sensor & Touchless Faucets',
      'Vitreous China Sanitaryware',
      'Thermostatic Shower Columns',
      'ADA Compliant Assisted Living Fittings',
    ],
    certifications: ['LEED v4.1 Platinum', 'WRAS Approved', 'ADA Compliant', 'WaterSense EPA', 'Zero-Lead NSF/ANSI 61'],
    specSheetDoc: 'Download Wholesale Sanitary Catalogue (PDF)',
    metrics: [
      { label: 'Flow Efficiency', value: '0.35 GPM LEED Gold' },
      { label: 'Actuation Rating', value: '500,000+ Cycles' },
      { label: 'Sourcing SLA', value: 'Direct Factory Contract' },
    ],
    products: [
      {
        id: 'san-01',
        code: 'SPEC-SAN-01',
        name: 'Concealed Thermostatic Rain Shower System',
        category: 'Hospitality Showering',
        image: '/senitary bath/modern-bathroom-with-blue-tile-glass-shower.jpg',
        summary: 'Solid forged brass thermostatic cartridge with 38°C safety anti-scald lock and dual volume controls.',
        material: 'Forged Solid Brass CW617N',
        finish: 'PVD Brushed Gold / Matte Black / Chrome',
        compliance: ['WRAS Approved', 'EN 1111', 'LEED Platinum'],
        moq: '25 Sets',
        leadTime: '7-14 Business Days',
        applications: ['5-Star Hotel Suites', 'Presidential Villas', 'Executive Residential'],
      },
      {
        id: 'san-02',
        code: 'SPEC-SAN-02',
        name: 'Dual-Sensor Infrared Touchless Basin Faucet',
        category: 'Commercial Washrooms',
        image: '/senitary bath/sink-faucet.jpg',
        summary: 'Solid brass body with hermetically sealed dual-infrared sensors and integrated 60s safety timeout.',
        material: 'DZR Brass Alloy',
        finish: 'Electro-Deposited Matte Black / Satin Stainless',
        compliance: ['NSF/ANSI 61', 'CE Marking', 'WaterSense 0.35 GPM'],
        moq: '50 Units',
        leadTime: '5-10 Business Days',
        applications: ['Airport Terminals', 'Corporate Headquarters', 'Commercial Malls'],
      },
      {
        id: 'san-03',
        code: 'SPEC-SAN-03',
        name: 'In-Wall Concealed Cistern & Pneumatic Actuator',
        category: 'Concealed Flushing',
        image: '/senitary bath/pexels-matreding-11299685.jpg',
        summary: 'Heavy-duty steel powder-coated mounting frame supporting 400kg static load with dual-flush 4.5L/3L valve.',
        material: 'High-Density HDPE & Q235 Steel Frame',
        finish: 'Zinc-Phosphated & Electrostatic Powder Coat',
        compliance: ['EN 14055', 'DIN 4109 Acoustic Class 1'],
        moq: '30 Frames',
        leadTime: '7-12 Business Days',
        applications: ['Grade-A Offices', 'Luxury Hotel En-Suites', 'Healthcare Facilities'],
      },
      {
        id: 'san-04',
        code: 'SPEC-SAN-04',
        name: 'Rimless Vitreous China Wall-Hung WC Suite',
        category: 'Architectural Ceramics',
        image: '/senitary bath/small-bathroom-with-modern-style-ai-generated.jpg',
        summary: 'Nano-glazed antimicrobial vitreous china bowl with 360-degree vortex flush and UF soft-close seat.',
        material: 'Fine Fireclay Vitreous China',
        finish: 'HygieneGlaze Gloss White / Matte Anthracite',
        compliance: ['EN 997 Class 1', 'CE Ceramic Standards'],
        moq: '40 Pieces',
        leadTime: '10-18 Business Days',
        applications: ['5-Star Resorts', 'Convention Centers', 'Executive Restrooms'],
      },
    ],
  },
  hospitality: {
    id: 'hospitality',
    name: 'Hotel Amenities & Hospitality FF&E Supplies',
    shortName: 'Hospitality Supplies',
    tagline: 'Bespoke hotel FF&E, certified organic amenities & guest room tech',
    description: 'Custom formulation wet amenities, 400+ TC luxury bed & bath linen, in-room digital laptop safes, absorption silent minibars, and motorized housekeeping fleets for luxury hospitality portfolios.',
    targetSectors: ['5-Star Resorts', 'Boutique Heritage Hotels', 'Serviced Luxury Apartments', 'Fine Dining Chains'],
    skuCount: '12,200+ SKUs',
    capabilities: [
      'Custom Formulation Wet Amenities',
      '400+ TC Luxury Bed & Bath Linen',
      'In-Room Digital Safes & Minibars',
      'Luggage & Housekeeping Fleet Units',
      'Commercial Buffet & Foodservice Hardware',
    ],
    certifications: ['OEKO-TEX Standard 100', 'Ecolabel Certified', 'ISO 22716 GMP Cosmetic', 'FSC Certified Packaging'],
    specSheetDoc: 'Download Hospitality Bulk Line-Card (PDF)',
    metrics: [
      { label: 'Hotels Equipped', value: '180+ Luxury Properties' },
      { label: 'Private Labeling', value: 'Full OEM / ODM Formulation' },
      { label: 'Linen Standard', value: '100% Long-Staple Cotton' },
    ],
    products: [
      {
        id: 'hosp-01',
        code: 'SPEC-HOS-01',
        name: '400TC Egyptian Cotton Sateen Bedding Suite',
        category: 'Luxury Suite Linens',
        image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80',
        summary: 'Single-ply long-staple combed cotton with mercerized sateen weave, reinforced double-needle stitched hem.',
        material: '100% Giza Egyptian Cotton',
        finish: 'Silken Sateen White / Platinum Stripe',
        compliance: ['OEKO-TEX 100 Class 1', 'ISO 9001 Textile QA'],
        moq: '100 Sets',
        leadTime: '14-21 Business Days',
        applications: ['Presidential Suites', '5-Star Resort Rooms', 'Luxury Villas'],
      },
      {
        id: 'hosp-02',
        code: 'SPEC-HOS-02',
        name: 'Organic Botanical Wet Amenity Dispenser Set',
        category: 'Guestroom Toiletries',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
        summary: 'Custom formulated shampoo, conditioner, body wash, and lotion in lockable tamper-proof aluminum wall brackets.',
        material: 'PCR Recycled Resin / Anodized Aluminum Bracket',
        finish: 'Matte Amber / Frosted White / Gunmetal',
        compliance: ['EU Cosmetics Regulation 1223/2009', 'Vegan & Cruelty Free'],
        moq: '500 Sets',
        leadTime: '10-15 Business Days',
        applications: ['Eco-Resorts', 'Boutique Hotel Chains', 'Wellness Spas'],
      },
      {
        id: 'hosp-03',
        code: 'SPEC-HOS-03',
        name: 'Zero-Decibel Absorption Smart Minibar',
        category: 'Guest Room Technology',
        image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80',
        summary: 'Silent Peltier/absorption refrigeration with automatic interior LED lighting, reversible tempered glass door.',
        material: 'Insulated Polyurethane & Tempered Glass',
        finish: 'Matte Black Architectural Housing',
        compliance: ['Energy Star Class A++', 'CE / RoHS Certified'],
        moq: '40 Units',
        leadTime: '10-14 Business Days',
        applications: ['Hospitality Guestrooms', 'VIP Lounges', 'Executive Suites'],
      },
      {
        id: 'hosp-04',
        code: 'SPEC-HOS-04',
        name: 'Heavy-Duty Motorized Housekeeping Trolley',
        category: 'Facility Operations',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
        summary: 'Aircraft-grade anodized aluminum chassis with ergonomic motorized electric drive, linen dividers, and silent casters.',
        material: 'Structural Aluminum & High-Impact Polymers',
        finish: 'Brushed Titanium / Anodized Bronze',
        compliance: ['OSHA Ergonomics Guidelines', 'CE Machinery Directive'],
        moq: '10 Units',
        leadTime: '14-20 Business Days',
        applications: ['Mega Hotels (500+ Keys)', 'Casino Resorts', 'Cruise Liners'],
      },
    ],
  },
  entrance: {
    id: 'entrance',
    name: 'Architectural Entrance Solutions & Access Automation',
    shortName: 'Entrance Solutions',
    tagline: 'High-throughput revolving portals, optical speed turnstiles & access security',
    description: 'Automatic revolving doors, high-speed spiral roll-up doors, motorized flap barriers, optical turnstiles, and integrated access control hardware for airports, corporate headquarters, and high-traffic infrastructure.',
    targetSectors: ['International Airports', 'Corporate Headquarters', 'Shopping Malls', 'Pharmaceutical Clean Rooms'],
    skuCount: '9,400+ SKUs',
    capabilities: [
      'Automatic Revolving Doors',
      'High-Speed Spiral Roll-Up Doors',
      'Motorized Flap Barriers & Turnstiles',
      'Industrial Heavy Air Curtains',
      'Biometric & RFID Access Integration',
    ],
    certifications: ['EN 16005 Power Operated Pedestrian Doors', 'UL 325', 'CE Machinery Directive', 'DIN 18650 Fire Rating'],
    specSheetDoc: 'Download Entrance Solutions Line-Card (PDF)',
    metrics: [
      { label: 'Cycle Durability', value: '2,000,000 Tested' },
      { label: 'Passage Capacity', value: '60 Persons / Min' },
      { label: 'Fire Integrity', value: 'EI 60 / EI 120' },
    ],
    products: [
      {
        id: 'ent-01',
        code: 'SPEC-ENT-01',
        name: 'High-Capacity Automatic 3-Wing Revolving Door',
        category: 'Facade Portals',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80',
        summary: 'Curved laminated glass canopy with radar activation, integrated emergency breakout wings, and night security shield.',
        material: 'Extruded Aluminum & 12mm Laminated Curved Glass',
        finish: 'Architectural Anodized Bronze / Stainless Mirror',
        compliance: ['EN 16005', 'DIN 18650', 'CE Marked'],
        moq: '1 Portal',
        leadTime: '21-30 Business Days',
        applications: ['Skyscraper Main Lobbies', 'Airport Terminals', '5-Star Hotel Entrances'],
      },
      {
        id: 'ent-02',
        code: 'SPEC-ENT-02',
        name: 'Optical Speed Turnstile & Biometric Gate',
        category: 'Concourse Security',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
        summary: 'Brushed stainless steel pedestal with ultra-fast brushless DC motor, 10mm tempered glass barrier fins, and LED guide strips.',
        material: 'AISI 304 / 316 Stainless Steel & Tempered Glass',
        finish: 'Satin Hairline Brushed / PVD Black',
        compliance: ['CE Machinery', 'IP54 Ingress Protection'],
        moq: '2 Lanes',
        leadTime: '14-18 Business Days',
        applications: ['Corporate HQs', 'Government Complexes', 'Data Centers'],
      },
      {
        id: 'ent-03',
        code: 'SPEC-ENT-03',
        name: 'High-Speed Spiral Insulated Cleanroom Door',
        category: 'Industrial Access',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
        summary: 'Non-contact spiral rolling technology operating at 2.5 m/s with 40mm polyurethane insulated aluminum slats.',
        material: 'Thermally Broken Aluminum Slats & PU Foam',
        finish: 'RAL 9006 Silver / Custom Powder Coat',
        compliance: ['EN 13241-1', 'Class 4 Wind Load'],
        moq: '2 Units',
        leadTime: '18-25 Business Days',
        applications: ['Pharma Cleanrooms', 'Cold Chain Warehouses', 'Food Processing Hubs'],
      },
      {
        id: 'ent-04',
        code: 'SPEC-ENT-04',
        name: 'Commercial Heavy-Duty Recessed Air Curtain',
        category: 'Climate & Hygiene Barrier',
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
        summary: 'Recessed ceiling air curtain generating a 15 m/s thermal and dust barrier with BMS Modbus interface.',
        material: 'Galvanized Sheet Steel Housing & Centrifugal Blowers',
        finish: 'Signal White RAL 9003 Powder Coat',
        compliance: ['AMCA 220 Certified', 'CE Low Voltage Directive'],
        moq: '4 Units',
        leadTime: '7-12 Business Days',
        applications: ['Retail Malls', 'Hospitality Portals', 'Airport Concourse Gates'],
      },
    ],
  },
  industrial: {
    id: 'industrial',
    name: 'Industrial Solutions & Heavy Facilities MRO Spares',
    shortName: 'Industrial Solutions',
    tagline: 'Loading dock systems, heavy valves, pumping systems & certified safety gear',
    description: 'Hydraulic dock levelers, sectional insulated overhead doors, industrial flow control valves, high-volume multistage pumping systems, and impact safety barriers for automated warehouses and manufacturing plants.',
    targetSectors: ['Automated Logistics Hubs', 'Manufacturing Plants', 'Cold Chain Distribution', 'Petrochemical Facilities'],
    skuCount: '45,000+ SKUs',
    capabilities: [
      'Hydraulic Dock Levelers & Shelters',
      'Sectional Overhead Insulated Doors',
      'Industrial Flow & Control Valves',
      'High-Volume Pumping Stations',
      'Heavy-Duty Safety Guardrails & Barriers',
    ],
    certifications: ['EN 1398 Dock Levelers', 'ATEX Explosion Proof', 'OSHA 1910.145', 'ISO 9001:2015 QA'],
    specSheetDoc: 'Download Industrial Equipment Linecard (PDF)',
    metrics: [
      { label: 'Dynamic Load Rating', value: '15-Ton Axle Load Tested' },
      { label: 'Pumping Capacity', value: 'Up to 3,500 m³/h' },
      { label: 'SLA Support', value: '24/7 Priority Emergency' },
    ],
    products: [
      {
        id: 'ind-01',
        code: 'SPEC-IND-01',
        name: 'Electro-Hydraulic Telescopic Dock Leveler',
        category: 'Loading Dock Systems',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
        summary: 'Tear-drop steel platform with dual lift cylinders, 1000mm telescopic lip, and emergency anti-fall velocity fuses.',
        material: 'Structural Steel S235 / S355',
        finish: 'Anti-Slip Epoxy Primer & Topcoat RAL 7016',
        compliance: ['EN 1398 Standard', 'CE Safety Directive'],
        moq: '2 Bays',
        leadTime: '15-22 Business Days',
        applications: ['Logistics Fulfillment Hubs', 'Cold Storage Depots', 'Port Freight Centers'],
      },
      {
        id: 'ind-02',
        code: 'SPEC-IND-02',
        name: 'Industrial Motorized Flow Control Valve Suite',
        category: 'Process Fluid Controls',
        image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80',
        summary: 'Cast carbon steel flanged gate and ball valves equipped with 4-20mA smart electric rotary actuators.',
        material: 'WCB Carbon Steel & 316 Stainless Trim',
        finish: 'Epoxy Coated Industrial Blue RAL 5015',
        compliance: ['ANSI Class 150 / 300', 'API 6D', 'ATEX Zone 1/21'],
        moq: '10 Assemblies',
        leadTime: '12-18 Business Days',
        applications: ['Petrochemical Plants', 'Water Treatment Facilities', 'District Cooling Stations'],
      },
      {
        id: 'ind-03',
        code: 'SPEC-IND-03',
        name: 'High-Volume Multistage Centrifugal Pump Station',
        category: 'Water & Fluid Handling',
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
        summary: 'Vertical multistage stainless steel centrifugal booster set with VFD frequency inverter for constant pressure delivery.',
        material: 'AISI 304 / 316 Stainless Steel Hydraulics',
        finish: 'Passivated Stainless Steel / Cast Iron Base',
        compliance: ['IE3 / IE4 Motor Efficiency', 'ISO 9906 Annex A'],
        moq: '1 Station',
        leadTime: '14-20 Business Days',
        applications: ['High-Rise Pressure Boosting', 'Industrial HVAC', 'Municipal Pumping'],
      },
      {
        id: 'ind-04',
        code: 'SPEC-IND-04',
        name: 'Polymer Impact-Absorbing Safety Guardrail',
        category: 'Facility Safety Assets',
        image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=80',
        summary: 'Flexible memory polymer crash barrier tested to absorb 24,000 Joules forklift impact without floor damage.',
        material: 'Proprietary MEMAPLEX™ Elastomeric Polymer',
        finish: 'High-Visibility Safety Yellow RAL 1023',
        compliance: ['PAS 13 Impact Standard', 'OSHA 1910.28'],
        moq: '20 Linear Meters',
        leadTime: '7-12 Business Days',
        applications: ['Automated Warehouses', 'Manufacturing Corridors', 'Loading Bays'],
      },
    ],
  },
};

export function getProductById(id: string): (ProductSpecItem & { division: DivisionData }) | null {
  for (const div of Object.values(DIVISIONS)) {
    const found = div.products.find((p) => p.id === id || p.code.toLowerCase() === id.toLowerCase());
    if (found) {
      return { ...found, division: div };
    }
  }
  return null;
}

export function getAllProducts(): (ProductSpecItem & { division: DivisionData })[] {
  const list: (ProductSpecItem & { division: DivisionData })[] = [];
  for (const div of Object.values(DIVISIONS)) {
    for (const prod of div.products) {
      list.push({ ...prod, division: div });
    }
  }
  return list;
}

