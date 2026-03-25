import { companies } from "@/data/mockData";

export function CompanyAnalysis() {
  return (
    <div className="bg-card border border-border rounded-lg p-5">
      <h2 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
        Company Analysis
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
            {companies.map((c) => (
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
  );
}
