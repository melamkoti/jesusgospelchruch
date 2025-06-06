import { Menu, X, Church } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Church className="h-8 w-8 text-purple-700" />
            <span className="ml-2 text-xl font-serif font-bold text-gray-900">
              Jesus Gospel Church
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-purple-700">Home</a>
              <a href="#branches" className="text-gray-700 hover:text-purple-700">Branches</a>
              <a href="#gallery" className="text-gray-700 hover:text-purple-700">Gallery</a>
              {/* <a href="#donations" className="text-gray-700 hover:text-purple-700">Donate</a> */}
              <a href="#events" className="text-gray-700 hover:text-purple-700">Events</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-700">Contact</a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-purple-700">Home</a>
            <a href="#branches" className="block px-3 py-2 text-gray-700 hover:text-purple-700">Branches</a>
            <a href="#gallery" className="block px-3 py-2 text-gray-700 hover:text-purple-700">Gallery</a>
            {/* <a href="#donations" className="block px-3 py-2 text-gray-700 hover:text-purple-700">Donate</a> */}
            <a href="#events" className="block px-3 py-2 text-gray-700 hover:text-purple-700">Events</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-purple-700">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}