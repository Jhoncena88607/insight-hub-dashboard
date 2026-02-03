import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/ui/StatCard";
import { Zap, Clock, AlertTriangle, BarChart3 } from "lucide-react";

// Mock data
const usageData = [
  { api: "atishek inc", consumption: "XVDAFA....", charge: "$ 69" },
  { api: "atishek inc", consumption: "XVDAFA....", charge: "$ 69" },
  { api: "atishek inc", consumption: "XVDAFA....", charge: "$ 69" },
  { api: "atishek inc", consumption: "XVDAFA....", charge: "$ 69" },
  { api: "atishek inc", consumption: "XVDAFA....", charge: "$ 69" },
  { api: "atishek inc", consumption: "XVDAFA....", charge: "$ 69" },
  { api: "atishek inc", consumption: "XVDAFA....", charge: "$ 69" },
];

const Usage = () => {
  return (
    <DashboardLayout title="API Usage">
      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Concurrent Requests"
            value="0"
            subtitle="Last 1 H"
            gradient="purple"
            icon={<Zap className="w-6 h-6" />}
          />
          <StatCard
            title="Median response Time"
            value="--"
            subtitle="Last 1 H"
            gradient="green"
            icon={<Clock className="w-6 h-6" />}
          />
          <StatCard
            title="Invalid Requests"
            value="0"
            subtitle="Last 1 H"
            gradient="pink"
            icon={<AlertTriangle className="w-6 h-6" />}
          />
          <StatCard
            title="Throughput limited %"
            value="0%"
            subtitle="Last 1 H"
            gradient="blue"
            icon={<BarChart3 className="w-6 h-6" />}
          />
        </div>

        {/* API Consumption Table */}
        <div className="bg-card rounded-xl border border-border p-6">
          <h2 className="text-lg font-semibold text-foreground mb-6">API Consumption & Charges</h2>
          
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>API</th>
                  <th>Consumption</th>
                  <th>Charge</th>
                </tr>
              </thead>
              <tbody>
                {usageData.map((item, index) => (
                  <tr key={index}>
                    <td className="font-medium">{item.api}</td>
                    <td className="text-muted-foreground">{item.consumption}</td>
                    <td className="font-medium">{item.charge}</td>
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

export default Usage;
