import { useEffect, useState } from "react";

export const VerticalTimeline = () => {
  const duration = 30; 
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) return duration; 
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const percent = (timeLeft / duration) * 100;

  return (
    <div className="flex flex-col items-center gap-2 z-10 absolute left-1/12 top-[30%]">
      <div className="relative w-2 h-40 bg-neutral-700 rounded overflow-hidden">
        <div
          className="absolute bottom-0 left-0 w-full bg-green-500 transition-all duration-1000"
          style={{ height: `${percent}%` }}
        />
      </div>
      <span className="text-white text-sm font-mono">0:{timeLeft.toString().padStart(2, "0")}</span>
    </div>
  );
};
