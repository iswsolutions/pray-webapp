import PadreNuestroComponentText from "@/components/PadreNuestroComponent-Text";
import PadreNuestroComponentAudio from "@/components/PadreNuestroComponent-Audio";
import PadreNuestroComponentVideo from "@/components/PadreNuestroComponent-Video";

export default function PadreNuestroPage() {
  return (
    <div className="min-h-screen px-4 py-8" style={{ background: "#fef5de" }}>
      <div className="max-w-sm mx-auto mb-6">
        <a
          href="/oraciones"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-base font-medium transition-all duration-200"
          style={{ border: "1px solid #c89a20", color: "#9a6812" }}
        >
          <span aria-hidden className="text-xs">←</span>
          Volver a oraciones
        </a>
      </div>
      <PadreNuestroComponentText />
      <PadreNuestroComponentAudio />
      <PadreNuestroComponentVideo />
    </div>
  );
}
