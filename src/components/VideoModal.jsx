import { X } from "lucide-react";

export default function VideoModal({ isOpen, onClose, videoSrc }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      {/* Click outside to close container overlay */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Box */}
      <div className="relative w-full max-w-3xl bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10 z-10 animate-scale-up">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white/70 hover:text-white bg-black/40 hover:bg-black/60 p-2 rounded-full transition-colors z-20"
          aria-label="Close video"
        >
          <X size={18} />
        </button>

        {/* Video Player Engine Layout */}
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