import { ReactNode } from "react";
import { Search, Bell, MoreVertical } from "lucide-react";
import { AppSidebar, SidebarProvider } from "./Sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
  title?: string;
  showSearch?: boolean;
}

const LayoutContent = ({ children, title, showSearch = true }: DashboardLayoutProps) => {
  return (
    <>
      <AppSidebar />
      
      {/* Main Content - takes remaining space */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="sticky top-0 z-30 bg-background border-b border-border flex-shrink-0">
          <div className="flex items-center justify-between h-16 px-6">
            {/* Title */}
            <h1 className="text-xl font-semibold text-foreground truncate">
              {title || "Overview"}
            </h1>

            {/* Search & Actions */}
            <div className="flex items-center gap-4">
              {showSearch && (
                <div className="relative hidden md:block">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-80 h-10 pl-10 pr-4 bg-card border border-border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              )}

              <button className="relative p-2 hover:bg-muted rounded-lg transition-colors">
                <Bell className="w-5 h-5 text-muted-foreground" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
              </button>

              <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                <MoreVertical className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          </div>
        </header>

        {/* Page Content - scrollable area */}
        <main className="flex-1 overflow-y-auto p-6 animate-fade-in">
          {children}
        </main>
      </div>
    </>
  );
};

export const DashboardLayout = (props: DashboardLayoutProps) => {
  return (
    <SidebarProvider>
      <LayoutContent {...props} />
    </SidebarProvider>
  );
};

export default DashboardLayout;
