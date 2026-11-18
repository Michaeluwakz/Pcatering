export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  highlights: string[];
  idealFor: string[];
  includedFeatures: string[];
  ctaLabel: string;
  badge?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Canapés" | "Event Catering" | "Private Dining" | "Table & Decor" | "Takeaway & Platters";
  image: string;
  caption: string;
  tags: string[];
  featured?: boolean;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "event-catering",
    title: "Event Catering",
    slug: "event-catering",
    badge: "Signature Service",
    shortDescription: "Professional, large-scale and bespoke catering for corporate functions, luxury celebrations, and milestone occasions.",
    fullDescription: "From corporate galas and brand product launches to luxury anniversary banquets and high-profile wedding receptions, Perleco Catering delivers seamless event catering. With over a decade of catering experience across Manchester and worldwide destinations, our kitchen and front-of-house teams ensure exceptional food presentation, flawless course timing, and discreet hospitality.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1600&auto=format&fit=crop",
    highlights: [
      "Custom multi-course dining & buffet banquets",
      "Full front-of-house service & event management",
      "Corporate brand launches, galas & weddings",
      "Manchester & worldwide destination availability"
    ],
    idealFor: [
      "Corporate Galas & Brand Activations",
      "Weddings & Civil Partnerships",
      "Charity Balls & Milestone Celebrations",
      "Executive Conferences & Award Evenings"
    ],
    includedFeatures: [
      "Bespoke menu development tailored to event theme",
      "Pre-event tasting & consultation session [Client confirmed]",
      "Full professional chef & service staffing",
      "Complete equipment coordination & table presentation"
    ],
    ctaLabel: "Enquire About Event Catering"
  },
  {
    id: "elegant-canapes",
    title: "Elegant Canapés",
    slug: "elegant-canapes",
    badge: "Cocktail Receptions",
    shortDescription: "Artisanal, beautifully presented bite-sized food experiences crafted for receptions, parties, and sophisticated gatherings.",
    fullDescription: "Canapés are culinary jewels that set the tone for any distinguished reception. Perleco Catering curates hot, chilled, and sweet canapés designed to captivate guests from the very first bite. Every piece balances complex flavours, striking visual architecture, and effortless bite-sized enjoyment.",
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=1600&auto=format&fit=crop",
    highlights: [
      "Intricately styled savoury and dessert canapés",
      "Circulating white-glove waitstaff service",
      "Champagne receptions, networking & cocktail parties",
      "Customised dietary & allergen provisions"
    ],
    idealFor: [
      "Cocktail Receptions & Champagne Mixers",
      "Art Gallery Openings & Product Reveals",
      "Private House & Garden Parties",
      "Pre-Dinner Canapé Service"
    ],
    includedFeatures: [
      "Curated selection of warm and chilled selections",
      "Sculptural slate, marble and wooden presentation platters",
      "Uniformed circulating hospitality staff",
      "Garnish styling using micro-herbs & edible florals"
    ],
    ctaLabel: "Enquire About Canapés"
  },
  {
    id: "private-dining",
    title: "Private Dining",
    slug: "private-dining",
    badge: "Exclusive Experience",
    shortDescription: "Personalised, fine-dining restaurant experiences delivered inside your residence, luxury rental, or private venue.",
    fullDescription: "Experience the ultimate culinary luxury with a private chef dedicated exclusively to your party. Whether an intimate dinner for two, a private family celebration, or an executive boardroom dinner, Perleco Catering transforms your space into an exclusive culinary sanctuary with bespoke courses crafted to your palate.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop",
    highlights: [
      "Dedicated private executive chef & table steward",
      "3 to 7 course fine dining tasting menus",
      "Sommelier-informed wine pairing suggestions",
      "Immaculate kitchen setup, service & pristine clean-down"
    ],
    idealFor: [
      "Intimate Birthday & Anniversary Dinners",
      "Executive Boardroom VIP Lunches",
      "Luxury Villa & Holiday Retreat Dining",
      "Exclusive High-Net-Worth Gatherings"
    ],
    includedFeatures: [
      "Detailed dietary consultation & custom course design",
      "Premium ingredient sourcing (local & international delicacies)",
      "Artisanal tablescape guidance & menu printout",
      "Total post-service kitchen restoration"
    ],
    ctaLabel: "Book Private Dining"
  },
  {
    id: "takeaway-orders",
    title: "Takeaway Orders & Luxury Platters",
    slug: "takeaway-orders",
    badge: "Delivered To You",
    shortDescription: "Gourmet catering boxes, luxury grazing boards, and celebration feasts prepared fresh and delivered to your door.",
    fullDescription: "For clients seeking the elegance of Perleco Catering without full on-site staffing, our gourmet takeaway orders provide the perfect balance. From corporate lunch boxes and grazing boards to celebration weekend banquet boxes, every order is prepared with the same exacting standards and delivered ready to serve or reheat with simple chef instructions.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop",
    highlights: [
      "Gourmet boardroom lunch platters & boxes",
      "Luxury charcuterie, artisan cheeses & canapé boxes",
      "Weekend celebration banquets ready to serve",
      "Prompt delivery across Greater Manchester"
    ],
    idealFor: [
      "Corporate Office Executive Meetings",
      "Weekend Family Celebrations at Home",
      "Luxury Picnics & Outdoor Events",
      "Intimate Studio & Creative Productions"
    ],
    includedFeatures: [
      "Temperature-controlled eco-luxury packaging",
      "Easy reheating & chef plating guides",
      "Dietary labelling for all dietary preferences",
      "Flexible advance booking & scheduled delivery"
    ],
    ctaLabel: "Enquire About Takeaway Orders"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Smoked Salmon & Caviar Blinis",
    category: "Canapés",
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=1200&auto=format&fit=crop",
    caption: "Handcrafted blinis topped with oak-smoked salmon, dill crème fraîche, and oscietra caviar.",
    tags: ["Canapés", "Seafood", "Receptions"],
    featured: true
  },
  {
    id: "gal-2",
    title: "Grand Banquet Table Styling",
    category: "Table & Decor",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    caption: "Dramatic floral cascades and candlelight tablescapes for a 120-guest corporate celebration.",
    tags: ["Tablescape", "Corporate", "Decor"],
    featured: true
  },
  {
    id: "gal-3",
    title: "Seared King Scallops on Cauliflower Puree",
    category: "Private Dining",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    caption: "Pan-seared hand-dived scallops with velvety cauliflower puree, crispy pancetta, and micro-coriander.",
    tags: ["Private Chef", "Fine Dining", "Course 2"],
    featured: true
  },
  {
    id: "gal-4",
    title: "Charcuterie & Artisan Cheese Grazing Display",
    category: "Takeaway & Platters",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
    caption: "Artisanal cheeses, cured meats, honeycomb, figs, and gourmet crisps curated for executive hospitality.",
    tags: ["Grazing", "Platters", "Corporate"],
    featured: true
  },
  {
    id: "gal-5",
    title: "Slow-Braised Beef Short Rib with Truffle Jus",
    category: "Event Catering",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1200&auto=format&fit=crop",
    caption: "Meltingly tender short rib, pomme purée, charred shallots, and rich burgundy glaze.",
    tags: ["Event Catering", "Main Course", "Gala"],
    featured: true
  },
  {
    id: "gal-6",
    title: "Duck Confit Tartlets with Spiced Plum Gel",
    category: "Canapés",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
    caption: "Crispy filo cups filled with shredded confit duck leg, star-anise plum compote, and toasted sesame.",
    tags: ["Canapés", "Cocktail", "Warm Bites"],
    featured: true
  },
  {
    id: "gal-7",
    title: "Intimate 5-Course Private Chef Table",
    category: "Private Dining",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop",
    caption: "A bespoke anniversary celebration featuring live chef interaction and personalized printed menus.",
    tags: ["Private Dining", "Chef Table", "Exclusive"],
    featured: false
  },
  {
    id: "gal-8",
    title: "Champagne & Gold Reception Bar Setup",
    category: "Event Catering",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop",
    caption: "Premium bar service, vintage champagne towers, and crystal glassware for Manchester VIP event.",
    tags: ["Beverage", "Champagne", "Events"],
    featured: false
  },
  {
    id: "gal-9",
    title: "Handmade Pistachio & Raspberry Petit Fours",
    category: "Canapés",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop",
    caption: "Delicate pistachio sponge cubes, tart raspberry gel, and edible 24k gold leaf accents.",
    tags: ["Dessert Canapés", "Sweet", "Gold Leaf"],
    featured: false
  },
  {
    id: "gal-10",
    title: "Dark Wood & Rich Velvet Dining Setting",
    category: "Table & Decor",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    caption: "Opulent black and deep burgundy tablescaping with gold cutlery and linen napkins.",
    tags: ["Tablescape", "Luxury", "Styling"],
    featured: false
  },
  {
    id: "gal-11",
    title: "Executive Luxury Boxed Luncheons",
    category: "Takeaway & Platters",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1200&auto=format&fit=crop",
    caption: "Individual gourmet dining boxes crafted for high-stakes corporate boardroom sessions.",
    tags: ["Takeaway", "Corporate Lunch", "Bespoke"],
    featured: false
  },
  {
    id: "gal-12",
    title: "Artisan Dessert Station & Patisserie",
    category: "Event Catering",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1200&auto=format&fit=crop",
    caption: "A show-stopping dessert installation featuring chocolate domes, seasonal fruit tarts, and macarons.",
    tags: ["Dessert Station", "Events", "Patisserie"],
    featured: false
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "10+ Years of Culinary Excellence",
    description: "Over a decade of seasoned mastery orchestrating high-end catering, private chef tables, and corporate banquets across Manchester and internationally.",
    icon: "Award"
  },
  {
    title: "Elegant Food Presentation",
    description: "Every dish is conceived as culinary art. From structural canapés to opulent banquet spreads, visual elegance is integral to our identity.",
    icon: "Sparkles"
  },
  {
    title: "Professional Event Catering",
    description: "Flawless logistics, experienced front-of-house staff, and calm kitchen leadership ensuring stress-free execution for hosts.",
    icon: "Users"
  },
  {
    title: "Personalised Dining Experiences",
    description: "No cookie-cutter packages. Every menu is tailored specifically to your palate, event concept, dietary requirements, and seasonal harvests.",
    icon: "ChefHat"
  },
  {
    title: "Manchester Roots, Worldwide Reach",
    description: "Proudly based in Manchester, United Kingdom, with proven capability and international experience catering worldwide private destination events.",
    icon: "Globe"
  }
];

