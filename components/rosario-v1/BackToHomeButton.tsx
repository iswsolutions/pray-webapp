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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
        <span>Volver al inicio</span>
      </Link>
    </div>
  );
}
