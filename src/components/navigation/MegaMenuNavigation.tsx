import { Link } from "react-router-dom";
import {
  Zap,
  Bot,
  BarChart3,
  MessageSquare,
  HeadphonesIcon,
  ClipboardCheck,
  GraduationCap,
  RefreshCcw,
  Phone,
  Search,
  Users,
  Monitor,
  School,
  Headphones,
  Building2,
  PlayCircle,
  BookOpen,
  Trophy,
  Handshake,
  ArrowRight,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useState } from "react";

// Solutions Menu Data
const productItems = [
  { title: "AI Sales Roleplays", slug: "ai-sales-roleplays", icon: Bot, description: "Practice with AI buyers" },
  { title: "AI Real Call Scoring", slug: "ai-real-call-scoring", icon: BarChart3, description: "Score your actual calls" },
  { title: "AI Coaching", slug: "ai-coaching", icon: MessageSquare, description: "Personalized AI coaching" },
  { title: "AI Post-Sales Roleplays", slug: "ai-post-sales-roleplays", icon: HeadphonesIcon, description: "Customer success training" },
  { title: "AI Roleplay Hiring Assessments", slug: "ai-roleplay-hiring-assessments", icon: ClipboardCheck, description: "Evaluate candidates" },
];

const useCaseItems = [
  { title: "Onboarding & Certifications", slug: "onboarding-certifications", icon: GraduationCap },
  { title: "Change Management", slug: "change-management", icon: RefreshCcw },
  { title: "Pre-Call Prep", slug: "pre-call-prep", icon: Phone },
  { title: "QA & Deal Assessment", slug: "qa-deal-assessment", icon: Search },
  { title: "Hiring", slug: "hiring", icon: Users },
];

const industryItems = [
  { title: "B2B SaaS Software", slug: "b2b-saas-software", icon: Monitor },
  { title: "B2B Sales Trainers & Agencies", slug: "b2b-sales-trainers-agencies", icon: School },
  { title: "B2B Call Centers", slug: "b2b-call-centers", icon: Headphones },
  { title: "Banking & Financial Advisors", slug: "banking-financial-advisors", icon: Building2 },
];

// Resources Menu Data
const resourceItems = [
  {
    title: "Demos",
    slug: "demos",
    icon: PlayCircle,
    description: "Watch how ApexLoop's state of the art AI roleplays work"
  },
  {
    title: "Blog",
    slug: "blog",
    icon: BookOpen,
    description: "Stay up to date with the latest in AI coaching"
  },
  {
    title: "Competitions",
    slug: "competitions",
    icon: Trophy,
    description: "Join our quarterly virtual competitions"
  },
  {
    title: "Partners",
    slug: "partners",
    icon: Handshake,
    description: "Want to become a partner? Join us!"
  },
];

