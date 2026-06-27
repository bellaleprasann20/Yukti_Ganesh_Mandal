import { useEffect, useState } from "react";

export default function SplashScreen({ onDone }) {
  const [phase, setPhase] = useState("enter"); // enter → show → exit → done

  useEffect(() => {
    // Phase 1: fade in (0ms)
    // Phase 2: hold (800ms → 2200ms)
    // Phase 3: fade out (2200ms → 2800ms)
    // Phase 4: unmount (2800ms)
    const t1 = setTimeout(() => setPhase("show"), 100);
    const t2 = setTimeout(() => setPhase("exit"), 2200);
    const t3 = setTimeout(() => onDone(), 2800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center select-none"
      style={{
        background: "linear-gradient(135deg, #EF9F27 0%, #D4860A 40%, #854F0B 100%)",
        opacity: phase === "enter" ? 0 : phase === "exit" ? 0 : 1,
        transition: phase === "enter"
          ? "opacity 0.6s ease-out"
          : phase === "exit"
          ? "opacity 0.6s ease-in"
          : "opacity 0.6s ease-out",
      }}
    >
      {/* Decorative ring */}
      <div className="relative flex items-center justify-center mb-6">
        <div
          className="absolute w-36 h-36 rounded-full border-4 border-white/20"
          style={{
            animation: "splashRing 2s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-28 h-28 rounded-full border-2 border-white/30"
          style={{
            animation: "splashRing 2s ease-in-out infinite 0.3s",
          }}
        />
        {/* Diya icon */}
        <div
          className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-5xl"
          style={{ animation: "splashPulse 1.5s ease-in-out infinite" }}
        >
          🪔
        </div>
      </div>

      {/* Mandal name */}
      <h1
        className="text-white font-extrabold text-2xl sm:text-3xl tracking-wide text-center px-6 mb-2"
        style={{
          opacity: phase === "show" ? 1 : 0,
          transform: phase === "show" ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 0.5s ease-out 0.2s, transform 0.5s ease-out 0.2s",
        }}
      >
        Yukti Ganesh Mandal
      </h1>

      <p
        className="text-white/80 text-sm sm:text-base font-medium text-center px-6 mb-8"
        style={{
          opacity: phase === "show" ? 1 : 0,
          transform: phase === "show" ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 0.5s ease-out 0.35s, transform 0.5s ease-out 0.35s",
        }}
      >
        Bhalki, Karnataka · Est. 2022
      </p>

      {/* Tagline */}
      <div
        className="px-6 py-2.5 rounded-full border-2 border-white/40 text-white font-bold text-lg sm:text-xl tracking-wider"
        style={{
          opacity: phase === "show" ? 1 : 0,
          transition: "opacity 0.5s ease-out 0.5s",
        }}
      >
        🙏 Ganapati Bappa Morya!
      </div>

      {/* Dot loader */}
      <div className="flex gap-2 mt-10">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-white/60"
            style={{
              animation: "splashDot 1.2s ease-in-out infinite",
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes splashRing {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50%       { transform: scale(1.1); opacity: 1; }
        }
        @keyframes splashPulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.08); }
        }
        @keyframes splashDot {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40%            { transform: scale(1.2); opacity: 1; }
        }
      `}</style>
    </div>
  );
}