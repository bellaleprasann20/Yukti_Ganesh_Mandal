import { NavLink } from "react-router-dom";
import { MapPin, Calendar, Users, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-saffron-50 via-white to-white py-24 px-4 text-center overflow-hidden">

      {/* Watermark background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.04] text-[18rem] leading-none">
        🪔
      </div>

      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-saffron-200 via-saffron-400 to-saffron-200" />

      <div className="relative max-w-3xl mx-auto animate-fade-in">

        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-saffron-100 text-saffron-600 text-xs font-bold tracking-widest uppercase mb-6">
          🙏 Ganapati Bappa Morya!
        </span>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-3">
          Yukti Ganesh Mandal
        </h1>
        <p className="text-lg sm:text-xl text-saffron-500 font-semibold mb-4">Bhalki, Bidar · Est. 2022</p>

        <p className="text-base text-gray-500 max-w-xl mx-auto leading-relaxed mb-10">
          Celebrating Ganesh Chaturthi with devotion, culture, and community
          togetherness. Bringing Bhalki together for 10 days of joy every year.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          <NavLink
            to="/events"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-saffron-400 text-white font-semibold text-sm hover:bg-saffron-500 transition-colors shadow-md"
          >
            View Events 2026 <ChevronRight size={16} />
          </NavLink>
          <NavLink
            to="/donations"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-saffron-300 text-saffron-600 font-semibold text-sm hover:bg-saffron-50 transition-colors"
          >
            Support Our Mandal
          </NavLink>
        </div>

        {/* Meta chips */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <span className="flex items-center gap-2">
            <Calendar size={15} className="text-saffron-400" /> Est. 2022
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={15} className="text-saffron-400" /> Bhalki, Karnataka
          </span>
          <span className="flex items-center gap-2">
            <Users size={15} className="text-saffron-400" /> Community Mandal
          </span>
        </div>
      </div>
    </section>
  );
}