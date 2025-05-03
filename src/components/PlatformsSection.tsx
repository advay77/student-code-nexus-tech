
import { Card } from '@/components/ui/card';
import { Code, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const PlatformsSection = () => {
  const platforms = [
    { 
      name: 'LeetCode', 
      color: 'bg-orange-500',
      textColor: 'text-orange-500',
      glowColor: 'shadow-[0_0_15px_rgba(249,115,22,0.5)]',
      hoverGlowColor: 'shadow-[0_0_25px_rgba(249,115,22,0.7)]',
      url: 'https://leetcode.com',
      description: 'The leading platform for coding interview preparation with thousands of algorithm problems.'
    },
    { 
      name: 'Codeforces', 
      color: 'bg-red-500',
      textColor: 'text-red-500',
      glowColor: 'shadow-[0_0_15px_rgba(239,68,68,0.5)]',
      hoverGlowColor: 'shadow-[0_0_25px_rgba(239,68,68,0.7)]',
      url: 'https://codeforces.com',
      description: 'Popular competitive programming platform with regular contests and educational rounds.'
    },
    { 
      name: 'CodeChef', 
      color: 'bg-[#00FFFF]',
      textColor: 'text-[#00FFFF]',
      glowColor: 'shadow-[0_0_15px_rgba(0,255,255,0.5)]',
      hoverGlowColor: 'shadow-[0_0_25px_rgba(0,255,255,0.7)]',
      url: 'https://codechef.com',
      description: 'Renowned platform for competitive programming with monthly contests and learning resources.'
    },
    { 
      name: 'GeeksForGeeks', 
      color: 'bg-[#00FF9D]',
      textColor: 'text-[#00FF9D]',
      glowColor: 'shadow-[0_0_15px_rgba(0,255,157,0.5)]',
      hoverGlowColor: 'shadow-[0_0_25px_rgba(0,255,157,0.7)]',
      url: 'https://geeksforgeeks.org',
      description: 'Comprehensive resource for computer science and programming with tutorials and practice problems.'
    },
  ];

  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-16 bg-gradient-to-br from-[#0D0D0D] to-[#1a1a1a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjMDAyODM0IiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzAwMjAyQSIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTTMwIDVMNTUgMzAgMzAgNTUgNSAzMHoiIGZpbGw9InVybCgjYSkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins bg-gradient-to-r from-[#9b59b6] to-[#00FFFF] bg-clip-text text-transparent">Platforms We Cover</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto animate-fade-in animate-delay-100">
            Our sessions cover problems and concepts from these leading coding platforms. 
            We help you navigate these resources effectively to maximize your learning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {platforms.map((platform, index) => (
            <a 
              href={platform.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              key={platform.name}
              className={`transform transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(platform.name)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card className={`backdrop-blur-lg bg-black/40 border border-${platform.color}/30 rounded-xl overflow-hidden h-full flex flex-col relative group ${
                hoveredCard === platform.name ? platform.hoverGlowColor : platform.glowColor
              } transition-all duration-500`}>
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 ${platform.color} opacity-0 blur-2xl transition-opacity duration-500 -z-10 ${
                  hoveredCard === platform.name ? 'opacity-20' : ''
                }`}></div>
                
                <div className={`${platform.color} h-2 w-full`}></div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold font-poppins text-white">{platform.name}</h3>
                    <div className={`${platform.color} bg-opacity-20 p-2 rounded-full transition-all duration-500 ${hoveredCard === platform.name ? 'rotate-12' : ''}`}>
                      <Code className={`h-5 w-5 ${platform.textColor}`} />
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm flex-1">{platform.description}</p>
                  <div className={`flex items-center mt-4 ${platform.textColor} text-sm font-medium transition-all duration-300 ${hoveredCard === platform.name ? 'translate-x-1' : ''}`}>
                    Visit Platform <ExternalLink className="ml-2 h-4 w-4" />
                  </div>
                </div>
                
                {/* Animated neon border on hover */}
                <div className={`absolute inset-0 border border-transparent transition-all duration-500 ${
                  hoveredCard === platform.name ? `border-${platform.color} ` : ''
                }`}></div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
