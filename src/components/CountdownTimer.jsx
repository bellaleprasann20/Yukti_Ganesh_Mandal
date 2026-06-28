import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import FadeIn from "./FadeIn";

// 🗓️ Ganesh Chaturthi 2026 — 14 September 2026, 7:00 AM IST
const FESTIVAL_DATE = new Date("2026-09-14T07:00:00+05:30");

function pad(n) {
  return String(n).padStart(2, "0");
}

function getTimeLeft() {
  const now  = new Date();
  const diff = FESTIVAL_DATE - now;

  if (diff <= 0) return null; // festival has started!

  const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

// Single flip-style number box
function TimeBox({ value, label }) {
  const [prev,    setPrev]    = useState(value);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (value !== prev) {
      setFlipped(true);
      const t = setTimeout(() => {
        setPrev(value);
        setFlipped(false);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [value, prev]);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-16 sm:w-20 h-16 sm:h-20 rounded-2xl bg-gradient-to-b from-saffron-400 to-saffron-500 shadow-lg overflow-hidden">
        {/* Top half */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="text-white font-extrabold text-2xl sm:text-3xl tabular-nums"
            style={{
              transform: flipped ? "translateY(-4px)" : "translateY(0)",
              opacity:   flipped ? 0 : 1,
              transition: "transform 0.25s ease-in, opacity 0.25s ease-in",
            }}
          >
            {pad(value)}
          </span>
        </div>
        {/* Shine line */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-black/10" />
        {/* Gloss */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-white/10 rounded-t-2xl" />
      </div>
      <p className="text-xs font-bold text-saffron-600 uppercase tracking-widest">{label}</p>
    </div>
  );
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Festival has started
  if (!timeLeft) {
    return (
      <section className="py-16 px-4 bg-gradient-to-r from-saffron-400 to-saffron-500 text-center">
        <FadeIn direction="up">
          <div className="max-w-2xl mx-auto">
            <p className="text-5xl mb-4">🎉</p>
            <h2 className="text-3xl font-extrabold text-white mb-2">
              Ganesh Chaturthi is Here!
            </h2>
            <p className="text-white/80 text-base">
              Ganapati Bappa Morya! Come join us at Bhalki for the celebrations! 🙏
            </p>
          </div>
        </FadeIn>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-saffron-500 via-saffron-400 to-amber-400 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 flex items-center justify-center text-[20rem] pointer-events-none select-none leading-none">
        🪔
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <FadeIn direction="up">
          {/* Badge */}
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            🗓️ Ganesh Chaturthi 2026
          </span>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            Festival Begins In
          </h2>
          <p className="text-white/70 text-sm mb-8">
            14 September 2026 · Murti Sthapana · Bhalki, Karnataka
          </p>

          {/* Timer boxes */}
          <div className="flex items-end justify-center gap-3 sm:gap-6 mb-8">
            <TimeBox value={timeLeft.days}    label="Days"    />

            <span className="text-white font-extrabold text-2xl mb-8 opacity-60">:</span>

            <TimeBox value={timeLeft.hours}   label="Hours"   />

            <span className="text-white font-extrabold text-2xl mb-8 opacity-60">:</span>

            <TimeBox value={timeLeft.minutes} label="Minutes" />

            <span className="text-white font-extrabold text-2xl mb-8 opacity-60">:</span>

            <TimeBox value={timeLeft.seconds} label="Seconds" />
          </div>

          {/* CTA */}
          <div className="flex flex-wrap justify-center gap-3">
            <NavLink
              to="/events"
              className="px-6 py-3 rounded-xl bg-white text-saffron-600 font-bold text-sm hover:bg-saffron-50 transition-colors shadow-md"
            >
              View All Events →
            </NavLink>
            <NavLink
              to="/donations"
              className="px-6 py-3 rounded-xl border-2 border-white/50 text-white font-bold text-sm hover:bg-white/10 transition-colors"
            >
              🙏 Support Us
            </NavLink>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}