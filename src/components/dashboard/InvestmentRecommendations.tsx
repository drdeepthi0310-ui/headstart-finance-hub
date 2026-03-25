import { investmentRecommendations } from "@/data/mockData";
import { Star } from "lucide-react";

export function InvestmentRecommendations() {
  return (
    <div className="bg-card border border-border rounded-lg p-5">
      <h2 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
        Top Investment Picks
      </h2>
      <div className="space-y-3">
        {investmentRecommendations.map((rec, i) => {
          const riskClass =
            rec.risk === "Low" ? "text-success bg-success/10" : rec.risk === "Medium" ? "text-warning bg-warning/10" : "text-danger bg-accent/10";
          return (
            <div
              key={rec.name}
              className="flex items-center justify-between py-2 px-3 rounded-md bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono-data text-muted-foreground w-4">
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">{rec.name}</p>
                  <p className="text-xs text-muted-foreground">{rec.sector}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className={`text-xs px-2 py-0.5 rounded ${riskClass} font-medium`}>
                  {rec.risk}
                </span>
                <span className="text-sm font-mono-data text-success">{rec.expectedReturn}</span>
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3 text-warning fill-warning" />
                  <span className="text-xs font-mono-data text-muted-foreground">{rec.score}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
