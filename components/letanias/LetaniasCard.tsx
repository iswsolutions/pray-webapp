"use client";

import { useRef, useState } from "react";

type AudioState = "idle" | "playing" | "paused";

const AUDIO_URL = "/api/audio/letanias";

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function LetaniasCard() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioState, setAudioState] = useState<AudioState>("idle");
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const isSeekingRef = useRef(false);

  function getAudio(): HTMLAudioElement {
    if (!audioRef.current) {
      audioRef.current = new Audio(AUDIO_URL);
      audioRef.current.onended = () => {
        setAudioState("idle");
        setProgress(0);
        setCurrentTime(0);
      };
      audioRef.current.onloadedmetadata = () => {
        setDuration(audioRef.current!.duration);
      };
      audioRef.current.ontimeupdate = () => {
        if (isSeekingRef.current) return;
        const audio = audioRef.current!;
        setCurrentTime(audio.currentTime);
        setProgress(audio.duration ? (audio.currentTime / audio.duration) * 100 : 0);
      };
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
    setProgress(0);
    setCurrentTime(0);
  }

  function handleSeekStart() {
    isSeekingRef.current = true;
  }

  function handleSeekChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = Number(e.target.value);
    const audio = getAudio();
    setProgress(value);
    if (isFinite(audio.duration) && audio.duration > 0) {
      audio.currentTime = (value / 100) * audio.duration;
      setCurrentTime(audio.currentTime);
    }
  }

  function handleSeekEnd() {
    isSeekingRef.current = false;
  }

  return (
    <article
      className="rounded-2xl overflow-hidden shadow-md transition duration-200 hover:-translate-y-1 hover:shadow-lg"
      style={{ background: "linear-gradient(135deg, #eff6ff 0%, #f0f9ff 60%, #f8fbff 100%)", border: "1px solid #bfdbfe" }}
    >
      {/* Top accent bar */}
      <div className="h-1 w-full" style={{ background: "linear-gradient(to right, #60a5fa, #7dd3fc)" }} />

      <div className="p-4 sm:p-5 text-center">
        <h3 className="text-sm font-semibold sm:text-base" style={{ color: "#1e40af" }}>
          Letanías de la Virgen María
        </h3>
      </div>

      {/* Audio controls */}
      <div className="flex items-center justify-center gap-3 pb-3">
        {/* Play */}
        <button
          type="button"
          onClick={handlePlay}
          className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
          style={{
            background: "#60a5fa",
            boxShadow: audioState === "playing"
              ? "0 0 0 3px rgba(96,165,250,0.35), 0 0 12px rgba(96,165,250,0.5)"
              : "0 2px 6px rgba(96,165,250,0.3)",
            transform: audioState === "playing" ? "scale(1.12)" : undefined,
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>

        {/* Pause */}
        <button
          type="button"
          onClick={handlePause}
          className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
          style={{
            background: audioState === "paused" ? "rgba(96,165,250,0.25)" : "rgba(96,165,250,0.12)",
            boxShadow: audioState === "paused" ? "0 0 0 2px rgba(96,165,250,0.4)" : undefined,
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" style={{ color: "#60a5fa" }}>
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        </button>

        {/* Stop */}
        <button
          type="button"
          onClick={handleStop}
          className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
          style={{
            background: audioState === "idle" ? "rgba(96,165,250,0.2)" : "rgba(96,165,250,0.10)",
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" style={{ color: "#60a5fa" }}>
            <path d="M6 6h12v12H6z" />
          </svg>
        </button>
      </div>

      {/* Progress bar */}
      <div className="px-4 pb-4">
        <input
          type="range"
          min={0}
          max={100}
          value={progress}
          onChange={handleSeekChange}
          onMouseDown={handleSeekStart}
          onTouchStart={handleSeekStart}
          onMouseUp={handleSeekEnd}
          onTouchEnd={handleSeekEnd}
          onKeyUp={handleSeekEnd}
          className="w-full h-1 rounded-full appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #60a5fa ${progress}%, #dbeafe ${progress}%)`,
          }}
        />
        <div className="mt-1 flex justify-between text-xs" style={{ color: "#93c5fd" }}>
          <span>{formatTime(currentTime)}</span>
          <span>{duration > 0 && isFinite(duration) ? formatTime(duration) : "--:--"}</span>
        </div>
      </div>
    </article>
  );
}
