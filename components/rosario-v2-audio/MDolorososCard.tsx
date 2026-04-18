"use client";

import { useRef, useState } from "react";

type AudioState = "idle" | "playing";

export default function MDolorososCard({ isHighlighted }: { isHighlighted?: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioState, setAudioState] = useState<AudioState>("idle");

  function getAudio(): HTMLAudioElement {
    if (!audioRef.current) {
      audioRef.current = new Audio("/api/audio/m-dolorosos/mensaje");
      audioRef.current.onended = () => setAudioState("idle");
    }
    return audioRef.current;
  }

  function handlePlay(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (audioState === "playing") {
      getAudio().pause();
      getAudio().currentTime = 0;
      setAudioState("idle");
    } else {
      getAudio().play();
      setAudioState("playing");
    }
  }

  return (
    <a
      href="/rosario/audio/m-dolorosos"
      className="block relative w-full max-w-sm mx-auto mb-3 rounded-2xl p-4 cursor-pointer"
      style={{
        background: "linear-gradient(145deg, rgba(238,247,254,0.85) 0%, rgba(212,236,250,0.75) 100%)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: isHighlighted ? "2px solid rgba(26,107,181,0.75)" : "1px solid rgba(26,107,181,0.25)",
        boxShadow: isHighlighted
          ? "0 2px 4px rgba(26,107,181,0.12), 0 8px 24px rgba(26,107,181,0.28), 0 24px 48px rgba(10,60,120,0.18), 0 0 0 3px rgba(26,107,181,0.18)"
          : "0 2px 4px rgba(26,107,181,0.08), 0 8px 24px rgba(26,107,181,0.14), 0 24px 48px rgba(10,60,120,0.12)",
      }}
    >
      {/* Glowing top accent */}
      <div
        className="absolute top-0 left-6 right-6 h-px rounded-full"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(74,174,232,0.7), transparent)",
        }}
      />

      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-1 items-center justify-center">
          <p
            className="font-bold uppercase whitespace-nowrap"
            style={{
              color: "#1a6bb5",
              fontSize: "1.1rem",
              letterSpacing: "0.1em",
              textShadow: "0 1px 8px rgba(26,107,181,0.3)",
            }}
          >
            Misterios Dolorosos
          </p>
        </div>

        <div className="relative flex items-center justify-center flex-shrink-0 w-8 h-8">
          {/* Pulse ring — visible only when idle */}
          {audioState === "idle" && (
            <span
              className="absolute inset-0 rounded-full"
              style={{ background: "rgba(26,107,181,0.15)" }}
            />
          )}
          <button
            type="button"
            onClick={handlePlay}
            className="relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
            style={{
              background: "#5b9fd6",
              boxShadow:
                audioState === "playing"
                  ? "0 0 0 3px rgba(91,159,214,0.35), 0 0 10px rgba(91,159,214,0.5)"
                  : undefined,
            }}
          >
            {audioState === "playing" ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white">
                <path d="M6 6h12v12H6z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Bottom glow accent */}
      <div
        className="absolute bottom-0 left-6 right-6 h-px rounded-full"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(26,107,181,0.35), transparent)",
        }}
      />
    </a>
  );
}
