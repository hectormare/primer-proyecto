export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-slate-800 text-white py-20 px-6 text-center font-serif">
      <h1 className="text-5xl font-bold mb-6">
        Bienvenido a Héctor Mare
      </h1>
      <p className="text-xl max-w-3xl mx-auto mb-8">
        Un viaje narrativo entre sombras y palabras. Cada capítulo revela una historia que aún no ha sido contada.
      </p>
      <a
        href="#novelas"
        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold py-3 px-6 rounded-md transition-all duration-300"
      >
        Explora las novelas
      </a>
    </section>
  );
}
