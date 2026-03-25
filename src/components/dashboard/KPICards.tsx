import { TrendingUp, TrendingDown } from "lucide-react";
import { kpiData } from "@/data/mockData";

export function KPICards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {kpiData.map((kpi, i) => (
        <div
          key={kpi.label}
          className="bg-card border border-border rounded-lg p-5 card-hover"
          style={{ animationDelay: `${i * 80}ms` }}
        >
          <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-2">
            {kpi.label}
          </p>
          <p className="text-2xl font-bold font-mono-data text-foreground">
            {kpi.value}
          </p>
          <div className="flex items-center gap-1 mt-2">
            {kpi.trend === "up" ? (
              <TrendingUp className="h-3.5 w-3.5 text-success" />
            ) : (
              <TrendingDown className="h-3.5 w-3.5 text-danger" />
            )}
            <span
              className={`text-xs font-mono-data ${
                kpi.trend === "up" ? "text-success" : "text-danger"
              }`}
            >
              {kpi.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
