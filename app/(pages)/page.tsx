import Image from "next/image";
import Footer from "@/components/Footer";
import Aviso from "@/components/Aviso";

// Palette derived from hero photo (praying hands with golden light rays):
//   Light rays:   #f0d890  bright warm gold
//   Bokeh:        #c89030  warm amber
//   Dark corners: #2e1808  warm dark brown
//   Wood table:   #9a7040  warm tan
//   Accent gold:  #c89a20  rich golden
//   Deep dark:    #1e0e04  near-black warm



export default function Home() {
  return (
    <div className="min-h-screen font-sans" style={{ background: "#1e0e04" }}>

      {/* ── Floating pill navbar ──────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-3 sm:pt-5 sm:px-4">
        <nav
          className="flex items-center justify-center w-full max-w-2xl backdrop-blur-md border border-white/10 rounded-full px-4 py-2.5 sm:px-5 sm:py-3 gap-4 sm:gap-6"
          style={{ background: "rgba(22,10,2,0.58)" }}
        >
<a href="/" className="text-base font-medium transition-colors py-1" style={{ color: "#f0d890" }}>Inicio</a>
          <a href="/oraciones" className="text-base font-medium transition-colors py-1" style={{ color: "#f0d890" }}>Oraciones</a>
          <a href="/rosario" className="text-base font-medium transition-colors py-1" style={{ color: "#f0d890" }}>Rosario</a>
        </nav>
      </header>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">

        {/* Photo — clasped hands on wooden table with golden light rays & bokeh */}
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark warm overlay */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: "rgba(20,9,2,0.50)" }}
        />

        {/* Bottom fade into the next section */}
        <div
          aria-hidden
          className="absolute bottom-0 left-0 right-0 h-48"
          style={{
            background: "linear-gradient(to top, rgba(18,8,2,0.80) 0%, transparent 100%)",
          }}
        />

        {/* Hero content */}
        <div className="relative text-center px-5 sm:px-6 max-w-3xl mx-auto">
          <p
            className="text-xs sm:text-base font-semibold tracking-[0.22em] sm:tracking-[0.28em] uppercase mb-5 sm:mb-7"
            style={{ color: "rgba(240,210,130,0.80)" }}
          >
            Un Santuario Digital
          </p>

          <h1
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] mb-5 sm:mb-7 drop-shadow-sm"
            style={{ color: "#ffffff" }}
          >
            Encuentra paz
            <br />a través de la oración
          </h1>

          <p
            className="text-sm sm:text-lg max-w-lg mx-auto mb-10 sm:mb-12 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.68)" }}
          >
            Una colección de oraciones para guiar tu camino
            espiritual. Pausa, reflexiona y acércate a Dios.
          </p>

          <a
            href="/oraciones"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-200 border border-white/40 text-white/90 hover:border-white/75 hover:bg-white/[0.08] active:bg-white/[0.12]"
          >
            Ir a Oraciones
          </a>
        </div>
      </section>



      <Aviso />
      <Footer />

    </div>
  );
}
