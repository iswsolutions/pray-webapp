import MariaMadreDeGraciaCardVideo from "@/components/MariaMadreDeGraciaCardVideo";

export default function MariaMadreDeGraciaPageVideo() {
  return (
    <div className="min-h-screen px-4 py-8" style={{ background: "#fffcf8" }}>
      <div className="max-w-sm mx-auto mb-6">
        <a
          href="/maria-madre-de-gracia"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-base font-medium transition-all duration-200"
          style={{ border: "1px solid #c89a20", color: "#9a6812" }}
        >
          <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 5l-7 7 7 7"/></svg>
          Volver
        </a>
      </div>
      <MariaMadreDeGraciaCardVideo />
    </div>
  );
}