export const FAQS = [
  {
    question: "How far in advance should I book Perleco Catering?",
    answer: "For major weddings and large corporate events, we recommend booking 3 to 9 months in advance. For intimate private dining or canapé receptions, 2 to 6 weeks is often sufficient, subject to calendar availability. For urgent bookings, please call our hotline directly at 07947832818."
  },
  {
    question: "Do you cater events outside of Manchester?",
    answer: "Yes. While Manchester is our home base, Perleco Catering operates across Cheshire, Greater Manchester, London, the UK, and international destinations worldwide for private client bookings."
  },
  {
    question: "Can you accommodate specific dietary requirements and allergies?",
    answer: "Absolutely. We pride ourselves on bespoke catering. Whether vegetarian, vegan, halal, kosher-style, gluten-free, or specific severe allergens, each dish is carefully planned and prepared with stringent cross-contamination controls."
  },
  {
    question: "Do you provide front-of-house staff and tableware?",
    answer: "Yes. Depending on your service level, we can provide professional uniformed waiting staff, experienced cocktail bartenders, crystal glassware, luxury linens, and bespoke crockery."
  },
  {
    question: "How do takeaway orders and luxury platters work?",
    answer: "Our takeaway orders are prepared fresh to order in our professional kitchen and delivered to your address in premium temperature-insulated packaging. Reheating instructions (if applicable) are provided with simple chef steps."
  }
];
