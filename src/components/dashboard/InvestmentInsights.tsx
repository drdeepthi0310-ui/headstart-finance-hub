import { TrendingUp, ShieldCheck, BarChart3 } from "lucide-react";

export function InvestmentInsights() {
  return (
    <div className="bg-card border border-border rounded-lg p-5 animate-fade-up">
      <h2 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
        Investment Insights
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-md bg-success/10">
            <BarChart3 className="h-5 w-5 text-success" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Best Sector to Invest</p>
            <p className="text-lg font-bold font-mono-data text-success">Technology</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-md bg-warning/10">
            <ShieldCheck className="h-5 w-5 text-warning" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Risk Level</p>
            <p className="text-lg font-bold font-mono-data text-warning">Medium</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-md bg-success/10">
            <TrendingUp className="h-5 w-5 text-success" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Expected Return</p>
            <p className="text-lg font-bold font-mono-data text-success">10–12%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
