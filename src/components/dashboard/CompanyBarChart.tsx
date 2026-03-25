import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { companyRevenueProfitData } from "@/data/mockData";

export function CompanyBarChart() {
  return (
    <div className="bg-card border border-border rounded-lg p-5">
      <h2 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
        Revenue vs Profit (in ₹Cr)
      </h2>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={companyRevenueProfitData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(213 50% 96% / 0.05)" />
            <XAxis dataKey="company" stroke="hsl(214 10% 58%)" fontSize={11} fontFamily="JetBrains Mono" />
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
            <Bar dataKey="revenue" fill="hsl(155 100% 48%)" radius={[4, 4, 0, 0]} name="Revenue" />
            <Bar dataKey="profit" fill="hsl(215 17% 47%)" radius={[4, 4, 0, 0]} name="Profit" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
