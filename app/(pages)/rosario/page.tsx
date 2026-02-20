import RosarioInText from "@/components/RosarioInText";
import RosarioAudio from "@/components/RosarioAudio";
import RosarioVideo from "@/components/RosarioVideo";

export default function RosarioPage() {
  return (
    <div className="min-h-screen font-sans" style={{ background: "#1e0e04" }}>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">

        {/* Hero photo */}
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/hero-bg.png')",
            backgroundPosition: "center 40%",
          }}
        />

        {/* Dark warm overlay */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: "rgba(20,9,2,0.50)" }}
        />

        {/* Bottom fade */}
        <div
          aria-hidden
          className="absolute bottom-0 left-0 right-0 h-48"
          style={{
            background: "linear-gradient(to top, rgba(18,8,2,0.80) 0%, transparent 100%)",
          }}
        />

        {/* Content */}
        <div className="relative text-center px-5 sm:px-6 max-w-3xl mx-auto">
          <a
            href="/"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-200 border border-white/40 text-white/90 hover:border-white/75 hover:bg-white/[0.08] active:bg-white/[0.12] mb-8"
          >
            <span aria-hidden className="text-xs">←</span>
            Volver al inicio
          </a>

          <RosarioInText />
          <RosarioAudio />
          <RosarioVideo />

        </div>
      </section>

    </div>
  );
}
