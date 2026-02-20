"use client";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { URLS } from "@/lib/urls";

export default function PadreNuestroCardAudio() {
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  function getAudio(): HTMLAudioElement {
    if (!audioRef.current) {
      audioRef.current = new Audio(URLS.padreNuestroAudio);
    }
    return audioRef.current;
  }

  function handlePlay() {
    getAudio().play();
  }

  function handlePause() {
    getAudio().pause();
  }

  function handleStop() {
    const audio = getAudio();
    audio.pause();
    audio.currentTime = 0;
  }

  return (
    <div
      onClick={() => router.push("/padre-nuestro/audio")}
      className="rounded-2xl p-6 text-left w-full max-w-sm mx-auto mb-6 cursor-pointer"
      style={{
        background: "#fffcf8",
        borderTop: "3px solid #c89a20",
        boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
      }}
    >
      {/* Top row: cross */}
      <div className="flex items-center justify-between mb-5">
        <span className="text-3xl" style={{ color: "#9a7848" }}>{"✝\uFE0E"}</span>
      </div>

      {/* Label */}
      <p
        className="text-2xl font-semibold tracking-[0.18em] uppercase mb-1 text-center"
        style={{ color: "#c89a20" }}
      >
        Padre Nuestro
      </p>

      {/* Audio controls */}
      <div
        className="flex items-center justify-center gap-6 mt-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Play */}
        <button
          type="button"
          onClick={handlePlay}
          className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200 hover:scale-110 active:scale-95 hover:shadow-lg hover:shadow-amber-200"
          style={{ background: "#c89a20" }}
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
          style={{ background: "#f5ede0" }}
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
          style={{ background: "#f5ede0" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" style={{ color: "#9a7848" }}>
            <path d="M6 6h12v12H6z" />
          </svg>
        </button>
      </div>

    </div>
  );
}
