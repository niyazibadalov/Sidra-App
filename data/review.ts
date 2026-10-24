export const reviewSellers = [
  {
    id: "lumea",
    name: "Lumea Jewellery",
    legalName: "Lumea Kuyumculuk Ltd. Şti.",
    city: "İstanbul, Türkiye",
    logo: "/products/lumea.jpg",
    items: [
      {
        id: "i1",
        name: "Solitaire Diamond Ring",
        variant: "18K Gold · Size: 52",
        sku: "LUM-DR-001",
        price: 28500,
        qty: 1,
        image: "/products/solitaire-ring.jpg",
      },
    ],
    shipping: { name: "Yurtiçi Kargo – Standart", days: "3 – 5 business days", price: 75 },
    estimatedDelivery: "Oct 15 – Oct 20, 2026",
    returnDays: 7,
    discount: 0,
  },
  {
    id: "aurora",
    name: "Aurora Jewellery",
    legalName: "Aurora Mücevherat A.Ş.",
    city: "Ankara, Türkiye",
    logo: "/products/aurora.jpg",
    items: [
      {
        id: "i2",
        name: "Malachite Clover Necklace",
        variant: "18K Gold",
        sku: "AUR-NC-004",
        price: 12800,
        qty: 1,
        image: "/products/malachite-necklace.jpg",
      },
      {
        id: "i3",
        name: "Pearl Drop Earrings",
        variant: "18K Gold",
        sku: "AUR-PE-002",
        price: 9750,
        qty: 1,
        image: "/products/pearl-earrings.jpg",
      },
    ],
    shipping: { name: "Aras Kargo – Hızlı", days: "1 – 2 business days", price: 120 },
    estimatedDelivery: "Oct 13 – Oct 16, 2026",
    returnDays: 14,
    discount: 2000,
  },
];

export type ReviewSeller = (typeof reviewSellers)[number];

export const reviewAddress = {
  name: "Hüseyin Aliyev",
  lines: ["Barbaros Mah. Ihlamur Sok. No:5 D:12", "Beşiktaş, İstanbul 34353", "Türkiye"],
  phone: "+90 530 000 00 00",
};

export const reviewPayment = { last4: "4242", expires: "12/28" };
