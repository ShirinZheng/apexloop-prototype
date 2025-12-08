import { Clock, TrendingUp, Phone, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

interface Activity {
  id: string;
  type: "call" | "score" | "training";
  title: string;
  description: string;
  time: string;
  score?: number;
}

const activities: Activity[] = [
  {
    id: "1",
    type: "call",
    title: "Cold Call Practice",
    description: "Completed session with Enterprise Bot",
    time: "2 hours ago",
    score: 82,
  },
  {
    id: "2",
    type: "score",
    title: "Score Improved",
    description: "Objection handling score increased by 15%",
    time: "5 hours ago",
  },
  {
    id: "3",
    type: "training",
    title: "Discovery Call Training",
    description: "New module unlocked: Advanced Discovery",
    time: "1 day ago",
  },
  {
    id: "4",
    type: "call",
    title: "Discovery Session",
    description: "Practiced with SMB Buyer Bot",
    time: "1 day ago",
    score: 75,
  },
  {
    id: "5",
    type: "score",
    title: "Weekly Report",
    description: "Your average score is up 8% this week",
    time: "2 days ago",
  },
];

const getIcon = (type: Activity["type"]) => {
  switch (type) {
    case "call":
      return <Phone className="w-4 h-4" />;
    case "score":
      return <TrendingUp className="w-4 h-4" />;
    case "training":
      return <Bot className="w-4 h-4" />;
  }
};

const getIconColor = (type: Activity["type"]) => {
  switch (type) {
    case "call":
      return "bg-accent/20 text-accent";
    case "score":
      return "bg-success/20 text-success";
    case "training":
      return "bg-primary/20 text-primary";
  }
};

export function RecentActivity() {
  return (
    <div className="glass rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Recent Activity</h3>
        <Clock className="w-5 h-5 text-muted-foreground" />
      </div>
      
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={activity.id}
            className={cn(
              "flex items-start gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors duration-200 cursor-pointer group",
              "animate-fade-in opacity-0"
            )}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center shrink-0", getIconColor(activity.type))}>
              {getIcon(activity.type)}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="font-medium text-foreground text-sm truncate group-hover:text-primary transition-colors">
                  {activity.title}
                </p>
                {activity.score && (
                  <span className={cn(
                    "text-xs font-semibold px-2 py-0.5 rounded-full",
                    activity.score >= 80 ? "bg-success/20 text-success" :
                    activity.score >= 50 ? "bg-warning/20 text-warning" :
                    "bg-destructive/20 text-destructive"
                  )}>
                    {activity.score}%
                  </span>
                )}
              </div>
              <p className="text-xs text-muted-foreground truncate mt-0.5">
                {activity.description}
              </p>
            </div>
            
            <span className="text-xs text-muted-foreground whitespace-nowrap">
              {activity.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
