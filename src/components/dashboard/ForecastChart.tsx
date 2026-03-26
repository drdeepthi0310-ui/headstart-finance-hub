import { useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const forecastByCompany: Record<string, { quarter: string; actual: number | null; predicted: number | null }[]> = {
  TechCorp: [
    { quarter: "Q1 '25", actual: 42, predicted: null },
    { quarter: "Q2 '25", actual: 45, predicted: null },
    { quarter: "Q3 '25", actual: 48, predicted: null },
    { quarter: "Q4 '25", actual: 52, predicted: null },
    { quarter: "Q1 '26", actual: 55, predicted: 55 },
    { quarter: "Q2 '26", actual: null, predicted: 59 },
    { quarter: "Q3 '26", actual: null, predicted: 63 },
    { quarter: "Q4 '26", actual: null, predicted: 68 },
    { quarter: "Q1 '27", actual: null, predicted: 72 },
  ],
  FinServe: [
    { quarter: "Q1 '25", actual: 29, predicted: null },
    { quarter: "Q2 '25", actual: 30, predicted: null },
    { quarter: "Q3 '25", actual: 32, predicted: null },
    { quarter: "Q4 '25", actual: 35, predicted: null },
    { quarter: "Q1 '26", actual: 37, predicted: 37 },
    { quarter: "Q2 '26", actual: null, predicted: 39 },
    { quarter: "Q3 '26", actual: null, predicted: 42 },
    { quarter: "Q4 '26", actual: null, predicted: 45 },
    { quarter: "Q1 '27", actual: null, predicted: 48 },
  ],
  GreenEnergy: [
    { quarter: "Q1 '25", actual: 18, predicted: null },
    { quarter: "Q2 '25", actual: 21, predicted: null },
    { quarter: "Q3 '25", actual: 25, predicted: null },
    { quarter: "Q4 '25", actual: 28, predicted: null },
    { quarter: "Q1 '26", actual: 32, predicted: 32 },
    { quarter: "Q2 '26", actual: null, predicted: 38 },
    { quarter: "Q3 '26", actual: null, predicted: 44 },
    { quarter: "Q4 '26", actual: null, predicted: 51 },
    { quarter: "Q1 '27", actual: null, predicted: 58 },
  ],
  HealthPlus: [
    { quarter: "Q1 '25", actual: 15, predicted: null },
    { quarter: "Q2 '25", actual: 16, predicted: null },
    { quarter: "Q3 '25", actual: 17, predicted: null },
    { quarter: "Q4 '25", actual: 18, predicted: null },
    { quarter: "Q1 '26", actual: 19, predicted: 19 },
    { quarter: "Q2 '26", actual: null, predicted: 20 },
    { quarter: "Q3 '26", actual: null, predicted: 21 },
    { quarter: "Q4 '26", actual: null, predicted: 23 },
    { quarter: "Q1 '27", actual: null, predicted: 24 },
  ],
  CloudNet: [
    { quarter: "Q1 '25", actual: 8, predicted: null },
    { quarter: "Q2 '25", actual: 12, predicted: null },
    { quarter: "Q3 '25", actual: 18, predicted: null },
    { quarter: "Q4 '25", actual: 24, predicted: null },
    { quarter: "Q1 '26", actual: 30, predicted: 30 },
    { quarter: "Q2 '26", actual: null, predicted: 40 },
    { quarter: "Q3 '26", actual: null, predicted: 52 },
    { quarter: "Q4 '26", actual: null, predicted: 65 },
    { quarter: "Q1 '27", actual: null, predicted: 80 },
  ],
};

const companyNames = Object.keys(forecastByCompany);

export function ForecastChart() {
  const [selected, setSelected] = useState("TechCorp");

  return (
    <div className="bg-card border border-border rounded-lg p-5">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">
          Growth Forecast — {selected}
        </h2>
        <div className="flex items-center gap-3">
          <Select value={selected} onValueChange={setSelected}>
            <SelectTrigger className="w-[160px] bg-card border-border text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {companyNames.map((c) => (
                <SelectItem key={c} value={c}>{c}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <span className="text-xs font-mono-data text-muted-foreground px-2 py-1 bg-muted rounded">
            Revenue (₹Cr)
          </span>
        </div>
      </div>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={forecastByCompany[selected]}>
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
