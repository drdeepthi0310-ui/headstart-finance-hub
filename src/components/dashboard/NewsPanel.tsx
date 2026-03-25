import { newsHeadlines } from "@/data/mockData";
import { TrendingUp, TrendingDown } from "lucide-react";

export function NewsPanel() {
  return (
    <div className="bg-card border border-border rounded-lg p-5">
      <h2 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
        Market News
      </h2>
      <div className="space-y-3">
        {newsHeadlines.map((news, i) => (
          <div
            key={i}
            className="flex items-start gap-3 py-2 border-b border-border/50 last:border-0"
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
  );
}
