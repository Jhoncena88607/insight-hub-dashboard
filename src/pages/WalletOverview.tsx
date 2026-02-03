import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Link2 } from "lucide-react";

// Mock data
const walletData = [
  { username: "Anandi Lal", type: "Withdraw", time: "06:29:39 AM", amount: "$6,069", status: "Pending" },
  { username: "Anandi Lal", type: "Invest", time: "06:29:39 AM", amount: "$6,069", status: "Completed" },
  { username: "Anandi Lal", type: "Withdraw", time: "06:29:39 AM", amount: "$6,069", status: "Pending" },
  { username: "Anandi Lal", type: "Invest", time: "06:29:39 AM", amount: "$6,069", status: "Cancelled" },
  { username: "Anandi Lal", type: "Withdraw", time: "06:29:39 AM", amount: "$6,069", status: "Pending" },
  { username: "Anandi Lal", type: "Invest", time: "06:29:39 AM", amount: "$6,069", status: "Cancelled" },
  { username: "Anandi Lal", type: "Withdraw", time: "06:29:39 AM", amount: "$6,069", status: "Pending" },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Completed":
      return "text-emerald-600";
    case "Pending":
      return "text-amber-600";
    case "Cancelled":
      return "text-rose-600";
    default:
      return "text-muted-foreground";
  }
};

const WalletOverview = () => {
  return (
    <DashboardLayout title="Wallet Overview" showSearch={false}>
      <div className="space-y-6">
        {/* Wallet Activity Card */}
        <div className="bg-card rounded-xl border border-border p-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-foreground">Wallet Activity</h2>
            <p className="text-sm text-muted-foreground">Learn more about the latest transactions</p>
          </div>

          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Type</th>
                  <th>Time</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Transaction Hash</th>
                </tr>
              </thead>
              <tbody>
                {walletData.map((tx, index) => (
                  <tr key={index}>
                    <td className="font-medium">{tx.username}</td>
                    <td>{tx.type}</td>
                    <td>{tx.time}</td>
                    <td className="font-medium">{tx.amount}</td>
                    <td className={getStatusColor(tx.status)}>{tx.status}</td>
                    <td>
                      <button className="text-primary hover:text-primary/80 transition-colors">
                        <Link2 className="w-5 h-5" />
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

export default WalletOverview;
