import { Link } from "react-router-dom";
import {
  Zap,
  Bot,
  BarChart3,
  Target,
  ArrowRight,
  CheckCircle2,
  PlayCircle,
  Clock,
  TrendingDown,
  Users2,
  ChevronDown,
  ChevronUp,
  Quote,
  Twitter,
  Linkedin,
  Youtube
} from "lucide-react";
import { Button } from "@/components/ui/button";
import MegaMenuNavigation from "@/components/navigation/MegaMenuNavigation";
import { useState } from "react";

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

const logos = [
  "Acme Corp",
  "TechFlow",
  "Quantum",
  "Nexus AI",
  "SalesForge",
  "DataPulse"
];

const problemStats = [
  { icon: Clock, title: "Ramp time", description: "New reps take 6+ months to become productive" },
  { icon: TrendingDown, title: "Lost deals", description: "Poor discovery leads to 40% of lost opportunities" },
  { icon: Users2, title: "Inconsistent coaching", description: "Managers can't coach every rep equally" },
];

const faqItems = [
  {
    question: "Can ApexLoop be customized for my industry?",
    answer: "Yes! ApexLoop's AI can be trained on your specific product, industry terminology, and common objections. We work with you to create realistic buyer personas that match your target market."
  },
  {
    question: "How long does setup take?",
    answer: "Most teams are up and running within 24 hours. Our onboarding team handles the technical setup, and your reps can start practicing immediately with our pre-built scenarios."
  },
  {
    question: "What integrations do you support?",
    answer: "ApexLoop integrates with all major CRMs including Salesforce, HubSpot, and Pipedrive. We also support Slack, Zoom, and Gong for seamless workflow integration."
  },
  {
    question: "How does the AI scoring work?",
    answer: "Our AI analyzes multiple dimensions of your calls including tone, pacing, question quality, objection handling, and closing techniques. Scores are benchmarked against top performers in your industry."
  },
  {
    question: "Is there a free trial?",
    answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required. You can start practicing with AI buyers within minutes of signing up."
  },
];

