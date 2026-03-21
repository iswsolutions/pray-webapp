import Link from "next/link";

type BackToHomeButtonProps = {
  align?: "left" | "center";
};

export default function BackToHomeButton({
  align = "left",
}: BackToHomeButtonProps) {
  return (
    <div
      className={`flex ${
        align === "center" ? "justify-center" : "justify-center sm:justify-start"
      }`}
    >
      <Link
        href="/rosario-v1"
        className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/70 px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm shadow-sky-100 transition hover:border-sky-200 hover:bg-white"
      >
        <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 5l-7 7 7 7"/></svg>
        <span>Volver al inicio</span>
      </Link>
    </div>
  );
}
