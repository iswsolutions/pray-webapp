export default function FooterComponent() {
  return (
    <footer className="rounded-3xl border border-sky-100 bg-white/90 px-6 py-8 text-center shadow-lg shadow-sky-50 backdrop-blur-sm">
      <div className="space-y-2 text-base leading-relaxed text-slate-700">
        <p className="text-lg font-semibold text-sky-800">
          Contacto - Observaciones y/o comentarios
        </p>
        <p>
          Favor de enviar correo a -{" "}
          <a
            href="mailto:admin@intelligentsoftware.org"
            className="font-semibold text-sky-800 transition hover:text-sky-900"
          >
            admin@intelligentsoftware.org
          </a>
        </p>
      </div>
    </footer>
  );
}
