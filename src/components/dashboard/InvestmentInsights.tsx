import { useState } from "react";
import { TrendingUp, ShieldCheck, BarChart3 } from "lucide-react";

const strategies = {
  conservative: { sector: "Utilities", risk: "Low", riskColor: "text-success", return: "5–7%" },
  balanced: { sector: "Technology", risk: "Medium", riskColor: "text-warning", return: "10–12%" },
  aggressive: { sector: "Crypto & Fintech", risk: "High", riskColor: "text-danger", return: "18–25%" },
};

export function InvestmentInsights() {
  const [strategy, setStrategy] = useState<keyof typeof strategies>("balanced");
  const data = strategies[strategy];

  return (
    <div className="bg-card border border-border rounded-lg p-5 animate-fade-up">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">
          Investment Insights
        </h2>
        <div className="flex items-center bg-muted/30 rounded-lg p-0.5">
          {(Object.keys(strategies) as (keyof typeof strategies)[]).map((s) => (
            <button
              key={s}
              onClick={() => setStrategy(s)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold capitalize transition-colors ${
                strategy === s
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-md bg-success/10">
            <BarChart3 className="h-5 w-5 text-success" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Best Sector to Invest</p>
            <p className="text-lg font-bold font-mono-data text-success">{data.sector}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-md bg-warning/10">
            <ShieldCheck className="h-5 w-5 text-warning" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Risk Level</p>
            <p className={`text-lg font-bold font-mono-data ${data.riskColor}`}>{data.risk}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-md bg-success/10">
            <TrendingUp className="h-5 w-5 text-success" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Expected Return</p>
            <p className="text-lg font-bold font-mono-data text-success">{data.return}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
