import { useState } from "react";
// Removed Instagram and Facebook from here
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors]   = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = "Name is required";
    if (!form.message.trim()) e.message = "Message is required";
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    // In production: send to backend / EmailJS / Formspree
    setSubmitted(true);
  };

  const field = (id, label, type = "text", placeholder = "") => (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold text-gray-600 mb-1.5">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={form[id]}
        onChange={(e) => { setForm({ ...form, [id]: e.target.value }); setErrors({ ...errors, [id]: "" }); }}
        className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-saffron-300 transition ${
          errors[id] ? "border-red-400 bg-red-50" : "border-gray-200 bg-white"
        }`}
      />
      {errors[id] && <p className="text-xs text-red-500 mt-1">{errors[id]}</p>}
    </div>
  );

  return (
    <div className="min-h-screen">

      {/* Page Header */}
      <section className="bg-gradient-to-b from-saffron-50 to-white py-16 px-4 text-center border-b border-gray-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest font-semibold text-saffron-400 mb-3">Reach Out</p>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-500 text-base leading-relaxed">
            Have a question, want to volunteer, or wish to sponsor? We'd love to hear from you!
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left — Info */}
          <div>
            <p className="section-label">Get In Touch</p>
            <h2 className="section-title">We're Always Here</h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-8">
              Whether you want to donate, volunteer, share photos, or just send your blessings — we welcome you with open arms. Ganapati Bappa Morya! 🙏
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: <MapPin size={18} className="text-saffron-400" />, label: "Address",   value: "Bhalki, Bidar District, Karnataka – 585328", href: null },
                { icon: <Phone  size={18} className="text-saffron-400" />, label: "Phone",     value: "+91 XXXXX XXXXX", href: "tel:+91XXXXXXXXXX" },
                { icon: <Mail   size={18} className="text-saffron-400" />, label: "Email",     value: "yuktiganesh@gmail.com", href: "mailto:yuktiganesh@gmail.com" },
                { icon: <MessageCircle size={18} className="text-green-500" />, label: "WhatsApp", value: "+91 XXXXX XXXXX", href: "https://wa.me/91XXXXXXXXXX" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-saffron-200 transition-all">
                  <div className="w-9 h-9 rounded-xl bg-saffron-50 flex items-center justify-center shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="text-sm font-medium text-gray-800 hover:text-saffron-500 transition-colors">
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-gray-800">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Follow Us</p>
              <div className="flex gap-3">
                {/* Instagram Link */}
                <a
                  href="https://www.instagram.com/shree_yukti_ganeshmandal/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:text-white hover:bg-pink-500 hover:border-transparent transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                  Instagram
                </a>

                {/* Facebook Link */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:text-white hover:bg-blue-600 hover:border-transparent transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                  Facebook
                </a>

                {/* WhatsApp Link */}
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:text-white hover:bg-green-500 hover:border-transparent transition-all"
                >
                  <MessageCircle size={18} /> WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 px-6 bg-saffron-50 rounded-3xl border border-saffron-100">
                <CheckCircle size={52} className="text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent! 🙏</h3>
                <p className="text-gray-500 text-sm">
                  Thank you for reaching out. We'll get back to you as soon as possible. Ganapati Bappa Morya!
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", message: "" }); }}
                  className="mt-6 px-5 py-2 text-sm text-saffron-600 border border-saffron-300 rounded-xl hover:bg-saffron-50 transition"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
                <div>
                  <p className="text-base font-semibold text-gray-900 mb-1">Send us a message</p>
                  <p className="text-xs text-gray-400">We'll reply within 24 hours.</p>
                </div>

                {field("name",    "Your Name *",     "text",  "Your name")}
                {field("phone",   "Phone Number",    "tel",   "+91 XXXXX XXXXX")}
                {field("email",   "Email Address",   "email", "you@example.com")}

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-gray-600 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Your message here..."
                    value={form.message}
                    onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: "" }); }}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-saffron-300 transition resize-none ${
                      errors.message ? "border-red-400 bg-red-50" : "border-gray-200 bg-white"
                    }`}
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-saffron-400 text-white font-semibold text-sm hover:bg-saffron-500 transition-colors shadow-sm"
                >
                  <Send size={15} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-52 bg-saffron-50 border-t border-saffron-100 flex items-center justify-center">
        <div className="text-center">
          <MapPin size={28} className="text-saffron-400 mx-auto mb-2" />
          <p className="text-sm font-semibold text-gray-700">Bhalki, Bidar District, Karnataka</p>
          <a
            href="https://maps.google.com/?q=Bhalki,Karnataka"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-saffron-500 hover:underline mt-1 inline-block"
          >
            Open in Google Maps →
          </a>
        </div>
      </section>

    </div>
  );
}