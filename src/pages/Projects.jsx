import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Plant a Mango Tree",
      img: "https://images.unsplash.com/photo-1603052875696-8a6f41aa9c2c",
      desc: "Support local farmers by planting mango trees in India.",
    },
    {
      title: "Adopt a Coffee Tree",
      img: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4",
      desc: "Help grow sustainable coffee farms in Africa.",
    },
    {
      title: "Grow a Lemon Tree",
      img: "https://images.unsplash.com/photo-1615485737459-54a9e7c14b9b",
      desc: "Promote biodiversity by adopting lemon trees in Kenya.",
    },
  ];

  return (
    <section className="py-20 bg-green-50 text-center">
      <h1 className="text-4xl font-bold text-green-700 mb-12">Our Tree Projects</h1>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
