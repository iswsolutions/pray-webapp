"use client";

import { useState } from "react";

export default function PrimerMisterioDoloroso() {
  const [open, setOpen] = useState(false);

  return (
    <article className="rounded-3xl border border-sky-100 bg-white/80 p-5 text-left shadow-lg shadow-sky-100 transition duration-200 hover:-translate-y-1 hover:border-sky-200 hover:bg-white sm:p-6 md:p-8">
      <div className="flex items-center gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-xl font-semibold text-sky-800 sm:h-14 sm:w-14 sm:text-2xl">
          1
        </span>
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
            Primer Misterio Doloroso
          </h3>
          <p className="text-lg font-semibold text-sky-700 sm:text-xl">
            La agonía de Jesús en el Huerto de los Olivos
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
          En el jardín de Getsemaní, Jesús experimenta miedo y tristeza al
          enfrentar su pasión. Sin embargo, se entrega totalmente al Padre,
          confiando en Él. Nosotros también podemos apoyarnos en Dios durante
          los problemas y aceptar su plan para nuestra vida, diciendo: &quot;Que se
          haga tu voluntad&quot;.
        </p>
      )}
    </article>
  );
}
