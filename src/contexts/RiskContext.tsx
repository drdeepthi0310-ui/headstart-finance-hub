import { createContext, useContext, useState, type ReactNode } from "react";

type RiskLevel = "Low" | "Medium" | "High";

interface RiskContextType {
  riskLevel: RiskLevel;
  setRiskLevel: (level: RiskLevel) => void;
}

const RiskContext = createContext<RiskContextType | undefined>(undefined);

export function RiskProvider({ children }: { children: ReactNode }) {
  const [riskLevel, setRiskLevel] = useState<RiskLevel>("Medium");
  return (
    <RiskContext.Provider value={{ riskLevel, setRiskLevel }}>
      {children}
    </RiskContext.Provider>
  );
}

export function useRisk() {
  const ctx = useContext(RiskContext);
  if (!ctx) throw new Error("useRisk must be used within RiskProvider");
  return ctx;
}
