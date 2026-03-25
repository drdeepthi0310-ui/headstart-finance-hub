import { Sprout, TrendingUp, BarChart3 } from "lucide-react";

const points = [
  {
    icon: Sprout,
    text: "Supports startup and small business investment decisions",
  },
  {
    icon: BarChart3,
    text: "Improves financial planning using real-time data",
  },
  {
    icon: TrendingUp,
    text: "Enables economic growth through data-driven insights",
  },
];

export function SDG8Section() {
  return (
    <div className="bg-card border border-success/20 rounded-lg p-5 animate-fade-up">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-1.5 rounded-md bg-success/10">
          <Sprout className="h-4 w-4 text-success" />
        </div>
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">
          SDG 8 — Decent Work &amp; Economic Growth
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {points.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-start gap-3">
            <Icon className="h-4 w-4 text-success mt-0.5 shrink-0" />
            <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
