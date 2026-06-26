import { useState } from "react";
import { Copy, Check, Heart, Smartphone, Building2, X, ShieldCheck, AlertTriangle, ChevronDown, ChevronUp } from "lucide-react";

const PHONE = "917483836900";
const UPI_ID = "7483836900@upi";

const TIERS = [
  { amount: "₹501",    raw: 501,   label: "Devotee",          perks: ["Name in prasad list", "Special blessings", "Digital certificate"],                                        featured: false },
  { amount: "₹1,100",  raw: 1100,  label: "Supporter",        perks: ["Name on main banner", "Prasad delivery", "Certificate of honour", "Social media mention"],               featured: true  },
  { amount: "₹5,100",  raw: 5100,  label: "Gold Sponsor",     perks: ["Logo on stage backdrop", "VIP seating invite", "Special aarti mention", "Sponsor certificate"],          featured: false },
  { amount: "₹11,000", raw: 11000, label: "Platinum Sponsor", perks: ["Primary stage branding", "Felicitation on stage", "All Gold benefits", "Exclusive recognition"],         featured: false },
];

const BANK = {
  "Account Name":   "Yukti Ganesh Mandal",
  "Account Number": "XXXX XXXX XXXX",
  "IFSC Code":      "SBIN0XXXXXX",
  "Bank":           "State Bank of India, Bhalki",
  "UPI ID":         UPI_ID,
};

const TERMS = [
  {
    icon: "🔴",
    title: "No Refund Policy",
    desc: "All donations made to Yukti Ganesh Mandal are strictly non-refundable. Once a payment is processed, it cannot be reversed, cancelled, or returned under any circumstances.",
  },
  {
    icon: "🙏",
    title: "Voluntary Donation",
    desc: "This is a voluntary religious contribution. By proceeding, you confirm that you are donating willingly and not under any pressure or obligation.",
  },
  {
    icon: "🎯",
    title: "Usage of Funds",
    desc: "All collected donations will be used solely for Ganesh Chaturthi celebrations, pandal decorations, cultural programs, and community service activities in Bhalki.",
  },
  {
    icon: "🏅",
    title: "Benefits & Recognition",
    desc: "Benefits such as name on banner, certificate, or sponsor branding are subject to timely confirmation. Please send your payment screenshot on WhatsApp to claim your benefits.",
  },
  {
    icon: "📋",
    title: "No Legal Obligation",
    desc: "Yukti Ganesh Mandal is a community group. Donations do not create any legal contract, equity, or claim over the mandal's assets or decisions.",
  },
  {
    icon: "📞",
    title: "Disputes",
    desc: "Any concerns regarding your donation must be raised within 7 days of payment by contacting us on WhatsApp +91 7483836900. We will resolve all matters in good faith.",
  },
];

// ── SVG Payment Icons ─────────────────────────────────────────
const GPay = () => (
  <svg viewBox="0 0 48 48" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
    <path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);

const PhonePe = () => (
  <svg viewBox="0 0 48 48" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="10" fill="#5F259F"/>
    <path fill="white" d="M33.5 10h-8.2L14 23.5l5.5 5.5 4-4v13h5V25l5-5-2.5-2.5L33.5 10zM19.5 38h-5V20l5 5v13z"/>
    <circle fill="white" cx="17" cy="15" r="3"/>
  </svg>
);

const Paytm = () => (
  <svg viewBox="0 0 48 48" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="10" fill="#00B9F1"/>
    <path fill="white" d="M8 20h6v12H8z"/>
    <path fill="#002970" d="M14 20h6v6h-6z"/>
    <path fill="white" d="M20 20h6v12h-6z"/>
    <path fill="white" d="M32 20c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 9c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/>
  </svg>
);

const BHIM = () => (
  <svg viewBox="0 0 48 48" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="10" fill="#00A651"/>
    <text x="24" y="20" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="Arial">BHIM</text>
    <text x="24" y="32" textAnchor="middle" fill="white" fontSize="7" fontFamily="Arial">UPI</text>
    <rect x="10" y="35" width="28" height="2" rx="1" fill="white" opacity="0.5"/>
  </svg>
);

