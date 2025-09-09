// NAVIGATION
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: '/', key: 'how_it_works', label: 'How It Works' },
  { href: '/', key: 'agents', label: 'Find Agents' },
  { href: '/', key: 'pricing', label: 'Pricing' },
  { href: '/', key: 'contact_us', label: 'Contact Us' },
];

// AGENTS SECTION
export const AGENTS_URL = [
  '/person-1.png',
  '/person-2.png',
  '/person-3.png',
  '/person-4.png',
];

// WHY CHOOSE US SECTION
export const FEATURES = [
  {
    title: 'Verified IRCTC Agents Only',
    icon: '/star.svg',
    variant: 'green',
    description:
      'All our agents are verified with valid IRCTC credentials and KYC documents. No fake agents, only trusted professionals.',
  },
  {
    title: 'Emergency Tatkal Booking',
    icon: '/calendar.svg',
    variant: 'green',
    description:
      'Specialized agents for last-minute Tatkal bookings. Get confirmed tickets even for same-day travel with our expert agents.',
  },
  {
    title: 'Transparent Pricing',
    icon: '/folded-map.svg',
    variant: 'green',
    description:
      'Clear, upfront pricing with no hidden charges. Service fees range from ₹50-₹200 based on booking complexity and urgency.',
  },
  {
    title: '24/7 Customer Support',
    icon: '/location.svg',
    variant: 'orange',
    description:
      'Round-the-clock support for all your train booking needs. Get help anytime, anywhere with our dedicated support team.',
  },
];

// HOW IT WORKS STEPS
export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Enter Journey Details',
    description: 'Tell us your travel dates, source, destination, and preferred train class.',
    icon: '/calendar.svg',
  },
  {
    step: '02',
    title: 'Get Matched to Agents',
    description: 'Our system matches you with top-rated verified agents based on your requirements.',
    icon: '/user.svg',
  },
  {
    step: '03',
    title: 'Pay Securely & Get Tickets',
    description: 'Make secure payment and receive your confirmed IRCTC ticket instantly.',
    icon: '/play.svg',
  },
];

// FEATURED AGENTS
export const FEATURED_AGENTS = [
  {
    name: 'Rajesh Kumar',
    rating: 4.9,
    tatkalSuccess: '95%',
    location: 'Delhi',
    bookings: 1250,
    image: '/person-1.png',
  },
  {
    name: 'Priya Sharma',
    rating: 4.8,
    tatkalSuccess: '92%',
    location: 'Mumbai',
    bookings: 980,
    image: '/person-2.png',
  },
  {
    name: 'Amit Singh',
    rating: 4.9,
    tatkalSuccess: '97%',
    location: 'Bangalore',
    bookings: 1100,
    image: '/person-3.png',
  },
  {
    name: 'Sneha Patel',
    rating: 4.7,
    tatkalSuccess: '90%',
    location: 'Chennai',
    bookings: 850,
    image: '/person-4.png',
  },
];

// TESTIMONIALS
export const TESTIMONIALS = [
  {
    name: 'Vikram Mehta',
    location: 'Delhi',
    rating: 5,
    text: 'Got my Tatkal ticket in just 10 minutes! Rajesh is amazing, highly recommended for urgent bookings.',
    image: '/person-1.png',
  },
  {
    name: 'Anita Reddy',
    location: 'Hyderabad',
    rating: 5,
    text: 'Transparent pricing and excellent service. Priya helped me book 4 tickets for my family trip.',
    image: '/person-2.png',
  },
  {
    name: 'Rohit Agarwal',
    location: 'Kolkata',
    rating: 5,
    text: '24/7 support is a game changer. Got help at 2 AM for my emergency travel booking.',
    image: '/person-3.png',
  },
];

// PRICING
export const PRICING = {
  serviceFee: {
    min: 50,
    max: 200,
    currency: '₹',
  },
  features: [
    'No hidden charges',
    'Transparent pricing',
    'Money-back guarantee',
    'Instant refunds for failed bookings',
  ],
};

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: 'Learn More',
    links: [
      'About TatkalGo',
      'How It Works',
      'Agent Verification',
      'Careers',
      'Privacy Policy',
      'Terms of Service',
    ],
  },
  {
    title: 'Support',
    links: ['Help Center', 'Contact Us', 'Refund Policy', 'Booking Status', 'FAQ'],
  },
  {
    title: 'For Agents',
    links: ['Agent Registration', 'Agent Dashboard', 'Commission Structure', 'Training'],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    { label: 'Customer Support', value: '+91-98765-43210' },
    { label: 'Email Support', value: 'support@tatkalgo.com' },
    { label: 'Emergency Booking', value: '+91-98765-43211' },
  ],
};

export const SOCIALS = {
  title: 'Social',
  links: [
    '/facebook.svg',
    '/instagram.svg',
    '/twitter.svg',
    '/youtube.svg',
    '/wordpress.svg',
  ],
};
