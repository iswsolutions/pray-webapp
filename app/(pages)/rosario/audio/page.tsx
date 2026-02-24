import MGozososCard from "@/components/MGozososCard";
import MDolorososCard from "@/components/MDolorososCard";
import MGloriososCard from "@/components/MGloriososCard";
import MLuminososCard from "@/components/MLuminososCard";

export default function RosarioAudioPage() {
  return (
    <div className="min-h-screen font-sans flex flex-col" style={{ background: "#e8f4fd" }}>
      {/* Back button — top */}
      <div className="max-w-sm mx-auto w-full px-4 pt-4 pb-2">
        <a
          href="/rosario"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-200"
          style={{ border: "1px solid #1a6bb5", color: "#1a6bb5" }}
        >
          <span aria-hidden className="text-xs">←</span>
          Atras a menu Rosario
        </a>
      </div>

      {/* Centered content */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="max-w-sm mx-auto w-full px-4">
          <p className="text-center font-bold text-base mb-3" style={{ color: "#1a6bb5" }}>
            Rosario en Audio
          </p>

          <MGozososCard />
          <MDolorososCard />
          <MGloriososCard />
          <MLuminososCard />
        </div>
      </div>
    </div>
  );
}
