"use client";
import { useRef, useState } from "react";
import { URLS } from "@/lib/urls";

type AudioState = "idle" | "playing" | "paused";

export default function AveMariaCardAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioState, setAudioState] = useState<AudioState>("idle");

  function getAudio(): HTMLAudioElement {
    if (!audioRef.current) {
      audioRef.current = new Audio(URLS.aveMariaAudio);
      audioRef.current.onended = () => setAudioState("idle");
    }
    return audioRef.current;
  }

  function handlePlay() {
    getAudio().play();
    setAudioState("playing");
  }

  function handlePause() {
    getAudio().pause();
    setAudioState("paused");
  }

  function handleStop() {
    const audio = getAudio();
    audio.pause();
    audio.currentTime = 0;
    setAudioState("idle");
  }

  return (
    <div
      className="relative w-full max-w-sm mx-auto mb-6 rounded-3xl p-8"
      style={{
        background: "linear-gradient(145deg, rgba(255,252,245,0.85) 0%, rgba(255,243,210,0.75) 100%)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(200,154,32,0.25)",
        boxShadow:
          "0 2px 4px rgba(200,154,32,0.08), 0 8px 24px rgba(200,154,32,0.14), 0 24px 48px rgba(120,80,10,0.12)",
      }}
    >
      {/* Glowing top accent */}
      <div
        className="absolute top-0 left-8 right-8 h-px rounded-full"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(200,154,32,0.7), transparent)",
        }}
      />

      {/* Cross icon */}
      <div className="flex justify-center mb-6">
        <span
          className="text-4xl"
          style={{ color: "#c89a20", textShadow: "0 0 18px rgba(200,154,32,0.45)" }}
        >
          {"✝\uFE0E"}
        </span>
      </div>

      {/* Label */}
      <p
        className="text-center font-semibold uppercase mb-6"
        style={{
          color: "#c89a20",
          fontSize: "2rem",
          letterSpacing: "0.28em",
          textShadow: "0 1px 8px rgba(200,154,32,0.3)",
        }}
      >
        Ave María
      </p>

      {/* Divider */}
      <div
        className="mx-auto mb-6 h-px w-16"
        style={{ background: "linear-gradient(90deg, transparent, #c89a20, transparent)" }}
      />

      {/* Audio controls */}
      <div className="flex items-center justify-center gap-6" onClick={(e) => e.stopPropagation()}>
        {/* Play */}
        <button
          type="button"
          onClick={handlePlay}
          className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200 hover:scale-110 active:scale-95 hover:shadow-lg hover:shadow-amber-200"
          style={{
            background: "#c89a20",
            boxShadow: audioState === "playing"
              ? "0 0 0 4px rgba(200,154,32,0.35), 0 0 16px rgba(200,154,32,0.5)"
              : undefined,
            transform: audioState === "playing" ? "scale(1.12)" : undefined,
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>

        {/* Pause */}
        <button
          type="button"
          onClick={handlePause}
          className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200 hover:scale-110 active:scale-95 hover:shadow-md"
          style={{
            background: audioState === "paused" ? "rgba(200,154,32,0.35)" : "rgba(200,154,32,0.12)",
            boxShadow: audioState === "paused"
              ? "0 0 0 3px rgba(200,154,32,0.3)"
              : undefined,
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" style={{ color: "#9a7848" }}>
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        </button>

        {/* Stop */}
        <button
          type="button"
          onClick={handleStop}
          className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200 hover:scale-110 active:scale-95 hover:shadow-md"
          style={{
            background: audioState === "idle" ? "rgba(200,154,32,0.25)" : "rgba(200,154,32,0.12)",
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" style={{ color: "#9a7848" }}>
            <path d="M6 6h12v12H6z" />
          </svg>
        </button>
      </div>

      {/* Bottom glow accent */}
      <div
        className="absolute bottom-0 left-8 right-8 h-px rounded-full"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(200,154,32,0.35), transparent)",
        }}
      />
    </div>
  );
}
