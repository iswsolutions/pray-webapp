import MGloriososCard from "@/components/rosario-v2-audio/MGloriososCard";
import PreMisterioDolorososAudio from "@/components/rosario-v2-audio/PreMisterioDolorososAudio";
import PrimerMisterioGloriosoAudio from "@/components/rosario-v2-audio/PrimerMisterioGloriosoAudio";
import SegundoMisterioGloriosoAudio from "@/components/rosario-v2-audio/SegundoMisterioGloriosoAudio";
import TercerMisterioGloriosoAudio from "@/components/rosario-v2-audio/TercerMisterioGloriosoAudio";
import CuartoMisterioGloriosoAudio from "@/components/rosario-v2-audio/CuartoMisterioGloriosoAudio";
import QuintoMisterioGloriosoAudio from "@/components/rosario-v2-audio/QuintoMisterioGloriosoAudio";

export default function MGloriososAudioPage() {
  return (
    <div className="min-h-screen font-sans flex flex-col" style={{ background: "#e8f4fd" }}>
      {/* Back button */}
      <div className="max-w-sm mx-auto w-full px-4 pt-4 pb-2">
        <a
          href="/rosario/audio"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-200"
          style={{ border: "1px solid #1a6bb5", color: "#1a6bb5" }}
        >
          <span aria-hidden className="text-xs">←</span>
          Atras a Rosario en Audio
        </a>
      </div>

      {/* Centered content */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="max-w-sm mx-auto w-full px-4">
          <MGloriososCard />
          <div className="mt-3">
            <PreMisterioDolorososAudio />
          </div>
          <div className="mt-3">
            <PrimerMisterioGloriosoAudio />
          </div>
          <div className="mt-3">
            <SegundoMisterioGloriosoAudio />
          </div>
          <div className="mt-3">
            <TercerMisterioGloriosoAudio />
          </div>
          <div className="mt-3">
            <CuartoMisterioGloriosoAudio />
          </div>
          <div className="mt-3">
            <QuintoMisterioGloriosoAudio />
          </div>
          <div className="pt-4 pb-2">
            <a
              href="/rosario/audio"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-200"
              style={{ border: "1px solid #1a6bb5", color: "#1a6bb5" }}
            >
              <span aria-hidden className="text-xs">←</span>
              Atras a Rosario en Audio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
