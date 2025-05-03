
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionsContent from "@/components/SessionsContent";
import PlatformsSection from "@/components/PlatformsSection";
import { Toaster } from "@/components/ui/toaster";
import FloatingActionButton from "@/components/FloatingActionButton";
import { Loader2 } from "lucide-react";
import SessionCountdown from "@/components/SessionCountdown";
import ParticleBackground from "@/components/ParticleBackground";

const Sessions = () => {
  const [loading, setLoading] = useState(true);
  const [activeMembers, setActiveMembers] = useState(0);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    // Simulate active member count (would be replaced with real data in production)
    setActiveMembers(Math.floor(Math.random() * 50) + 70); // Random number between 70-120
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0D0D0D] to-[#1a1a1a]">
        <div className="relative">
          <div className="absolute inset-0 rounded-full blur-xl bg-[#00FFFF]/30"></div>
          <Loader2 className="h-12 w-12 text-[#00FFFF] animate-spin mb-4 relative z-10" />
        </div>
        <h2 className="text-2xl font-bold text-[#9b59b6] animate-pulse mt-4">Loading Tech Hub...</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0D0D0D] text-white">
      <ParticleBackground 
        count={20} 
        colors={['#00FFFF20', '#9b59b620', '#00FF9D20']} 
      />
      <Navbar />
      <div className="pt-20"></div>
      <div className="bg-black/40 backdrop-blur-md py-3 sticky top-20 z-30 border-y border-[#00FFFF]/20">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center">
            <div className="h-2 w-2 rounded-full bg-[#00FF9D] animate-pulse mr-2 shadow-[0_0_8px_#00FF9D]"></div>
            <span className="text-sm font-medium">{activeMembers} members online now</span>
          </div>
          <SessionCountdown />
        </div>
      </div>
      <SessionsContent />
      <PlatformsSection />
      <Footer />
      <Toaster />
      <FloatingActionButton />
    </div>
  );
};

export default Sessions;
