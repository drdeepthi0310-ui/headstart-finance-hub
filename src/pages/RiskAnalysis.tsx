import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { riskData } from "@/data/mockData";
import { ShieldAlert } from "lucide-react";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";

const riskConfig = {
  Low: { color: "text-success", bg: "bg-success/10", border: "border-success/30" },
  Medium: { color: "text-warning", bg: "bg-warning/10", border: "border-warning/30" },
  High: { color: "text-danger", bg: "bg-danger/10", border: "border-danger/30" },
};

const volatilityByRisk: Record<string, typeof riskData.volatility> = {
  Low: riskData.volatility.map((d) => ({ ...d, value: Math.round(d.value * 0.6) })),
  Medium: riskData.volatility,
  High: riskData.volatility.map((d) => ({ ...d, value: Math.round(d.value * 1.5) })),
};

const RiskAnalysisPage = () => {
  const [level, setLevel] = useState<"Low" | "Medium" | "High">("Medium");
  const config = riskConfig[level];

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-[1400px]">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h1 className="text-xl font-bold text-foreground">Risk Analysis</h1>
          <Select value={level} onValueChange={(v) => setLevel(v as "Low" | "Medium" | "High")}>
            <SelectTrigger className="w-[160px] bg-card border-border text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Low">Low Risk</SelectItem>
              <SelectItem value="Medium">Medium Risk</SelectItem>
              <SelectItem value="High">High Risk</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className={`bg-card border ${config.border} rounded-lg p-5`}>
          <h2 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
            Overall Risk Indicator
          </h2>
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-full ${config.bg}`}>
              <ShieldAlert className={`h-6 w-6 ${config.color}`} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Current Market Risk Level</p>
              <p className={`text-2xl font-bold font-mono-data ${config.color}`}>{level}</p>
            </div>
            <div className="ml-auto flex gap-2">
              {(["Low", "Medium", "High"] as const).map((l) => (
                <div
                  key={l}
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    l === level
                      ? `${riskConfig[l].bg} ${riskConfig[l].color} ring-1 ring-current`
                      : "bg-muted/30 text-muted-foreground"
                  }`}
                >
                  {l}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-5">
          <h2 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
            Volatility Index
          </h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={volatilityByRisk[level]}>
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
      </div>
    </DashboardLayout>
  );
};

export default RiskAnalysisPage;
