import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { FolderPlus, Plus } from "lucide-react";

const Collections = () => {
  const [activeTab, setActiveTab] = useState<"properties" | "analytics">("properties");
  const [collections] = useState<any[]>([]);

  return (
    <DashboardLayout title="Create Collection">
      <div className="space-y-6">
        {/* Tab Toggle */}
        <div className="flex justify-end">
          <div className="inline-flex bg-muted rounded-full p-1">
            <button
              onClick={() => setActiveTab("properties")}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-all ${
                activeTab === "properties"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Properties
            </button>
            <button
              onClick={() => setActiveTab("analytics")}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-all ${
                activeTab === "analytics"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Analytics
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="bg-card rounded-xl border border-border p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-foreground">
              {collections.length} Collections
            </h2>
            <button className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors">
              Create Collection
            </button>
          </div>

          <hr className="border-border mb-8" />

          {collections.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <div className="relative">
                  <FolderPlus className="w-10 h-10 text-primary" />
                </div>
              </div>
              <p className="text-muted-foreground text-center max-w-xs">
                No properties here, click on Create property button to create your first property
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Collection cards would go here */}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Collections;
