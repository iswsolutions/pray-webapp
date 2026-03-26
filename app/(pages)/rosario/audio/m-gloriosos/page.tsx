import MGloriososCard from "@/components/rosario-v2-audio/MGloriososCard";
import MGloriososAudio from "@/components/rosario-v2-audio/MGloriososAudio";
import PreMisterioDolorososAudio from "@/components/rosario-v2-audio/PreMisterioDolorososAudio";
import PrimerMisterioGloriosoAudio from "@/components/rosario-v2-audio/PrimerMisterioGloriosoAudio";
import SegundoMisterioGloriosoAudio from "@/components/rosario-v2-audio/SegundoMisterioGloriosoAudio";
import TercerMisterioGloriosoAudio from "@/components/rosario-v2-audio/TercerMisterioGloriosoAudio";
import CuartoMisterioGloriosoAudio from "@/components/rosario-v2-audio/CuartoMisterioGloriosoAudio";
import QuintoMisterioGloriosoAudio from "@/components/rosario-v2-audio/QuintoMisterioGloriosoAudio";
import LetaniasCard from "@/components/letanias/LetaniasCard";

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
          <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 5l-7 7 7 7"/></svg>
          Atras a Rosario en Audio
        </a>
      </div>

      {/* Centered content */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="max-w-sm mx-auto w-full px-4">
          <div className="-mb-3">
            <MGloriososCard />
          </div>
          <div className="flex justify-center">
            <MGloriososAudio />
          </div>
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
          <div className="mt-3">
            <LetaniasCard />
          </div>
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
