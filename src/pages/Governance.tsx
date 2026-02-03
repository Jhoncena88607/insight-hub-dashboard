import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/ui/StatCard";
import { Plus, FileText, Users, CheckCircle } from "lucide-react";

// Mock data
const proposalsData = [
  { sno: 1, project: "harish", title: "harish", createdAt: "07-08-2025", status: "Completed" },
  { sno: 2, project: "harish", title: "Atishek", createdAt: "07-08-2025", status: "in progress" },
  { sno: 3, project: "harish", title: "faisal", createdAt: "07-08-2025", status: "Pending" },
  { sno: 4, project: "harish", title: "ajju", createdAt: "07-08-2025", status: "Pending" },
];

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "completed":
      return "text-emerald-600";
    case "in progress":
      return "text-amber-600";
    case "pending":
      return "text-muted-foreground";
    default:
      return "text-muted-foreground";
  }
};

const Governance = () => {
  return (
    <DashboardLayout title="Governance" showSearch={false}>
      <div className="space-y-6">
        <p className="text-muted-foreground">Create and manage governance proposals</p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatCard
            title="Active Proposals"
            value="3"
            gradient="purple"
            icon={<FileText className="w-6 h-6" />}
          />
          <StatCard
            title="Participation Rate"
            value="68%"
            gradient="green"
            icon={<Users className="w-6 h-6" />}
          />
          <StatCard
            title="Executed Proposals"
            value="12"
            gradient="pink"
            icon={<CheckCircle className="w-6 h-6" />}
          />
        </div>

        {/* Create Button */}
        <div className="flex justify-center">
          <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors">
            <Plus className="w-4 h-4" />
            Create New Proposal
          </button>
        </div>

        {/* Proposals Table */}
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>S.NO</th>
                  <th>Project</th>
                  <th>Proposal Title</th>
                  <th>Creation Time</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {proposalsData.map((proposal) => (
                  <tr key={proposal.sno}>
                    <td>{proposal.sno}</td>
                    <td className="text-muted-foreground">{proposal.project}</td>
                    <td className="text-muted-foreground">{proposal.title}</td>
                    <td className="text-muted-foreground">{proposal.createdAt}</td>
                    <td className={getStatusColor(proposal.status)}>{proposal.status}</td>
                    <td>
                      <button className="text-muted-foreground hover:text-primary transition-colors text-sm">
                        View Details
                      </button>
                    </td>
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

export default Governance;
