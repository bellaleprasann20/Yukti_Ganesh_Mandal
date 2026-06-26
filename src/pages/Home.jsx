import { NavLink } from "react-router-dom";
import Hero        from "../components/Hero";
import EventCard   from "../components/EventCard";
import { events }        from "../data/events";
import { galleryItems }  from "../data/gallery";

const FEATURES = [
  { icon: "🛕", title: "Founded 2022", desc: "Started by local youth to unite the community in devotion and celebration." },
  { icon: "🪔", title: "09-Day Festival", desc: "Daily morning & evening aartis from Chaturthi to Anant Chaturdashi." },
  { icon: "🤝", title: "Community First", desc: "Seva programs, cultural events, and activities for every age group." },
 { 
  icon: "🤝", 
  title: "Unity & Togetherness",  
  desc: "Bringing hearts together in devotion, creating a bond of unity that stays stronger every year." 
}
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Features strip */}
      <section className="py-16 px-4 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f) => (
            <div key={f.title} className="p-6 rounded-2xl border border-gray-100 hover:border-saffron-200 hover:shadow-md transition-all">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{f.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming events preview */}
      <section className="py-16 px-4 bg-saffron-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="section-label">What's Coming</p>
              <h2 className="section-title mb-0">Upcoming Events</h2>
            </div>
            <NavLink to="/events" className="flex items-center gap-1 text-sm text-saffron-500 font-semibold hover:underline">
              All Events 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </NavLink>
          </div>
          <div className="flex flex-col gap-4">
            {events.slice(0, 3).map((e) => <EventCard key={e.id} event={e} />)}
          </div>
        </div>
      </section>

      {/* Immersive Image Split Feature Section */}
      <section className="py-16 px-4 bg-white border-b border-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Image Side */}
          <div className="rounded-3xl overflow-hidden shadow-md border border-gray-100 bg-gray-50">
            <img 
              src="/images/ganapati-banner2.jpg" 
              alt="Yukti Ganesh Pandal Banner" 
              className="w-full h-[360px] object-cover hover:scale-102 transition-transform duration-500"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1609252509102-aa73ff792667?q=80&w=600"; // Online fallback if local file path fails
              }}
            />
          </div>

          {/* Text Side */}
          <div>
            <p className="section-label">Darshan &amp; Festivities</p>
            <h2 className="section-title">Experience the Divine Blessings</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Join us daily during the grand 10-day festival for soul-stirring morning and evening aartis, spiritual bhajans, and vibrant cultural sequences. 
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Our beautifully arranged pandal in Bhalki brings thousands of families and devotees together under one roof to celebrate and immerse themselves in the deep energy of Lord Ganesha.
            </p>
            <NavLink 
              to="/gallery" 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-saffron-50 text-saffron-600 font-semibold text-sm hover:bg-saffron-100 transition-colors"
            >
              Explore Pandal Gallery
              <svg xmlns="http://www.w3.org/2000/xl" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </NavLink>
          </div>

        </div>
      </section>

      {/* Dynamic Gallery Preview Grid (Handles images, placeholders, and music properly!) */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="section-label">Memories</p>
              <h2 className="section-title mb-0">Photo Gallery</h2>
            </div>
            <NavLink to="/gallery" className="flex items-center gap-1 text-sm text-saffron-500 font-semibold hover:underline">
              View All 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </NavLink>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {galleryItems.slice(0, 8).map((item) => {
              
              // --- A. IF ITEM IS MUSIC OR AUDIO ASSET ---
              if (item.type === "music" || item.category === "Music") {
                return (
                  <div key={item.id} className="p-4 rounded-2xl bg-white border border-gray-100 shadow-sm flex flex-col justify-between min-h-[240px] hover:border-saffron-200 hover:shadow-md transition-all">
                    <div>
                      <div className="w-full h-28 bg-gradient-to-br from-amber-400 to-saffron-500 rounded-xl flex items-center justify-center text-4xl text-white shadow-inner mb-3">
                        {item.emoji || "🎵"}
                      </div>
                      <span className="text-[10px] font-bold text-saffron-500 uppercase tracking-wider bg-saffron-50 px-2 py-0.5 rounded-full">
                        {item.year || "Devotional"}
                      </span>
                      <h3 className="font-bold text-gray-900 text-xs sm:text-sm mt-1 mb-2 line-clamp-2">{item.title || item.label}</h3>
                    </div>
                    <audio controls className="w-full h-8 accent-saffron-500 text-xs mt-auto">
                      <source src={item.src} type="audio/mpeg" />
                    </audio>
                  </div>
                );
              }

              // --- B. IF ITEM IS IMAGE WITH NO VALID PATH (FALLBACK VIEW WITH EMOJI) ---
              if (!item.image && !item.src) {
                return (
                  <div key={item.id} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all p-3 flex flex-col justify-between min-h-[240px]">
                    <div className={`w-full aspect-square ${item.bg || 'bg-saffron-50'} rounded-xl flex items-center justify-center text-4xl group-hover:scale-102 transition-transform duration-300 shadow-inner`}>
                      {item.emoji || "📸"}
                    </div>
                    <div className="mt-2">
                      <span className="text-[10px] font-bold text-saffron-500 uppercase tracking-wider bg-saffron-50 px-2 py-0.5 rounded-full">
                        Year {item.category}
                      </span>
                      <h3 className="font-bold text-gray-800 text-xs sm:text-sm mt-1 line-clamp-1">
                        {item.label || item.title}
                      </h3>
                    </div>
                  </div>
                );
              }

              // --- C. STANDARD WORKING LOCAL MEDIA CARD ---
              return (
                <div key={item.id} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all p-3 flex flex-col justify-between min-h-[240px]">
                  <div className="relative aspect-square w-full overflow-hidden bg-gray-50 rounded-xl">
                    <img
                      src={item.image || item.src}
                      alt={item.label || item.title}
                      className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.parentElement.innerHTML = `
                          <div class="w-full h-full ${item.bg || 'bg-saffron-50'} flex items-center justify-center text-4xl shadow-inner">
                            ${item.emoji || "📸"}
                          </div>
                        `;
                      }}
                    />
                  </div>
                  <div className="mt-2">
                    <span className="text-[10px] font-bold text-saffron-500 uppercase tracking-wider bg-saffron-50 px-2 py-0.5 rounded-full">
                      {item.category} Event
                    </span>
                    <h3 className="font-bold text-gray-800 text-xs sm:text-sm mt-1 line-clamp-1">
                      {item.label || item.title}
                    </h3>
                  </div>
                </div>
              );

            })}
          </div>
        </div>
      </section>

      {/* Donate CTA banner */}
      <section className="py-16 px-4 bg-gradient-to-r from-saffron-400 to-saffron-500 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-3xl mb-3">🙏</p>
          <h2 className="text-2xl font-bold mb-3">Support Yukti Ganesh Mandal</h2>
          <p className="text-saffron-100 text-sm mb-6 leading-relaxed">
            Your contribution helps us celebrate bigger, serve better, and keep our community together.
          </p>
          <NavLink
            to="/donations"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-white text-saffron-600 font-bold text-sm hover:bg-saffron-50 transition-colors shadow"
          >
            Donate Now 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </NavLink>
        </div>
      </section>
    </>
  );
}