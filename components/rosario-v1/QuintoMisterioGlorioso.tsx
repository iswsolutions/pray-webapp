"use client";

import { useState } from "react";

export default function QuintoMisterioGlorioso() {
  const [open, setOpen] = useState(false);

  return (
    <article className="rounded-3xl border border-sky-100 bg-white/80 p-5 text-left shadow-lg shadow-sky-100 transition duration-200 hover:-translate-y-1 hover:border-sky-200 hover:bg-white sm:p-6 md:p-8">
      <div className="flex items-center gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-xl font-semibold text-sky-800 sm:h-14 sm:w-14 sm:text-2xl">
          5
        </span>
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
            Quinto Misterio Glorioso
          </h3>
          <p className="text-lg font-semibold text-sky-700 sm:text-xl">
            La coronación de nuestra Señora como Reina universal de todo lo
            creado
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="mt-4 flex w-full items-center justify-between rounded-2xl border border-sky-100 bg-sky-50/60 px-4 py-3 text-left text-sm font-semibold text-sky-800 transition hover:border-sky-200 hover:bg-sky-50"
      >
        <span>Meditación</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.6}
          stroke="currentColor"
          className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
          María es coronada como Reina del Cielo y de la Tierra, la madre
          gloriosa que reina junto a su Hijo. Su coronación nos llena de
          esperanza, sabiendo que, como hijos de Dios, estamos llamados a
          participar con ella de la gloria en el cielo. Al contemplar este
          misterio, recordemos que nuestra verdadera patria está en el cielo.
        </p>
      )}
    </article>
  );
}
