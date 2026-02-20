export default function OracionesPage() {
  return (
    <div
      className="min-h-screen font-sans"
      style={{
        background: "linear-gradient(160deg, #fffbee 0%, #fdf0c0 50%, #f9e49a 100%)",
      }}
    >
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto mb-8">
          <a
            href="/"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-200"
            style={{ border: "1px solid #c89a20", color: "#9a6812" }}
          >
            <span aria-hidden className="text-xs">←</span>
            Volver al inicio
          </a>
        </div>

        <div className="max-w-6xl mx-auto mt-10 flex flex-wrap gap-4">
          <a
            href="/padre-nuestro"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-200"
            style={{ background: "#c89a20", color: "#fff" }}
          >
            Padre Nuestro
            <span aria-hidden className="text-xs">→</span>
          </a>
          <a
            href="/rosario"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-200"
            style={{ background: "#c89a20", color: "#fff" }}
          >
            Rosario
            <span aria-hidden className="text-xs">→</span>
          </a>
          <a
            href="/ave-maria"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-200"
            style={{ background: "#c89a20", color: "#fff" }}
          >
            Ave María
            <span aria-hidden className="text-xs">→</span>
          </a>
        </div>

        <div className="max-w-6xl mx-auto mt-12">
          <div
            className="relative overflow-hidden rounded-3xl px-10 py-16 text-center"
            style={{
              background: "linear-gradient(135deg, #fffbee 0%, #fdf0c0 50%, #f9e49a 100%)",
              border: "1px solid #e8c84a",
              boxShadow: "0 8px 40px rgba(200,154,32,0.18), 0 2px 8px rgba(200,154,32,0.10)",
            }}
          >
            {/* Decorative top accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
              style={{ background: "linear-gradient(90deg, #c89a20, #f0c93a, #c89a20)" }}
            />

            {/* Icon */}
            <div className="flex justify-center mb-6">
              <span style={{ fontSize: "3rem", lineHeight: 1 }}>🕊️</span>
            </div>

            {/* Heading */}
            <h2
              className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3"
              style={{ color: "#7a5010" }}
            >
              Otras oraciones
            </h2>

            {/* Body */}
            <p
              className="text-base sm:text-lg font-medium"
              style={{ color: "#a87828" }}
            >
              por ser incorporadas pronto
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
