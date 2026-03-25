import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";
import { companies, companyRevenueProfitData } from "@/data/mockData";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";

const CompanyAnalysisPage = () => {
  const [selected, setSelected] = useState("All");

  const chartData =
    selected === "All"
      ? companyRevenueProfitData
      : companyRevenueProfitData.filter((c) => c.company === selected);

  const tableData =
    selected === "All"
      ? companies
      : companies.filter((c) => c.name === selected);

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-[1400px]">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h1 className="text-xl font-bold text-foreground">Company Analysis</h1>
          <Select value={selected} onValueChange={setSelected}>
            <SelectTrigger className="w-[160px] bg-card border-border text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Companies</SelectItem>
              {companies.map((c) => (
                <SelectItem key={c.name} value={c.name}>{c.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="bg-card border border-border rounded-lg p-5">
          <h2 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
            Revenue vs Profit (in $B)
          </h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
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

        <div className="bg-card border border-border rounded-lg p-5">
          <h2 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
            Company Metrics
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-2 text-xs text-muted-foreground uppercase tracking-wider font-medium">Company</th>
                  <th className="text-right py-3 px-2 text-xs text-muted-foreground uppercase tracking-wider font-medium">Revenue</th>
                  <th className="text-right py-3 px-2 text-xs text-muted-foreground uppercase tracking-wider font-medium">Profit</th>
                  <th className="text-right py-3 px-2 text-xs text-muted-foreground uppercase tracking-wider font-medium">Market Cap</th>
                  <th className="text-right py-3 px-2 text-xs text-muted-foreground uppercase tracking-wider font-medium">Growth</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((c) => (
                  <tr key={c.name} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                    <td className="py-3 px-2 font-medium text-foreground">{c.name}</td>
                    <td className="py-3 px-2 text-right font-mono-data text-muted-foreground">{c.revenue}</td>
                    <td className="py-3 px-2 text-right font-mono-data text-muted-foreground">{c.profit}</td>
                    <td className="py-3 px-2 text-right font-mono-data text-muted-foreground">{c.marketCap}</td>
                    <td className="py-3 px-2 text-right font-mono-data text-success">{c.growth}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CompanyAnalysisPage;
