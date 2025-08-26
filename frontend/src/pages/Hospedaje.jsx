const Hospedajes = () => {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-6">Opciones de Hospedaje</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="border rounded-xl shadow-md p-6">Hotel Rural</div>
        <div className="border rounded-xl shadow-md p-6">Cabañas familiares</div>
        <div className="border rounded-xl shadow-md p-6">Hostales</div>
      </div>
    </div>
  );
};

export default Hospedajes;
