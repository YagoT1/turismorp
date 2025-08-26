const Section = ({ title, description, image }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8 items-center">
      <img src={image} alt={title} className="w-full h-72 object-cover rounded-xl shadow-lg" />
      <div>
        <h2 className="text-3xl font-bold mb-4 text-green-800">{title}</h2>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default Section;
