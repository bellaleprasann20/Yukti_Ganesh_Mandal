import { NavLink } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Hero           from "../components/Hero";
import EventCard      from "../components/EventCard";
import GalleryCard    from "../components/GalleryCard";
import FadeIn         from "../components/FadeIn";
import CountdownTimer from "../components/CountdownTimer";
import { events }       from "../data/events";
import { galleryItems } from "../data/gallery";

const FEATURES = [
  { icon: "🛕", title: "Founded 2022",    desc: "Started by local youth to unite the community in devotion and celebration." },
  { icon: "🪔", title: "10-Day Festival", desc: "Daily morning & evening aartis from Chaturthi to Anant Chaturdashi." },
  { icon: "🤝", title: "Community First", desc: "Seva programs, cultural events, and activities for every age group." },
  { icon: "🌿", title: "Eco-Friendly",    desc: "Eco-friendly idols and green celebration practices every year." },
];

const STATS = [
  { value: "2022", label: "Year Founded"        },
  { value: "10",   label: "Days of Festival"    },
  { value: "500+", label: "Devotees Every Year" },
  { value: "3+",   label: "Years Celebrated"    },
];

export default function Home() {
  return (
    <>
      {/* Hero — no animation, loads instantly */}
      <Hero />

      {/* ── Countdown Timer ── */}
      <CountdownTimer />

      {/* ── Features strip ── */}
      <section className="py-16 px-4 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f, i) => (
            <FadeIn key={f.title} direction="up" delay={`${i * 100}ms`}>
              <div className="p-6 rounded-2xl border border-gray-100 hover:border-saffron-200 hover:shadow-md transition-all h-full">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{f.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="py-12 px-4 bg-saffron-50 border-y border-saffron-100">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {STATS.map((s, i) => (
            <FadeIn key={s.label} direction="up" delay={`${i * 80}ms`}>
              <div className="text-center p-6 bg-white rounded-2xl border border-saffron-100 shadow-sm">
                <p className="text-3xl font-extrabold text-saffron-400 mb-1">{s.value}</p>
                <p className="text-xs text-gray-500">{s.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── Upcoming Events ── */}
      <section className="py-16 px-4 bg-saffron-50">
        <div className="max-w-4xl mx-auto">
          <FadeIn direction="up">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="section-label">What's Coming</p>
                <h2 className="section-title mb-0">Upcoming Events</h2>
              </div>
              <NavLink to="/events" className="flex items-center gap-1 text-sm text-saffron-500 font-semibold hover:underline">
                All Events <ChevronRight size={16} />
              </NavLink>
            </div>
          </FadeIn>
          <div className="flex flex-col gap-4">
            {events.slice(0, 3).map((e, i) => (
              <FadeIn key={e.id} direction="left" delay={`${i * 100}ms`}>
                <EventCard event={e} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery Preview ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn direction="up">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="section-label">Memories</p>
                <h2 className="section-title mb-0">Photo Gallery</h2>
              </div>
              <NavLink to="/gallery" className="flex items-center gap-1 text-sm text-saffron-500 font-semibold hover:underline">
                View All <ChevronRight size={16} />
              </NavLink>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems
              .filter((item) => item.type !== "music")
              .slice(0, 8)
              .map((item, i) => (
                <FadeIn key={item.id} direction="up" delay={`${i * 60}ms`}>
                  <GalleryCard item={item} />
                </FadeIn>
              ))}
          </div>
        </div>
      </section>

      {/* ── Donate CTA ── */}
      <section className="py-16 px-4 bg-gradient-to-r from-saffron-400 to-saffron-500 text-white text-center">
        <FadeIn direction="up">
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
              Donate Now <ChevronRight size={16} />
            </NavLink>
          </div>
        </FadeIn>
      </section>
    </>
  );
}