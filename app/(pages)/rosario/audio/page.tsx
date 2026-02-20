"use client";

import Image from "next/image";
import MisteriosGloriosos from "@/components/MisteriosGloriosos";

const mysteries = [
  { name: "Misterios gozosos",    days: "lunes y sábado",       dayNumbers: [1, 6] },
  { name: "Misterios dolorosos",  days: "martes y viernes",     dayNumbers: [2, 5] },
  { name: "Misterios gloriosos",  days: "miércoles y domingo",  dayNumbers: [3, 0] },
  { name: "Misterios luminosos",  days: "jueves",               dayNumbers: [4]    },
];

const dayNames = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];

const mysteryNameByDay: Record<number, string> = {
  0: "Misterios Gloriosos",
  1: "Misterios Gozosos",
  2: "Misterios Dolorosos",
  3: "Misterios Gloriosos",
  4: "Misterios Luminosos",
  5: "Misterios Dolorosos",
  6: "Misterios Gozosos",
};

export default function RosarioAudioPage() {
  const today = new Date().getDay();
  const todayName = dayNames[today];
  const todayMystery = mysteryNameByDay[today];

  return (
    <div className="min-h-screen font-sans" style={{ background: "#e8f4fd" }}>
      <div className="max-w-sm mx-auto px-4 py-8 flex flex-col gap-5">

        {/* Header */}
        <p className="text-center font-bold text-base" style={{ color: "#1a6bb5" }}>
          Hoy {todayName}: {todayMystery}
        </p>

        {/* Subtitle */}
        <p
          className="text-center text-sm tracking-[0.28em] uppercase"
          style={{ color: "#4a90c4" }}
        >
          un encuentro con Maria
        </p>

        {/* Mystery cards */}
        <div className="flex flex-col gap-3">
          {mysteries.map((m) => {
            const isActive = m.dayNumbers.includes(today);
            return (
              <div
                key={m.name}
                className="rounded-2xl px-5 py-4 text-center"
                style={{
                  background: "#ffffff",
                  border: isActive ? "2px solid #3b82f6" : "1.5px solid #d1e8f5",
                }}
              >
                <p className="font-bold text-base" style={{ color: "#1a6bb5" }}>
                  {m.name}
                </p>
                <p className="text-sm mt-0.5" style={{ color: "#6b9ab8" }}>
                  ({m.days})
                </p>
              </div>
            );
          })}
        </div>

        <MisteriosGloriosos />

        {/* Ave Maria image */}
        <div className="rounded-2xl overflow-hidden">
          <Image
            src="/ave-maria.png"
            alt="Ave Maria"
            width={400}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>

      </div>
    </div>
  );
}
