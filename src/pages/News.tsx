import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { newsHeadlines } from "@/data/mockData";
import { TrendingUp, TrendingDown } from "lucide-react";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";

const categories: Record<string, (typeof newsHeadlines)[number]["title"][]> = {
  All: [],
  Stocks: ["Tech sector rallies on strong earnings reports"],
  Economy: [
    "Fed signals potential rate cut in Q2 2026",
    "GDP growth exceeds analyst expectations",
    "Inflation concerns ease as CPI drops",
    "Oil prices surge amid geopolitical tensions",
    "Emerging markets face currency volatility",
  ],
};

const News = () => {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? newsHeadlines
      : newsHeadlines.filter((n) => categories[filter]?.includes(n.title));

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-[1400px]">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h1 className="text-xl font-bold text-foreground">Market News</h1>
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[140px] bg-card border-border text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Stocks">Stocks</SelectItem>
              <SelectItem value="Economy">Economy</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="bg-card border border-border rounded-lg p-5">
          <div className="space-y-3">
            {filtered.length === 0 && (
              <p className="text-sm text-muted-foreground py-4 text-center">No news in this category.</p>
            )}
            {filtered.map((news, i) => (
              <div
                key={i}
                className="flex items-start gap-3 py-3 border-b border-border/50 last:border-0"
              >
                {news.sentiment === "positive" ? (
                  <TrendingUp className="h-4 w-4 text-success mt-0.5 shrink-0" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-danger mt-0.5 shrink-0" />
                )}
                <div className="min-w-0">
                  <p className="text-sm text-foreground leading-snug">{news.title}</p>
                  <p className="text-xs text-muted-foreground mt-1 font-mono-data">{news.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default News;
