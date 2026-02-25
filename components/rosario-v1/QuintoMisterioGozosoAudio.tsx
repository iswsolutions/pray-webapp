"use client";

import { useRef, useState } from "react";

type AudioState = "idle" | "playing" | "paused";

const AUDIO_URL = "/api/audio/m-gozosos/quinto-misterio";

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function QuintoMisterioGozosoAudio() {
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
    <article className="rounded-2xl border border-sky-100 bg-white/80 p-3 text-left shadow shadow-sky-100 transition duration-200 hover:-translate-y-1 hover:border-sky-200 hover:bg-white sm:p-4">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-semibold text-sky-800">
          5
        </span>
        <div>
          <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
            Quinto Misterio Gozoso
          </h3>
          <p className="text-sm font-medium text-sky-700 sm:text-base">
            El Niño Jesús perdido y hallado en el Templo
          </p>
        </div>
      </div>

      {/* Audio controls */}
      <div className="mt-3 flex items-center justify-center gap-2">
        <button
          type="button"
          onClick={handlePlay}
          className="flex items-center justify-center w-7 h-7 rounded-full transition-all duration-200 hover:scale-110 active:scale-95 hover:shadow-md hover:shadow-sky-200"
          style={{
            background: "#0ea5e9",
            boxShadow: audioState === "playing" ? "0 0 0 3px rgba(14,165,233,0.35), 0 0 10px rgba(14,165,233,0.5)" : undefined,
            transform: audioState === "playing" ? "scale(1.12)" : undefined,
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-white">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>

        <button
          type="button"
          onClick={handlePause}
          className="flex items-center justify-center w-7 h-7 rounded-full transition-all duration-200 hover:scale-110 active:scale-95 hover:shadow-md"
          style={{
            background: audioState === "paused" ? "rgba(14,165,233,0.35)" : "rgba(14,165,233,0.12)",
            boxShadow: audioState === "paused" ? "0 0 0 2px rgba(14,165,233,0.3)" : undefined,
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3" style={{ color: "#0369a1" }}>
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        </button>

        <button
          type="button"
          onClick={handleStop}
          className="flex items-center justify-center w-7 h-7 rounded-full transition-all duration-200 hover:scale-110 active:scale-95 hover:shadow-md"
          style={{ background: audioState === "idle" ? "rgba(14,165,233,0.25)" : "rgba(14,165,233,0.12)" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3" style={{ color: "#0369a1" }}>
            <path d="M6 6h12v12H6z" />
          </svg>
        </button>
      </div>

      {/* Progress bar */}
      <div className="mt-2 px-1">
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
          style={{ background: `linear-gradient(to right, #0ea5e9 ${progress}%, #e0f2fe ${progress}%)` }}
        />
        <div className="mt-1 flex justify-between text-xs" style={{ color: "#94a3b8" }}>
          <span>{formatTime(currentTime)}</span>
          <span>{duration > 0 && isFinite(duration) ? formatTime(duration) : "--:--"}</span>
        </div>
      </div>
    </article>
  );
}
