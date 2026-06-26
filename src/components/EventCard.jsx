import { Clock, MapPin } from "lucide-react";
import { tagColors } from "../data/events";

export default function EventCard({ event }) {
  const { day, month, title, description, time, location, tag, tagColor, icon } = event;

  return (
    <div className="flex gap-5 p-5 rounded-2xl border border-gray-100 bg-white hover:border-saffron-200 hover:shadow-md transition-all duration-300 group">

      {/* Date box */}
      <div className="shrink-0 flex flex-col items-center justify-center bg-saffron-50 border border-saffron-100 rounded-xl px-4 py-3 min-w-[68px] text-center">
        <span className="text-xl font-extrabold text-saffron-500 leading-tight">{day}</span>
        <span className="text-xs font-medium text-saffron-400 mt-0.5">{month}</span>
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="text-base font-semibold text-gray-900 leading-snug">
            {icon} {title}
          </h3>
          <span className={`shrink-0 text-xs font-semibold px-2.5 py-0.5 rounded-full ${tagColors[tagColor]}`}>
            {tag}
          </span>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed mb-3">{description}</p>
        <div className="flex flex-wrap gap-4 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <Clock size={12} /> {time}
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={12} /> {location}
          </span>
        </div>
      </div>
    </div>
  );
}