export default function PadreNuestroPageVideo() {
  return (
    <div className="min-h-screen px-4 py-8" style={{ background: "#fffcf8" }}>
      <div className="max-w-sm mx-auto mb-6">
        <a
          href="/padre-nuestro"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-base font-medium transition-all duration-200"
          style={{ border: "1px solid #c89a20", color: "#9a6812" }}
        >
          <span aria-hidden className="text-xs">←</span>
          Volver
        </a>
      </div>
    </div>
  );
}
