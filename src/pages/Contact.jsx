export default function Contact() {
  return (
    <section className="py-20 px-8 max-w-3xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-green-700 mb-6">Contact Us</h1>
      <p className="text-gray-700 mb-6">
        Have questions? Reach out to us and we’ll get back to you soon.
      </p>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="border rounded w-full p-3" />
        <input type="email" placeholder="Your Email" className="border rounded w-full p-3" />
        <textarea placeholder="Your Message" rows="4" className="border rounded w-full p-3"></textarea>
        <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
          Send Message
        </button>
      </form>
    </section>
  );
}
