"use client";

import Image from "next/image";
import Link from "next/link";
import FooterComponent from "@/components/rosario-v1/Footer";
import WebSiteInfoComponent from "@/components/rosario-v1/WebSiteInfoComponent";
import { getTodayMessage } from "@/lib/todayMessage";

const heroMisterios = [
  {
    title: "Misterios gozosos",
    subtitle: "(lunes y sábado)",
    href: "/rosario-v1/misteriosgozosos",
  },
  {
    title: "Misterios dolorosos",
    subtitle: "(martes y viernes)",
    href: "/rosario-v1/misteriosdolorosos",
  },
  {
    title: "Misterios gloriosos",
    subtitle: "(miércoles y domingo)",
    href: "/rosario-v1/misteriosgloriosos",
  },
  {
    title: "Misterios luminosos",
    subtitle: "(jueves)",
    href: "/rosario-v1/misteriosluminosos",
  },
];

export default function RosarioV1Home() {
  const todayMessage = getTodayMessage();
  const highlightedMisterioText =
    heroMisterios.find((misterio) =>
      todayMessage.toLowerCase().includes(misterio.title.toLowerCase()),
    )?.title ?? "";

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-blue-50 to-white text-slate-900">
      <main
        id="inicio"
        className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-8 sm:gap-16 sm:px-6 sm:py-10 lg:px-12"
      >
        <header className="sticky top-3 z-20 px-1 sm:px-2 sm:top-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded-full border border-sky-100/60 bg-white/90 px-4 py-2 text-sm font-semibold backdrop-blur-sm shadow-lg shadow-sky-100 transition sm:px-5 sm:py-2.5"
              style={{ color: "#0369a1" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
              Inicio
            </Link>
            <span className="rounded-full border border-sky-100/60 bg-white/90 px-4 py-2 text-sm font-semibold text-sky-700 backdrop-blur-sm shadow-lg shadow-sky-100 sm:px-5 sm:py-2.5 sm:text-base">
              {todayMessage}
            </span>
          </div>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center lg:justify-items-center">
          <div className="space-y-6 text-center">
            <p className="text-2xl font-extrabold uppercase tracking-[0.32em] text-transparent sm:text-3xl bg-gradient-to-r from-sky-700 to-slate-900 bg-clip-text">
              Santo Rosario
            </p>
            <h1 className="text-base font-semibold tracking-[0.28em] text-sky-700 sm:text-lg">
              un encuentro con María
            </h1>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-4 shadow-2xl shadow-sky-100">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-center">
              <div className="grid w-full max-w-xs gap-3 sm:w-60">
                {heroMisterios.map((misterio) => (
                  <Link
                    key={misterio.title}
                    href={misterio.href}
                    className={`inline-flex flex-col items-center justify-center rounded-3xl border px-4 py-3 text-base font-semibold transition hover:border-sky-400 hover:bg-sky-50 hover:text-sky-900 ${
                      misterio.title.toLowerCase() ===
                      highlightedMisterioText.toLowerCase()
                        ? "border-sky-600 bg-sky-50 text-sky-900 shadow-lg shadow-sky-200 ring-2 ring-sky-300/70"
                        : "border-sky-200 text-sky-800"
                    }`}
                  >
                    <span className="text-lg">{misterio.title}</span>
                    <span className="text-sm font-medium text-slate-500">
                      {misterio.subtitle}
                    </span>
                  </Link>
                ))}
              </div>
              <div className="rounded-[30px] bg-gradient-to-b from-white via-sky-50 to-white p-4 sm:p-6">
                <Image
                  src="/ave-maria.png"
                  alt="Ilustración de la Virgen María rezando a la luz dorada"
                  width={520}
                  height={520}
                  className="h-auto w-full max-w-sm rounded-2xl object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <div className="w-full lg:mx-auto lg:max-w-5xl">
          <WebSiteInfoComponent />
        </div>
        <div className="w-full lg:mx-auto lg:max-w-5xl">
          <FooterComponent />
        </div>
      </main>
    </div>
  );
}
