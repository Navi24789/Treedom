export default function BenefitsSection() {
  const benefits = [
    { title: "Fight Climate Change", desc: "Trees absorb CO₂ and restore biodiversity." },
    { title: "Support Farmers", desc: "Each tree is planted and cared for by local farmers." },
    { title: "Track Your Impact", desc: "See your tree’s location and story online." },
  ];

  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-12 text-green-700">Why Plant with Us?</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {benefits.map((b, i) => (
          <div key={i} className="p-6 shadow-lg rounded-2xl hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
            <p className="text-gray-600">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
