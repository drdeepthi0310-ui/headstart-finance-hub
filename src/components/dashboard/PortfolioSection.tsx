import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertTriangle } from "lucide-react";

const companyProfiles: Record<string, { risk: "Low" | "Medium" | "High"; baseReturn: number; riskPct: number; allocation: { name: string; value: number; fill: string }[] }> = {
  All: {
    risk: "Medium", baseReturn: 10, riskPct: 4,
    allocation: [
      { name: "Equities", value: 45, fill: "hsl(155, 100%, 48%)" },
      { name: "Bonds", value: 25, fill: "hsl(215, 17%, 47%)" },
      { name: "Real Estate", value: 15, fill: "hsl(43, 87%, 62%)" },
      { name: "Commodities", value: 10, fill: "hsl(270, 60%, 55%)" },
      { name: "Cash", value: 5, fill: "hsl(0, 100%, 68%)" },
    ],
  },
  TechCorp: {
    risk: "Low", baseReturn: 12, riskPct: 3,
    allocation: [
      { name: "TechCorp Equity", value: 55, fill: "hsl(155, 100%, 48%)" },
      { name: "Bonds", value: 20, fill: "hsl(215, 17%, 47%)" },
      { name: "Cash", value: 15, fill: "hsl(43, 87%, 62%)" },
      { name: "Others", value: 10, fill: "hsl(270, 60%, 55%)" },
    ],
  },
  FinServe: {
    risk: "Medium", baseReturn: 11, riskPct: 5,
    allocation: [
      { name: "FinServe Equity", value: 40, fill: "hsl(155, 100%, 48%)" },
      { name: "Bonds", value: 30, fill: "hsl(215, 17%, 47%)" },
      { name: "Real Estate", value: 20, fill: "hsl(43, 87%, 62%)" },
      { name: "Cash", value: 10, fill: "hsl(270, 60%, 55%)" },
    ],
  },
  GreenEnergy: {
    risk: "Medium", baseReturn: 14, riskPct: 6,
    allocation: [
      { name: "GreenEnergy Equity", value: 50, fill: "hsl(155, 100%, 48%)" },
      { name: "Green Bonds", value: 25, fill: "hsl(215, 17%, 47%)" },
      { name: "Commodities", value: 15, fill: "hsl(43, 87%, 62%)" },
      { name: "Cash", value: 10, fill: "hsl(0, 100%, 68%)" },
    ],
  },
  HealthPlus: {
    risk: "Low", baseReturn: 9, riskPct: 2,
    allocation: [
      { name: "HealthPlus Equity", value: 35, fill: "hsl(155, 100%, 48%)" },
      { name: "Bonds", value: 35, fill: "hsl(215, 17%, 47%)" },
      { name: "Real Estate", value: 20, fill: "hsl(43, 87%, 62%)" },
      { name: "Cash", value: 10, fill: "hsl(270, 60%, 55%)" },
    ],
  },
  CloudNet: {
    risk: "High", baseReturn: 18, riskPct: 9,
    allocation: [
      { name: "CloudNet Equity", value: 65, fill: "hsl(155, 100%, 48%)" },
      { name: "Crypto", value: 15, fill: "hsl(0, 100%, 68%)" },
      { name: "Bonds", value: 10, fill: "hsl(215, 17%, 47%)" },
      { name: "Cash", value: 10, fill: "hsl(43, 87%, 62%)" },
    ],
  },
};

const riskColors = { Low: "text-success", Medium: "text-warning", High: "text-danger" };

export function PortfolioSection() {
  const [company, setCompany] = useState("All");
  const [investment, setInvestment] = useState(15000);

  const profile = companyProfiles[company];
  const returnPct = profile.baseReturn + (investment / 50000) * 5;
  const expectedReturn = Math.round(investment * (returnPct / 100));
  const riskAmount = Math.round(investment * (profile.riskPct / 100));

  return (
    <div className="bg-card border border-border rounded-lg p-5">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">
          Portfolio Allocation
        </h2>
        <Select value={company} onValueChange={setCompany}>
          <SelectTrigger className="w-[160px] bg-card border-border text-sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Companies</SelectItem>
            {Object.keys(companyProfiles).filter(k => k !== "All").map((c) => (
              <SelectItem key={c} value={c}>{c}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={profile.allocation}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                dataKey="value"
                stroke="none"
              >
                {profile.allocation.map((entry, index) => (
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
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Risk Exposure ({profile.riskPct}%)</p>
            <p className={`text-2xl font-bold font-mono-data ${riskColors[profile.risk]} mt-1`}>
              ₹{riskAmount.toLocaleString("en-IN")}
            </p>
          </div>
          {profile.risk === "High" && (
            <div className="flex items-center gap-2 bg-danger/10 border border-danger/30 rounded-md p-3">
              <AlertTriangle className="h-4 w-4 text-danger shrink-0" />
              <p className="text-xs text-danger">Higher returns come with higher risk</p>
            </div>
          )}
          {profile.risk === "Low" && (
            <div className="flex items-center gap-2 bg-success/10 border border-success/30 rounded-md p-3">
              <AlertTriangle className="h-4 w-4 text-success shrink-0" />
              <p className="text-xs text-success">Low risk with stable, steady returns</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
