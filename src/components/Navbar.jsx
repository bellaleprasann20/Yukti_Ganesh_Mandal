import { useState } from "react";
import { NavLink } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home",      to: "/"          },
  { label: "About",     to: "/about"     },
  { label: "Events",    to: "/events"    },
  { label: "Gallery",   to: "/gallery"   },
  { label: "Committee", to: "/committee" },
  { label: "Contact",   to: "/contact"   },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive
        ? "text-saffron-500 border-b-2 border-saffron-400 pb-0.5"
        : "text-gray-600 hover:text-saffron-500"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-saffron-100 flex items-center justify-center text-xl select-none shadow-sm">
              🪔
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-gray-900 leading-tight">
                Yukti Ganesh Mandal
              </p>
              <p className="text-xs text-gray-400">Bhalki, Karnataka · Est. 2022</p>
            </div>
          </NavLink>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === "/"}>
                {l.label}
              </NavLink>
            ))}
          </div>

          {/* Donate CTA */}
          <NavLink
            to="/donations"
            className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-saffron-400 text-white text-sm font-semibold hover:bg-saffron-50 transition-colors shadow-sm"
          >
            🙏 Donate
          </NavLink>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition"
            aria-label="Toggle menu"
          >
            {open ? (
              /* Inline SVG for 'X' close icon */
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18M6 6l12 12"/>
              </svg>
            ) : (
              /* Inline SVG for 'Menu' hamburger icon */
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12"/>
                <line x1="4" x2="20" y1="6" y2="6"/>
                <line x1="4" x2="20" y1="18" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-5 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-sm font-medium py-1 ${isActive ? "text-saffron-500" : "text-gray-700"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/donations"
            onClick={() => setOpen(false)}
            className="mt-1 text-center px-4 py-2 rounded-lg bg-saffron-400 text-white text-sm font-semibold"
          >
            🙏 Donate Now
          </NavLink>
        </div>
      )}
    </nav>
  );
}