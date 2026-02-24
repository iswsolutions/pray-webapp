"use client";

import { useRef, useState } from "react";

type AudioState = "idle" | "playing" | "paused";

const AUDIO_URL = "/api/audio/m-gozosos/tercer-misterio";

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function TercerMisterioGozosoAudio() {
  const [open, setOpen] = useState(false);
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
    <article className="rounded-3xl border border-sky-100 bg-white/80 p-5 text-left shadow-lg shadow-sky-100 transition duration-200 hover:-translate-y-1 hover:border-sky-200 hover:bg-white sm:p-6 md:p-8">
      <div className="flex items-center gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-xl font-semibold text-sky-800 sm:h-14 sm:w-14 sm:text-2xl">
          3
        </span>
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
            Tercer Misterio Gozoso
          </h3>
          <p className="text-lg font-semibold text-sky-700 sm:text-xl">
            El Nacimiento del Hijo de Dios en el portal de Belén
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="mt-4 flex w-full items-center justify-between rounded-2xl border border-sky-100 bg-sky-50/60 px-4 py-3 text-left text-sm font-semibold text-sky-800 transition hover:border-sky-200 hover:bg-sky-50"
      >
        <span>Meditación</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.6}
          stroke="currentColor"
          className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
          Jesús llegó al mundo en la sencillez de un pesebre. Dios se hizo
          humano para demostrarnos su amor. Se nos invita a ser humildes para
          dejar que Dios entre en nuestra vida.
        </p>
      )}

      {/* Audio controls */}
      <div className="mt-4 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={handlePlay}
          className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 hover:scale-110 active:scale-95 hover:shadow-lg hover:shadow-sky-200"
          style={{
            background: "#0ea5e9",
            boxShadow: audioState === "playing" ? "0 0 0 4px rgba(14,165,233,0.35), 0 0 16px rgba(14,165,233,0.5)" : undefined,
            transform: audioState === "playing" ? "scale(1.12)" : undefined,
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>

        <button
          type="button"
          onClick={handlePause}
          className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 hover:scale-110 active:scale-95 hover:shadow-md"
          style={{
            background: audioState === "paused" ? "rgba(14,165,233,0.35)" : "rgba(14,165,233,0.12)",
            boxShadow: audioState === "paused" ? "0 0 0 3px rgba(14,165,233,0.3)" : undefined,
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" style={{ color: "#0369a1" }}>
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        </button>

        <button
          type="button"
          onClick={handleStop}
          className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 hover:scale-110 active:scale-95 hover:shadow-md"
          style={{ background: audioState === "idle" ? "rgba(14,165,233,0.25)" : "rgba(14,165,233,0.12)" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" style={{ color: "#0369a1" }}>
            <path d="M6 6h12v12H6z" />
          </svg>
        </button>
      </div>

      {/* Progress bar */}
      <div className="mt-3 px-1">
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
          className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
          style={{ background: `linear-gradient(to right, #0ea5e9 ${progress}%, #e0f2fe ${progress}%)` }}
        />
        <div className="mt-1 flex justify-between text-xs" style={{ color: "#64748b" }}>
          <span>{formatTime(currentTime)}</span>
          <span>{duration > 0 && isFinite(duration) ? formatTime(duration) : "--:--"}</span>
        </div>
      </div>
    </article>
  );
}
