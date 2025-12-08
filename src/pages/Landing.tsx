import { Link } from "react-router-dom";
import { 
  Zap, 
  Bot, 
  BarChart3, 
  Target, 
  ArrowRight, 
  CheckCircle2,
  Users,
  Trophy,
  PlayCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import MegaMenuNavigation from "@/components/navigation/MegaMenuNavigation";

const features = [
  {
    icon: <Bot className="w-6 h-6" />,
    title: "AI-Powered Buyer Bots",
    description: "Practice with realistic AI buyers that adapt to your selling style and challenge you with real-world objections.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Instant AI Scoring",
    description: "Get immediate, detailed feedback on every call with actionable insights to improve your performance.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Personalized Training",
    description: "Our AI identifies your weak spots and creates custom training scenarios to help you improve faster.",
  },
];

const stats = [
  { value: "35%", label: "Average Score Increase" },
  { value: "10K+", label: "Calls Analyzed" },
  { value: "500+", label: "Sales Reps Trained" },
];

const benefits = [
  "Unlimited practice sessions 24/7",
  "Real-time objection handling coaching",
  "Progress tracking & analytics",
  "Team performance dashboards",
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <MegaMenuNavigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 px-6">
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">The Future of Sales Training</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Master Sales with
            <br />
            <span className="text-primary">AI-Powered Roleplay</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Practice unlimited sales calls with intelligent AI buyers. Get instant scoring, 
            personalized feedback, and watch your close rates soar.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/dashboard">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                Try it now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-border text-foreground hover:bg-muted">
              <PlayCircle className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mt-20">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need to <span className="text-primary">Close More Deals</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our AI platform simulates real sales conversations, scores your performance, 
              and provides actionable insights to accelerate your growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-background rounded-2xl p-8 border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Train Smarter, <span className="text-primary">Sell Better</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Stop wasting time on outdated training methods. ApexLoop uses advanced AI 
                to create hyper-realistic sales scenarios that prepare you for any situation.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link to="/dashboard" className="inline-block mt-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Get Started Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            
            {/* Preview Card */}
            <div className="bg-background rounded-2xl p-8 border border-border shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Today's Score</p>
                  <p className="text-sm text-muted-foreground">Discovery Call Session</p>
                </div>
              </div>
              <div className="text-6xl font-bold text-primary mb-4">87</div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-sm text-muted-foreground">Opening</p>
                  <p className="text-lg font-semibold text-green-600">92%</p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-sm text-muted-foreground">Discovery</p>
                  <p className="text-lg font-semibold text-green-600">85%</p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-sm text-muted-foreground">Objections</p>
                  <p className="text-lg font-semibold text-amber-500">78%</p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-sm text-muted-foreground">Closing</p>
                  <p className="text-lg font-semibold text-green-600">88%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-background rounded-3xl p-12 md:p-16 border border-border shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-8">
              <Users className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Transform Your Sales Team?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Join hundreds of high-performing sales teams already using ApexLoop 
              to crush their quotas.
            </p>
            <Link to="/dashboard">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Zap className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground">ApexLoop</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 Palette Space. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a>
            <a href="https://palettespace.org" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">palettespace.org</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
