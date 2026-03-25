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
const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-[1400px]">
        {/* KPI Cards */}
        <KPICards />

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

        {/* News */}
        <NewsPanel />
      </div>
    </DashboardLayout>
  );
};

export default Index;
