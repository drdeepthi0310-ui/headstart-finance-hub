import { useState } from "react";
import { Sprout, TrendingUp, BarChart3, ChevronDown, Activity } from "lucide-react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const points = [
  { icon: Sprout, text: "Supports startup and small business investment decisions" },
  { icon: BarChart3, text: "Improves financial planning using real-time data" },
  { icon: TrendingUp, text: "Enables economic growth through data-driven insights" },
];

const impactInsights = [
  "Higher GDP growth → supports business expansion",
  "Balanced risk → encourages sustainable investment",
  "Strong sectors → generate employment opportunities",
];

export function SDG8Section() {
  const [impactLevel] = useState<"High" | "Medium" | "Low">("High");

  const levelConfig = {
    High: { color: "text-success", bg: "bg-success/10" },
    Medium: { color: "text-warning", bg: "bg-warning/10" },
    Low: { color: "text-danger", bg: "bg-danger/10" },
  };

  const config = levelConfig[impactLevel];

  return (
    <div className="bg-card border border-success/20 rounded-lg p-5 animate-fade-up">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-md bg-success/10">
            <Sprout className="h-4 w-4 text-success" />
          </div>
          <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">
            SDG 8 — Decent Work &amp; Economic Growth
          </h2>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" className="text-xs gap-1.5 border-success/30 text-success hover:bg-success/10">
              <Activity className="h-3.5 w-3.5" />
              View Economic Impact
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-card border-border">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-foreground">
                <Sprout className="h-5 w-5 text-success" />
                Economic Impact Analysis
              </DialogTitle>
              <DialogDescription>
                How this dashboard aligns with SDG 8 goals
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 pt-2">
              <div className={`flex items-center gap-3 p-3 rounded-md ${config.bg}`}>
                <Activity className={`h-5 w-5 ${config.color}`} />
                <div>
                  <p className="text-xs text-muted-foreground">Economic Impact Level</p>
                  <p className={`text-lg font-bold font-mono-data ${config.color}`}>{impactLevel}</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Key Insights</p>
                <ul className="space-y-2">
                  {impactInsights.map((insight) => (
                    <li key={insight} className="flex items-start gap-2 text-sm text-foreground">
                      <ChevronDown className="h-4 w-4 text-success mt-0.5 shrink-0 rotate-[-90deg]" />
                      {insight}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-muted/30 rounded-md p-3">
                <p className="text-xs text-muted-foreground">
                  Bullish market trend and strong technology sector performance indicate high potential for economic growth and employment generation.
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {points.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-start gap-3">
            <Icon className="h-4 w-4 text-success mt-0.5 shrink-0" />
            <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
