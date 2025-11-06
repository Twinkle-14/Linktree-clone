export default function MarketplacePage() {
  const items = [
    { name: "Premium Buttons Pack", price: "$5" },
    { name: "Animated Backgrounds", price: "$7" },
    { name: "Pro Analytics Plugin", price: "$10" },
  ];

  return (
    <div className="pt-24 px-12">
      <h1 className="text-4xl font-bold mb-6">Marketplace</h1>
      <p className="text-lg text-gray-600 mb-8">
        Shop themes, add-ons, and premium content for your BitTree page.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.name}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all border border-gray-100"
          >
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-500 mt-2">Enhance your BitTree experience.</p>
            <button className="mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
              Buy {item.price}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
