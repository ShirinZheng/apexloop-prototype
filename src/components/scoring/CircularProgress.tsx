import { cn } from "@/lib/utils";

interface CircularProgressProps {
  value: number;
  maxValue?: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export function CircularProgress({ 
  value, 
  maxValue = 100, 
  size = 200, 
  strokeWidth = 12,
  className 
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const percentage = (value / maxValue) * 100;
  const offset = circumference - (percentage / 100) * circumference;

  const getColor = () => {
    if (percentage >= 80) return "stroke-success";
    if (percentage >= 50) return "stroke-warning";
    return "stroke-destructive";
  };

  const getGlowColor = () => {
    if (percentage >= 80) return "drop-shadow-[0_0_15px_hsl(142,71%,45%,0.5)]";
    if (percentage >= 50) return "drop-shadow-[0_0_15px_hsl(38,92%,50%,0.5)]";
    return "drop-shadow-[0_0_15px_hsl(0,72%,51%,0.5)]";
  };

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      <svg
        className={cn("transform -rotate-90", getGlowColor())}
        width={size}
        height={size}
      >
        {/* Background circle */}
        <circle
          className="stroke-muted"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        {/* Progress circle */}
        <circle
          className={cn(getColor(), "transition-all duration-1000 ease-out")}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-5xl font-bold text-foreground">{value}</span>
        <span className="text-sm text-muted-foreground">out of {maxValue}</span>
      </div>
    </div>
  );
}
