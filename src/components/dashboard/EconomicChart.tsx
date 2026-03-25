import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { economicTimeSeries } from "@/data/mockData";

export function EconomicChart() {
  return (
    <div className="bg-card border border-border rounded-lg p-5">
      <h2 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
        Economic Indicators Over Time
      </h2>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={economicTimeSeries}>
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
  );
}
