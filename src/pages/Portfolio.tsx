import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { portfolioAllocation } from "@/data/mockData";
import { Slider } from "@/components/ui/slider";

const Portfolio = () => {
  const [investment, setInvestment] = useState(10000);

  const expectedReturn = (investment * 0.12).toFixed(0);
  const riskAmount = (investment * 0.04).toFixed(0);

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-[1400px]">
        <h1 className="text-xl font-bold text-foreground">Portfolio</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-lg p-5">
            <h2 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Portfolio Allocation
            </h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={portfolioAllocation}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={90}
                    dataKey="value"
                    paddingAngle={2}
                    stroke="none"
                  >
                    {portfolioAllocation.map((entry, i) => (
                      <Cell key={i} fill={entry.fill} />
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
                    formatter={(value: number) => `${value}%`}
                  />
                  <Legend wrapperStyle={{ fontSize: "12px" }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-5 space-y-6">
            <h2 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Investment Simulator
            </h2>
            <div>
              <p className="text-xs text-muted-foreground mb-2">Investment Amount</p>
              <Slider
                value={[investment]}
                onValueChange={(v) => setInvestment(v[0])}
                min={1000}
                max={100000}
                step={1000}
                className="mb-2"
              />
              <p className="text-lg font-bold font-mono-data text-foreground">
                ₹{investment.toLocaleString("en-IN")}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted/30 rounded-lg p-4">
                <p className="text-xs text-muted-foreground">Expected Return (12%)</p>
                <p className="text-xl font-bold font-mono-data text-success">
                  ₹{Number(expectedReturn).toLocaleString("en-IN")}
                </p>
              </div>
              <div className="bg-muted/30 rounded-lg p-4">
                <p className="text-xs text-muted-foreground">Risk Exposure (4%)</p>
                <p className="text-xl font-bold font-mono-data text-warning">
                  ₹{Number(riskAmount).toLocaleString("en-IN")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Portfolio;
