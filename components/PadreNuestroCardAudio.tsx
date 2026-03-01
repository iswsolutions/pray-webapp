"use client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { URLS } from "@/lib/urls";

type AudioState = "idle" | "playing" | "paused";

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function PadreNuestroCardAudio() {
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioState, setAudioState] = useState<AudioState>("idle");
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const isSeekingRef = useRef(false);

  function getAudio(): HTMLAudioElement {
    if (!audioRef.current) {
      audioRef.current = new Audio(URLS.padreNuestroAudio);
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

      {/* Progress bar */}
      <div className="mt-5 px-1" onClick={(e) => e.stopPropagation()}>
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
          className="w-full h-1.5 rounded-full appearance-none cursor-pointer range-gold"
          style={{
            background: `linear-gradient(to right, #c89a20 ${progress}%, rgba(200,154,32,0.15) ${progress}%)`,
          }}
        />
        <div className="mt-1 flex justify-between text-xs" style={{ color: "#b8975a" }}>
          <span>{formatTime(currentTime)}</span>
          <span>{duration > 0 && isFinite(duration) ? formatTime(duration) : "--:--"}</span>
        </div>
      </div>

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
            background: audioState === "paused" ? "rgba(200,154,32,0.35)" : "#f5ede0",
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
            background: audioState === "idle" ? "rgba(200,154,32,0.25)" : "#f5ede0",
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" style={{ color: "#9a7848" }}>
            <path d="M6 6h12v12H6z" />
          </svg>
        </button>
      </div>

    </div>
  );
}
