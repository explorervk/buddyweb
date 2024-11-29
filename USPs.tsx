import { Shield, Users, Heart, MessageCircle } from 'lucide-react';

export function USPs() {
  const usps = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "100% Anonymous",
      description: "Your identity stays private, always.",
      color: "bg-gradient-to-br from-[#FFD600] to-[#FF9900]"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Safe Community",
      description: "Active moderation keeps it friendly.",
      color: "bg-gradient-to-br from-[#FF6B6B] to-[#FF4949]"
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Real Connections",
      description: "75% find friends in week one.",
      color: "bg-gradient-to-br from-[#5D34F2] to-[#4424B2]"
    },
    {
      icon: <MessageCircle className="w-12 h-12" />,
      title: "AI Avatars",
      description: "Express yourself safely.",
      color: "bg-gradient-to-br from-[#00C896] to-[#00A376]"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Why Buddy Call?</h2>
          <p className="text-xl text-gray-600 font-medium">Skip the small talk, make real connections</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((usp, index) => (
            <div
              key={index}
              className={`${usp.color} rounded-3xl p-8 text-white transform transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg`}
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 inline-block mb-6">
                {usp.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{usp.title}</h3>
              <p className="text-white/90 font-medium">{usp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}