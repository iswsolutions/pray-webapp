import MLuminososCard from "@/components/rosario-v2-audio/MLuminososCard";
import PreMisteriosLuminososAudio from "@/components/rosario-v2-audio/PreMisteriosLuminososAudio";
import PrimerMisterioLuminosoAudio from "@/components/rosario-v2-audio/PrimerMisterioLuminosoAudio";
import SegundoMisterioLuminosoAudio from "@/components/rosario-v2-audio/SegundoMisterioLuminosoAudio";
import TercerMisterioLuminosoAudio from "@/components/rosario-v2-audio/TercerMisterioLuminosoAudio";
import CuartoMisterioLuminosoAudio from "@/components/rosario-v2-audio/CuartoMisterioLuminosoAudio";
import QuintoMisterioLuminosoAudio from "@/components/rosario-v2-audio/QuintoMisterioLuminosoAudio";

export default function MLuminososAudioPage() {
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
          <MLuminososCard />
          <div className="mt-4 flex flex-col gap-3">
            <PreMisteriosLuminososAudio />
            <PrimerMisterioLuminosoAudio />
            <SegundoMisterioLuminosoAudio />
            <TercerMisterioLuminosoAudio />
            <CuartoMisterioLuminosoAudio />
            <QuintoMisterioLuminosoAudio />
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
