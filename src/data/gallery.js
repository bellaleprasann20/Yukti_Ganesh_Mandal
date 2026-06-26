// ─────────────────────────────────────────────────────────────
//  gallery.js  —  All gallery & music data for Yukti Ganesh Mandal
//
//  HOW TO ADD YOUR OWN FILES:
//  📸 Images  → put inside:  public/images/gallery/
//  🎵 Audio   → put inside:  public/audio/
//  Then update the `image` / `src` fields below with the filename.
// ─────────────────────────────────────────────────────────────

export const categories = ["All", "2022", "2023", "2024","2025","2026", "Music"];

export const galleryItems = [

  // ──────────────── 2022 ────────────────
  {
    id: 1,
    title: "Murti Sthapana 2022",
    category: "2022",
    type: "image",
    emoji: "🪔",
    bg: "bg-saffron-100",
    image: "/images/gallery/sthapana-2022.jpg",
  },
  {
    id: 2,
    title: "Pandal Decoration 2022",
    category: "2022",
    type: "image",
    emoji: "🎨",
    bg: "bg-orange-100",
    image: "/images/gallery/pandal-2022.jpg",
  },
  {
    id: 3,
    title: "Aarti Moments 2022",
    category: "2022",
    type: "image",
    emoji: "🙏",
    bg: "bg-yellow-100",
    image: "/images/gallery/aarti-2022.jpg",
  },
  {
    id: 4,
    title: "Visarjan 2022",
    category: "2022",
    type: "image",
    emoji: "🌊",
    bg: "bg-blue-100",
    image: "/images/gallery/visarjan-2022.jpg",
  },

  // ──────────────── 2023 ────────────────
  {
    id: 5,
    title: "Cultural Night 2023",
    category: "2023",
    type: "image",
    emoji: "🎭",
    bg: "bg-purple-100",
    image: "/images/gallery/cultural-2023.jpg",
  },
  {
    id: 6,
    title: "Youth Sports 2023",
    category: "2023",
    type: "image",
    emoji: "⚡",
    bg: "bg-green-100",
    image: "/images/gallery/sports-2023.jpg",
  },
  {
    id: 7,
    title: "Bhajan Sandhya 2023",
    category: "2023",
    type: "image",
    emoji: "🎵",
    bg: "bg-pink-100",
    image: "/images/gallery/bhajan-2023.jpg",
  },
  {
    id: 8,
    title: "Community Feast 2023",
    category: "2023",
    type: "image",
    emoji: "🍛",
    bg: "bg-teal-100",
    image: "/images/gallery/feast-2023.jpg",
  },

  // ──────────────── 2024 ────────────────
  {
    id: 9,
    title: "Murti Sthapana 2024",
    category: "2024",
    type: "image",
    emoji: "🪔",
    bg: "bg-saffron-100",
    image: "/images/gallery/sthapana-2024.jpg",
  },
  {
    id: 10,
    title: "Grand Decoration 2024",
    category: "2024",
    type: "image",
    emoji: "✨",
    bg: "bg-amber-100",
    image: "/images/gallery/decoration-2024.jpg",
  },
  {
    id: 11,
    title: "Kids Activities 2024",
    category: "2024",
    type: "image",
    emoji: "🎈",
    bg: "bg-red-100",
    image: "/images/gallery/kids-2024.jpg",
  },
  {
    id: 12,
    title: "Visarjan 2024",
    category: "2024",
    type: "image",
    emoji: "🌊",
    bg: "bg-cyan-100",
    image: "/images/gallery/visarjan-2024.jpg",
  },

  // ──────────────── MUSIC ────────────────
  // ✅ Place your .mp3 files inside:  public/audio/
  // Example: public/audio/mangal-aarti.mp3
  {
    id: 13,
    title: "Sukhkarta Dukhharta Aarti",
    category: "Music",
    type: "music",
    emoji: "🎵",
    badge: "Aarti",
    gradient: "from-amber-400 to-orange-500",
    src: "/audio/mangal-aartii.mp3",
  },
  {
    id: 14,
    title: "Ganesh Mahamantra Chanting",
    category: "Music",
    type: "music",
    emoji: "🔱",
    badge: "Mantra",
    gradient: "from-saffron-400 to-saffron-600",
    src: "/audio/ganesh-mantraa.mp3",
  },
  {
    id: 15,
    title: "Jai Ganesh Deva Bhajan",
    category: "Music",
    type: "music",
    emoji: "🙏",
    badge: "Bhajan",
    gradient: "from-yellow-400 to-amber-500",
    src: "/audio/jai-ganesh-deva.mp3",
  },
  {
    id: 16,
    title: "Morya Re Morya",
    category: "Music",
    type: "music",
    emoji: "🥁",
    badge: "Dhol",
    gradient: "from-red-400 to-rose-500",
    src: "/audio/morya-re-morya.mp3",
  },
];