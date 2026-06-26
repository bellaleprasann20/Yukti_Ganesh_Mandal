import { NavLink } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-saffron-100 flex items-center justify-center text-xl">🪔</div>
              <div>
                <p className="font-bold text-white text-sm">Yukti Ganesh Mandal</p>
                <p className="text-xs text-gray-400">Bhalki, Karnataka</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mb-4">
              Celebrating Ganesh Chaturthi with devotion, culture, and community spirit since 2022.
            </p>
            <p className="text-saffron-300 font-semibold text-sm">🙏 Ganapati Bappa Morya!</p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {[
                ["Home",      "/"],
                ["About",     "/about"],
                ["Events",    "/events"],
                ["Gallery",   "/gallery"],
                ["Committee", "/committee"],
                ["Donate",    "/donations"],
                ["Contact",   "/contact"],
              ].map(([label, to]) => (
                <li key={to}>
                  <NavLink to={to} className="text-sm text-gray-400 hover:text-saffron-300 transition-colors">
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-saffron-300 mt-0.5 shrink-0" />
                <span className="text-gray-400">Bhalki, Bidar District, Karnataka – 585328</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-saffron-300 shrink-0" />
                <a href="tel:+91XXXXXXXXXX" className="text-gray-400 hover:text-saffron-300 transition-colors">
                  +91 XXXXX XXXXX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-saffron-300 shrink-0" />
                <a href="mailto:yuktiganesh@gmail.com" className="text-gray-400 hover:text-saffron-300 transition-colors">
                  yuktiganesh@gmail.com
                </a>
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              {/* Instagram SVG Alternative */}
              <a href="https://www.instagram.com/shree_yukti_ganeshmandal/" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-saffron-400 text-gray-300 hover:text-gray-900 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              
              {/* Facebook SVG Alternative */}
              <a href="https://facebook.com" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-saffron-400 text-gray-300 hover:text-gray-900 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Yukti Ganesh Mandal, Bhalki. All rights reserved.</p>
          <p>Made with ❤️ for our community</p>
        </div>
      </div>
    </footer>
  );
}