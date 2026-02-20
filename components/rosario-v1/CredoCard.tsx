export default function CredoCard() {
  return (
    <article className="relative rounded-3xl border border-sky-100 bg-white/80 p-5 pb-12 text-left shadow-lg shadow-sky-100 transition duration-200 hover:-translate-y-1 hover:border-sky-200 hover:bg-white sm:p-6 sm:pb-14 md:p-8">
      <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
        Creo en Dios, Padre Todopoderoso, Creador del cielo y de la tierra.
      </p>
      <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
        Creo en Jesucristo, su único Hijo, nuestro Señor, que fue concebido por
        obra y gracia del Espíritu Santo, nació de Santa María Virgen, padeció
        bajo el poder de Poncio Pilato, fue crucificado, muerto y sepultado,
        descendió a los infiernos, al tercer día resucitó de entre los muertos,
        subió a los cielos y está sentado a la derecha de Dios, Padre
        Todopoderoso. Desde allí ha de venir a juzgar a vivos y muertos.
      </p>
      <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
        Creo en el Espíritu Santo, la santa Iglesia Católica, la comunión de los
        santos, el perdón de los pecados, la resurrección de la carne y la vida
        eterna. Amén.
      </p>
      <p className="absolute bottom-4 right-5 text-xs tracking-wide text-slate-400">
        nombre de la oración: Credo
      </p>
    </article>
  );
}
