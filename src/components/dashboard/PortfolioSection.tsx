import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { portfolioAllocation } from "@/data/mockData";
import { Slider } from "@/components/ui/slider";

export function PortfolioSection() {
  const [investment, setInvestment] = useState(15000);
  const returnPct = 8 + (investment / 50000) * 7; // 8–15% range
  const expectedReturn = Math.round(investment * (returnPct / 100));
  const riskAmount = Math.round(investment * 0.04);

  return (
    <div className="bg-card border border-border rounded-lg p-5">
      <h2 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
        Portfolio Allocation
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={portfolioAllocation}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                dataKey="value"
                stroke="none"
              >
                {portfolioAllocation.map((entry, index) => (
                  <Cell key={index} fill={entry.fill} />
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
              <Legend wrapperStyle={{ fontSize: "12px" }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col justify-center space-y-4">
          {/* Investment Slider */}
          <div className="bg-muted/30 rounded-md p-4">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Investment Amount</p>
            <Slider
              value={[investment]}
              onValueChange={(v) => setInvestment(v[0])}
              min={5000}
              max={50000}
              step={1000}
              className="mb-2"
            />
            <p className="text-2xl font-bold font-mono-data text-foreground mt-1">
              ₹{investment.toLocaleString("en-IN")}
            </p>
            <p className="text-[10px] text-muted-foreground mt-1">Projected return based on selected investment</p>
          </div>
          <div className="bg-muted/30 rounded-md p-4">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Expected Return ({returnPct.toFixed(1)}%)</p>
            <p className="text-2xl font-bold font-mono-data text-success mt-1">
              ₹{expectedReturn.toLocaleString("en-IN")}
            </p>
          </div>
          <div className="bg-muted/30 rounded-md p-4">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Risk Exposure (4%)</p>
            <p className="text-2xl font-bold font-mono-data text-warning mt-1">
              ₹{riskAmount.toLocaleString("en-IN")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
