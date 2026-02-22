"use client";
import { useRef, useState } from "react";
import { URLS } from "@/lib/urls";

type VideoState = "idle" | "playing" | "paused";

export default function AveMariaCardVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoState, setVideoState] = useState<VideoState>("idle");
  const [isLoading, setIsLoading] = useState(false);

  function handlePlay() {
    videoRef.current?.play();
    setVideoState("playing");
    setIsLoading(true);
  }

  function handlePause() {
    videoRef.current?.pause();
    setVideoState("paused");
    setIsLoading(false);
  }

  function handleStop() {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setVideoState("idle");
    setIsLoading(false);
  }

  return (
    <div
      className="relative w-full max-w-sm mx-auto mb-6 rounded-3xl p-5 sm:p-8"
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
          fontSize: "clamp(1.4rem, 6vw, 2rem)",
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

      {/* Video player */}
      <div className="relative w-full mb-4">
        <video
          ref={videoRef}
          src={URLS.avemariaVideo}
          className="w-full rounded-2xl aspect-video bg-black/5"
          style={{ border: "1px solid rgba(200,154,32,0.2)" }}
          playsInline
          preload="metadata"
          onWaiting={() => setIsLoading(true)}
          onPlaying={() => setIsLoading(false)}
          onEnded={() => { setVideoState("idle"); setIsLoading(false); }}
        />

        {/* Loading overlay */}
        {isLoading && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl gap-3"
            style={{ background: "rgba(255,248,230,0.82)", backdropFilter: "blur(4px)" }}
          >
            <svg
              className="w-10 h-10 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" stroke="rgba(200,154,32,0.25)" strokeWidth="3" />
              <path d="M12 2a10 10 0 0 1 10 10" stroke="#c89a20" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <span className="text-sm font-medium" style={{ color: "#9a7848", letterSpacing: "0.05em" }}>
              Cargando…
            </span>
          </div>
        )}
      </div>

      {/* Video controls */}
      <div className="flex items-center justify-center gap-8 sm:gap-6" onClick={(e) => e.stopPropagation()}>
        {/* Play */}
        <button
          type="button"
          onClick={handlePlay}
          className="flex items-center justify-center w-14 h-14 sm:w-12 sm:h-12 rounded-full transition-all duration-200 hover:scale-110 active:scale-95 hover:shadow-lg hover:shadow-amber-200"
          style={{
            background: "#c89a20",
            boxShadow: videoState === "playing"
              ? "0 0 0 4px rgba(200,154,32,0.35), 0 0 16px rgba(200,154,32,0.5)"
              : undefined,
            transform: videoState === "playing" ? "scale(1.12)" : undefined,
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
          className="flex items-center justify-center w-14 h-14 sm:w-12 sm:h-12 rounded-full transition-all duration-200 hover:scale-110 active:scale-95 hover:shadow-md"
          style={{
            background: videoState === "paused" ? "rgba(200,154,32,0.35)" : "rgba(200,154,32,0.12)",
            boxShadow: videoState === "paused" ? "0 0 0 3px rgba(200,154,32,0.3)" : undefined,
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
          className="flex items-center justify-center w-14 h-14 sm:w-12 sm:h-12 rounded-full transition-all duration-200 hover:scale-110 active:scale-95 hover:shadow-md"
          style={{
            background: videoState === "idle" ? "rgba(200,154,32,0.25)" : "rgba(200,154,32,0.12)",
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
