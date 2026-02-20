export default function OracionesPage() {
  return (
    <div className="min-h-screen font-sans" style={{ background: "#fef5de" }}>
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

        <div className="max-w-6xl mx-auto mt-10">
          <a
            href="/padre-nuestro"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-200"
            style={{ background: "#c89a20", color: "#fff" }}
          >
            Padre Nuestro
            <span aria-hidden className="text-xs">→</span>
          </a>
        </div>
      </section>
    </div>
  );
}
