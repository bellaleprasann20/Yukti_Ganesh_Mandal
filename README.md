# 🔱 Yukti Ganesh Mandal Web Platform

A highly responsive, modern React & Tailwind CSS web application built to preserve, showcase, and celebrate the rich memories, devotional music, and festive highlights of the **Yukti Ganesh Mandal** celebrations since 2022.

---

## ✨ Features

- **📱 Fully Responsive Design:** Clean, dynamic, mobile-friendly interface built using custom Tailwind configurations.
- **✨ Dynamic Media Filters:** Real-time gallery filtering matching years (`2022`, `2023`, `2024`), dynamic `Music` streaming pipelines, and custom event cards.
- **🎵 Persistent Global Audio Engine:** Custom bottom tracking audio controller widget that maintains stable streaming audio contexts across categorical filtering views with support for:
  - Play / Pause toggling directly from separate grid cards.
  - Interactive track seeking progress timeline bars.
  - Previous / Next track queue sequencing.
  - Native audio element failure alert catch structures.
- **🎥 Immersive Video Promo Modal:** On-demand 15-30s high-definition festival highlight playback interface designed to auto-pause operational audio systems upon activation.
- **🤝 Unity-Driven UI Elements:** Dedicated modern presentation cards featuring the core pillars of community connection, togetherness, and cultural harmony.

---

## 🛠️ Tech Stack

- **Frontend Core:** React.js (Hooks: `useState`, `useRef`, `useEffect`, `useCallback`)
- **Styling Pipeline:** Tailwind CSS (including custom animation presets)
- **Icons Toolkit:** Lucide React
- **Build Core Optimization:** Vite

---

## 📂 Key Project Architecture

```text
my-project/
├── public/
│   ├── audio/
│   │   ├── mangal-aarti.mp3        # Core Devotional Track
│   │   └── ganesh-mantra.mp3       # Chanting Loop Track
│   ├── images/
│   │   └── gallery/                # Image storage for 2022-2024 collections
│   └── videos/
│       └── mandal-promo.mp4        # 15-30s Festival Highlights Clip
├── src/
│   ├── components/
│   │   └── GalleryCard.jsx         # Image/Video grid item display node
│   ├── data/
│   │   └── gallery.js              # Central database dictionary file
│   ├── pages/
│   │   └── Gallery.jsx             # Unified gallery engine + audio bar page
│   ├── App.jsx                     # Core application view controller
│   └── main.jsx                    # Virtual DOM deployment attachment initialization