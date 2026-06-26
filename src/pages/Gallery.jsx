import { useState, useRef, useEffect, useCallback } from "react";
import { Play, Pause, X, SkipForward, SkipBack, Music2, Volume2, AlertCircle, Film } from "lucide-react";
import GalleryCard from "../components/GalleryCard";
import { galleryItems, categories } from "../data/gallery";

const musicTracks = galleryItems.filter((i) => i.type === "music");

// ─── Video Promo Modal Component ──────────────────────────────────
function VideoModal({ isOpen, onClose, videoSrc }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="relative w-full max-w-3xl bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10 z-10">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white/70 hover:text-white bg-black/40 hover:bg-black/60 p-2 rounded-full transition-colors z-20"
          aria-label="Close video"
        >
          <X size={18} />
        </button>
        <div className="relative aspect-video w-full bg-black">
          <video
            src={videoSrc}
            controls
            autoPlay
            preload="auto"
            className="w-full h-full object-contain"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

// ─── Music Card ───────────────────────────────────────────────
function MusicCard({ item, isActive, isPlaying, onPlay }) {
  return (
    <div
      className={`flex flex-col rounded-2xl border bg-white shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden
        ${isActive ? "border-saffron-400 ring-2 ring-saffron-200" : "border-gray-100 hover:border-saffron-200"}`}
    >
      <div className={`h-32 bg-gradient-to-br ${item.gradient} flex items-center justify-center relative select-none`}>
        <span className="text-5xl drop-shadow">{item.emoji}</span>
        {isActive && isPlaying && (
          <span className="absolute bottom-2 right-2 flex gap-0.5 items-end h-5">
            {[1, 2, 3, 2, 1].map((h, i) => (
              <span
                key={i}
                className="w-1 bg-white rounded-full opacity-90"
                style={{
                  height: `${h * 5}px`,
                  animation: "musicBar 0.6s ease-in-out infinite alternate",
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 p-4 gap-3">
        <div>
          <span className="text-[10px] font-bold text-saffron-500 uppercase tracking-wider bg-saffron-50 px-2 py-0.5 rounded-full">
            {item.badge}
          </span>
          <h3 className="font-bold text-gray-900 text-xs sm:text-sm mt-2 leading-snug line-clamp-2">
            {item.title}
          </h3>
        </div>
        <button
          onClick={() => onPlay(item)}
          className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all
            ${isActive && isPlaying
              ? "bg-red-50 text-red-600 border border-red-200 hover:bg-red-100"
              : "bg-saffron-500 text-white hover:bg-saffron-600 shadow-sm"}`}
        >
          {isActive && isPlaying
            ? <><Pause size={13} /> Pause</>
            : <><Play size={13} /> Play Track</>}
        </button>
      </div>
    </div>
  );
}

// ─── Bottom Player ────────────────────────────────────────────
function AudioPlayer({ track, isPlaying, audioRef, onPlayPause, onClose, onPrev, onNext, audioError }) {
  const [progress, setProgress]       = useState(0);
  const [duration, setDuration]       = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const fmt = (s) => {
    if (!s || isNaN(s)) return "0:00";
    return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
  };

  const handleSeek = (e) => {
    const el = audioRef.current;
    if (!el?.duration) return;
    const rect  = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    el.currentTime = ratio * el.duration;
  };

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    const onTime = () => {
      setCurrentTime(el.currentTime);
      if (el.duration) setProgress((el.currentTime / el.duration) * 100);
    };
    const onMeta = () => setDuration(el.duration || 0);
    el.addEventListener("timeupdate", onTime);
    el.addEventListener("loadedmetadata", onMeta);
    el.addEventListener("durationchange", onMeta);
    return () => {
      el.removeEventListener("timeupdate", onTime);
      el.removeEventListener("loadedmetadata", onMeta);
      el.removeEventListener("durationchange", onMeta);
    };
  }, [audioRef, track]);

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:w-[420px] bg-white border border-saffron-200 shadow-2xl rounded-2xl p-4 z-50">

      {/* Error message */}
      {audioError && (
        <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-xl px-3 py-2 mb-3">
          <AlertCircle size={14} className="text-red-500 shrink-0" />
          <p className="text-xs text-red-600 leading-snug">
            Can't play: <span className="font-mono font-bold">{track.src}</span>
            <br />Check the file exists in <span className="font-mono font-bold">public/audio/</span>
          </p>
        </div>
      )}

      {/* Track info */}
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${track.gradient} flex items-center justify-center text-2xl shrink-0 shadow-sm`}>
          {track.emoji}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-bold text-saffron-500 uppercase tracking-wide flex items-center gap-1">
            <Music2 size={10} /> Now Playing
          </p>
          <h4 className="font-bold text-gray-800 text-xs sm:text-sm truncate">{track.title}</h4>
          {!audioError && (
            <p className="text-[10px] text-gray-400 font-mono truncate">{track.src}</p>
          )}
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100">
          <X size={16} />
        </button>
      </div>

      {/* Progress */}
      {!audioError && (
        <>
          <div onClick={handleSeek} className="relative h-2 bg-gray-100 rounded-full mb-2 cursor-pointer group">
            <div className="h-full bg-gradient-to-r from-saffron-400 to-saffron-500 rounded-full" style={{ width: `${progress}%` }} />
            <div className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-saffron-500 rounded-full shadow-md opacity-0 group-hover:opacity-100 border-2 border-white transition-opacity"
              style={{ left: `calc(${progress}% - 7px)` }} />
          </div>
          <div className="flex justify-between text-[10px] text-gray-400 font-mono mb-3">
            <span>{fmt(currentTime)}</span>
            <span>{fmt(duration)}</span>
          </div>
        </>
      )}

      {/* Controls */}
      <div className="flex items-center justify-center gap-4">
        <button onClick={onPrev} className="p-2 text-gray-500 hover:text-saffron-500 hover:bg-saffron-50 rounded-xl transition-all">
          <SkipBack size={18} />
        </button>
        <button
          onClick={onPlayPause}
          disabled={!!audioError}
          className="w-11 h-11 rounded-full bg-saffron-500 text-white flex items-center justify-center hover:bg-saffron-600 shadow-md transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} />}
        </button>
        <button onClick={onNext} className="p-2 text-gray-500 hover:text-saffron-500 hover:bg-saffron-50 rounded-xl transition-all">
          <SkipForward size={18} />
        </button>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────
export default function Gallery() {
  const [activeTab,    setActiveTab]    = useState("All");
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying,    setIsPlaying]    = useState(false);
  const [audioError,   setAudioError]   = useState(false);
  const [isVideoOpen,  setIsVideoOpen]  = useState(false); // Video Modal State Flag
  
  const audioRef = useRef(null);

  const filtered =
    activeTab === "All"
      ? galleryItems
      : galleryItems.filter((g) => g.category === activeTab);

  // ── Track change → load + play ────────────────────────────────
  useEffect(() => {
    const el = audioRef.current;
    if (!el || !currentTrack) return;

    setAudioError(false);
    setIsPlaying(false);

    el.src = currentTrack.src;
    el.load();

    const onCanPlay = () => {
      el.play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.error("Play failed:", err);
          setIsPlaying(false);
        });
    };

    const onError = () => {
      console.error("Audio load error. File not found or wrong format:", currentTrack.src);
      setAudioError(true);
      setIsPlaying(false);
    };

    el.addEventListener("canplay", onCanPlay, { once: true });
    el.addEventListener("error",   onError,   { once: true });

    return () => {
      el.removeEventListener("canplay", onCanPlay);
      el.removeEventListener("error",   onError);
    };
  }, [currentTrack]);

  // ── Sync play/pause state with native events ──────────────────
  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    const onPlay  = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => {
      setCurrentTrack((prev) => {
        if (!prev) return null;
        const idx = musicTracks.findIndex((t) => t.id === prev.id);
        return musicTracks[(idx + 1) % musicTracks.length];
      });
    };
    el.addEventListener("play",  onPlay);
    el.addEventListener("pause", onPause);
    el.addEventListener("ended", onEnded);
    return () => {
      el.removeEventListener("play",  onPlay);
      el.removeEventListener("pause", onPause);
      el.removeEventListener("ended", onEnded);
    };
  }, []);

  // ── Controls ──────────────────────────────────────────────────
  const handlePlayTrack = useCallback((item) => {
    if (currentTrack?.id === item.id) {
      if (isPlaying) audioRef.current?.pause();
      else           audioRef.current?.play().catch(console.warn);
    } else {
      setCurrentTrack(item);
    }
  }, [currentTrack, isPlaying]);

  const handlePlayPause = () => {
    const el = audioRef.current;
    if (!el) return;
    if (isPlaying) el.pause();
    else           el.play().catch(console.warn);
  };

  const handleNext = () => {
    if (!currentTrack) return;
    const idx = musicTracks.findIndex((t) => t.id === currentTrack.id);
    setAudioError(false);
    setCurrentTrack(musicTracks[(idx + 1) % musicTracks.length]);
  };

  const handlePrev = () => {
    if (!currentTrack) return;
    const idx = musicTracks.findIndex((t) => t.id === currentTrack.id);
    setAudioError(false);
    setCurrentTrack(musicTracks[(idx - 1 + musicTracks.length) % musicTracks.length]);
  };

  const handleClose = () => {
    audioRef.current?.pause();
    setCurrentTrack(null);
    setIsPlaying(false);
    setAudioError(false);
  };

  return (
    <div className={`min-h-screen bg-gray-50/50 ${currentTrack ? "pb-52" : "pb-12"}`}>

      {/* Single permanent audio element — never unmounted */}
      <audio ref={audioRef} preload="auto" style={{ display: "none" }} />

      <style>{`
        @keyframes musicBar {
          from { transform: scaleY(0.4); }
          to   { transform: scaleY(1.2); }
        }
      `}</style>

      {/* Header / Hero Section */}
      <section className="bg-gradient-to-b from-saffron-50 to-white py-16 px-4 text-center border-b border-gray-100">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <p className="text-xs uppercase tracking-widest font-semibold text-saffron-400 mb-3">Memories &amp; Media</p>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Mandal Gallery</h1>
          <p className="text-gray-500 text-base leading-relaxed mb-6">
            Relive the moments of devotion, colour, and holy music from Yukti Ganesh Mandal since 2022.
          </p>
          
          {/* Promo Video Hook Button */}
          <button
            onClick={() => {
              audioRef.current?.pause(); // Automatically pause any active background music
              setIsVideoOpen(true);
            }}
            className="px-5 py-2.5 bg-gradient-to-r from-saffron-500 to-amber-500 hover:from-saffron-600 hover:to-amber-600 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all transform active:scale-95 flex items-center gap-2"
          >
            <Film size={16} /> Watch Festival Highlights
          </button>
        </div>
      </section>

      {/* Grid */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 pb-4 border-b border-gray-100">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2 rounded-xl text-sm font-semibold border transition-all duration-200
                  ${activeTab === cat
                    ? "bg-saffron-500 text-white border-saffron-500 shadow-md"
                    : "bg-white border-gray-200 text-gray-600 hover:border-saffron-300 hover:text-saffron-500"}`}
              >
                {cat === "Music" ? "🎵 " : "✨ "}{cat}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filtered.map((item) =>
              item.type === "music" ? (
                <MusicCard
                  key={item.id}
                  item={item}
                  isActive={currentTrack?.id === item.id}
                  isPlaying={isPlaying}
                  onPlay={handlePlayTrack}
                />
              ) : (
                <GalleryCard key={item.id} item={item} />
              )
            )}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-gray-200">
              <span className="text-5xl">📭</span>
              <p className="mt-3 text-sm font-medium text-gray-400">No media here yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Share */}
      <section className="py-8 px-4 bg-saffron-50 border-t border-saffron-100">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium text-gray-600">
            📸 Have photos or bhajan audio from our festival? Share with us!
          </p>
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2.5 rounded-xl bg-green-600 text-white text-sm font-bold hover:bg-green-700 transition-colors shadow-sm inline-flex items-center gap-2"
          >
            <Volume2 size={14} /> Send via WhatsApp
          </a>
        </div>
      </section>

      {/* Persistent Audio Player Bar Widget */}
      {currentTrack && (
        <AudioPlayer
          track={currentTrack}
          isPlaying={isPlaying}
          audioRef={audioRef}
          audioError={audioError}
          onPlayPause={handlePlayPause}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}

      {/* Video Overlay Modal Layout Node */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoSrc="/videos/mandal-promo.mp4" // Make sure the video file matches this path in public folder
      />
    </div>
  );
}