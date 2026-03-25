import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";
import { economicTimeSeries } from "@/data/mockData";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";

const regions = ["Global", "North America", "Europe", "Asia"];

const timeRanges: Record<string, typeof economicTimeSeries> = {
  "6M": economicTimeSeries.slice(0, 6),
  "1Y": economicTimeSeries,
};

const EconomicIndicators = () => {
  const [region, setRegion] = useState("Global");
  const [range, setRange] = useState("1Y");

  const data = timeRanges[range] ?? economicTimeSeries;

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-[1400px]">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h1 className="text-xl font-bold text-foreground">Economic Indicators</h1>
          <div className="flex gap-3">
            <Select value={range} onValueChange={setRange}>
              <SelectTrigger className="w-[130px] bg-card border-border text-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="6M">Last 6 Months</SelectItem>
                <SelectItem value="1Y">Last 1 Year</SelectItem>
              </SelectContent>
            </Select>
            <Select value={region} onValueChange={setRegion}>
              <SelectTrigger className="w-[160px] bg-card border-border text-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {regions.map((r) => (
                  <SelectItem key={r} value={r}>{r}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-5">
          <h2 className="text-sm font-semibold text-foreground mb-1 uppercase tracking-wider">
            GDP, Inflation & Interest Rate Trends
          </h2>
          <p className="text-xs text-muted-foreground mb-4">
            Region: {region} · Range: {range}
          </p>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(213 50% 96% / 0.05)" />
                <XAxis dataKey="month" stroke="hsl(214 10% 58%)" fontSize={11} fontFamily="JetBrains Mono" />
                <YAxis stroke="hsl(214 10% 58%)" fontSize={11} fontFamily="JetBrains Mono" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(215 20% 9%)",
                    border: "1px solid hsl(213 50% 96% / 0.1)",
                    borderRadius: "6px",
                    fontFamily: "JetBrains Mono",
                    fontSize: "12px",
                  }}
                />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
                <Line type="monotone" dataKey="gdp" stroke="hsl(155 100% 48%)" strokeWidth={2} dot={false} name="GDP %" />
                <Line type="monotone" dataKey="inflation" stroke="hsl(0 100% 68%)" strokeWidth={2} dot={false} name="Inflation %" />
                <Line type="monotone" dataKey="interest" stroke="hsl(43 87% 62%)" strokeWidth={2} dot={false} name="Interest %" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EconomicIndicators;
