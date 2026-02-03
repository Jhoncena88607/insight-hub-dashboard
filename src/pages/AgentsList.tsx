import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/ui/StatCard";
import { DataTable } from "@/components/ui/DataTable";
import { Plus, Users } from "lucide-react";

// Mock data
const agentsData = [
  { sno: 1, name: "atishek inc", email: "XVDAFA....", company: "Microsoft", location: "Pune", commission: "INR 69,000", properties: 10 },
  { sno: 2, name: "atishek inc", email: "XVDAFA....", company: "Microsoft", location: "Pune", commission: "INR 69,000", properties: 10 },
  { sno: 3, name: "atishek inc", email: "XVDAFA....", company: "Microsoft", location: "Pune", commission: "INR 69,000", properties: 10 },
  { sno: 4, name: "atishek inc", email: "XVDAFA....", company: "Microsoft", location: "Pune", commission: "INR 69,000", properties: 10 },
  { sno: 5, name: "atishek inc", email: "XVDAFA....", company: "Microsoft", location: "Pune", commission: "INR 69,000", properties: 10 },
  { sno: 6, name: "atishek inc", email: "XVDAFA....", company: "Microsoft", location: "Pune", commission: "INR 69,000", properties: 10 },
  { sno: 7, name: "atishek inc", email: "XVDAFA....", company: "Microsoft", location: "Pune", commission: "INR 69,000", properties: 10 },
];

const columns = [
  { key: "sno", header: "S.No" },
  { key: "name", header: "Agent Name" },
  { key: "email", header: "Email" },
  { key: "company", header: "Company" },
  { key: "location", header: "Location" },
  { key: "commission", header: "Total Commission Earned" },
  { key: "properties", header: "Number Of Properties" },
];

const AgentsList = () => {
  return (
    <DashboardLayout title="Agent List">
      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Total Investment done by user"
            value="$45,500.12"
            subtitle="444 221 224"
            gradient="purple"
          />
          <StatCard
            title="Total Commission earned by agents"
            value="$250.5"
            subtitle="444 221 224"
            gradient="green"
          />
          <StatCard
            title="Number of properties listed by user"
            value="69"
            subtitle="444 221 224"
            gradient="pink"
          />
          <StatCard
            title="Total Projects this week"
            value="$250.5"
            subtitle="444 221 224"
            gradient="blue"
          />
        </div>

        {/* Add Agent Button */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors">
            <Plus className="w-4 h-4" />
            Add Agent
          </button>
        </div>

        {/* Agents Table */}
        <DataTable columns={columns} data={agentsData} showActions />
      </div>
    </DashboardLayout>
  );
};

export default AgentsList;
