
import { useEffect, useRef } from 'react';

interface ParticleBackgroundProps {
  count?: number;
  colors?: string[];
  minSize?: number;
  maxSize?: number;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  count = 30,
  colors = ['#E5DEFF', '#D3E4FD', '#9b87f5', '#6E59A5'],
  minSize = 5,
  maxSize = 15,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    
    // Clear any existing particles
    container.innerHTML = '';

    // Create particles
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      
      // Random properties
      const size = Math.random() * (maxSize - minSize) + minSize;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const animationDelay = Math.random() * 8;
      const animationDuration = 8 + Math.random() * 12;
      
      // Apply styles
      particle.className = 'particle';
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = color;
      particle.style.left = `${left}%`;
      particle.style.top = `${top}%`;
      particle.style.animationDelay = `${animationDelay}s`;
      particle.style.animationDuration = `${animationDuration}s`;
      
      container.appendChild(particle);
    }
  }, [count, colors, minSize, maxSize]);

  return <div ref={containerRef} className="particles-bg" />;
};

export default ParticleBackground;
