import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { riskData } from "@/data/mockData";
import { ShieldAlert } from "lucide-react";
import { useRisk } from "@/contexts/RiskContext";

const riskConfig = {
  Low: {
    color: "text-success",
    bg: "bg-success/10",
    border: "border-success/30",
    stroke: "hsl(155, 100%, 48%)",
    fill: "hsl(155, 100%, 48%, 0.1)",
    desc: "Stable market conditions with low volatility",
    multiplier: 0.6,
  },
  Medium: {
    color: "text-warning",
    bg: "bg-warning/10",
    border: "border-warning/30",
    stroke: "hsl(43, 87%, 62%)",
    fill: "hsl(43, 87%, 62%, 0.1)",
    desc: "Moderate market fluctuations",
    multiplier: 1,
  },
  High: {
    color: "text-danger",
    bg: "bg-danger/10",
    border: "border-danger/30",
    stroke: "hsl(0, 100%, 68%)",
    fill: "hsl(0, 100%, 68%, 0.1)",
    desc: "High volatility and uncertain conditions",
    multiplier: 1.5,
  },
};

export function RiskAnalysis() {
  const { riskLevel, setRiskLevel } = useRisk();
  const config = riskConfig[riskLevel];

  const chartData = riskData.volatility.map((d) => ({
    ...d,
    value: Math.round(d.value * config.multiplier),
  }));

  return (
    <div className={`bg-card border ${config.border} rounded-lg p-5 transition-colors`}>
      <h2 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
        Risk Analysis
      </h2>

      <div className="flex items-center gap-2 mb-4">
        {(["Low", "Medium", "High"] as const).map((l) => (
          <button
            key={l}
            onClick={() => setRiskLevel(l)}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${
              l === riskLevel
                ? `${riskConfig[l].bg} ${riskConfig[l].color} ring-1 ring-current`
                : "bg-muted/30 text-muted-foreground hover:text-foreground"
            }`}
          >
            {l}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3 mb-2">
        <ShieldAlert className={`h-5 w-5 ${config.color} ${riskLevel === "High" ? "animate-pulse-subtle" : ""}`} />
        <div>
          <p className="text-xs text-muted-foreground">Current Market Risk Level</p>
          <p className={`text-lg font-bold font-mono-data ${config.color}`}>{riskLevel}</p>
        </div>
      </div>
      <p className={`text-xs mb-4 ${config.color} opacity-80`}>{config.desc}</p>

      <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">Volatility Index</p>
      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
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
            <Area type="monotone" dataKey="value" stroke={config.stroke} fill={config.fill} strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
