export default function PageUnderConstructionComponent() {
  return (
    <div className="max-w-sm mx-auto mt-4">
      <div
        className="relative overflow-hidden rounded-3xl px-10 py-16 text-center"
        style={{
          background: "linear-gradient(135deg, #fffbee 0%, #fdf0c0 50%, #f9e49a 100%)",
          border: "1px solid #e8c84a",
          boxShadow: "0 8px 40px rgba(200,154,32,0.18), 0 2px 8px rgba(200,154,32,0.10)",
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
          style={{ background: "linear-gradient(90deg, #c89a20, #f0c93a, #c89a20)" }}
        />

        <div className="flex justify-center mb-6">
          <span style={{ fontSize: "3rem", lineHeight: 1 }}>🏗️</span>
        </div>

        <h2
          className="text-2xl sm:text-3xl font-semibold tracking-tight"
          style={{ color: "#7a5010" }}
        >
          Página en construcción
        </h2>
      </div>
    </div>
  );
}
