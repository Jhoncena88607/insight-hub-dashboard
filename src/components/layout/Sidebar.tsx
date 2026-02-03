import { useState, createContext, useContext, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Image,
  Users,
  Wallet,
  Activity,
  UserCircle,
  Landmark,
  TrendingUp,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Menu,
} from "lucide-react";

interface SidebarContextType {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
  toggleCollapsed: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within SidebarProvider");
  }
  return context;
};

interface SidebarProviderProps {
  children: ReactNode;
}

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => setCollapsed(!collapsed);

  return (
    <SidebarContext.Provider value={{ collapsed, setCollapsed, toggleCollapsed }}>
      {children}
    </SidebarContext.Provider>
  );
};

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: Image, label: "Collections", path: "/collections" },
  { icon: Users, label: "Agents List", path: "/agents" },
  { icon: Wallet, label: "Wallet overview", path: "/wallet" },
  { icon: Activity, label: "Usage", path: "/usage" },
  { icon: UserCircle, label: "Investors", path: "/investors" },
  { icon: Landmark, label: "Governance", path: "/governance" },
  { icon: TrendingUp, label: "Yield", path: "/yield" },
];

export const AppSidebar = () => {
  const { collapsed, toggleCollapsed } = useSidebar();
  const location = useLocation();

  return (
    <aside
      className={`fixed left-0 top-0 h-screen bg-sidebar border-r border-sidebar-border flex flex-col transition-all duration-300 z-50 ${
        collapsed ? "w-sidebar-collapsed" : "w-sidebar"
      }`}
    >
      {/* Logo */}
      <div className="p-6 flex items-center justify-between border-b border-sidebar-border">
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="text-2xl font-bold text-foreground whitespace-nowrap">
            {collapsed ? (
              <span className="text-primary">F</span>
            ) : (
              <>
                FRAC<span className="text-primary">T</span>IQ
              </>
            )}
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 overflow-y-auto">
        <ul className="space-y-1 px-3">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;

            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 group ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  }`}
                  title={collapsed ? item.label : undefined}
                >
                  <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? "" : "group-hover:text-primary"}`} />
                  <span
                    className={`whitespace-nowrap transition-opacity duration-200 ${
                      collapsed ? "opacity-0 w-0" : "opacity-100"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Collapse Toggle */}
      <button
        onClick={toggleCollapsed}
        className="absolute -right-3 top-20 bg-card border border-border rounded-full p-1.5 shadow-md hover:bg-muted transition-colors"
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {collapsed ? (
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        ) : (
          <ChevronLeft className="w-4 h-4 text-muted-foreground" />
        )}
      </button>

      {/* Logout */}
      <div className="p-3 border-t border-sidebar-border">
        <button
          className={`flex items-center gap-3 px-3 py-3 rounded-lg w-full text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-200 group`}
          title={collapsed ? "Logout" : undefined}
        >
          <LogOut className="w-5 h-5 flex-shrink-0 group-hover:text-primary" />
          <span
            className={`whitespace-nowrap transition-opacity duration-200 ${
              collapsed ? "opacity-0 w-0" : "opacity-100"
            }`}
          >
            Logout
          </span>
        </button>
      </div>
    </aside>
  );
};

// Mobile sidebar toggle
export const MobileSidebarTrigger = () => {
  const { toggleCollapsed } = useSidebar();

  return (
    <button
      onClick={toggleCollapsed}
      className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-card border border-border rounded-lg shadow-md"
      aria-label="Toggle sidebar"
    >
      <Menu className="w-5 h-5" />
    </button>
  );
};
