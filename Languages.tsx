export function Languages() {
  const languages = [
    { name: "Telugu", users: "500K+" },
    { name: "Tamil", users: "450K+" },
    { name: "Malayalam", users: "300K+" },
    { name: "Kannada", users: "250K+" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#4F46E5] via-[#7C3AED] to-[#EC4899]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight">Connect in Your Language</h2>
          <p className="text-xl text-white/90 font-medium">Choose your comfort zone</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {languages.map((lang, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm text-center p-8 rounded-3xl hover:bg-white/20 transition-all cursor-pointer border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-2">{lang.name}</h3>
              <p className="text-white/90 font-medium">{lang.users} users</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}