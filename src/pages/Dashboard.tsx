import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/ui/StatCard";
import { Users, DollarSign, TrendingUp, Briefcase } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Cell,
} from "recharts";

// Mock data for agents chart
const agentsChartData = [
  { month: "Jan", agents: 45 },
  { month: "Feb", agents: 52 },
  { month: "Mar", agents: 85 },
  { month: "Apr", agents: 65 },
  { month: "May", agents: 42 },
  { month: "Jun", agents: 55 },
  { month: "Jul", agents: 38 },
  { month: "Aug", agents: 48 },
  { month: "Sep", agents: 62 },
  { month: "Oct", agents: 45 },
  { month: "Nov", agents: 72 },
  { month: "Dec", agents: 58 },
];

// Mock data for investors
const investorsData = [
  {
    name: "Atishek Singh",
    role: "Lorem ipsum",
    lorem: "Lorem",
    nec: "Nec",
    diam: "Diam",
    risus: "Risus",
    status: "Nec",
  },
  {
    name: "Harish Lohar",
    role: "Lorem ipsum",
    lorem: "Lorem",
    nec: "Nec",
    diam: "Diam",
    risus: "Risus",
    status: "Lorem",
  },
];

// Mock collections data
const collectionsData = [
  { name: "Lorem", progress: 65, remaining: "3 D : 24 H : 40 M", color: "bg-primary" },
  { name: "Sed", progress: 45, remaining: "3 D : 24 H : 40 M", color: "bg-destructive" },
  { name: "Sed", progress: 30, remaining: "3 D : 24 H : 40 M", color: "bg-blue-500" },
];

// Top sold collections data
const topSoldData = [
  { name: "Windows 7", percentage: 85, color: "#3B82F6" },
  { name: "Windows 8", percentage: 66, color: "#3B82F6" },
  { name: "Windows 8.1", percentage: 90, color: "#8B5CF6" },
  { name: "Windows 10", percentage: 30, color: "#EF4444" },
];

const Dashboard = () => {
  return (
    <DashboardLayout title="Overview">
      <div className="space-y-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chart Section */}
          <div className="lg:col-span-2 bg-card rounded-xl border border-border p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-foreground">Number of agents</h2>
              <button className="px-3 py-1.5 bg-primary text-primary-foreground text-xs font-medium rounded-lg">
                THIS YEAR ▼
              </button>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={agentsChartData}>
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                />
                <YAxis hide />
                <Tooltip
                  contentStyle={{
                    background: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="agents" radius={[4, 4, 0, 0]}>
                  {agentsChartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        entry.month === "Mar"
                          ? "hsl(var(--primary))"
                          : "hsl(174 72% 40% / 0.4)"
                      }
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Top Sold Collections */}
          <div className="bg-card rounded-xl border border-border p-6">
            <h2 className="text-lg font-semibold text-foreground mb-1">Top Sold Collections</h2>
            <p className="text-sm text-muted-foreground mb-6">From Various Companies</p>
            <div className="grid grid-cols-2 gap-6">
              {topSoldData.map((item) => (
                <div key={item.name} className="text-center">
                  <div className="relative w-20 h-20 mx-auto">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="40"
                        cy="40"
                        r="35"
                        fill="none"
                        stroke="hsl(var(--border))"
                        strokeWidth="6"
                      />
                      <circle
                        cx="40"
                        cy="40"
                        r="35"
                        fill="none"
                        stroke={item.color}
                        strokeWidth="6"
                        strokeDasharray={`${item.percentage * 2.2} 220`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <span
                      className="absolute inset-0 flex items-center justify-center text-lg font-bold"
                      style={{ color: item.color }}
                    >
                      {item.percentage}%
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-card border border-border rounded-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
              <Users className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Today's Investors</p>
              <p className="text-xs text-muted-foreground">Lorem</p>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Today's Investments</p>
              <p className="text-xs text-muted-foreground">Lorem</p>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Total Investors</p>
              <p className="text-xs text-muted-foreground">Lorem</p>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-rose-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Total Investments</p>
              <p className="text-xs text-muted-foreground">Lorem</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Investors Table */}
          <div className="lg:col-span-2 bg-card rounded-xl border border-border p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">Investors</h2>
            <div className="overflow-x-auto">
              <table className="data-table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Lorem</th>
                    <th>Diam</th>
                    <th>Risus</th>
                    <th>Nec</th>
                  </tr>
                </thead>
                <tbody>
                  {investorsData.map((investor, index) => (
                    <tr key={index}>
                      <td>
                        <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                          <Users className="w-4 h-4 text-amber-600" />
                        </div>
                      </td>
                      <td>
                        <div>
                          <p className="font-medium text-foreground">{investor.name}</p>
                          <p className="text-xs text-muted-foreground">{investor.role}</p>
                        </div>
                      </td>
                      <td>
                        <p className="font-medium">{investor.lorem}</p>
                        <p className="text-xs text-muted-foreground">Nec</p>
                      </td>
                      <td>
                        <p className="font-medium">{investor.diam}</p>
                        <p className="text-xs text-muted-foreground">Lorem</p>
                      </td>
                      <td>
                        <p className="font-medium">{investor.risus}</p>
                        <p className="text-xs text-muted-foreground">Lorem</p>
                      </td>
                      <td>
                        <p className="font-medium">{investor.status}</p>
                        <p className="text-xs text-muted-foreground">Lorem</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Expiring Collections */}
          <div className="bg-card rounded-xl border border-border p-6">
            <h2 className="text-lg font-semibold text-foreground mb-1">Expiring Collections</h2>
            <p className="text-sm text-muted-foreground mb-6">Lorem ipsum dolor sit amet</p>
            <div className="space-y-6">
              {collectionsData.map((collection, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">{collection.name}</span>
                    <span className="text-xs text-muted-foreground">{collection.remaining}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full ${collection.color} rounded-full transition-all`}
                      style={{ width: `${collection.progress}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Remaining</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
