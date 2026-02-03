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
      <div className="flex min-h-screen w-full">
        {children}
      </div>
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
      className={`relative h-screen bg-sidebar border-r border-sidebar-border flex flex-col transition-all duration-300 ease-in-out flex-shrink-0 ${
        collapsed ? "w-[70px]" : "w-[260px]"
      }`}
    >
      {/* Logo */}
      <div className={`h-16 flex items-center border-b border-sidebar-border ${collapsed ? "px-4 justify-center" : "px-6"}`}>
        <span className="text-2xl font-bold text-foreground whitespace-nowrap overflow-hidden">
          {collapsed ? (
            <span className="text-primary">F</span>
          ) : (
            <>
              FRAC<span className="text-primary">T</span>IQ
            </>
          )}
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 overflow-y-auto overflow-x-hidden">
        <ul className="space-y-1 px-3">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;

            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  }`}
                  title={collapsed ? item.label : undefined}
                >
                  <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? "" : "group-hover:text-primary"}`} />
                  {!collapsed && (
                    <span className="whitespace-nowrap text-sm font-medium">
                      {item.label}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Collapse Toggle Button */}
      <button
        onClick={toggleCollapsed}
        className="absolute -right-3 top-20 z-10 bg-card border border-border rounded-full p-1.5 shadow-md hover:bg-muted hover:shadow-lg transition-all duration-200"
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
          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg w-full text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-200 group`}
          title={collapsed ? "Logout" : undefined}
        >
          <LogOut className="w-5 h-5 flex-shrink-0 group-hover:text-primary" />
          {!collapsed && (
            <span className="whitespace-nowrap text-sm font-medium">
              Logout
            </span>
          )}
        </button>
      </div>
    </aside>
  );
};
