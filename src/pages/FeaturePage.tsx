import { useParams, Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle2, 
  Bot, 
  BarChart3, 
  Users, 
  Zap,
  PlayCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import MegaMenuNavigation from "@/components/navigation/MegaMenuNavigation";

// Map slugs to display titles and descriptions
const featureData: Record<string, { title: string; subtitle: string; description: string; benefits: string[] }> = {
  // Products
  "ai-sales-roleplays": {
    title: "Master AI Sales Roleplays",
    subtitle: "Practice unlimited sales scenarios with intelligent AI buyers",
    description: "Our AI-powered roleplays simulate real buyer conversations, helping you practice discovery calls, demos, and closing techniques without the pressure of real prospects.",
    benefits: ["Unlimited practice sessions 24/7", "Realistic buyer personas", "Instant feedback on performance", "Track improvement over time"]
  },
  "ai-real-call-scoring": {
    title: "AI Real Call Scoring",
    subtitle: "Get instant analysis on every real sales call",
    description: "Upload your actual sales calls and receive comprehensive AI analysis with scoring across key metrics like discovery depth, objection handling, and closing effectiveness.",
    benefits: ["Automatic call transcription", "Multi-dimensional scoring", "Identify coaching opportunities", "Benchmark against top performers"]
  },
  "ai-coaching": {
    title: "AI Coaching",
    subtitle: "Personalized coaching that scales with your team",
    description: "Our AI coaching system analyzes patterns in your sales conversations and provides tailored recommendations to improve your specific areas of weakness.",
    benefits: ["Personalized improvement plans", "Just-in-time coaching tips", "Manager dashboard insights", "Gamified learning paths"]
  },
  "ai-post-sales-roleplays": {
    title: "AI Post-Sales Roleplays",
    subtitle: "Train your customer success team for retention",
    description: "Practice difficult customer conversations including renewals, upsells, churn prevention, and escalation handling with AI-powered customer simulations.",
    benefits: ["Renewal conversation practice", "Upsell scenario training", "Churn prevention tactics", "Escalation de-escalation"]
  },
  "ai-roleplay-hiring-assessments": {
    title: "AI Roleplay Hiring Assessments",
    subtitle: "Evaluate sales candidates objectively",
    description: "Use standardized AI roleplay assessments to evaluate sales candidates before hiring, ensuring you only bring on reps who can actually sell.",
    benefits: ["Standardized evaluation criteria", "Remove interviewer bias", "Predict on-the-job performance", "Reduce bad hires by 60%"]
  },
  // Use Cases
  "onboarding-certifications": {
    title: "Onboarding & Certifications",
    subtitle: "Accelerate new hire ramp time by 50%",
    description: "Create certification programs that ensure new reps have mastered your sales methodology before they ever get on a real call.",
    benefits: ["Structured onboarding paths", "Certification requirements", "Progress tracking", "Faster time to first deal"]
  },
  "change-management": {
    title: "Change Management",
    subtitle: "Roll out new messaging and processes seamlessly",
    description: "When you update your pitch, pricing, or sales process, use ApexLoop to ensure every rep has practiced and mastered the changes.",
    benefits: ["Track adoption of new messaging", "Practice before rollout", "Measure competency gaps", "Accelerate change adoption"]
  },
  "pre-call-prep": {
    title: "Pre-Call Prep",
    subtitle: "Never go into a call unprepared again",
    description: "Run a quick practice session before important calls to warm up your skills and anticipate objections specific to that prospect.",
    benefits: ["Account-specific scenarios", "Objection anticipation", "Confidence building", "Quick 5-minute warm-ups"]
  },
  "qa-deal-assessment": {
    title: "QA & Deal Assessment",
    subtitle: "Quality assure every deal in your pipeline",
    description: "Upload calls from active deals to get AI assessment of deal health, next steps quality, and probability of close.",
    benefits: ["Deal health scoring", "Risk identification", "Next step recommendations", "Forecast accuracy improvement"]
  },
  "hiring": {
    title: "Hiring",
    subtitle: "Hire sellers who can actually sell",
    description: "Replace gut-feel interviews with objective AI assessments that predict real-world sales performance.",
    benefits: ["Objective candidate scoring", "Reduce bad hires", "Standardized process", "Faster hiring decisions"]
  },
  // Industries
  "b2b-saas-software": {
    title: "B2B SaaS Software",
    subtitle: "Built for modern software sales teams",
    description: "ApexLoop understands the nuances of B2B SaaS sales cycles, from discovery to technical validation to procurement.",
    benefits: ["SaaS-specific scenarios", "Multi-stakeholder selling", "Technical objection handling", "Competitive positioning"]
  },
  "b2b-sales-trainers-agencies": {
    title: "B2B Sales Trainers & Agencies",
    subtitle: "Scale your training business with AI",
    description: "Offer your clients unlimited practice opportunities between training sessions, dramatically improving retention and results.",
    benefits: ["White-label options", "Client progress tracking", "Methodology integration", "Recurring revenue opportunity"]
  },
  "b2b-call-centers": {
    title: "B2B Call Centers",
    subtitle: "Train high-volume teams at scale",
    description: "Ensure consistent quality across large teams with standardized AI training and real-time coaching.",
    benefits: ["Scale training instantly", "Quality consistency", "Reduce supervisor burden", "Performance benchmarking"]
  },
  "banking-financial-advisors": {
    title: "Banking & Financial Advisors",
    subtitle: "Compliance-ready conversation training",
    description: "Practice client conversations while maintaining compliance with financial services regulations.",
    benefits: ["Compliance-aware scenarios", "Needs-based selling", "Relationship building", "Complex product training"]
  },
  // Resources
  "demos": {
    title: "Product Demos",
    subtitle: "See ApexLoop in action",
    description: "Watch comprehensive demos of how ApexLoop's AI-powered roleplays, scoring, and coaching work to transform sales performance.",
    benefits: ["Live product walkthrough", "Real customer examples", "Integration showcase", "Q&A sessions available"]
  },
  "blog": {
    title: "ApexLoop Blog",
    subtitle: "Insights on AI-powered sales coaching",
    description: "Stay current with the latest trends in AI coaching, sales enablement, and performance optimization.",
    benefits: ["Weekly new content", "Expert contributors", "Practical tips", "Industry research"]
  },
  "competitions": {
    title: "Sales Competitions",
    subtitle: "Compete and win prizes",
    description: "Join our quarterly virtual competitions where you can test your skills against other sales professionals and win amazing prizes.",
    benefits: ["Quarterly competitions", "Cash prizes", "Leaderboard rankings", "Community recognition"]
  },
  "partners": {
    title: "Partner Program",
    subtitle: "Grow with ApexLoop",
    description: "Join our partner ecosystem and offer AI-powered sales training to your clients while earning commissions.",
    benefits: ["Generous commissions", "Sales enablement", "Marketing support", "Dedicated partner manager"]
  },
  // Static pages
  "pricing": {
    title: "Simple, Transparent Pricing",
    subtitle: "Choose the plan that fits your team",
    description: "Whether you're an individual rep or an enterprise team, we have a plan that scales with your needs.",
    benefits: ["Free trial available", "No credit card required", "Cancel anytime", "Volume discounts"]
  },
  "success-stories": {
    title: "Success Stories",
    subtitle: "See how teams are winning with ApexLoop",
    description: "Discover how sales teams across industries are using ApexLoop to accelerate ramp time, improve win rates, and crush their quotas.",
    benefits: ["Real customer results", "Industry case studies", "ROI examples", "Implementation insights"]
  },
  "enterprise": {
    title: "Enterprise Solutions",
    subtitle: "Built for scale, security, and success",
    description: "Get enterprise-grade features including SSO, advanced analytics, custom integrations, and dedicated support.",
    benefits: ["SSO & SCIM provisioning", "Custom integrations", "Dedicated CSM", "SLA guarantees"]
  },
  "careers": {
    title: "Join Our Team",
    subtitle: "Help us transform sales training",
    description: "We're building the future of AI-powered sales coaching. Join our mission to help every sales rep reach their potential.",
    benefits: ["Remote-first culture", "Competitive compensation", "Equity participation", "Growth opportunities"]
  }
};

export default function FeaturePage() {
  const { slug } = useParams<{ slug: string }>();
  const feature = slug ? featureData[slug] : null;

  // Default fallback if slug not found
  const data = feature || {
    title: `Explore ${slug?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}`,
    subtitle: "Discover how ApexLoop can transform your sales performance",
    description: "Our AI-powered platform helps sales teams practice, learn, and improve continuously.",
    benefits: ["AI-powered training", "Instant feedback", "Team analytics", "Continuous improvement"]
  };

  return (
    <div className="min-h-screen bg-background">
      <MegaMenuNavigation />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">ApexLoop Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {data.title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/dashboard">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Try it now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Button variant="outline" size="lg">
              <PlayCircle className="w-4 h-4 mr-2" />
              Watch demo
            </Button>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Why choose this solution?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {data.description}
              </p>
              <ul className="space-y-4">
                {data.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Feature Visual */}
            <div className="bg-background rounded-2xl p-8 border border-border shadow-sm">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-6">
                <Bot className="w-16 h-16 text-primary/30" />
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Performance Analytics</p>
                  <p className="text-sm text-muted-foreground">Track your improvement over time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <p className="text-4xl font-bold text-primary mb-2">35%</p>
              <p className="text-muted-foreground">Average Score Increase</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-primary mb-2">50%</p>
              <p className="text-muted-foreground">Faster Ramp Time</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-primary mb-2">2x</p>
              <p className="text-muted-foreground">More Practice Sessions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-background rounded-2xl p-12 border border-border shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to get started?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Join hundreds of sales teams already using ApexLoop to improve their performance.
            </p>
            <Link to="/dashboard">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
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
