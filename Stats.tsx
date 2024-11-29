export function Stats() {
  const stats = [
    { number: "75%", label: "Users form meaningful connections in first week" },
    { number: "100%", label: "Anonymous calls" },
    { number: "4+", label: "Regional languages supported" },
    { number: "24/7", label: "Active moderation" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">{stat.number}</div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}