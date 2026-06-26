import { useState } from "react";

export default function GalleryCard({ item }) {
  const { title, category, emoji, bg, image } = item;
  const [imgFailed, setImgFailed] = useState(false);

  const showPlaceholder = !image || imgFailed;

  return (
    <div className="group relative rounded-2xl overflow-hidden border border-gray-100 hover:border-saffron-200 hover:shadow-lg transition-all duration-300 aspect-square cursor-pointer">

      {/* ── Real image (with onError fallback) ── */}
      {!showPlaceholder && (
        <img
          src={image}
          alt={title}
          onError={() => setImgFailed(true)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      )}

      {/* ── Placeholder / fallback ── */}
      {showPlaceholder && (
        <div className={`w-full h-full flex flex-col items-center justify-center gap-3 ${bg || "bg-saffron-50"}`}>
          <span className="text-5xl">{emoji}</span>
          <span className="text-xs text-gray-500 font-semibold px-4 text-center leading-snug">{title}</span>
          <span className="text-[10px] text-gray-400 bg-white/60 px-2 py-0.5 rounded-full">{category}</span>
        </div>
      )}

      {/* ── Hover overlay ── */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end p-3 opacity-0 group-hover:opacity-100">
        <div>
          <p className="text-white text-sm font-semibold drop-shadow">{title}</p>
          <p className="text-white/70 text-xs">{category}</p>
        </div>
      </div>
    </div>
  );
}