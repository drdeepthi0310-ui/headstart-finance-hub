import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { sectorInvestmentData } from "@/data/mockData";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";

const sectorInsights: Record<string, string> = {
  Technology: "High growth with strong market demand",
  Finance: "Stable with moderate returns",
  Healthcare: "Defensive sector with steady demand",
  Energy: "Volatile due to external factors",
  "Real Estate": "Steady long-term investment",
};

export function SectorPieChart() {
  const [selected, setSelected] = useState<string>("all");

  return (
    <div className="bg-card border border-border rounded-lg p-5">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">
          Sector-wise Investment
        </h2>
        <Select value={selected} onValueChange={setSelected}>
          <SelectTrigger className="w-[140px] bg-card border-border text-xs h-8">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Sectors</SelectItem>
            {sectorInvestmentData.map((s) => (
              <SelectItem key={s.name} value={s.name}>{s.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={sectorInvestmentData}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              dataKey="value"
              stroke="none"
            >
              {sectorInvestmentData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={entry.fill}
                  opacity={selected === "all" || selected === entry.name ? 1 : 0.25}
                  strokeWidth={selected === entry.name ? 2 : 0}
                  stroke={selected === entry.name ? entry.fill : "none"}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(215 20% 9%)",
                border: "1px solid hsl(213 50% 96% / 0.1)",
                borderRadius: "6px",
                fontFamily: "JetBrains Mono",
                fontSize: "12px",
              }}
              formatter={(value: number) => [`${value}%`, ""]}
            />
            <Legend wrapperStyle={{ fontSize: "11px" }} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {selected !== "all" && (
        <div className="mt-3 bg-muted/30 rounded-md p-3 animate-fade-up">
          <div className="flex items-center justify-between mb-1">
            <p className="text-xs font-semibold text-foreground">{selected}</p>
            <span className="text-xs font-mono-data text-primary">
              {sectorInvestmentData.find((s) => s.name === selected)?.value}%
            </span>
          </div>
          <p className="text-xs text-muted-foreground">{sectorInsights[selected]}</p>
        </div>
      )}
    </div>
  );
}
