export default function MGloriososCard() {
  return (
    <a
      href="/rosario/audio/m-gloriosos"
      className="block relative w-full max-w-sm mx-auto mb-3 rounded-2xl p-4 cursor-pointer"
      style={{
        background: "linear-gradient(145deg, rgba(238,247,254,0.85) 0%, rgba(212,236,250,0.75) 100%)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(26,107,181,0.25)",
        boxShadow:
          "0 2px 4px rgba(26,107,181,0.08), 0 8px 24px rgba(26,107,181,0.14), 0 24px 48px rgba(10,60,120,0.12)",
      }}
    >
      {/* Glowing top accent */}
      <div
        className="absolute top-0 left-6 right-6 h-px rounded-full"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(74,174,232,0.7), transparent)",
        }}
      />

      <div className="flex items-center justify-center gap-3">
        <span
          className="text-xl"
          style={{ color: "#1a6bb5", textShadow: "0 0 18px rgba(26,107,181,0.45)" }}
        >
          {"✝\uFE0E"}
        </span>
        <p
          className="font-semibold uppercase"
          style={{
            color: "#1a6bb5",
            fontSize: "1rem",
            letterSpacing: "0.18em",
            textShadow: "0 1px 8px rgba(26,107,181,0.3)",
          }}
        >
          Misterios Gloriosos
        </p>
      </div>

      {/* Bottom glow accent */}
      <div
        className="absolute bottom-0 left-6 right-6 h-px rounded-full"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(26,107,181,0.35), transparent)",
        }}
      />
    </a>
  );
}
