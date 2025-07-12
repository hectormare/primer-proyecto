
export default function Sobre() {
  return (
    <section id="sobre" className="py-20 px-6 text-center text-white bg-gray-900 font-serif">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Sobre el autor</h2>
        <div className="mb-6">
          {/* Aquí puedes insertar la imagen del autor */}
          <img
            src="/images/hector-mare.jpg"
            alt="Foto de Héctor Mare"
            className="w-40 h-40 mx-auto rounded-full shadow-lg"
          />
        </div>
        <p className="text-lg leading-relaxed">
          Bajo el seudónimo de <strong>Héctor Mare</strong>, el autor irrumpe en el universo literario con su ópera prima <em>Bajo la Marea</em>. Su vocación narrativa nació en la adolescencia, cuando las palabras se convirtieron en refugio y espejo de lo esencial.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Con una trayectoria profesional marcada por el liderazgo corporativo en una multinacional, hoy canaliza su inquietud creativa en el arte de escribir, ofreciendo historias densas, introspectivas y humanas.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Su estilo se distingue por la exploración emocional de los personajes, atmósferas envolventes y una mirada literaria que trasciende lo cotidiano para invitar a la reflexión.
        </p>
      </div>
    </section>
  );
}