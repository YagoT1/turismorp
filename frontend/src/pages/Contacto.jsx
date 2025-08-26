const Contacto = () => {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-6">Contacto</h2>
      <form className="max-w-lg mx-auto space-y-4">
        <input type="text" placeholder="Nombre" className="w-full border p-3 rounded" />
        <input type="email" placeholder="Email" className="w-full border p-3 rounded" />
        <textarea placeholder="Mensaje" className="w-full border p-3 rounded h-32"></textarea>
        <button className="bg-green-700 hover:bg-green-900 text-white px-6 py-3 rounded w-full">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contacto;
