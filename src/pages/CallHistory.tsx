import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Filter, Calendar } from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

interface CallRecord {
  id: string;
  date: string;
  botName: string;
  type: "Cold Call" | "Discovery";
  duration: string;
  score: number;
}

const callHistory: CallRecord[] = [
  { id: "1", date: "2025-01-08", botName: "Enterprise Buyer", type: "Cold Call", duration: "12:45", score: 87 },
  { id: "2", date: "2025-01-08", botName: "SMB Decision Maker", type: "Discovery", duration: "18:22", score: 92 },
  { id: "3", date: "2025-01-07", botName: "Skeptical CFO", type: "Cold Call", duration: "8:15", score: 45 },
  { id: "4", date: "2025-01-07", botName: "Tech-Savvy CTO", type: "Discovery", duration: "22:10", score: 78 },
  { id: "5", date: "2025-01-06", botName: "Busy Executive", type: "Cold Call", duration: "5:33", score: 34 },
  { id: "6", date: "2025-01-06", botName: "Enterprise Buyer", type: "Discovery", duration: "15:48", score: 81 },
  { id: "7", date: "2025-01-05", botName: "Value-Focused VP", type: "Cold Call", duration: "10:22", score: 68 },
  { id: "8", date: "2025-01-05", botName: "Analytical Manager", type: "Discovery", duration: "25:15", score: 95 },
  { id: "9", date: "2025-01-04", botName: "SMB Decision Maker", type: "Cold Call", duration: "7:40", score: 52 },
  { id: "10", date: "2025-01-04", botName: "Enterprise Buyer", type: "Discovery", duration: "19:30", score: 83 },
];

const getScoreBadgeClass = (score: number) => {
  if (score >= 80) return "bg-success/20 text-success border-success/30";
  if (score >= 50) return "bg-warning/20 text-warning border-warning/30";
  return "bg-destructive/20 text-destructive border-destructive/30";
};

const getTypeClass = (type: CallRecord["type"]) => {
  return type === "Cold Call" 
    ? "bg-accent/20 text-accent border-accent/30" 
    : "bg-primary/20 text-primary border-primary/30";
};

export default function CallHistory() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCalls = callHistory.filter(
    (call) =>
      call.botName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      call.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRowClick = (callId: string) => {
    navigate(`/report/${callId}`);
  };

  return (
    <AppLayout>
      <div className="p-6 md:p-8 lg:p-12 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 pt-12 md:pt-0">
          <h1 className="text-3xl font-bold text-foreground mb-2">Call History</h1>
          <p className="text-muted-foreground">Review your past roleplay sessions and scores</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search by bot name or type..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-secondary border-border"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
            <Button variant="outline" className="gap-2">
              <Calendar className="w-4 h-4" />
              Date Range
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="glass rounded-xl overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="text-muted-foreground font-medium">Date</TableHead>
                <TableHead className="text-muted-foreground font-medium">Bot Name</TableHead>
                <TableHead className="text-muted-foreground font-medium">Type</TableHead>
                <TableHead className="text-muted-foreground font-medium">Duration</TableHead>
                <TableHead className="text-muted-foreground font-medium text-right">Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCalls.map((call, index) => (
                <TableRow
                  key={call.id}
                  onClick={() => handleRowClick(call.id)}
                  className={cn(
                    "border-border cursor-pointer transition-all duration-200",
                    "hover:bg-primary/5 hover:border-l-2 hover:border-l-primary",
                    "animate-fade-in opacity-0"
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <TableCell className="font-medium text-foreground">
                    {new Date(call.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </TableCell>
                  <TableCell className="text-foreground">{call.botName}</TableCell>
                  <TableCell>
                    <span className={cn(
                      "px-2.5 py-1 rounded-full text-xs font-medium border",
                      getTypeClass(call.type)
                    )}>
                      {call.type}
                    </span>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{call.duration}</TableCell>
                  <TableCell className="text-right">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-sm font-semibold border",
                      getScoreBadgeClass(call.score)
                    )}>
                      {call.score}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {filteredCalls.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No calls found matching your search.
          </div>
        )}
      </div>
    </AppLayout>
  );
}
