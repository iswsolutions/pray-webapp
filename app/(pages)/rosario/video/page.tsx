export default function RosarioVideoPage() {
  return (
    <div className="min-h-screen font-sans" style={{ background: "#e8f4fd" }}>
      <div className="max-w-sm mx-auto px-4 py-8">
        <div className="mb-6">
          <a
            href="/rosario"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-200"
            style={{ border: "1px solid #1a6bb5", color: "#1a6bb5" }}
          >
            <span aria-hidden className="text-xs">←</span>
            Atras a menu Rosario
          </a>
        </div>

        <p className="text-center font-bold text-base" style={{ color: "#1a6bb5" }}>
          Rosario en Video
        </p>

        <div
          className="relative overflow-hidden rounded-3xl px-10 py-16 text-center mt-6"
          style={{
            background: "linear-gradient(135deg, #eef7fe 0%, #d4ecfa 50%, #b8dff7 100%)",
            border: "1px solid #7bbde8",
            boxShadow: "0 8px 40px rgba(59,130,246,0.12), 0 2px 8px rgba(59,130,246,0.08)",
          }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
            style={{ background: "linear-gradient(90deg, #1a6bb5, #4aaee8, #1a6bb5)" }}
          />

          <div className="flex justify-center mb-6">
            <span style={{ fontSize: "3rem", lineHeight: 1 }}>🏗️</span>
          </div>

          <h2
            className="text-2xl sm:text-3xl font-semibold tracking-tight"
            style={{ color: "#1a5a9a" }}
          >
            Página en construcción
          </h2>
        </div>
      </div>
    </div>
  );
}
