
import { Code2, Code, Laptop, Users, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TypingAnimation from './TypingAnimation';
import ParticleBackground from './ParticleBackground';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/917668759906', '_blank');
  };

  return (
    <section id="home" className="pt-20 md:pt-28 pb-16 md:pb-24 relative overflow-hidden">
      <ParticleBackground />
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0 order-2 lg:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 font-poppins">
              Welcome to <span className="text-gradient">Tech Hub</span> — Your Coding Community!
            </h1>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-300 max-w-2xl">
              <TypingAnimation
                texts={[
                  "Daily DSA sessions",
                  "Weekend Web Dev workshops",
                  "Global active members"
                ]}
                typingSpeed={80}
              />
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-techhub-purple hover:bg-techhub-light-purple text-white px-8 py-6 rounded-lg transform hover:scale-105 transition-all duration-300"
                onClick={openWhatsApp}
              >
                Join Now
              </Button>
              <Button 
                variant="outline" 
                className="border-techhub-purple text-techhub-purple dark:text-techhub-light-purple hover:bg-techhub-soft-purple py-6 transform hover:scale-105 transition-all duration-300"
                onClick={() => scrollToSection('about')}
              >
                Learn More
              </Button>
            </div>
            
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center animate-slide-up" style={{ animationDelay: '100ms' }}>
                <Code className="h-6 w-6 text-techhub-purple mr-2" />
                <span className="text-sm font-medium">DSA Practice</span>
              </div>
              <div className="flex items-center animate-slide-up" style={{ animationDelay: '200ms' }}>
                <Laptop className="h-6 w-6 text-techhub-purple mr-2" />
                <span className="text-sm font-medium">Web Dev Sessions</span>
              </div>
              <div className="flex items-center animate-slide-up" style={{ animationDelay: '300ms' }}>
                <Users className="h-6 w-6 text-techhub-purple mr-2" />
                <span className="text-sm font-medium">Active Members</span>
              </div>
              <div className="flex items-center animate-slide-up" style={{ animationDelay: '400ms' }}>
                <Globe className="h-6 w-6 text-techhub-purple mr-2" />
                <span className="text-sm font-medium">Global Reach</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0 flex justify-center animate-fade-in animate-delay-200">
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-techhub-purple/20 to-techhub-blue/20 rounded-lg transform rotate-6"></div>
              <div className="relative glass-card rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="text-gray-200 text-sm ml-2">tech-hub-session.js</div>
                </div>
                <div className="bg-gray-900 p-6 font-mono text-sm text-green-400">
                  <pre className="whitespace-pre-wrap">
                    <code>
                      <span className="text-blue-400">function</span> <span className="text-yellow-300">solveDSAProblem</span>(<span className="text-orange-300">problem</span>) {'{'}<br/>
                      &nbsp;&nbsp;<span className="text-blue-400">const</span> approach = <span className="text-orange-300">analyzeComplexity</span>(problem);<br/>
                      &nbsp;&nbsp;<span className="text-blue-400">const</span> solution = <span className="text-orange-300">implementAlgorithm</span>(approach);<br/>
                      &nbsp;&nbsp;<span className="text-purple-400">return</span> solution;<br/>
                      {'}'}<br/><br/>
                      <span className="text-gray-400">// Join our next session!</span><br/>
                      <span className="text-blue-400">const</span> techHub = <span className="text-blue-400">new</span> <span className="text-yellow-300">CommunitySession</span>();<br/>
                      techHub.<span className="text-yellow-300">startCoding</span>();
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
