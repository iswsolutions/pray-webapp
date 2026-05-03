"use client";
import { useRouter } from "next/navigation";

export default function PadreNuestroComponentAudio() {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/padre-nuestro/audio")}
      className="relative w-full max-w-sm mx-auto mb-6 rounded-3xl p-8 cursor-pointer"
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

      {/* Cross — pinned top right */}
      <span
        className="absolute top-6 right-8 text-3xl"
        style={{ color: "#c89a20", textShadow: "0 0 18px rgba(200,154,32,0.45)" }}
      >
        {"✝︎"}
      </span>

      {/* Badge — centered like title */}
      <div className="flex justify-center mb-6">
        <span
          className="text-lg font-bold px-4 py-1.5 rounded-full text-center"
          style={{ background: "rgba(200,154,32,0.12)", color: "#9a7848", letterSpacing: "0.05em" }}
        >
          en Audio
        </span>
      </div>

      {/* Label */}
      <p
        className="text-center font-semibold uppercase"
        style={{
          color: "#c89a20",
          fontSize: "1.25rem",
          letterSpacing: "0.28em",
          textShadow: "0 1px 8px rgba(200,154,32,0.3)",
        }}
      >
        Padre Nuestro
      </p>

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
