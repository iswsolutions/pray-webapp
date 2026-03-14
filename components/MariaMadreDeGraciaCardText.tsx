"use client";

export default function MariaMadreDeGraciaCardText() {
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
          style={{
            color: "#c89a20",
            textShadow: "0 0 18px rgba(200,154,32,0.45)",
          }}
        >
          {"✝\uFE0E"}
        </span>
      </div>

      {/* Label */}
      <p
        className="text-center font-semibold uppercase mb-6"
        style={{
          color: "#c89a20",
          fontSize: "0.75rem",
          letterSpacing: "0.28em",
          textShadow: "0 1px 8px rgba(200,154,32,0.3)",
        }}
      >
        María Madre de Gracia
      </p>

      {/* Divider */}
      <div
        className="mx-auto mb-6 h-px w-16"
        style={{ background: "linear-gradient(90deg, transparent, #c89a20, transparent)" }}
      />

      {/* Prayer text */}
      <p
        className="text-center leading-8"
        style={{
          color: "#5a3818",
          fontSize: "1.05rem",
          letterSpacing: "0.01em",
          lineHeight: "1.9",
        }}
      >
        María, Madre de gracia, Madre de misericordia, En la vida y en la muerte, ampáranos, gran Señora.
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
