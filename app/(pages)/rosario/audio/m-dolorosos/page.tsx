import MDolorososCard from "@/components/rosario-v2-audio/MDolorososCard";
import PrePrimerMisterioDolorosoAudio from "@/components/rosario-v2-audio/Pre-PrimerMisterioDolorosoAudio";
import PrimerMisterioDolorosoAudio from "@/components/rosario-v2-audio/PrimerMisterioDolorosoAudio";
import SegundoMisterioDolorosoAudio from "@/components/rosario-v2-audio/SegundoMisterioDolorosoAudio";
import TercerMisterioDolorosoAudio from "@/components/rosario-v2-audio/TercerMisterioDolorosoAudio";
import CuartoMisterioDolorosoAudio from "@/components/rosario-v2-audio/CuartoMisterioDolorosoAudio";
import QuintoMisterioDolorosoAudio from "@/components/rosario-v2-audio/QuintoMisterioDolorosoAudio";
import LetaniasCard from "@/components/letanias/LetaniasCard";

export default function MDolorososAudioPage() {
  return (
    <div className="min-h-screen font-sans flex flex-col" style={{ background: "#e8f4fd" }}>
      {/* Back button */}
      <div className="max-w-sm mx-auto w-full px-4 pt-4 pb-2">
        <a
          href="/rosario/audio"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-200"
          style={{ border: "1px solid #1a6bb5", color: "#1a6bb5" }}
        >
          <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 5l-7 7 7 7"/></svg>
          Atras a Rosario en Audio
        </a>
      </div>

      {/* Centered content */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="max-w-sm mx-auto w-full px-4">
          <MDolorososCard />
          <div className="mt-4 flex flex-col gap-3">
            <PrePrimerMisterioDolorosoAudio />
            <PrimerMisterioDolorosoAudio />
            <SegundoMisterioDolorosoAudio />
            <TercerMisterioDolorosoAudio />
            <CuartoMisterioDolorosoAudio />
            <QuintoMisterioDolorosoAudio />
          </div>
          <LetaniasCard />
          <div className="pt-4 pb-2">
            <a
              href="/rosario/audio"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-200"
              style={{ border: "1px solid #1a6bb5", color: "#1a6bb5" }}
            >
              <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 5l-7 7 7 7"/></svg>
              Atras a Rosario en Audio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
