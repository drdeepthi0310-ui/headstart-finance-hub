export const kpiData = [
  { label: "GDP Growth Rate", value: "3.2%", change: "+0.4%", trend: "up" as const },
  { label: "Inflation Rate", value: "2.8%", change: "-0.3%", trend: "down" as const },
  { label: "Interest Rate", value: "5.25%", change: "+0.25%", trend: "up" as const },
  { label: "Market Trend", value: "Bullish", change: "+1.8%", trend: "up" as const },
];

export const economicTimeSeries = [
  { month: "Jan", gdp: 2.8, inflation: 3.1, interest: 5.0 },
  { month: "Feb", gdp: 2.9, inflation: 3.0, interest: 5.0 },
  { month: "Mar", gdp: 3.0, inflation: 2.9, interest: 5.0 },
  { month: "Apr", gdp: 2.7, inflation: 3.2, interest: 5.25 },
  { month: "May", gdp: 3.1, inflation: 2.8, interest: 5.25 },
  { month: "Jun", gdp: 3.2, inflation: 2.8, interest: 5.25 },
  { month: "Jul", gdp: 3.3, inflation: 2.7, interest: 5.25 },
  { month: "Aug", gdp: 3.1, inflation: 2.9, interest: 5.5 },
  { month: "Sep", gdp: 3.4, inflation: 2.6, interest: 5.5 },
  { month: "Oct", gdp: 3.2, inflation: 2.8, interest: 5.5 },
  { month: "Nov", gdp: 3.5, inflation: 2.5, interest: 5.5 },
  { month: "Dec", gdp: 3.2, inflation: 2.8, interest: 5.25 },
];

export const companyRevenueProfitData = [
  { company: "TechCorp", revenue: 42, profit: 12 },
  { company: "FinServe", revenue: 35, profit: 8 },
  { company: "GreenEnergy", revenue: 28, profit: 6 },
];

export const sectorInvestmentData = [
  { name: "Technology", value: 35, fill: "hsl(155, 100%, 48%)" },
  { name: "Finance", value: 25, fill: "hsl(215, 17%, 47%)" },
  { name: "Healthcare", value: 20, fill: "hsl(43, 87%, 62%)" },
  { name: "Energy", value: 12, fill: "hsl(0, 100%, 68%)" },
  { name: "Real Estate", value: 8, fill: "hsl(270, 60%, 55%)" },
];

export const companies = [
  { name: "TechCorp", revenue: "₹3,500Cr", profit: "₹1,000Cr", marketCap: "₹48,300Cr", growth: "+14.2%" },
  { name: "FinServe", revenue: "₹2,900Cr", profit: "₹670Cr", marketCap: "₹26,700Cr", growth: "+8.7%" },
  { name: "GreenEnergy", revenue: "₹2,330Cr", profit: "₹500Cr", marketCap: "₹15,000Cr", growth: "+22.1%" },
];

export const riskData = {
  level: "Medium" as "Low" | "Medium" | "High",
  volatility: [
    { day: "Mon", value: 18 },
    { day: "Tue", value: 22 },
    { day: "Wed", value: 15 },
    { day: "Thu", value: 28 },
    { day: "Fri", value: 20 },
    { day: "Sat", value: 25 },
    { day: "Sun", value: 19 },
  ],
};

export const investmentRecommendations = [
  { name: "TechCorp", sector: "Technology", risk: "Low", expectedReturn: "12.4%", score: 92 },
  { name: "GreenEnergy", sector: "Energy", risk: "Medium", expectedReturn: "18.7%", score: 88 },
  { name: "HealthPlus", sector: "Healthcare", risk: "Low", expectedReturn: "9.2%", score: 85 },
  { name: "FinServe", sector: "Finance", risk: "Medium", expectedReturn: "11.8%", score: 82 },
  { name: "CloudNet", sector: "Technology", risk: "High", expectedReturn: "24.5%", score: 78 },
];

export const newsHeadlines = [
  { title: "Fed signals potential rate cut in Q2 2026", time: "2h ago", sentiment: "positive" as const },
  { title: "Tech sector rallies on strong earnings reports", time: "4h ago", sentiment: "positive" as const },
  { title: "Oil prices surge amid geopolitical tensions", time: "6h ago", sentiment: "negative" as const },
  { title: "GDP growth exceeds analyst expectations", time: "8h ago", sentiment: "positive" as const },
  { title: "Inflation concerns ease as CPI drops", time: "12h ago", sentiment: "positive" as const },
  { title: "Emerging markets face currency volatility", time: "1d ago", sentiment: "negative" as const },
];

export const portfolioAllocation = [
  { name: "Equities", value: 45, fill: "hsl(155, 100%, 48%)" },
  { name: "Bonds", value: 25, fill: "hsl(215, 17%, 47%)" },
  { name: "Real Estate", value: 15, fill: "hsl(43, 87%, 62%)" },
  { name: "Commodities", value: 10, fill: "hsl(270, 60%, 55%)" },
  { name: "Cash", value: 5, fill: "hsl(0, 100%, 68%)" },
];

export const forecastData = [
  { quarter: "Q1 '25", actual: 42, predicted: null },
  { quarter: "Q2 '25", actual: 45, predicted: null },
  { quarter: "Q3 '25", actual: 48, predicted: null },
  { quarter: "Q4 '25", actual: 52, predicted: null },
  { quarter: "Q1 '26", actual: 55, predicted: 55 },
  { quarter: "Q2 '26", actual: null, predicted: 59 },
  { quarter: "Q3 '26", actual: null, predicted: 63 },
  { quarter: "Q4 '26", actual: null, predicted: 68 },
  { quarter: "Q1 '27", actual: null, predicted: 72 },
];
