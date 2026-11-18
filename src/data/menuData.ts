// ============================================================
// PERLE & CO. — FULL CATERING MENU DATA
// Congolese • African • European
// ============================================================
// Edit this file to update menu items. Do NOT hardcode items
// directly in page components — keep all data here.
// ============================================================

export interface MenuItem {
  name: string;
  description?: string; // Optional — only add if confirmed by client
}

export interface MenuCategory {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  cuisine: string; // e.g. "Congolese • African" | "European" | "Mixed"
  image: string;
  items: MenuItem[];
  note?: string; // Optional editorial note (not shown to end user)
}

export const MENU_CATEGORIES: MenuCategory[] = [
  // ── CATEGORY 01 ──────────────────────────────────────────
  {
    id: "cat-01",
    slug: "welcome-canapes",
    title: "Welcome & Canapés",
    subtitle: "The Art of the First Impression",
    description:
      "Set the tone for your event with elegant bite-sized creations. Our welcome canapés are crafted to impress from the very first moment, combining African flavours and European finesse into beautifully presented miniature bites.",
    cuisine: "Mixed",
    image:
      "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=1600&auto=format&fit=crop",
    items: [
      { name: "Mini Pastries" },
      { name: "Meatballs" },
      { name: "Puff Puff (Mikate)" },
      { name: "Mini Burgers" },
      { name: "Shrimp Skewers" },
      { name: "Crostini Selection" },
      { name: "Fresh Fruit Skewers" },
      { name: "Signature Drinks" },
    ],
  },

  // ── CATEGORY 02 ──────────────────────────────────────────
  {
    id: "cat-02",
    slug: "starters",
    title: "Starters",
    subtitle: "Fresh Beginnings",
    description:
      "Our starters celebrate freshness, texture and vibrant flavour. From crisp garden salads and creamy avocado to African-inspired samosas and prawn cocktails, every starter prepares your palate for the feast ahead.",
    cuisine: "Mixed",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1600&auto=format&fit=crop",
    items: [
      { name: "Fresh Garden Salad" },
      { name: "Coleslaw" },
      { name: "Avocado Salad" },
      { name: "Samosas" },
      { name: "Spring Rolls" },
      { name: "Chicken Wings" },
      { name: "Prawn Cocktail" },
      { name: "Soup of the Day" },
    ],
  },

  // ── CATEGORY 03 ──────────────────────────────────────────
  {
    id: "cat-03",
    slug: "meat-selections",
    title: "Meat Selections",
    subtitle: "The Heart of the Feast",
    description:
      "Our meat selections are the centrepiece of any Perle & Co. banquet. Slow-cooked stews, flame-grilled ribs, succulent lamb and expertly seasoned skewers — each cut is a celebration of Congolese and African culinary heritage alongside European classics.",
    cuisine: "Congolese • African • European",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop",
    items: [
      { name: "Ntaba (Grilled Lamb)" },
      { name: "Mipanzi (Ribs)" },
      { name: "Kamundele (Beef Skewers)" },
      { name: "BBQ Chicken (Soso Ya Kotumba)" },
      { name: "Goat Stew" },
      { name: "Chicken Moambe" },
      { name: "Beef Stew" },
      { name: "Grilled Chicken" },
      { name: "Turkey" },
      { name: "Assorted Cold Cuts (European Style)" },
    ],
  },

  // ── CATEGORY 04 ──────────────────────────────────────────
  {
    id: "cat-04",
    slug: "fish-seafood",
    title: "Fish & Seafood Selections",
    subtitle: "From River to Plate",
    description:
      "Fresh, vibrant and full of character. Our fish and seafood selections honour the rich riverine traditions of Congolese cuisine alongside refined European preparations — from whole grilled fish to delicate garlic butter prawns and baked salmon.",
    cuisine: "Congolese • African • European",
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1600&auto=format&fit=crop",
    items: [
      { name: "Monganza (Whole Grilled Fish)" },
      { name: "Makayabu (Salt Fish)" },
      { name: "Ngolo (Catfish)" },
      { name: "Prawns in Garlic Butter" },
      { name: "Tilapia Fillet" },
      { name: "Baked Salmon (European Style)" },
    ],
  },

  // ── CATEGORY 05 ──────────────────────────────────────────
  {
    id: "cat-05",
    slug: "rice-grain",
    title: "Rice & Grain Selections",
    subtitle: "The Foundation of Every Great Feast",
    description:
      "Rice is the soul of West and Central African cuisine. From aromatic Jollof to fragrant Pilau, coconut-infused classics to light European quinoa — our rice and grain selections provide the perfect canvas for every main course.",
    cuisine: "African • European",
    image:
      "https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=1600&auto=format&fit=crop",
    items: [
      { name: "Jollof Rice" },
      { name: "Vegetable Rice" },
      { name: "Coconut Rice" },
      { name: "Fried Rice" },
      { name: "Pilau Rice" },
      { name: "White Rice" },
      { name: "Quinoa Salad (European Style)" },
    ],
  },

  // ── CATEGORY 06 ──────────────────────────────────────────
  {
    id: "cat-06",
    slug: "vegetable-selections",
    title: "Vegetable Selections",
    subtitle: "From the Earth, With Love",
    description:
      "Our vegetable selections celebrate the depth and richness of African cooking. Pondu, Fumbwa and Dongo-Dongo are prepared with traditional care alongside European ratatouille and grilled vegetables — a true celebration of plant-based culinary tradition.",
    cuisine: "Congolese • African • European",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1600&auto=format&fit=crop",
    items: [
      { name: "Pondu (Cassava Leaves)" },
      { name: "Fumbwa" },
      { name: "Épinards (Spinach)" },
      { name: "Dongo-Dongo (Okra)" },
      { name: "Mixed Vegetables" },
      { name: "Buttered Vegetables" },
      { name: "Ratatouille (European Style)" },
      { name: "Grilled Vegetables" },
    ],
  },

  // ── CATEGORY 07 ──────────────────────────────────────────
  {
    id: "cat-07",
    slug: "sides-accompaniments",
    title: "Sides & Accompaniments",
    subtitle: "The Perfect Complement",
    description:
      "Every great main deserves a great companion. From golden fried plantain and traditional kwanga to creamy potato gratin and fluffy mash — our sides complete the dining experience with warmth and familiarity.",
    cuisine: "Congolese • African • European",
    image:
      "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?q=80&w=1600&auto=format&fit=crop",
    items: [
      { name: "Fried Plantain (Makemba)" },
      { name: "Kwanga (Cassava Bread)" },
      { name: "Fufu" },
      { name: "Alloco (Fried Plantain)" },
      { name: "Boiled Plantain" },
      { name: "Chips (Fries)" },
      { name: "Potato Gratin" },
      { name: "Mash Potato" },
    ],
  },

  // ── CATEGORY 08 ──────────────────────────────────────────
  // Items to be confirmed by client — placeholders only
  {
    id: "cat-08",
    slug: "live-stations",
    title: "Live Stations",
    subtitle: "An Interactive Culinary Experience",
    description:
      "Our live stations bring the kitchen to your guests. Watch as our chefs prepare dishes in real time, adding an interactive and memorable dimension to your event catering experience.",
    cuisine: "Mixed",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1600&auto=format&fit=crop",
    items: [
      { name: "Live Carving Station" },
      { name: "Live Stir-Fry & Wok Station" },
      { name: "Live BBQ & Grill Station" },
      { name: "Live Dessert & Crepe Station" },
    ],
    note: "CLIENT TO CONFIRM: Please verify the exact 4 live station selections with the client before publishing.",
  },

  // ── CATEGORY 09 ──────────────────────────────────────────
  {
    id: "cat-09",
    slug: "salad-bar",
    title: "Salad Bar",
    subtitle: "Fresh, Vibrant & Abundant",
    description:
      "A curated selection of fresh salads, dressings and accompaniments — beautifully presented to complement every main course on the menu.",
    cuisine: "Mixed",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1600&auto=format&fit=crop",
    items: [
      { name: "Classic Caesar Salad" },
      { name: "Greek Salad" },
      { name: "Tomato & Mozzarella Salad" },
      { name: "Warm Niçoise Salad" },
      { name: "Roasted Beetroot & Feta Salad" },
      { name: "Mixed Leaf & Herb Salad with House Dressing" },
    ],
    note: "CLIENT TO CONFIRM: Please verify the exact 6 salad bar selections with the client before publishing.",
  },

  // ── CATEGORY 10 ──────────────────────────────────────────
  {
    id: "cat-10",
    slug: "desserts",
    title: "Desserts",
    subtitle: "A Sweet Finale",
    description:
      "Complete every occasion with an indulgent dessert selection. From rich African-inspired sweets to elegant European patisserie — a memorable end to a memorable meal.",
    cuisine: "Mixed",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1600&auto=format&fit=crop",
    items: [
      { name: "Chocolate Fondant" },
      { name: "Crème Brûlée" },
      { name: "Fresh Fruit Platter" },
      { name: "Puff Puff Dessert (Sweet Mikate)" },
      { name: "Tiramisu" },
      { name: "Cheesecake" },
      { name: "Assorted Macarons" },
      { name: "Artisan Ice Cream Selection" },
    ],
    note: "CLIENT TO CONFIRM: Please verify the exact 8 dessert selections with the client before publishing.",
  },

  // ── CATEGORY 11 ──────────────────────────────────────────
  {
    id: "cat-11",
    slug: "beverages",
    title: "Beverages",
    subtitle: "Raise a Glass",
    description:
      "From welcome cocktails and signature mocktails to still and sparkling water — our beverage selection ensures every guest is refreshed and celebrated throughout the event.",
    cuisine: "Mixed",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1600&auto=format&fit=crop",
    items: [
      { name: "Still & Sparkling Water" },
      { name: "Soft Drinks Selection" },
      { name: "Fresh Fruit Juices" },
      { name: "Signature Mocktails" },
      { name: "Tea & Coffee Service" },
      { name: "Welcome Cocktail (by arrangement)" },
    ],
    note: "CLIENT TO CONFIRM: Please verify the exact 6 beverage selections with the client before publishing.",
  },

  // ── CATEGORY 12 ──────────────────────────────────────────
  {
    id: "cat-12",
    slug: "extras",
    title: "Extras",
    subtitle: "The Finishing Touches",
    description:
      "Enhance your event with our carefully curated extras — from additional catering staff and presentation upgrades to custom cake service and event decoration coordination.",
    cuisine: "Mixed",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop",
    items: [
      { name: "Additional Waiting Staff" },
      { name: "Custom Wedding or Celebration Cake" },
      { name: "Premium Tableware & Linen Hire" },
      { name: "Event Decoration Coordination" },
      { name: "Late Night Snack Station" },
    ],
    note: "CLIENT TO CONFIRM: Please verify the exact 5 extras selections with the client before publishing.",
  },
];

// Quick lookup by slug
export const getMenuCategoryBySlug = (slug: string): MenuCategory | undefined =>
  MENU_CATEGORIES.find((cat) => cat.slug === slug);

// Categories that have been fully confirmed by the client (cats 01–07)
export const CONFIRMED_CATEGORIES = MENU_CATEGORIES.slice(0, 7);
// Categories that need client confirmation (cats 08–12)
export const PLACEHOLDER_CATEGORIES = MENU_CATEGORIES.slice(7);
