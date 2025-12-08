import { cn } from "@/lib/utils";

interface ScoreCategory {
  name: string;
  score: number;
  maxScore: number;
}

interface ScoreBreakdownProps {
  categories: ScoreCategory[];
}

export function ScoreBreakdown({ categories }: ScoreBreakdownProps) {
  const getBarColor = (percentage: number) => {
    if (percentage >= 80) return "bg-success";
    if (percentage >= 50) return "bg-warning";
    return "bg-destructive";
  };

  const getBarGlow = (percentage: number) => {
    if (percentage >= 80) return "shadow-success/30";
    if (percentage >= 50) return "shadow-warning/30";
    return "shadow-destructive/30";
  };

  return (
    <div className="space-y-6">
      {categories.map((category, index) => {
        const percentage = (category.score / category.maxScore) * 100;
        
        return (
          <div 
            key={category.name} 
            className="space-y-2 animate-fade-in opacity-0"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">{category.name}</span>
              <span className="text-sm font-semibold text-muted-foreground">
                {category.score}/{category.maxScore}
              </span>
            </div>
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <div
                className={cn(
                  "h-full rounded-full transition-all duration-1000 ease-out shadow-lg",
                  getBarColor(percentage),
                  getBarGlow(percentage)
                )}
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
