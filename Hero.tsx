import { useState, useEffect } from 'react';
import { Phone, Video, Heart, MessageCircle } from 'lucide-react';

export function Hero() {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-24 pb-16 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-6xl lg:text-8xl font-extrabold text-black mb-6 leading-none tracking-tight">
              Connect.
              <br />
              Chat.
              <br />
              <span className="gradient-text text-7xl lg:text-9xl block mt-2 animate-pulse">Vibe.</span>
            </h1>
            <p className="text-2xl text-black/80 mb-8 max-w-lg font-medium">
              Meet like-minded people, find your tribe, and make meaningful connections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-black text-white hover:bg-black/90 px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg">
                <Phone className="w-5 h-5" />
                Download App
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto max-w-[320px]">
              <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl animate-float">
                <div className="relative rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                  <img 
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80"
                    alt="Video call preview"
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-all duration-700 ease-in-out transform ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                    <div className="absolute top-6 left-0 right-0 flex justify-between px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#FFD600] to-[#FF6B6B] rounded-full animate-pulse"></div>
                        <span className="text-white font-medium">Priya</span>
                      </div>
                      <div className="bg-black/30 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm flex items-center gap-1">
                        <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                        <span>642</span>
                      </div>
                    </div>
                    <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4">
                      <button className={`w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 ${isAnimating ? 'scale-110' : 'scale-100'}`}>
                        <Video className="w-6 h-6 text-[#FFD600]" />
                      </button>
                      <button className={`w-12 h-12 bg-[#FFD600] rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 ${isAnimating ? 'scale-110' : 'scale-100'}`}>
                        <MessageCircle className="w-6 h-6 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Animated decorative elements */}
            <div className="absolute -z-10 -top-4 -right-4 w-72 h-72 bg-[#FFD600] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -z-10 -bottom-8 -left-4 w-72 h-72 bg-[#FF6B6B] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -z-10 -bottom-8 right-4 w-72 h-72 bg-[#FF9900] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}