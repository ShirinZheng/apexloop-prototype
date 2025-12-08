import { Phone, TrendingUp, Target, Clock, Play } from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const stats = [
  {
    title: "Average Score",
    value: "78",
    subtitle: "Last 30 days",
    icon: <TrendingUp className="w-6 h-6" />,
    trend: { value: 12, isPositive: true },
  },
  {
    title: "Calls This Week",
    value: "24",
    subtitle: "7 more than last week",
    icon: <Phone className="w-6 h-6" />,
    trend: { value: 41, isPositive: true },
  },
  {
    title: "Current Streak",
    value: "5 days",
    subtitle: "Keep it up!",
    icon: <Target className="w-6 h-6" />,
  },
  {
    title: "Practice Time",
    value: "4.2h",
    subtitle: "This week",
    icon: <Clock className="w-6 h-6" />,
    trend: { value: 8, isPositive: true },
  },
];

export default function Dashboard() {
  const handleStartRoleplay = () => {
    toast({
      title: "Coming Soon! 🚀",
      description: "The roleplay module is currently under construction. Check back soon!",
    });
  };

  return (
    <AppLayout>
      <div className="p-6 md:p-8 lg:p-12 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 pt-12 md:pt-0">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, Alex! 👋</h1>
          <p className="text-muted-foreground">Here's your sales training overview</p>
        </div>

        {/* Start Roleplay CTA */}
        <div className="glass rounded-2xl p-8 mb-8 relative overflow-hidden group hover:border-primary/40 transition-all duration-300">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/20 rounded-full blur-[64px] group-hover:bg-primary/30 transition-colors duration-300" />
          <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-accent/20 rounded-full blur-[48px] group-hover:bg-accent/30 transition-colors duration-300" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Ready to Practice?</h2>
              <p className="text-muted-foreground max-w-md">
                Start a new AI-powered roleplay session and sharpen your sales skills with instant feedback.
              </p>
            </div>
            <Button 
              variant="hero" 
              size="xl" 
              onClick={handleStartRoleplay}
              className="group/btn shrink-0"
            >
              <Play className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
              Start New Roleplay
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div
              key={stat.title}
              className="animate-fade-in opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <StatsCard {...stat} />
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <RecentActivity />
      </div>
    </AppLayout>
  );
}
