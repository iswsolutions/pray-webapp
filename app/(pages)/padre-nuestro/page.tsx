import PadreNuestroComponentText from "@/components/PadreNuestroComponent-Text";
import PadreNuestroComponentAudio from "@/components/PadreNuestroComponent-Audio";
import PadreNuestroComponentVideo from "@/components/PadreNuestroComponent-Video";

export default function PadreNuestroPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-8"
      style={{
        background: "linear-gradient(160deg, #fffbee 0%, #fdf0c0 50%, #f9e49a 100%)",
      }}
    >
      <div className="max-w-sm mx-auto mb-6">
        <a
          href="/oraciones"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-base font-medium transition-all duration-200"
          style={{ border: "1px solid #c89a20", color: "#9a6812" }}
        >
          <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 5l-7 7 7 7"/></svg>
          Volver a oraciones
        </a>
      </div>
      <PadreNuestroComponentText />
      <PadreNuestroComponentAudio />
      <PadreNuestroComponentVideo />
    </div>
  );
}
