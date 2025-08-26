function Home() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-cover bg-center" 
      style={{ backgroundImage: "url('/hero.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text */}
      <div className="relative text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Descubrí Roque Pérez
        </h1>
        <p className="text-lg md:text-2xl font-light drop-shadow-lg">
          Historia, Naturaleza y Tradición en un solo lugar:

          Fundada en 1884, nuestra ciudad; Es una ciudad que ha sabido crecer y desarrollarse
          gracias al esfuerzo y la unión de sus habitantes.
          Sus orígenes rurales y su espíritu comunitario la
          convierten en un lugar con una identidad propia y
          una rica historia.
        </p>
      </div>
    </section>
  );
}

export default Home;
