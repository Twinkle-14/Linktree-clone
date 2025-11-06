export default function LearnPage() {
  const guides = [
    { title: "How to Create Your First BitTree", time: "5 min read" },
    { title: "Customizing Your Page Design", time: "8 min read" },
    { title: "Growing Your Social Reach", time: "10 min read" },
  ];

  return (
    <div className="pt-24 px-12">
      <h1 className="text-4xl font-bold mb-6">Learn with BitTree</h1>
      <p className="text-lg text-gray-600 mb-8">
        Master the art of personal branding and link-sharing.
      </p>

      <div className="space-y-4">
        {guides.map((g) => (
          <div
            key={g.title}
            className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition cursor-pointer"
          >
            <h2 className="text-2xl font-semibold">{g.title}</h2>
            <p className="text-gray-500">{g.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
