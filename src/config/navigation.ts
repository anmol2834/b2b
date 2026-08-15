export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const MAIN_NAVIGATION: NavItem[] = [
  { label: 'Bulk Divisions', href: '#divisions', description: 'Explore our 4 wholesale product divisions' },
  { label: 'Industry Sectors', href: '#sectors', description: 'Multi-brand supply for Commercial, Hospitality & Industrial' },
  { label: 'Supply Model', href: '#workflow', description: 'Source, Quote, Supply, Support lifecycle' },
  { label: 'Bulk Inquiry', href: '#boq-uploader', description: 'Attach product list for wholesale volume pricing' },
];

export const DIVISION_LINKS = [
  { id: 'sanitary', label: 'Commercial Sanitary & Washroom Suites', href: '#divisions' },
  { id: 'hospitality', label: 'Hotel Amenities & Bulk Linen FF&E', href: '#divisions' },
  { id: 'entrance', label: 'Automated Entrance Portals & Access Gates', href: '#divisions' },
  { id: 'industrial', label: 'Industrial Equipment & Heavy Facilities MRO', href: '#divisions' },
];
