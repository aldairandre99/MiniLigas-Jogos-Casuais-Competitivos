import { useEffect, useState } from "react";

interface VerticalTimelineProps {
  duration?: number; 
  onTimeEnd: () => void;
  resetTrigger?: number; 
}

export const VerticalTimeline = ({
  duration = 30,
  onTimeEnd,
  resetTrigger,
}: VerticalTimelineProps) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    setTimeLeft(duration); // reseta ao mudar o trigger
  }, [resetTrigger]);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeEnd();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const heightPercentage = (timeLeft / duration) * 100;

  return (
    <div className="fixed top-50 left-[10%] flex flex-col items-center gap-2">
      <div className="text-white font-semibold text-sm">{`0:${timeLeft.toString().padStart(2, "0")}`}</div>
      <div className="w-3 h-40 bg-white/30 rounded-full overflow-hidden">
        <div
          className="bg-green-500 w-full transition-all duration-1000"
          style={{ height: `${heightPercentage}%` }}
        />
      </div>
    </div>
  );
};
