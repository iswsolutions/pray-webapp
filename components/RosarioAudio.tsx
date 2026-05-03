"use client";
import { useRouter } from "next/navigation";

export default function RosarioAudio() {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/rosario/audio")}
      className="relative rounded-2xl p-6 w-full max-w-sm mx-auto mb-6 cursor-pointer"
      style={{
        background: "#fffcf8",
        borderTop: "3px solid #c89a20",
        boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
      }}
    >
      {/* Cross — pinned top right */}
      <span className="absolute top-5 right-6 text-3xl" style={{ color: "#c89a20" }}>
        {"✝︎"}
      </span>

      {/* Badge — centered like title */}
      <div className="flex justify-center mb-5">
        <span
          className="text-lg font-bold px-5 py-2 rounded-full text-center"
          style={{ background: "#f5ede0", color: "#9a7848" }}
        >
          en audio
        </span>
      </div>

      {/* Label */}
      <p
        className="text-center text-2xl font-semibold tracking-[0.18em] uppercase mb-1"
        style={{ color: "#c89a20" }}
      >
        Santo Rosario
      </p>
    </div>
  );
}
