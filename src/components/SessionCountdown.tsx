
import { useState, useEffect } from 'react';

const SessionCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      // Set the target time to 9:20 PM IST every day
      const now = new Date();
      const targetHour = 21; // 9 PM
      const targetMinute = 20; // 20 minutes
      
      let targetTime = new Date(now);
      targetTime.setHours(targetHour, targetMinute, 0, 0);
      
      // If the target time has passed for today, set it for tomorrow
      if (now > targetTime) {
        targetTime.setDate(targetTime.getDate() + 1);
      }
      
      const difference = targetTime.getTime() - now.getTime();
      
      if (difference > 0) {
        const hours = Math.floor((difference / (1000 * 60 * 60)));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ hours, minutes, seconds });
      }
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="flex items-center space-x-2 text-sm">
      <span className="text-[#00FFFF]">Next Session:</span>
      <div className="flex items-center space-x-1">
        <div className="bg-black/40 backdrop-blur-md px-2 py-1 rounded border border-[#9b59b6]/30 text-[#00FFFF]">
          {timeLeft.hours.toString().padStart(2, '0')}
        </div>
        <span className="text-[#9b59b6]">:</span>
        <div className="bg-black/40 backdrop-blur-md px-2 py-1 rounded border border-[#9b59b6]/30 text-[#00FFFF]">
          {timeLeft.minutes.toString().padStart(2, '0')}
        </div>
        <span className="text-[#9b59b6]">:</span>
        <div className="bg-black/40 backdrop-blur-md px-2 py-1 rounded border border-[#9b59b6]/30 text-[#00FFFF]">
          {timeLeft.seconds.toString().padStart(2, '0')}
        </div>
      </div>
    </div>
  );
};

export default SessionCountdown;
