
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Send, MessageSquare, Users, Code } from "lucide-react";
import FloatingActionButton from "@/components/FloatingActionButton";

const JoinUs = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917668759906', '_blank');
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins animate-fade-in">Join Tech Hub</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 animate-fade-in animate-delay-100">
                Ready to become part of our active tech community? We're looking for dedicated 
                students who are passionate about growing their skills and contributing to a 
                collaborative learning environment.
              </p>
            </div>
            
            <div className="glass-card rounded-xl shadow-lg overflow-hidden animate-scale-in">
              <div className="md:flex">
                <div className="md:w-1/2 bg-gradient-to-br from-techhub-purple to-techhub-blue p-10 text-white">
                  <h2 className="text-2xl font-bold mb-6 font-poppins">Why Join Us?</h2>
                  <ul className="space-y-6">
                    <li className="flex items-start animate-slide-up" style={{ animationDelay: '100ms' }}>
                      <div className="bg-white/20 p-2 rounded-full mr-4 mt-1">
                        <MessageSquare className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Daily Discussions</h3>
                        <p className="text-white/80">Active problem-solving sessions every day</p>
                      </div>
                    </li>
                    <li className="flex items-start animate-slide-up" style={{ animationDelay: '200ms' }}>
                      <div className="bg-white/20 p-2 rounded-full mr-4 mt-1">
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Peer Learning</h3>
                        <p className="text-white/80">Learn alongside motivated students from around the world</p>
                      </div>
                    </li>
                    <li className="flex items-start animate-slide-up" style={{ animationDelay: '300ms' }}>
                      <div className="bg-white/20 p-2 rounded-full mr-4 mt-1">
                        <Code className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Real Projects</h3>
                        <p className="text-white/80">Work on practical projects that enhance your portfolio</p>
                      </div>
                    </li>
                  </ul>

                  <div className="mt-10 pt-6 border-t border-white/20">
                    <h3 className="font-medium mb-4">Contact Us Directly:</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 mr-3" />
                        <span>7668759906</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 mr-3" />
                        <span>info@techhub.community</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2 p-10">
                  <h2 className="text-2xl font-bold mb-6 font-poppins">Ready to Join?</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-8">
                    The fastest way to join our community is to contact us directly via WhatsApp. 
                    We'll respond quickly to welcome you and get you started with our sessions.
                  </p>
                  
                  <div className="space-y-6">
                    <Button 
                      onClick={handleWhatsAppClick}
                      className="w-full bg-green-500 hover:bg-green-600 py-6 text-lg flex items-center justify-center transform hover:scale-105 transition-all duration-300"
                    >
                      <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm.031 18.75c-1.409 0-2.776-.375-3.976-1.073l-4.562 1.195 1.22-4.347c-.798-1.276-1.23-2.764-1.23-4.288 0-4.544 3.783-8.25 8.469-8.25 4.687 0 8.464 3.663 8.464 8.164 0 4.5-3.777 8.213-8.385 8.599z" fillRule="evenodd" clipRule="evenodd" />
                      </svg>
                      Join via WhatsApp
                    </Button>
                    
                    <div className="text-center">
                      <p className="text-gray-500 dark:text-gray-400">or</p>
                    </div>
                    
                    <Button 
                      variant="outline"
                      className="w-full border-techhub-purple text-techhub-purple dark:text-techhub-light-purple hover:bg-techhub-soft-purple dark:hover:bg-techhub-purple/20 py-6 text-lg transform hover:scale-105 transition-all duration-300"
                      onClick={() => window.location.href = 'mailto:info@techhub.community?subject=Joining%20Tech%20Hub'}
                    >
                      <Mail className="mr-3 h-5 w-5" />
                      Contact via Email
                    </Button>
                  </div>
                  
                  <div className="mt-8 text-sm text-gray-500 dark:text-gray-400 text-center">
                    <p>We typically respond within 24 hours. Only serious, committed members will be accepted.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default JoinUs;
