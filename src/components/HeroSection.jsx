export default function HeroSection() {
  return (
    <section className="bg-green-50 text-center py-24 px-4">
      <h1 className="text-5xl font-bold text-green-800 mb-6">
        Changing the world, one tree at a time 🌱
      </h1>
      <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
        Plant a tree, support farmers, and help make the planet greener.
      </p>
      <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition">
        Plant a Tree Now
      </button>
    </section>
  );
}
