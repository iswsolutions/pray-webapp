export default function Footer() {
  return (
    <footer className="py-10 sm:py-12 px-5 sm:px-6 text-center" style={{ background: "#5a2e10" }}>
      <p className="text-sm font-medium mb-2" style={{ color: "#f0d890" }}>
        Contacto - Observaciones y/o comentarios
      </p>
      <p className="text-xs" style={{ color: "#c89a20" }}>
        Favor de enviar correo a{" "}
        <a
          href="mailto:admin@intelligentsoftware.org"
          className="hover:underline transition-colors"
          style={{ color: "#e8b840" }}
        >
          admin@intelligentsoftware.org
        </a>
      </p>
    </footer>
  );
}
