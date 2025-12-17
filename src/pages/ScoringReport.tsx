import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Bot, Lightbulb, AlertTriangle } from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { CircularProgress } from "@/components/scoring/CircularProgress";
import { ScoreBreakdown } from "@/components/scoring/ScoreBreakdown";
import { Button } from "@/components/ui/button";

// Mock data for different call IDs
const reportData: Record<string, {
  id: string;
  date: string;
  botName: string;
  type: string;
  duration: string;
  overallScore: number;
  categories: { name: string; score: number; maxScore: number }[];
  strengths: string[];
  weaknesses: string[];
}> = {
  "1": {
    id: "1",
    date: "2025-01-08",
    botName: "Enterprise Buyer",
    type: "Cold Call",
    duration: "12:45",
    overallScore: 87,
    categories: [
      { name: "Opening & Hook", score: 92, maxScore: 100 },
      { name: "Discovery Questions", score: 85, maxScore: 100 },
      { name: "Objection Handling", score: 82, maxScore: 100 },
      { name: "Closing Technique", score: 88, maxScore: 100 },
    ],
    strengths: [
      "Excellent opening hook that grabbed attention immediately",
      "Strong value proposition delivery within first 30 seconds",
      "Confident tone throughout the conversation",
      "Good use of social proof when mentioning similar clients",
    ],
    weaknesses: [
      "Could ask more open-ended discovery questions",
      "Missed opportunity to address budget concerns proactively",
      "Consider slowing down pace during technical explanations",
    ],
  },
  "2": {
    id: "2",
    date: "2025-01-08",
    botName: "SMB Decision Maker",
    type: "Discovery",
    duration: "18:22",
    overallScore: 92,
    categories: [
      { name: "Opening & Hook", score: 95, maxScore: 100 },
      { name: "Discovery Questions", score: 94, maxScore: 100 },
      { name: "Objection Handling", score: 88, maxScore: 100 },
      { name: "Closing Technique", score: 91, maxScore: 100 },
    ],
    strengths: [
      "Exceptional discovery process with deep probing questions",
      "Built strong rapport within first 2 minutes",
      "Excellent active listening and follow-up questions",
      "Seamless transition to next steps",
    ],
    weaknesses: [
      "Could have quantified the pain point more explicitly",
      "Minor: Slightly rushed the timeline discussion",
    ],
  },
  "3": {
    id: "3",
    date: "2025-01-07",
    botName: "Skeptical CFO",
    type: "Cold Call",
    duration: "8:15",
    overallScore: 45,
    categories: [
      { name: "Opening & Hook", score: 52, maxScore: 100 },
      { name: "Discovery Questions", score: 38, maxScore: 100 },
      { name: "Objection Handling", score: 42, maxScore: 100 },
      { name: "Closing Technique", score: 48, maxScore: 100 },
    ],
    strengths: [
      "Maintained composure under pressure",
      "Attempted to quantify ROI with specific numbers",
    ],
    weaknesses: [
      "Opening lacked a compelling hook for a financial audience",
      "Failed to address the core concern about implementation costs",
      "Missed signals indicating readiness to end the call",
      "Consider researching financial objections before CFO calls",
    ],
  },
};

export default function ScoringReport() {
  const { id } = useParams();
  const report = reportData[id || "1"] || reportData["1"];

  return (
    <AppLayout>
      <div className="p-6 md:p-8 lg:p-12 max-w-5xl mx-auto">
        {/* Back Button */}
        <Link to="/history" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6 pt-12 md:pt-0">
          <ArrowLeft className="w-4 h-4" />
          Back to Call History
        </Link>

        {/* Header */}
        <div className="glass rounded-2xl p-6 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Call Performance Report
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(report.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {report.duration}
                </div>
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4" />
                  {report.botName}
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/30">
                  {report.type}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Score Overview */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Circular Score */}
          <div className="glass rounded-2xl p-8 flex flex-col items-center justify-center">
            <h2 className="text-lg font-semibold text-foreground mb-6">Overall Score</h2>
            <CircularProgress value={report.overallScore} />
            <p className="text-muted-foreground mt-4 text-center max-w-xs">
              {report.overallScore >= 80
                ? "Excellent performance! Keep up the great work."
                : report.overallScore >= 50
                  ? "Good effort. Review the feedback to improve."
                  : "Needs improvement. Focus on the weak areas identified."}
            </p>
          </div>

          {/* Score Breakdown */}
          <div className="glass rounded-2xl p-8">
            <h2 className="text-lg font-semibold text-foreground mb-6">Score Breakdown</h2>
            <ScoreBreakdown categories={report.categories} />
          </div>
        </div>

        {/* AI Feedback */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Strengths */}
          <div className="glass rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-success/20 flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-success" />
              </div>
              <h2 className="text-lg font-semibold text-foreground">Strengths</h2>
            </div>
            <ul className="space-y-4">
              {report.strengths.map((strength, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm text-muted-foreground animate-fade-in opacity-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 shrink-0" />
                  {strength}
                </li>
              ))}
            </ul>
          </div>

          {/* Areas for Improvement */}
          <div className="glass rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-warning/20 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-warning" />
              </div>
              <h2 className="text-lg font-semibold text-foreground">Areas for Improvement</h2>
            </div>
            <ul className="space-y-4">
              {report.weaknesses.map((weakness, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm text-muted-foreground animate-fade-in opacity-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-warning mt-2 shrink-0" />
                  {weakness}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
          <Link to="/history">
            <Button variant="outline" size="lg">
              View All Calls
            </Button>
          </Link>
          <a href="https://app.apexloopai.com/dashboard">
            <Button variant="hero" size="lg">
              Practice Again
            </Button>
          </a>
        </div>
      </div>
    </AppLayout>
  );
}
