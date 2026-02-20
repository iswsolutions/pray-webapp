"use client";
import { useRouter } from "next/navigation";

export default function RosarioInText() {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/rosario-v1")}
      className="rounded-2xl p-6 text-left w-full max-w-sm mx-auto mb-6 cursor-pointer"
      style={{
        background: "#fffcf8",
        borderTop: "3px solid #c89a20",
        boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
      }}
    >
      {/* Top row: badge + cross */}
      <div className="flex items-center justify-between mb-5">
        <span
          className="text-base font-medium px-5 py-2 rounded-full"
          style={{ background: "#f5ede0", color: "#9a7848" }}
        >
          en texto
        </span>
        <span className="text-3xl" style={{ color: "#c89a20" }}>{"✝\uFE0E"}</span>
      </div>

      {/* Label */}
      <p
        className="text-2xl font-semibold tracking-[0.18em] uppercase mb-1"
        style={{ color: "#c89a20" }}
      >
        Santo Rosario
      </p>


    </div>
  );
}
