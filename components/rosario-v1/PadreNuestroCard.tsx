export default function PadreNuestroCard() {
  return (
    <article className="rounded-3xl border border-sky-100 bg-white/80 p-5 text-left shadow-lg shadow-sky-100 transition duration-200 hover:-translate-y-1 hover:border-sky-200 hover:bg-white sm:p-6 md:p-8">
      <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
        Padre nuestro, que estás en el cielo, santificado sea tu nombre, venga a
        nosotros tu reino, hágase tu voluntad, en la tierra como en el cielo.
        Danos hoy nuestro pan de cada día, perdona nuestras ofensas, como
        también nosotros perdonamos a los que nos ofenden. No nos dejes caer en
        la tentación, y líbranos del mal. Amén.
      </p>
      <p className="mt-3 text-right text-xs tracking-wide text-slate-400">
        nombre de la oración: Padre Nuestro
      </p>
    </article>
  );
}
