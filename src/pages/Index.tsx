
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import JoinSection from "@/components/JoinSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EventsSection from "@/components/EventsSection";
import PlatformsSection from "@/components/PlatformsSection";
import Footer from "@/components/Footer";
import FloatingActionButton from "@/components/FloatingActionButton";
import { Loader2 } from "lucide-react";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
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
      <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-background to-accent/30">
        <Loader2 className="h-12 w-12 text-techhub-purple animate-spin mb-4" />
        <h2 className="text-2xl font-bold text-techhub-purple animate-pulse">Loading Tech Hub...</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <div className="bg-gradient-to-r from-techhub-purple/10 to-techhub-blue/10 py-3 sticky top-20 z-30 backdrop-blur-sm border-y border-techhub-purple/10">
        <div className="container mx-auto px-6 flex items-center justify-center">
          <div className="flex items-center">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse mr-2"></div>
            <span className="text-sm font-medium">{activeMembers} members online now</span>
          </div>
        </div>
      </div>
      <PlatformsSection />
      <TeamSection />
      <TestimonialsSection />
      <EventsSection />
      <JoinSection />
      <Footer />
      <FloatingActionButton />
      <Toaster />
    </div>
  );
};

export default Index;