// ── Terms Modal ───────────────────────────────────────────────
function TermsModal({ tier, onAccept, onClose }) {
  const [scrolledToBottom, setScrolledToBottom] = useState(false);
  const [checked, setChecked] = useState(false);
  const [expanded, setExpanded] = useState(null);

  const handleScroll = (e) => {
    const el = e.target;
    if (el.scrollHeight - el.scrollTop <= el.clientHeight + 10) {
      setScrolledToBottom(true);
    }
  };

  const canProceed = scrolledToBottom && checked;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center px-4 pb-4 sm:pb-0">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-white rounded-3xl w-full max-w-md shadow-2xl z-10 overflow-hidden flex flex-col max-h-[92vh]">

        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-5 text-white shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShieldCheck size={22} />
              <div>
                <h2 className="text-base font-extrabold">Terms &amp; Conditions</h2>
                <p className="text-xs opacity-80">Please read before proceeding</p>
              </div>
            </div>
            <button onClick={onClose} className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition">
              <X size={16} />
            </button>
          </div>

          {/* Donating for */}
          <div className="mt-3 bg-white/20 rounded-xl px-4 py-2.5 flex items-center justify-between">
            <span className="text-xs opacity-80">Donating as</span>
            <span className="font-bold text-sm">{tier.label} — {tier.amount}</span>
          </div>
        </div>

        {/* Non-refund warning banner */}
        <div className="bg-red-50 border-b border-red-200 px-5 py-3 flex items-start gap-3 shrink-0">
          <AlertTriangle size={16} className="text-red-500 shrink-0 mt-0.5" />
          <p className="text-xs text-red-700 font-semibold leading-relaxed">
            ⚠️ Important: All donations are <span className="underline decoration-2">strictly non-refundable</span>. Once payment is made, it cannot be returned or reversed.
          </p>
        </div>

        {/* Scrollable terms */}
        <div
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto px-5 py-4 space-y-3"
        >
          {TERMS.map((term, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-100 bg-gray-50 overflow-hidden"
            >
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="w-full flex items-center gap-3 px-4 py-3 text-left"
              >
                <span className="text-lg shrink-0">{term.icon}</span>
                <span className="flex-1 text-sm font-semibold text-gray-800">{term.title}</span>
                {expanded === i
                  ? <ChevronUp size={16} className="text-gray-400 shrink-0" />
                  : <ChevronDown size={16} className="text-gray-400 shrink-0" />}
              </button>
              {expanded === i && (
                <div className="px-4 pb-4">
                  <p className="text-xs text-gray-500 leading-relaxed border-t border-gray-200 pt-3">
                    {term.desc}
                  </p>
                </div>
              )}
            </div>
          ))}

          {/* Spacer so user sees bottom */}
          <div className="py-2 text-center">
            <p className="text-[10px] text-gray-400">
              {scrolledToBottom ? "✅ You've read all the terms." : "👆 Scroll down to read all terms"}
            </p>
          </div>
        </div>

        {/* Checkbox + CTA */}
        <div className="px-5 py-4 border-t border-gray-100 bg-white shrink-0 space-y-3">
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative mt-0.5 shrink-0">
              <input
                type="checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                className="sr-only"
              />
              <div
                className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
                  checked ? "bg-saffron-500 border-saffron-500" : "border-gray-300 group-hover:border-saffron-300"
                }`}
              >
                {checked && (
                  <svg viewBox="0 0 12 10" width="12" height="10" fill="none">
                    <path d="M1 5l3.5 3.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              I have read and agree to all terms &amp; conditions. I understand that my donation of{" "}
              <strong className="text-gray-900">{tier.amount}</strong> is voluntary and{" "}
              <strong className="text-red-600">non-refundable</strong> once paid.
            </p>
          </label>

          <button
            onClick={onAccept}
            disabled={!canProceed}
            className={`w-full py-3.5 rounded-2xl font-bold text-sm transition-all ${
              canProceed
                ? "bg-saffron-500 text-white hover:bg-saffron-600 shadow-md active:scale-95"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          >
            {!scrolledToBottom
              ? "📜 Scroll to read all terms first"
              : !checked
              ? "☑️ Please accept the terms above"
              : "Proceed to Payment 🙏"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Payment Modal ─────────────────────────────────────────────
function PaymentModal({ tier, onClose }) {
  const [copied, setCopied] = useState("");
  const [customAmount, setCustomAmount] = useState(tier.raw);

  const handleCopy = (value) => {
    navigator.clipboard.writeText(value);
    setCopied(value);
    setTimeout(() => setCopied(""), 2000);
  };

  const upiParams = `pa=${UPI_ID}&pn=Yukti+Ganesh+Mandal&am=${customAmount}&cu=INR&tn=Ganesh+Chaturthi+Donation`;

  const paymentApps = [
    { name: "Google Pay", Icon: GPay,    bg: "hover:bg-blue-50 hover:border-blue-300",   url: `gpay://upi/pay?${upiParams}` },
    { name: "PhonePe",    Icon: PhonePe, bg: "hover:bg-purple-50 hover:border-purple-300", url: `phonepe://pay?${upiParams}` },
    { name: "Paytm",      Icon: Paytm,   bg: "hover:bg-cyan-50 hover:border-cyan-300",    url: `paytmmp://pay?${upiParams}` },
    { name: "BHIM UPI",   Icon: BHIM,    bg: "hover:bg-green-50 hover:border-green-300",  url: `upi://pay?${upiParams}` },
  ];

  const handleAppClick = (url) => {
    const a = document.createElement("a");
    a.href = url;
    a.click();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center px-4 pb-4 sm:pb-0">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-white rounded-3xl w-full max-w-md shadow-2xl z-10 overflow-hidden max-h-[92vh] overflow-y-auto">

        {/* Header */}
        <div className="bg-gradient-to-r from-saffron-400 to-saffron-500 px-6 py-5 text-white">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-xs font-semibold opacity-80 uppercase tracking-wider">Donating as</p>
              <h2 className="text-lg font-extrabold">{tier.label}</h2>
            </div>
            <button onClick={onClose} className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition">
              <X size={16} />
            </button>
          </div>
          <div className="bg-white/20 rounded-2xl px-4 py-3 flex items-center gap-2">
            <span className="text-xl font-bold">₹</span>
            <input
              type="number"
              value={customAmount}
              onChange={(e) => setCustomAmount(Number(e.target.value))}
              className="bg-transparent text-2xl font-extrabold w-full focus:outline-none"
              min="1"
            />
            <span className="text-xs opacity-70 whitespace-nowrap">tap to edit</span>
          </div>
        </div>

        <div className="px-6 py-5 space-y-5">
          {/* Non-refund reminder */}
          <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-xl px-4 py-2.5">
            <AlertTriangle size={14} className="text-red-500 shrink-0" />
            <p className="text-xs text-red-700 font-medium">This donation is non-refundable once paid.</p>
          </div>

          {/* Apps */}
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Pay instantly via UPI app</p>
            <div className="grid grid-cols-2 gap-3">
              {paymentApps.map(({ name, Icon, bg, url }) => (
                <button
                  key={name}
                  onClick={() => handleAppClick(url)}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl border-2 border-gray-100 bg-white font-semibold text-sm text-gray-800 transition-all active:scale-95 ${bg}`}
                >
                  <Icon />
                  <span>{name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* UPI ID */}
          <div className="bg-gray-50 rounded-2xl p-4">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">UPI ID</p>
            <div className="flex items-center justify-between bg-white rounded-xl px-4 py-3 border border-gray-200">
              <span className="text-sm font-mono text-gray-800 font-bold">{UPI_ID}</span>
              <button onClick={() => handleCopy(UPI_ID)} className="flex items-center gap-1.5 text-xs text-saffron-500 font-semibold ml-3 shrink-0">
                {copied === UPI_ID ? <><Check size={13} /> Copied!</> : <><Copy size={13} /> Copy</>}
              </button>
            </div>
          </div>

          {/* Mobile */}
          <div className="bg-gray-50 rounded-2xl p-4">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Mobile Number</p>
            <div className="flex items-center justify-between bg-white rounded-xl px-4 py-3 border border-gray-200">
              <span className="text-sm font-mono text-gray-800 font-bold">+91 7483836900</span>
              <button onClick={() => handleCopy("7483836900")} className="flex items-center gap-1.5 text-xs text-saffron-500 font-semibold ml-3 shrink-0">
                {copied === "7483836900" ? <><Check size={13} /> Copied!</> : <><Copy size={13} /> Copy</>}
              </button>
            </div>
          </div>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${PHONE}?text=Namaste!%20I%20have%20donated%20%E2%82%B9${customAmount}%20to%20Yukti%20Ganesh%20Mandal%20as%20a%20${encodeURIComponent(tier.label)}.%20Please%20find%20my%20payment%20screenshot%20attached.%20%F0%9F%99%8F`}
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-green-500 text-white font-bold text-sm hover:bg-green-600 transition-colors shadow-sm"
          >
            <svg viewBox="0 0 32 32" width="20" height="20" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2C8.28 2 2 8.28 2 16c0 2.46.67 4.83 1.84 6.88L2 30l7.3-1.82A13.94 13.94 0 0016 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm7.6 19.4c-.32.9-1.86 1.72-2.56 1.78-.7.06-1.36.34-4.58-.96-3.87-1.56-6.32-5.52-6.52-5.78-.18-.26-1.54-2.06-1.54-3.92 0-1.88.98-2.8 1.34-3.18.36-.38.78-.48 1.04-.48l.74.01c.24.01.56-.09.88.67.32.76 1.08 2.66 1.18 2.86.1.2.16.44.02.7-.14.26-.22.42-.42.66-.2.22-.42.5-.6.66-.2.18-.4.38-.18.76.24.38 1.04 1.72 2.24 2.78 1.54 1.38 2.84 1.8 3.22 2 .38.2.6.18.82-.12.22-.3.94-1.1 1.2-1.48.24-.38.5-.32.84-.2.34.14 2.18 1.02 2.56 1.22.38.2.62.28.72.44.1.16.1.92-.22 1.82z"/>
            </svg>
            Send Payment Screenshot on WhatsApp
          </a>

          <p className="text-center text-[11px] text-gray-400 leading-relaxed pb-1">
            After paying, send your screenshot on WhatsApp to get your certificate 🙏
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Donation Tier Card ────────────────────────────────────────
function DonationTierCard({ tier, onDonate }) {
  return (
    <div className={`relative flex flex-col rounded-2xl p-6 border-2 transition-all duration-300 ${
      tier.featured ? "border-saffron-400 bg-saffron-50 shadow-lg scale-105" : "border-gray-100 bg-white hover:border-saffron-200 hover:shadow-md"
    }`}>
      {tier.featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-saffron-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow">⭐ Most Popular</span>
        </div>
      )}
      <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">{tier.label}</p>
      <p className="text-3xl font-extrabold text-saffron-500 mb-4">{tier.amount}</p>
      <ul className="space-y-2 flex-1 mb-6">
        {tier.perks.map((perk) => (
          <li key={perk} className="flex items-center gap-2 text-sm text-gray-600">
            <span className="text-saffron-400 font-bold">✓</span> {perk}
          </li>
        ))}
      </ul>
      <button
        onClick={() => onDonate(tier)}
        className={`w-full text-center py-3 rounded-xl text-sm font-bold transition-all active:scale-95 ${
          tier.featured ? "bg-saffron-400 text-white hover:bg-saffron-500 shadow-sm" : "border-2 border-saffron-300 text-saffron-600 hover:bg-saffron-50"
        }`}
      >
        Donate {tier.amount} 🙏
      </button>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────
export default function Donations() {
  const [copied,       setCopied]       = useState("");
  const [termsTier,    setTermsTier]    = useState(null); // show terms first
  const [activeTier,   setActiveTier]   = useState(null); // show payment after accept

  const handleCopy = (value) => {
    navigator.clipboard.writeText(value);
    setCopied(value);
    setTimeout(() => setCopied(""), 2000);
  };

  const handleDonateClick = (tier) => {
    setTermsTier(tier);   // open terms modal first
  };

  const handleAcceptTerms = () => {
    setActiveTier(termsTier); // move to payment
    setTermsTier(null);
  };

  return (
    <div className="min-h-screen">

      {/* Terms Modal — shown first */}
      {termsTier && (
        <TermsModal
          tier={termsTier}
          onAccept={handleAcceptTerms}
          onClose={() => setTermsTier(null)}
        />
      )}

      {/* Payment Modal — shown after accepting terms */}
      {activeTier && (
        <PaymentModal
          tier={activeTier}
          onClose={() => setActiveTier(null)}
        />
      )}

      {/* Header */}
      <section className="bg-gradient-to-b from-saffron-50 to-white py-16 px-4 text-center border-b border-gray-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest font-semibold text-saffron-400 mb-3">Support Us</p>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Donations &amp; Sponsorship</h1>
          <p className="text-gray-500 text-base leading-relaxed">
            Your generous contribution helps us celebrate bigger, serve the community better, and keep the spirit of Ganesh Chaturthi alive in Bhalki.
          </p>
        </div>
      </section>

      {/* Why donate */}
      <section className="py-10 px-4 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: "🎨", title: "Decorations",      desc: "Stunning pandal décor that lights up Bhalki" },
            { icon: "🎭", title: "Cultural Programs", desc: "Bhajans, dance, and talent shows for everyone" },
            { icon: "🤝", title: "Community Seva",    desc: "Free meals, prasad & welfare activities" },
          ].map((i) => (
            <div key={i.title} className="p-5 rounded-2xl border border-gray-100 bg-saffron-50 text-center">
              <div className="text-4xl mb-3">{i.icon}</div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{i.title}</h3>
              <p className="text-xs text-gray-500">{i.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tiers */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label">Choose Your Support</p>
            <h2 className="section-title">Donation Tiers</h2>
            <p className="text-sm text-gray-400 mt-1">Click any tier — terms &amp; conditions will appear before payment</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {TIERS.map((tier) => (
              <DonationTierCard key={tier.label} tier={tier} onDonate={handleDonateClick} />
            ))}
          </div>
        </div>
      </section>

      {/* Bank details */}
      <section className="py-16 px-4 bg-saffron-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label">How to Pay</p>
            <h2 className="section-title">Payment Details</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center">
                  <Smartphone size={18} className="text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">UPI / GPay / PhonePe / Paytm</h3>
              </div>
              <div className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3">
                <span className="text-sm font-mono text-gray-700 font-bold">{UPI_ID}</span>
                <button onClick={() => handleCopy(UPI_ID)} className="flex items-center gap-1.5 text-xs text-saffron-500 font-medium ml-3 shrink-0">
                  {copied === UPI_ID ? <><Check size={13} /> Copied!</> : <><Copy size={13} /> Copy</>}
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Building2 size={18} className="text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">Bank Transfer / NEFT / IMPS</h3>
              </div>
              <div className="space-y-2">
                {Object.entries(BANK).filter(([k]) => k !== "UPI ID").map(([key, val]) => (
                  <div key={key} className="flex items-center justify-between py-2.5 border-b border-gray-100 last:border-0">
                    <span className="text-xs text-gray-400 w-32 shrink-0">{key}</span>
                    <span className="text-sm font-medium text-gray-700 flex-1 text-right mr-3 font-mono">{val}</span>
                    <button onClick={() => handleCopy(val)} className="text-xs text-saffron-400 hover:text-saffron-600 shrink-0">
                      {copied === val ? <Check size={13} /> : <Copy size={13} />}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
              <Heart size={16} className="text-yellow-500 shrink-0 mt-0.5" />
              <p className="text-xs text-yellow-800 leading-relaxed">
                After donating, please send a screenshot to our WhatsApp{" "}
                <a href={`https://wa.me/${PHONE}`} className="font-bold underline">+91 7483836900</a>{" "}
                so we can add your name to our records and send your certificate.{" "}
                <strong>Thank you for your seva!</strong> 🙏
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}