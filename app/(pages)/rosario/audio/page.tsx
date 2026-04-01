"use client";

import MGozososCard from "@/components/rosario-v2-audio/MGozososCard";
import MDolorososCard from "@/components/rosario-v2-audio/MDolorososCard";
import MGloriososCard from "@/components/rosario-v2-audio/MGloriososCard";
import MLuminososCard from "@/components/rosario-v2-audio/MLuminososCard";
import { getTodayMessage } from "@/lib/todayMessage";

const misterioKeywords = ["Gozosos", "Dolorosos", "Gloriosos", "Luminosos"];

export default function RosarioAudioPage() {
  const todayMessage = getTodayMessage();
  const highlightedKeyword =
    misterioKeywords.find((k) =>
      todayMessage.toLowerCase().includes(k.toLowerCase()),
    ) ?? "";

  return (
    <div className="min-h-screen font-sans flex flex-col" style={{ background: "#e8f4fd" }}>
      {/* Back button — top */}
      <div className="max-w-sm mx-auto w-full px-4 pt-4 pb-2">
        <a
          href="/rosario"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-base font-medium transition-all duration-200"
          style={{ border: "1px solid #1a6bb5", color: "#1a6bb5" }}
        >
          <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 5l-7 7 7 7"/></svg>
          Atras a menu Rosario
        </a>
      </div>

      {/* Centered content */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="max-w-sm mx-auto w-full px-4">
          <span
            className="block text-center rounded-full px-4 py-2 text-base font-semibold mb-3"
            style={{
              border: "1px solid rgba(26,107,181,0.3)",
              background: "rgba(255,255,255,0.85)",
              color: "#1a6bb5",
            }}
          >
            {todayMessage}
          </span>
          <p className="text-center font-bold text-3xl mb-3" style={{ color: "#1a6bb5" }}>
            Rosario en Audio
          </p>

          <MGozososCard isHighlighted={highlightedKeyword === "Gozosos"} />
          <MDolorososCard isHighlighted={highlightedKeyword === "Dolorosos"} />
          <MGloriososCard isHighlighted={highlightedKeyword === "Gloriosos"} />
          <MLuminososCard isHighlighted={highlightedKeyword === "Luminosos"} />
        </div>
      </div>
    </div>
  );
}
