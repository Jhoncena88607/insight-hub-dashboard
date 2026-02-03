import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { LayoutDashboard, Calendar, Clock } from "lucide-react";

// Mock data
const yieldData = [
  {
    asset: "Luxury Apartment Building",
    ticker: "LUXAPT",
    lastPayout: "June 15, 2023",
    nextPayout: "August 4, 2024",
    quarterlyYield: "$69,129",
  },
  {
    asset: "Commercial Office Space",
    ticker: "COMOFF",
    lastPayout: "June 15, 2023",
    nextPayout: "August 4, 2024",
    quarterlyYield: "$69,129",
  },
  {
    asset: "Renewable Energy Fund",
    ticker: "LUXAPT",
    lastPayout: "June 15, 2023",
    nextPayout: "August 4, 2024",
    quarterlyYield: "$69,129",
  },
];

type TabType = "schedules" | "disburse" | "history";

const Yield = () => {
  const [activeTab, setActiveTab] = useState<TabType>("schedules");

  return (
    <DashboardLayout title="Yield Management" showSearch={false}>
      <div className="space-y-6">
        <p className="text-muted-foreground">Schedule, disburse and track yield payments</p>

        {/* Yield Dashboard Card */}
        <div className="bg-card rounded-xl border border-border p-6">
          <div className="flex items-start gap-3 mb-6">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <LayoutDashboard className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">Yield Dashboard</h2>
              <p className="text-sm text-muted-foreground">Manage yield payments for your tokenized assets</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-0 mb-8 border border-border rounded-lg overflow-hidden w-fit">
            <button
              onClick={() => setActiveTab("schedules")}
              className={`px-8 py-2.5 text-sm font-medium transition-colors ${
                activeTab === "schedules"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              Schedules
            </button>
            <button
              onClick={() => setActiveTab("disburse")}
              className={`px-8 py-2.5 text-sm font-medium transition-colors border-x border-border ${
                activeTab === "disburse"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              Disburse
            </button>
            <button
              onClick={() => setActiveTab("history")}
              className={`px-8 py-2.5 text-sm font-medium transition-colors ${
                activeTab === "history"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              History
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Asset</th>
                  <th>Last Payout</th>
                  <th>Next Payout</th>
                  <th>Quarterly yield</th>
                </tr>
              </thead>
              <tbody>
                {yieldData.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <div>
                        <p className="font-medium text-foreground">{item.asset}</p>
                        <p className="text-xs text-primary">{item.ticker}</p>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {item.lastPayout}
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {item.nextPayout}
                      </div>
                    </td>
                    <td className="font-medium text-foreground">{item.quarterlyYield}</td>
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

export default Yield;
