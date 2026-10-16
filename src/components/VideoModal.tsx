import { Play, Sparkles, Volume2, VolumeX, X } from 'lucide-react';
import React, { useState } from 'react';
import heroShoeImg from '../assets/images/hero_shoe_1789480682048.jpg';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl rounded-3xl bg-[#09150e] border border-white/15 shadow-2xl overflow-hidden text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-[#0d1f14]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#c8f53c] animate-pulse" />
            <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-[#c8f53c]">
              ODDAWURLD // 2026 Collection Reel
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cinematic Visual Presentation */}
        <div className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center">
          <img
            src={heroShoeImg}
            alt="Collection Reel"
            referrerPolicy="no-referrer"
            className={`w-full h-full object-cover transform transition-transform duration-[8000ms] ease-out ${
              isPlaying ? 'scale-110' : 'scale-100'
            }`}
          />

          {/* Ambient Video Vignette and Atmospheric Scanlines */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#07110c]/40 to-black/80 pointer-events-none" />

          {/* Floating HUD overlay */}
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-xs tracking-wider text-white/70 pointer-events-none">
            <div className="flex items-center gap-2 font-mono bg-black/50 px-3 py-1 rounded-full border border-white/10">
              <span className="text-[#c8f53c]">REC ● 4K 60FPS</span>
              <span>CINEMATIC ARCHIVE</span>
            </div>
            <div className="font-mono bg-black/50 px-3 py-1 rounded-full border border-white/10">
              ISO 400 • 50MM • T1.4
            </div>
          </div>

          {/* Center Play/Pause state */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute z-20 w-16 h-16 rounded-full bg-[#c8f53c] text-black flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            <Play size={24} className={`fill-current ${isPlaying ? 'opacity-80' : ''}`} />
          </button>

          {/* Bottom Video Progress & Title */}
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between z-20">
            <div>
              <span className="text-[#c8f53c] text-xs font-bold tracking-widest uppercase">
                Collection Film
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white font-display">
                Sculpting The Weightless Silhouette
              </h3>
              <p className="text-xs text-white/60 mt-1">
                A documentary on zero-gravity performance engineering and sustainable bio-foams.
              </p>
            </div>

            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-2.5 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white transition-colors"
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
