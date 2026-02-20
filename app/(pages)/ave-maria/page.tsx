import AveMariaComponentText from "@/components/AveMariaComponent-Text";
import AveMariaComponentAudio from "@/components/AveMariaComponent-Audio";
import AveMariaComponentVideo from "@/components/AveMariaComponent-Video";

export default function AveMariaPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-8"
      style={{
        background: "linear-gradient(160deg, #fffbee 0%, #fdf0c0 50%, #f9e49a 100%)",
      }}
    >
      <div className="w-full max-w-sm mx-auto mb-2">
        <a
          href="/oraciones"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-base font-medium transition-all duration-200"
          style={{ border: "1px solid #c89a20", color: "#9a6812" }}
        >
          <span aria-hidden className="text-xs">←</span>
          regresar a oraciones
        </a>
      </div>
      <AveMariaComponentText />
      <AveMariaComponentAudio />
      <AveMariaComponentVideo />
    </div>
  );
}
