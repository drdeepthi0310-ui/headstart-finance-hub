import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { KPICards } from "@/components/dashboard/KPICards";
import { EconomicChart } from "@/components/dashboard/EconomicChart";
import { CompanyBarChart } from "@/components/dashboard/CompanyBarChart";
import { SectorPieChart } from "@/components/dashboard/SectorPieChart";
import { CompanyAnalysis } from "@/components/dashboard/CompanyAnalysis";
import { RiskAnalysis } from "@/components/dashboard/RiskAnalysis";
import { InvestmentRecommendations } from "@/components/dashboard/InvestmentRecommendations";
import { NewsPanel } from "@/components/dashboard/NewsPanel";
import { PortfolioSection } from "@/components/dashboard/PortfolioSection";
import { ForecastChart } from "@/components/dashboard/ForecastChart";
import { InvestmentInsights } from "@/components/dashboard/InvestmentInsights";
import { OverallRiskIndicator } from "@/components/dashboard/OverallRiskIndicator";
import { SDG8Section } from "@/components/dashboard/SDG8Section";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";

const Index = () => {
  const [timeRange, setTimeRange] = useState("monthly");
  const [viewMode, setViewMode] = useState<"growth" | "stability">("growth");

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-[1400px]">
        {/* Time Range Filter & View Mode */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h1 className="text-xl font-bold text-foreground">Dashboard Overview</h1>
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-card border border-border rounded-lg p-0.5">
              {(["growth", "stability"] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold capitalize transition-colors ${
                    viewMode === mode
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-[140px] bg-card border-border text-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="quarterly">Quarterly</SelectItem>
                <SelectItem value="yearly">Yearly</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* KPI Cards */}
        <KPICards viewMode={viewMode} />

        {/* Investment Insights & Overall Risk */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <InvestmentInsights />
          <OverallRiskIndicator />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <EconomicChart />
          <CompanyBarChart />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <SectorPieChart />
          <div className="lg:col-span-2">
            <CompanyAnalysis />
          </div>
        </div>

        {/* Risk & Recommendations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <RiskAnalysis />
          <InvestmentRecommendations />
        </div>

        {/* Portfolio */}
        <PortfolioSection />

        {/* Forecast */}
        <ForecastChart />

        {/* SDG 8 */}
        <SDG8Section />

        {/* News */}
        <NewsPanel />
      </div>
    </DashboardLayout>
  );
};

export default Index;