const footerLinks = {
  product: [
    { label: "AI Roleplays", href: "/solutions/ai-sales-roleplays" },
    { label: "Call Scoring", href: "/solutions/ai-real-call-scoring" },
    { label: "AI Coaching", href: "/solutions/ai-coaching" },
    { label: "Integrations", href: "/solutions/integrations" },
    { label: "Pricing", href: "/pricing" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/resources/blog" },
    { label: "Press", href: "/press" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Security", href: "/security" },
    { label: "GDPR", href: "/gdpr" },
  ],
  resources: [
    { label: "Documentation", href: "/docs" },
    { label: "API Reference", href: "/api" },
    { label: "Demos", href: "/resources/demos" },
    { label: "Community", href: "/community" },
  ],
};

export default function Landing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <MegaMenuNavigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan/5 to-transparent pointer-events-none" />

        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-8">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">The Future of Sales Training</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading mb-6 leading-tight">
            Master Sales with
            <br />
            <span className="gradient-text">AI-Powered Roleplay</span>
          </h1>

          <p className="text-lg md:text-xl text-body max-w-2xl mx-auto mb-10">
            Practice unlimited sales calls with intelligent AI buyers. Get instant scoring,
            personalized feedback, and watch your close rates soar.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://app.apexloopai.com/dashboard">
              <Button size="lg" className="gradient-primary-bg hover:opacity-90 text-primary-foreground px-8 border-0">
                Try it now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <Button variant="outline" size="lg" className="border-border text-heading hover:bg-muted">
              <PlayCircle className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mt-20">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</p>
                <p className="text-sm text-body mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof - Logo Cloud */}
      <section className="py-16 px-6 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm font-medium text-menu-header uppercase tracking-widest mb-8">
            Trusted by leading revenue teams
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
            {logos.map((logo) => (
              <span key={logo} className="text-xl font-bold text-heading">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section - Blue Gradient Background */}
      <section className="py-24 px-6 gradient-primary-bg">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Leading a remote, global sales team is taxing.
            <br />
            Try scaling it? <span className="opacity-80">Frustrating.</span>
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-16">
            Traditional training methods can't keep up with today's fast-paced sales environment.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {problemStats.map((item) => (
              <div key={item.title} className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
                <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-primary-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-primary-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-section-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
              Everything You Need to <span className="gradient-text">Close More Deals</span>
            </h2>
            <p className="text-body max-w-2xl mx-auto">
              Our AI platform simulates real sales conversations, scores your performance,
              and provides actionable insights to accelerate your growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-background rounded-2xl p-8 border border-border hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-heading mb-3">{feature.title}</h3>
                <p className="text-body leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlight - Dark Section */}
      <section className="py-24 px-6 bg-section-dark">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Analyze Thousands of Calls & Upskill with AI Coaching
              </h2>
              <p className="text-primary-foreground/70 mb-8 leading-relaxed">
                Our AI doesn't just score calls—it learns from your top performers and creates
                personalized coaching plans for every rep. Scale excellence across your entire team.
              </p>
              <ul className="space-y-4 mb-8">
                {["Real-time call analysis", "Personalized improvement plans", "Team benchmarking", "Integration with your CRM"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan shrink-0" />
                    <span className="text-primary-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="https://app.apexloopai.com/dashboard">
                <Button size="lg" className="gradient-primary-bg hover:opacity-90 text-primary-foreground border-0">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>

            {/* Dashboard Preview */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="space-y-4">
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-2">Overall Score</div>
                  <div className="text-4xl font-bold gradient-text">87</div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-700/50 rounded-lg p-3">
                    <div className="text-xs text-gray-400">Opening</div>
                    <div className="text-lg font-semibold text-green-400">92%</div>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-3">
                    <div className="text-xs text-gray-400">Discovery</div>
                    <div className="text-lg font-semibold text-green-400">85%</div>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-3">
                    <div className="text-xs text-gray-400">Objections</div>
                    <div className="text-lg font-semibold text-yellow-400">78%</div>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-3">
                    <div className="text-xs text-gray-400">Closing</div>
                    <div className="text-lg font-semibold text-green-400">88%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 px-6 bg-section-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
              Success Stories
            </h2>
            <p className="text-body max-w-xl mx-auto">
              See how leading sales teams are transforming their performance with ApexLoop.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-background rounded-3xl p-8 md:p-12 border border-border shadow-sm">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="w-24 h-24 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                  <span className="text-3xl font-bold gradient-text">KD</span>
                </div>
                <div>
                  <Quote className="w-10 h-10 text-accent/30 mb-4" />
                  <blockquote className="text-xl md:text-2xl font-medium text-heading mb-6 leading-relaxed">
                    "With ApexLoop, our reps aren't practicing, they're <span className="gradient-text">perfecting</span>.
                    We've seen a 40% improvement in close rates within 90 days."
                  </blockquote>
                  <div>
                    <p className="font-semibold text-heading">Kevin Dorsey</p>
                    <p className="text-sm text-body">VP of Sales, TechFlow Inc.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-body">
              Everything you need to know about ApexLoop.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="font-medium text-heading pr-4">{item.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-accent shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-body shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-body leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-section-light">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-background rounded-3xl p-12 md:p-16 border border-border shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
              Ready to Transform Your Sales Team?
            </h2>
            <p className="text-body mb-8 max-w-lg mx-auto">
              Join hundreds of high-performing sales teams already using ApexLoop
              to crush their quotas.
            </p>
            <a href="https://app.apexloopai.com/dashboard">
              <Button size="lg" className="gradient-primary-bg hover:opacity-90 text-primary-foreground px-8 border-0">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer - Full Sitemap */}
      <footer className="bg-section-dark py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            {/* Logo Column */}
            <div className="col-span-2 md:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <img src="/logo-s.png" alt="ApexLoop Logo" className="w-8 h-8 object-contain brightness-0 invert" />
                <span className="font-bold text-xl text-primary-foreground">ApexLoop</span>
              </Link>
              <p className="text-sm text-primary-foreground/60">
                The Ultimate AI Sales Roleplay & Scoring Platform.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold text-primary-foreground mb-4">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-primary-foreground mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-primary-foreground mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-primary-foreground mb-4">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/60">
              © 2025 Palette Space. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Twitter className="w-4 h-4 text-primary-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Linkedin className="w-4 h-4 text-primary-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Youtube className="w-4 h-4 text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
