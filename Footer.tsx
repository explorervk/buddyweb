import { Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Community Guidelines", href: "#" },
  ];
  
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid md:grid-cols-4 gap-8 py-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-orange-400 rounded-full"></div>
              <span className="text-xl font-bold text-white">Buddy Call</span>
            </div>
            <p className="text-sm">Making meaningful connections through safe, anonymous conversations.</p>
            <div className="mt-4 flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4" />
              <a href="mailto:support@buddycall.live" className="hover:text-orange-400 transition-colors">
                support@buddycall.live
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-orange-400 transition-colors">Anonymous Calls</a></li>
              <li><a href="#features" className="hover:text-orange-400 transition-colors">AI Avatars</a></li>
              <li><a href="#features" className="hover:text-orange-400 transition-colors">Moderation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Languages</h3>
            <ul className="space-y-2">
              <li>Telugu</li>
              <li>Tamil</li>
              <li>Malayalam</li>
              <li>Kannada</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Safety Tips</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar with legal links */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">© {currentYear} Buddy Call. All rights reserved.</p>
            <div className="flex gap-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm hover:text-orange-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}