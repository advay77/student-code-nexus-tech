
import { MessageSquare, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const FloatingActionButton = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917668759906', '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-[#9b59b6] to-[#00FFFF] text-white shadow-[0_0_15px_rgba(0,255,255,0.5)] hover:shadow-[0_0_25px_rgba(0,255,255,0.7)] transform hover:scale-110 transition-all duration-300 flex items-center justify-center relative overflow-hidden group"
        aria-label="Join via WhatsApp"
      >
        <MessageSquare className="h-6 w-6 relative z-10" />
        <span className="sr-only">Join via WhatsApp</span>
        {/* Animated neon glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#9b59b6] to-[#00FFFF] opacity-0 group-hover:opacity-70 blur-xl transition-opacity duration-500"></div>
      </button>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-14 h-14 rounded-full bg-black/30 backdrop-blur-md border border-[#00FF9D]/50 text-[#00FF9D] shadow-[0_0_10px_rgba(0,255,157,0.3)] hover:shadow-[0_0_15px_rgba(0,255,157,0.5)] transform hover:scale-110 transition-all duration-300 flex items-center justify-center animate-fade-in"
          aria-label="Back to top"
        >
          <ArrowUp className="h-6 w-6" />
          <span className="sr-only">Back to top</span>
        </button>
      )}
    </div>
  );
};

export default FloatingActionButton;
