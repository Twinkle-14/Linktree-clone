export default function PricingPage() {
  const plans = [
    { name: "Free", price: "$0", features: ["1 Bio Page", "Basic Analytics", "Limited Themes"] },
    { name: "Pro", price: "$9/mo", features: ["Unlimited Links", "Custom Domain", "Advanced Analytics"] },
    { name: "Business", price: "$19/mo", features: ["Team Access", "Priority Support", "Monetization Tools"] },
  ];

  return (
    <div className="pt-24 px-12 text-center">
      <h1 className="text-4xl font-bold mb-6">Pricing Plans</h1>
      <p className="text-lg text-gray-600 mb-10">
        Pick a plan that fits your growth journey.
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="bg-white w-72 p-8 rounded-2xl shadow hover:scale-105 transition-transform border border-gray-100"
          >
            <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
            <p className="text-4xl font-bold mb-4">{plan.price}</p>
            <ul className="text-gray-600 mb-6 text-left list-disc list-inside">
              {plan.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <button className="bg-black text-white w-full py-2 rounded-lg hover:bg-gray-800">
              Choose {plan.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
