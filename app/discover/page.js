export default function DiscoverPage() {
  const profiles = [
    { name: "Ariel J", niche: "Musician" },
    { name: "TechGuru", niche: "Tech Reviewer" },
    { name: "FitQueen", niche: "Fitness Influencer" },
  ];

  return (
    <div className="pt-24 px-12">
      <h1 className="text-4xl font-bold mb-6">Discover Creators</h1>
      <p className="text-lg text-gray-600 mb-8">
        Explore trending BitTree profiles across categories.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {profiles.map((p) => (
          <div
            key={p.name}
            className="bg-purple-50 p-6 rounded-2xl shadow hover:shadow-lg transition-all cursor-pointer"
          >
            <h2 className="text-2xl font-semibold mb-1">{p.name}</h2>
            <p className="text-gray-500">{p.niche}</p>
            <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
