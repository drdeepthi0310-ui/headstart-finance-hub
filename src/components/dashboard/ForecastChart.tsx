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
import { forecastData } from "@/data/mockData";

export function ForecastChart() {
  return (
    <div className="bg-card border border-border rounded-lg p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">
          Growth Forecast — TechCorp
        </h2>
        <span className="text-xs font-mono-data text-muted-foreground px-2 py-1 bg-muted rounded">
          Revenue ($B)
        </span>
      </div>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={forecastData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(213 50% 96% / 0.05)" />
            <XAxis dataKey="quarter" stroke="hsl(214 10% 58%)" fontSize={11} fontFamily="JetBrains Mono" />
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
            <Line
              type="monotone"
              dataKey="actual"
              stroke="hsl(155 100% 48%)"
              strokeWidth={2}
              dot={{ fill: "hsl(155 100% 48%)", r: 3 }}
              name="Actual"
              connectNulls={false}
            />
            <Line
              type="monotone"
              dataKey="predicted"
              stroke="hsl(155 100% 48%)"
              strokeWidth={2}
              strokeDasharray="6 3"
              dot={{ fill: "hsl(155 100% 48%)", r: 3, strokeDasharray: "0" }}
              name="Predicted"
              connectNulls={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
