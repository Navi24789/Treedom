export default function ProjectCard({ title, img, desc }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden">
      <img src={img} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-green-700">{title}</h3>
        <p className="text-gray-600 text-sm mt-2">{desc}</p>
        <button className="mt-4 text-green-600 font-semibold hover:underline">
          Learn More →
        </button>
      </div>
    </div>
  );
}
