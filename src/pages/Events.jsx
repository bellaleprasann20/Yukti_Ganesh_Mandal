import { useState } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import EventCard from "../components/EventCard";
import { events, tagColors } from "../data/events";

const FILTERS = ["All", "Main Event", "Daily", "Youth", "Special", "Cultural", "Visarjan"];

export default function Events() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? events : events.filter((e) => e.tag === active);

  return (
    <div className="min-h-screen">

      {/* Page Header */}
      <section className="bg-gradient-to-b from-saffron-50 to-white py-16 px-4 text-center border-b border-gray-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest font-semibold text-saffron-400 mb-3">Schedule</p>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Events 2026</h1>
          <p className="text-gray-500 text-base leading-relaxed">
            From the grand Murti Sthapana to the emotional Visarjan — here's everything happening at Yukti Ganesh Mandal this year.
          </p>
        </div>
      </section>

      {/* Festival at a glance */}
      <section className="py-10 px-4 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: <Calendar size={20} className="text-saffron-400" />, label: "Festival Starts", value: "14 September 2026" },
            { icon: <Clock    size={20} className="text-saffron-400" />, label: "Duration",        value: "09 Days"           },
            { icon: <MapPin   size={20} className="text-saffron-400" />, label: "Location",        value: "Bhalki, Karnataka" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-4 p-5 rounded-2xl bg-saffron-50 border border-saffron-100">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">{item.label}</p>
                <p className="text-sm font-semibold text-gray-800">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Filter tabs */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-8">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                  active === f
                    ? "bg-saffron-400 text-white border-saffron-400 shadow-sm"
                    : "border-gray-200 text-gray-600 hover:border-saffron-300 hover:text-saffron-500"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Events list */}
          <div className="flex flex-col gap-4">
            {filtered.length > 0 ? (
              filtered.map((e) => <EventCard key={e.id} event={e} />)
            ) : (
              <div className="text-center py-16 text-gray-400 text-sm">No events found for this filter.</div>
            )}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-8 px-4 bg-saffron-50 border-t border-saffron-100">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm text-gray-500">
            📢 All events are open to everyone. Dates and timings may be updated closer to the festival.
            Follow us on Instagram or WhatsApp for live updates.
          </p>
        </div>
      </section>

    </div>
  );
}