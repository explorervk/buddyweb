import { ArrowRight, Sparkles } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-orange-500 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white/90 backdrop-blur-sm mb-6">
          <Sparkles className="w-5 h-5" />
          <span>Join thousands of happy users</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ready to Make Meaningful Connections?
        </h2>
        <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of users who've found friendship and connection through Buddy Call
        </p>
        <button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-full font-medium text-lg transition-all transform hover:scale-105 inline-flex items-center gap-2 shadow-lg">
          Download App
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}