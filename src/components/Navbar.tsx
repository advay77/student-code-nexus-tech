
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917668759906', '_blank');
  };

  const isHomePage = location.pathname === '/';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 shadow-md backdrop-blur-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Code className={`transition-all duration-300 text-techhub-purple ${isScrolled ? 'h-5 w-5' : 'h-6 w-6'}`} />
              <span className={`font-bold tracking-tight transition-all duration-300 ${isScrolled ? 'text-lg' : 'text-xl'}`}>
                Tech<span className="text-techhub-purple">Hub</span>
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium hover:text-techhub-purple transition-colors ${
                location.pathname === '/' ? 'text-techhub-purple' : ''
              } relative group`}
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-techhub-purple group-hover:w-full transition-all duration-300"></span>
            </Link>
            {isHomePage ? (
              <a 
                href="#about" 
                className="text-sm font-medium hover:text-techhub-purple transition-colors relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-techhub-purple group-hover:w-full transition-all duration-300"></span>
              </a>
            ) : (
              <Link 
                to="/#about" 
                className="text-sm font-medium hover:text-techhub-purple transition-colors relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-techhub-purple group-hover:w-full transition-all duration-300"></span>
              </Link>
            )}
            <Link 
              to="/sessions" 
              className={`text-sm font-medium hover:text-techhub-purple transition-colors ${
                location.pathname === '/sessions' ? 'text-techhub-purple' : ''
              } relative group`}
            >
              Sessions
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-techhub-purple group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              to="/join" 
              className={`text-sm font-medium hover:text-techhub-purple transition-colors ${
                location.pathname === '/join' ? 'text-techhub-purple' : ''
              } relative group`}
            >
              Join Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-techhub-purple group-hover:w-full transition-all duration-300"></span>
            </Link>
            <ThemeToggle />
            <Button 
              className="bg-techhub-purple hover:bg-techhub-light-purple group relative overflow-hidden"
              onClick={handleWhatsAppClick}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 w-full h-full bg-white/20 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></div>
              <BookOpen className="mr-2 h-4 w-4 relative z-10" />
              <span className="relative z-10">Join Now</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-techhub-purple"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`text-base font-medium hover:text-techhub-purple transition-colors ${
                  location.pathname === '/' ? 'text-techhub-purple' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              {isHomePage ? (
                <a 
                  href="#about" 
                  className="text-base font-medium hover:text-techhub-purple transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
              ) : (
                <Link 
                  to="/#about" 
                  className="text-base font-medium hover:text-techhub-purple transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              )}
              <Link 
                to="/sessions" 
                className={`text-base font-medium hover:text-techhub-purple transition-colors ${
                  location.pathname === '/sessions' ? 'text-techhub-purple' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Sessions
              </Link>
              <Link 
                to="/join" 
                className={`text-base font-medium hover:text-techhub-purple transition-colors ${
                  location.pathname === '/join' ? 'text-techhub-purple' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Join Us
              </Link>
              <Button className="bg-techhub-purple hover:bg-techhub-light-purple w-full" onClick={() => {
                handleWhatsAppClick();
                setIsMenuOpen(false);
              }}>
                <BookOpen className="mr-2 h-4 w-4" />
                Join Now
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