export default function MegaMenuNavigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-primary-bg flex items-center justify-center">
              <Zap className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl text-heading">ApexLoop</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Solutions Mega Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-body hover:text-heading bg-transparent font-medium">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[950px] p-8">
                      <div className="grid grid-cols-4 gap-12">
                        {/* Column 1: Product */}
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-widest text-menu-header mb-4">Product</h4>
                          <ul className="space-y-1">
                            {productItems.map((item) => (
                              <li key={item.slug}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    to={`/solutions/${item.slug}`}
                                    className="flex items-center gap-3 py-2 rounded-md hover:bg-muted transition-colors group"
                                  >
                                    <item.icon className="w-4 h-4 text-menu-header group-hover:text-accent" />
                                    <span className="text-sm font-medium text-body group-hover:text-accent">{item.title}</span>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Column 2: Use Cases */}
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-widest text-menu-header mb-4">Use Cases</h4>
                          <ul className="space-y-1">
                            {useCaseItems.map((item) => (
                              <li key={item.slug}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    to={`/solutions/${item.slug}`}
                                    className="flex items-center gap-3 py-2 rounded-md hover:bg-muted transition-colors group"
                                  >
                                    <item.icon className="w-4 h-4 text-menu-header group-hover:text-accent" />
                                    <span className="text-sm font-medium text-body group-hover:text-accent">{item.title}</span>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Column 3: Industries */}
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-widest text-menu-header mb-4">Industries</h4>
                          <ul className="space-y-1">
                            {industryItems.map((item) => (
                              <li key={item.slug}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    to={`/solutions/${item.slug}`}
                                    className="flex items-center gap-3 py-2 rounded-md hover:bg-muted transition-colors group"
                                  >
                                    <item.icon className="w-4 h-4 text-menu-header group-hover:text-accent" />
                                    <span className="text-sm font-medium text-body group-hover:text-accent">{item.title}</span>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Column 4: Featured Card */}
                        <div className="bg-accent/10 rounded-xl p-5">
                          <h4 className="text-sm font-semibold text-heading mb-2">Practice Recommendations</h4>
                          <p className="text-xs text-body mb-4">
                            Get personalized practice scenarios based on your performance data.
                          </p>
                          <div className="bg-background rounded-lg h-24 mb-4 flex items-center justify-center border border-border overflow-hidden">
                            <div className="w-full h-full gradient-primary-bg opacity-20" />
                            <Bot className="w-10 h-10 text-accent absolute" />
                          </div>
                          <a href="https://app.apexloopai.com/dashboard">
                            <Button size="sm" className="w-full gradient-primary-bg hover:opacity-90 text-primary-foreground border-0">
                              Try it now
                              <ArrowRight className="w-3 h-3 ml-1" />
                            </Button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Simple Links */}
                <NavigationMenuItem>
                  <Link to="/pricing" className="px-4 py-2 text-sm font-medium text-body hover:text-accent transition-colors">
                    Pricing
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/success-stories" className="px-4 py-2 text-sm font-medium text-body hover:text-accent transition-colors">
                    Success Stories
                  </Link>
                </NavigationMenuItem>

                {/* Resources Mega Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-body hover:text-heading bg-transparent font-medium">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[750px] p-8">
                      <div className="grid grid-cols-2 gap-6">
                        {resourceItems.map((item) => (
                          <NavigationMenuLink key={item.slug} asChild>
                            <Link
                              to={`/resources/${item.slug}`}
                              className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted transition-colors group"
                            >
                              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                                <item.icon className="w-6 h-6 text-accent" />
                              </div>
                              <div>
                                <h4 className="text-sm font-semibold text-heading group-hover:text-accent mb-1">{item.title}</h4>
                                <p className="text-xs text-body">{item.description}</p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/enterprise" className="px-4 py-2 text-sm font-medium text-body hover:text-accent transition-colors">
                    Enterprise
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/careers" className="px-4 py-2 text-sm font-medium text-body hover:text-accent transition-colors">
                    Careers
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-2">
            <a href="https://app.apexloopai.com/dashboard">
              <Button variant="ghost" size="sm" className="text-body hover:text-heading">
                Book a demo
              </Button>
            </a>
            <a href="https://app.apexloopai.com/login">
              <Button variant="ghost" size="sm" className="text-body hover:text-heading">
                Log in
              </Button>
            </a>
            <a href="https://app.apexloopai.com/dashboard">
              <Button size="sm" className="gradient-primary-bg hover:opacity-90 text-primary-foreground border-0">
                Try it now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-muted"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="w-6 h-6 text-heading" />
            ) : (
              <Menu className="w-6 h-6 text-heading" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-4 py-6 space-y-4">
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-widest text-menu-header">Solutions</p>
              {productItems.slice(0, 3).map((item) => (
                <Link
                  key={item.slug}
                  to={`/solutions/${item.slug}`}
                  className="block py-2 text-sm text-body hover:text-accent"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="space-y-2">
              <Link to="/pricing" className="block py-2 text-sm font-medium text-body hover:text-accent" onClick={() => setMobileOpen(false)}>
                Pricing
              </Link>
              <Link to="/success-stories" className="block py-2 text-sm font-medium text-body hover:text-accent" onClick={() => setMobileOpen(false)}>
                Success Stories
              </Link>
              <Link to="/enterprise" className="block py-2 text-sm font-medium text-body hover:text-accent" onClick={() => setMobileOpen(false)}>
                Enterprise
              </Link>
              <Link to="/careers" className="block py-2 text-sm font-medium text-body hover:text-accent" onClick={() => setMobileOpen(false)}>
                Careers
              </Link>
            </div>
            <div className="pt-4 border-t border-border space-y-2">
              <a href="https://app.apexloopai.com/login" onClick={() => setMobileOpen(false)}>
                <Button variant="ghost" className="w-full justify-start text-body">Log in</Button>
              </a>
              <a href="https://app.apexloopai.com/dashboard" onClick={() => setMobileOpen(false)}>
                <Button className="w-full gradient-primary-bg text-primary-foreground">Try it now</Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
