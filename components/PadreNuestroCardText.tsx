"use client";
import { useRouter } from "next/navigation";

export default function PadreNuestroCardText() {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/padre-nuestro/texto")}
      className="rounded-2xl p-6 text-left w-full max-w-sm mx-auto mb-6 cursor-pointer"
      style={{
        background: "#fffcf8",
        borderTop: "3px solid #c89a20",
        boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
      }}
    >
      {/* Top row: badge + cross */}
      <div className="flex items-center justify-between mb-5">
        <span className="text-3xl" style={{ color: "#9a7848" }}>{"✝\uFE0E"}</span>
      </div>

      {/* Label */}
      <p
        className="text-2xl font-semibold tracking-[0.18em] uppercase mb-1 text-center"
        style={{ color: "#c89a20" }}
      >
        Padre Nuestro
      </p>

      {/* Prayer text */}
      <p className="text-base leading-relaxed mt-4" style={{ color: "#5a3818" }}>
        Padre nuestro, que estás en el cielo, santificado sea tu nombre, venga a nosotros tu reino, hágase tu voluntad, en la tierra como en el cielo. Danos hoy nuestro pan de cada día, perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden. No nos dejes caer en la tentación, y líbranos del mal. Amén.
      </p>

    </div>
  );
}
