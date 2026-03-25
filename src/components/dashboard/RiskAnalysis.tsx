import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { riskData } from "@/data/mockData";
import { ShieldAlert } from "lucide-react";

export function RiskAnalysis() {
  const riskColor =
    riskData.level === "Low" ? "text-success" : riskData.level === "Medium" ? "text-warning" : "text-danger";

  return (
    <div className="bg-card border border-border rounded-lg p-5">
      <h2 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
        Risk Analysis
      </h2>
      <div className="flex items-center gap-3 mb-4">
        <ShieldAlert className={`h-5 w-5 ${riskColor} ${riskData.level === "High" ? "animate-pulse-subtle" : ""}`} />
        <div>
          <p className="text-xs text-muted-foreground">Current Risk Level</p>
          <p className={`text-lg font-bold font-mono-data ${riskColor}`}>{riskData.level}</p>
        </div>
      </div>
      <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">Volatility Index</p>
      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={riskData.volatility}>
            <XAxis dataKey="day" stroke="hsl(214 10% 58%)" fontSize={10} fontFamily="JetBrains Mono" />
            <YAxis stroke="hsl(214 10% 58%)" fontSize={10} fontFamily="JetBrains Mono" />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(215 20% 9%)",
                border: "1px solid hsl(213 50% 96% / 0.1)",
                borderRadius: "6px",
                fontFamily: "JetBrains Mono",
                fontSize: "12px",
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="hsl(43 87% 62%)"
              fill="hsl(43 87% 62% / 0.1)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
