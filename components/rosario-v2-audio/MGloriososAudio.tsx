"use client";

import { useRef, useState } from "react";

type AudioState = "idle" | "playing";

export default function MGloriososAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioState, setAudioState] = useState<AudioState>("idle");

  function getAudio(): HTMLAudioElement {
    if (!audioRef.current) {
      audioRef.current = new Audio("/api/audio/m-gloriosos/mensaje");
      audioRef.current.onended = () => setAudioState("idle");
    }
    return audioRef.current;
  }

  function handlePlay() {
    getAudio().play();
    setAudioState("playing");
  }

  return (
    <article className="inline-flex rounded-2xl border border-blue-100 bg-white/80 p-1.5 shadow shadow-blue-100 transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:bg-white">
      <button
        type="button"
        onClick={handlePlay}
        className="flex items-center justify-center w-7 h-7 rounded-full transition-all duration-200 hover:scale-110 active:scale-95 hover:shadow-md hover:shadow-sky-200"
        style={{
          background: "#0ea5e9",
          boxShadow:
            audioState === "playing"
              ? "0 0 0 3px rgba(14,165,233,0.35), 0 0 10px rgba(14,165,233,0.5)"
              : undefined,
          transform: audioState === "playing" ? "scale(1.12)" : undefined,
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-white">
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>
    </article>
  );
}
