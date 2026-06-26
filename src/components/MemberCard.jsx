import { Phone } from "lucide-react";

export default function MemberCard({ member }) {
  const { name, role, phone, photo, emoji, since } = member;

  return (
    <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 bg-white hover:border-saffron-200 hover:shadow-md transition-all duration-300">

      {/* Avatar */}
      <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-saffron-100 shadow-sm">
        {photo ? (
          <img src={photo} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-saffron-50 flex items-center justify-center text-3xl">
            {emoji}
          </div>
        )}
      </div>

      <h3 className="font-semibold text-gray-900 text-sm mb-0.5">{name}</h3>
      <p className="text-xs text-saffron-500 font-medium mb-1">{role}</p>
      <p className="text-xs text-gray-400 mb-4">Since {since}</p>

      <a
        href={`tel:${phone}`}
        className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-saffron-500 transition-colors"
      >
        <Phone size={12} /> {phone}
      </a>
    </div>
  );
}