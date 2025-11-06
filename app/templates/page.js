export default function TemplatesPage() {
  const templates = [
    { name: "Minimal", color: "bg-gray-100" },
    { name: "Vibrant", color: "bg-pink-100" },
    { name: "Dark Mode", color: "bg-gray-800 text-white" },
    { name: "Retro", color: "bg-yellow-100" },
    { name: "Techy", color: "bg-blue-100" },
    { name: "Elegant", color: "bg-purple-100" },
  ];

  return (
    <div className="pt-24 px-12">
      <h1 className="text-4xl font-bold mb-6">Explore Templates</h1>
      <p className="text-lg text-gray-600 mb-8">
        Choose from stylish templates to make your BitTree unique.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((t) => (
          <div
            key={t.name}
            className={`${t.color} p-6 rounded-2xl shadow hover:scale-105 transition-transform cursor-pointer`}
          >
            <h2 className="text-2xl font-semibold mb-2">{t.name}</h2>
            <p className="text-gray-500">
              A perfect template for a modern digital presence.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
