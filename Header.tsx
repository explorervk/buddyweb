import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-orange-400 rounded-full"></div>
          <span className="text-xl font-bold text-gray-900">Buddy Call</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-orange-500">Features</a>
          <a href="#safety" className="text-gray-600 hover:text-orange-500">Safety</a>
          <a href="#languages" className="text-gray-600 hover:text-orange-500">Languages</a>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-colors">
            Download App
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-2">
            <a href="#features" className="block py-2 text-gray-600">Features</a>
            <a href="#safety" className="block py-2 text-gray-600">Safety</a>
            <a href="#languages" className="block py-2 text-gray-600">Languages</a>
            <button className="w-full bg-orange-500 text-white px-6 py-2 rounded-full font-medium">
              Download App
            </button>
          </div>
        </div>
      )}
    </header>
  );
}