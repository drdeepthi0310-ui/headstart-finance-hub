import { ShieldAlert } from "lucide-react";
import { useRisk } from "@/contexts/RiskContext";

const riskConfig = {
  Low: { color: "text-success", bg: "bg-success/10", border: "border-success/30" },
  Medium: { color: "text-warning", bg: "bg-warning/10", border: "border-warning/30" },
  High: { color: "text-danger", bg: "bg-danger/10", border: "border-danger/30" },
};

export function OverallRiskIndicator() {
  const { riskLevel, setRiskLevel } = useRisk();
  const config = riskConfig[riskLevel];

  return (
    <div className={`bg-card border ${config.border} rounded-lg p-5 animate-fade-up transition-colors`}>
      <h2 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
        Overall Risk Indicator
      </h2>
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-full ${config.bg}`}>
          <ShieldAlert className={`h-6 w-6 ${config.color}`} />
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Current Market Risk Level</p>
          <p className={`text-2xl font-bold font-mono-data ${config.color}`}>{riskLevel}</p>
        </div>
        <div className="ml-auto flex gap-2">
          {(["Low", "Medium", "High"] as const).map((l) => (
            <button
              key={l}
              onClick={() => setRiskLevel(l)}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                l === riskLevel
                  ? `${riskConfig[l].bg} ${riskConfig[l].color} ring-1 ring-current`
                  : "bg-muted/30 text-muted-foreground hover:text-foreground"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
