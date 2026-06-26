import { Check } from "lucide-react";

export default function DonationCard({ tier }) {
  const { amount, label, perks, featured } = tier;

  return (
    <div
      className={`relative flex flex-col rounded-2xl p-6 border-2 transition-all duration-300 ${
        featured
          ? "border-saffron-400 bg-saffron-50 shadow-lg scale-105"
          : "border-gray-100 bg-white hover:border-saffron-200 hover:shadow-md"
      }`}
    >
      {/* Popular badge */}
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-saffron-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
            ⭐ Most Popular
          </span>
        </div>
      )}

      <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">{label}</p>
      <p className="text-3xl font-extrabold text-saffron-500 mb-4">{amount}</p>

      <ul className="space-y-2 flex-1 mb-6">
        {perks.map((perk) => (
          <li key={perk} className="flex items-center gap-2 text-sm text-gray-600">
            <Check size={14} className="text-saffron-400 shrink-0" />
            {perk}
          </li>
        ))}
      </ul>

      <a
        href="tel:+91XXXXXXXXXX"
        className={`w-full text-center py-2.5 rounded-xl text-sm font-semibold transition-colors ${
          featured
            ? "bg-saffron-400 text-white hover:bg-saffron-500"
            : "border border-saffron-300 text-saffron-600 hover:bg-saffron-50"
        }`}
      >
        Donate {amount}
      </a>
    </div>
  );
}