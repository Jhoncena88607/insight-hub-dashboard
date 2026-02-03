import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { DataTable } from "@/components/ui/DataTable";
import { Search } from "lucide-react";

// Mock data
const investorsData = [
  { sno: 1, userName: "atishek inc", agent: "Microsoft", properties: 10 },
  { sno: 2, userName: "atishek inc", agent: "Microsoft", properties: 10 },
  { sno: 3, userName: "atishek inc", agent: "Microsoft", properties: 10 },
  { sno: 4, userName: "atishek inc", agent: "Microsoft", properties: 10 },
  { sno: 5, userName: "atishek inc", agent: "Microsoft", properties: 10 },
  { sno: 6, userName: "atishek inc", agent: "Microsoft", properties: 10 },
  { sno: 7, userName: "atishek inc", agent: "Microsoft", properties: 10 },
];

const columns = [
  { key: "sno", header: "S.No" },
  { key: "userName", header: "User Name" },
  { key: "agent", header: "Agent" },
  { key: "properties", header: "Number Of Properties" },
];

const Investors = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = investorsData.filter((item) =>
    item.userName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout title="Investor list" showSearch={false}>
      <div className="space-y-6">
        {/* Custom Search */}
        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pl-10 pr-4 bg-card border border-border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
        </div>

        {/* Investors Table */}
        <DataTable columns={columns} data={filteredData} showActions />
      </div>
    </DashboardLayout>
  );
};

export default Investors;
