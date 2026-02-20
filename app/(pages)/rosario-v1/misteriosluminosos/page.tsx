import BackToHomeButton from "@/components/rosario-v1/BackToHomeButton";
import NosPersignamosCard from "@/components/rosario-v1/NosPersignamosCard";
import CredoCard from "@/components/rosario-v1/CredoCard";
import PrimerMisterioLuminosoCard from "@/components/rosario-v1/PrimerMisterioLuminosoCard";
import SegundoMisterioLuminoso from "@/components/rosario-v1/SegundoMisterioLuminoso";
import TercerMisterioLuminoso from "@/components/rosario-v1/TercerMisterioLuminoso";
import CuartoMisterioLuminoso from "@/components/rosario-v1/CuartoMisterioLuminoso";
import QuintoMisterioLuminoso from "@/components/rosario-v1/QuintoMisterioLuminoso";
import PadreNuestroCard from "@/components/rosario-v1/PadreNuestroCard";
import AveMariaCard from "@/components/rosario-v1/AveMariaCard";
import RezarAveMarias from "@/components/rosario-v1/RezarAveMarias";
import OracionDeFatimaCard from "@/components/rosario-v1/OracionDeFatimaCard";
import Gloria from "@/components/rosario-v1/Gloria";
import MariaMadreDeGracia from "@/components/rosario-v1/MariaMadreDeGracia";
import InfinitasGracias from "@/components/rosario-v1/InfinitasGracias";
import Salve from "@/components/rosario-v1/Salve";
import SenalDeLaCruz from "@/components/rosario-v1/SenalDeLaCruz";
import AveMariaHijaAmada from "@/components/rosario-v1/AveMariaHijaAmada";
import AveMariaMadreDeDios from "@/components/rosario-v1/AveMariaMadreDeDios";
import AveMariaEsposa from "@/components/rosario-v1/AveMariaEsposa";
import Uno from "@/components/rosario-v1/Uno";

export default function MisteriosLuminososPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-blue-50 to-white text-slate-900">
      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 sm:gap-12 sm:px-6 sm:py-14 md:px-10 lg:py-24">
        <BackToHomeButton />
        <section className="space-y-4 text-center sm:space-y-6">
          <h1 className="text-3xl font-semibold uppercase tracking-[0.28em] text-sky-700 sm:text-4xl md:text-5xl">
            Misterios Luminosos
          </h1>
          <details className="mx-auto w-full max-w-2xl rounded-2xl border border-sky-100 bg-white/80 px-5 py-3 text-left shadow-sm">
            <summary className="cursor-pointer text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              mensaje
            </summary>
            <p className="mt-3 text-base text-slate-700">
              Tratan de la vida pública de Nuestro Señor Jesús.
            </p>
          </details>
        </section>

        <section className="grid gap-5 sm:gap-6 md:grid-cols-2">
          <Uno />
          <NosPersignamosCard />
          <CredoCard />
          <PadreNuestroCard />
          <AveMariaHijaAmada />
          <AveMariaCard />
          <AveMariaMadreDeDios />
          <AveMariaCard />
          <AveMariaEsposa />
          <AveMariaCard />
          <Gloria />

          <PrimerMisterioLuminosoCard />
          <PadreNuestroCard />
          <AveMariaCard />
          <RezarAveMarias />
          <Gloria />
          <OracionDeFatimaCard />
          <MariaMadreDeGracia />

          <SegundoMisterioLuminoso />
          <PadreNuestroCard />
          <AveMariaCard />
          <RezarAveMarias />
          <Gloria />
          <OracionDeFatimaCard />
          <MariaMadreDeGracia />

          <TercerMisterioLuminoso />
          <PadreNuestroCard />
          <AveMariaCard />
          <RezarAveMarias />
          <Gloria />
          <OracionDeFatimaCard />
          <MariaMadreDeGracia />

          <CuartoMisterioLuminoso />
          <PadreNuestroCard />
          <AveMariaCard />
          <RezarAveMarias />
          <Gloria />
          <OracionDeFatimaCard />
          <MariaMadreDeGracia />

          <QuintoMisterioLuminoso />
          <PadreNuestroCard />
          <AveMariaCard />
          <RezarAveMarias />
          <Gloria />
          <OracionDeFatimaCard />
          <MariaMadreDeGracia />
          <InfinitasGracias />
          <Salve />
          <SenalDeLaCruz />
        </section>

        <BackToHomeButton />
      </main>
    </div>
  );
}
