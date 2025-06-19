
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const locations = [
    { name: 'Texas', path: '/texas' },
    { name: 'California', path: '/california' }, 
    { name: 'New York', path: '/newyork' },
    { name: 'Florida', path: '/florida' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                DevCraft
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                </a>
              ))}
              
              {/* Locations Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsLocationsOpen(!isLocationsOpen)}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group flex items-center"
                >
                  Locations
                  <ChevronDown className="ml-1 h-3 w-3" />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                </button>
                
                {isLocationsOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    {locations.map((location) => (
                      <Link
                        key={location.name}
                        to={location.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                        onClick={() => setIsLocationsOpen(false)}
                      >
                        {location.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </nav>

          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              <div className="border-t border-gray-200 pt-2">
                <div className="px-3 py-2 text-sm font-medium text-gray-500">Locations</div>
                {locations.map((location) => (
                  <Link
                    key={location.name}
                    to={location.path}
                    className="text-gray-700 hover:text-blue-600 block px-6 py-2 text-base font-medium transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {location.name}
                  </Link>
                ))}
              </div>
              
              <div className="pt-4">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
