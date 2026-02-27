export default function OracionesPage() {
  return (
    <div
      className="min-h-screen font-sans flex flex-col"
      style={{ background: "linear-gradient(160deg, #fffbee 0%, #fdf0c0 50%, #f9e49a 100%)" }}
    >
      {/* Back button */}
      <div className="max-w-sm mx-auto w-full px-4 pt-4 pb-2">
        <a
          href="/"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-200"
          style={{ border: "1px solid #c89a20", color: "#9a6812" }}
        >
          <span aria-hidden className="text-xs">←</span>
          Volver al inicio
        </a>
      </div>

      {/* Centered content */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="max-w-sm mx-auto w-full px-4">

          {/* Page title */}
          <p className="text-center font-bold text-2xl mb-5" style={{ color: "#9a6812" }}>
            Oraciones
          </p>

          {/* Prayer cards */}
          {[
            { label: "Ave María", href: "/ave-maria" },
            { label: "Padre Nuestro", href: "/padre-nuestro" },
            { label: "Rosario", href: "/rosario" },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="block relative w-full max-w-sm mx-auto mb-3 rounded-2xl p-4 cursor-pointer transition-all duration-200 hover:-translate-y-1"
              style={{
                background: "linear-gradient(145deg, rgba(255,251,238,0.9) 0%, rgba(253,240,192,0.8) 100%)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(200,154,32,0.3)",
                boxShadow:
                  "0 2px 4px rgba(200,154,32,0.08), 0 8px 24px rgba(200,154,32,0.14), 0 24px 48px rgba(154,104,18,0.10)",
              }}
            >
              {/* Glowing top accent */}
              <div
                className="absolute top-0 left-6 right-6 h-px rounded-full"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(240,201,58,0.8), transparent)",
                }}
              />

              <div className="flex items-center justify-between gap-3 px-1">
                <p
                  className="font-semibold uppercase"
                  style={{
                    color: "#9a6812",
                    fontSize: "1rem",
                    letterSpacing: "0.12em",
                    textShadow: "0 1px 8px rgba(200,154,32,0.25)",
                  }}
                >
                  {label}
                </p>
                <span className="text-xs" style={{ color: "#c89a20" }}>→</span>
              </div>

              {/* Bottom glow accent */}
              <div
                className="absolute bottom-0 left-6 right-6 h-px rounded-full"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(200,154,32,0.35), transparent)",
                }}
              />
            </a>
          ))}

          {/* Coming soon card */}
          <div
            className="relative overflow-hidden rounded-2xl p-6 mt-2 text-center"
            style={{
              background: "linear-gradient(145deg, rgba(255,251,238,0.7) 0%, rgba(253,240,192,0.6) 100%)",
              border: "1px dashed rgba(200,154,32,0.4)",
              boxShadow: "0 2px 12px rgba(200,154,32,0.08)",
            }}
          >
            <div
              className="absolute top-0 left-6 right-6 h-px rounded-full"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(240,201,58,0.5), transparent)",
              }}
            />
            <span style={{ fontSize: "2rem", lineHeight: 1 }}>{"🕊\uFE0E"}</span>
            <h2
              className="mt-3 text-base font-semibold tracking-tight"
              style={{ color: "#7a5010" }}
            >
              Otras oraciones
            </h2>
            <p
              className="mt-1 text-sm font-medium"
              style={{ color: "#b8892a" }}
            >
              por ser incorporadas pronto
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
