import { TrendingUp, TrendingDown } from "lucide-react";
import { kpiData } from "@/data/mockData";

const stabilityOverrides: Record<string, { value: string; change: string; trend: "up" | "down" }> = {
  "GDP Growth Rate": { value: "2.1%", change: "+0.3%", trend: "up" },
  "Inflation Rate": { value: "3.8%", change: "-0.5%", trend: "down" },
  "Interest Rate": { value: "5.0%", change: "0.0%", trend: "up" },
  "Market Trend": { value: "Stable", change: "+0.1%", trend: "up" },
};

interface KPICardsProps {
  viewMode?: "growth" | "stability";
}

export function KPICards({ viewMode = "growth" }: KPICardsProps) {
  const isStability = viewMode === "stability";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {kpiData.map((kpi, i) => {
        const override = isStability ? stabilityOverrides[kpi.label] : null;
        const value = override?.value ?? kpi.value;
        const change = override?.change ?? kpi.change;
        const trend = override?.trend ?? kpi.trend;

        return (
          <div
            key={kpi.label}
            className="bg-card border border-border rounded-lg p-5 card-hover"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-2">
              {kpi.label}
            </p>
            <p className="text-2xl font-bold font-mono-data text-foreground">
              {value}
            </p>
            <div className="flex items-center gap-1 mt-2">
              {trend === "up" ? (
                <TrendingUp className="h-3.5 w-3.5 text-success" />
              ) : (
                <TrendingDown className="h-3.5 w-3.5 text-danger" />
              )}
              <span
                className={`text-xs font-mono-data ${
                  trend === "up" ? "text-success" : "text-danger"
                }`}
              >
                {change}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
