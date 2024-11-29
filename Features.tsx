import { Shield, UserCircle, MessageSquare, Languages, Heart, Users, Lock, Headphones } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: "100% Anonymous Calls",
      description: "Your personal identity is never shared with others. All calls are completely anonymous."
    },
    {
      icon: <UserCircle className="w-8 h-8 text-purple-500" />,
      title: "AI Avatars Only",
      description: "No pictures or screenshots allowed - just AI-generated avatars for a safe experience."
    },
    {
      icon: <Heart className="w-8 h-8 text-purple-500" />,
      title: "Meaningful Connections",
      description: "75% of our users report forming meaningful connections within their first week."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: "Moderated Community",
      description: "Our team ensures a respectful and non-sleazy environment for all users."
    },
    {
      icon: <Lock className="w-8 h-8 text-purple-500" />,
      title: "Privacy First",
      description: "No recordings or screenshots allowed. Your conversations stay private."
    },
    {
      icon: <Languages className="w-8 h-8 text-purple-500" />,
      title: "Regional Languages",
      description: "Available in Telugu, Tamil, Malayalam, and Kannada."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-purple-500" />,
      title: "Quality Conversations",
      description: "Connect with people who share your interests and values."
    },
    {
      icon: <Headphones className="w-8 h-8 text-purple-500" />,
      title: "24/7 Support",
      description: "Our support team is always available to help you with any issues."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-purple-600 font-medium">Features</span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Buddy Call?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We've built a platform that prioritizes your safety and meaningful connections
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl bg-white hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
              <div className="mb-4 bg-purple-50 w-16 h-16 rounded-xl flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}