import BackToHomeButton from "@/components/rosario-v1/BackToHomeButton";
import NosPersignamosCard from "@/components/rosario-v1/NosPersignamosCard";
import Uno from "@/components/rosario-v1/Uno";
import AveMariaHijaAmada from "@/components/rosario-v1/AveMariaHijaAmada";
import PadreNuestroCard from "@/components/rosario-v1/PadreNuestroCard";
import CredoCard from "@/components/rosario-v1/CredoCard";
import AveMariaCard from "@/components/rosario-v1/AveMariaCard";
import AveMariaMadreDeDios from "@/components/rosario-v1/AveMariaMadreDeDios";
import Gloria from "@/components/rosario-v1/Gloria";
import AveMariaEsposa from "@/components/rosario-v1/AveMariaEsposa";
import PrimerMisterioDoloroso from "@/components/rosario-v1/PrimerMisterioDoloroso";
import RezarAveMarias from "@/components/rosario-v1/RezarAveMarias";
import OracionDeFatimaCard from "@/components/rosario-v1/OracionDeFatimaCard";
import MariaMadreDeGracia from "@/components/rosario-v1/MariaMadreDeGracia";
import SegundoMisterioDoloroso from "@/components/rosario-v1/SegundoMisterioDoloroso";
import TercerMisterioDoloroso from "@/components/rosario-v1/TercerMisterioDoloroso";
import CuartoMisterioDoloroso from "@/components/rosario-v1/CuartoMisterioDoloroso";
import QuintoMisterioDoloroso from "@/components/rosario-v1/QuintoMisterioDoloroso";
import InfinitasGracias from "@/components/rosario-v1/InfinitasGracias";
import Salve from "@/components/rosario-v1/Salve";
import SenalDeLaCruz from "@/components/rosario-v1/SenalDeLaCruz";

export default function MisteriosDolorososPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-blue-50 to-white text-slate-900">
      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 sm:gap-12 sm:px-6 sm:py-14 md:px-10 lg:py-24">
        <BackToHomeButton />

        <section className="space-y-4 text-center sm:space-y-6">
          <h1 className="text-3xl font-semibold uppercase tracking-[0.28em] text-sky-700 sm:text-4xl md:text-5xl">
            Misterios Dolorosos
          </h1>
          <details className="mx-auto w-full max-w-2xl rounded-2xl border border-sky-100 bg-white/80 px-5 py-3 text-left shadow-sm">
            <summary className="cursor-pointer text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              mensaje
            </summary>
            <p className="mt-3 text-base text-slate-700">
              Son la pasión y muerte de Nuestro Señor.
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

          <PrimerMisterioDoloroso />
          <PadreNuestroCard />
          <AveMariaCard />
          <RezarAveMarias />
          <Gloria />
          <OracionDeFatimaCard />
          <MariaMadreDeGracia />

          <SegundoMisterioDoloroso />
          <PadreNuestroCard />
          <AveMariaCard />
          <RezarAveMarias />
          <Gloria />
          <OracionDeFatimaCard />
          <MariaMadreDeGracia />

          <TercerMisterioDoloroso />
          <PadreNuestroCard />
          <AveMariaCard />
          <RezarAveMarias />
          <Gloria />
          <OracionDeFatimaCard />
          <MariaMadreDeGracia />

          <CuartoMisterioDoloroso />
          <PadreNuestroCard />
          <AveMariaCard />
          <RezarAveMarias />
          <Gloria />
          <OracionDeFatimaCard />
          <MariaMadreDeGracia />

          <QuintoMisterioDoloroso />
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
