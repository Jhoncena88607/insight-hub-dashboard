# FRACTIQ Dashboard - Next.js Integration Guide

## Overview
This guide explains how to integrate this dashboard into your existing Next.js project with App Router and JSX (no TypeScript).

---

## Step 1: Install Required Dependencies

Run this command in your Next.js project:

```bash
npm install lucide-react recharts class-variance-authority clsx tailwind-merge
```

---

## Step 2: Copy the CSS Variables

Add these CSS variables to your `src/app/globals.css` (or wherever your global CSS is):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 98%;
    --foreground: 220 20% 20%;
    --card: 0 0% 100%;
    --card-foreground: 220 20% 20%;
    --popover: 0 0% 100%;
    --popover-foreground: 220 20% 20%;
    --primary: 174 72% 40%;
    --primary-foreground: 0 0% 100%;
    --secondary: 220 14% 96%;
    --secondary-foreground: 220 20% 20%;
    --muted: 220 14% 96%;
    --muted-foreground: 220 10% 50%;
    --accent: 174 72% 40%;
    --accent-foreground: 0 0% 100%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;
    --border: 220 14% 90%;
    --input: 220 14% 90%;
    --ring: 174 72% 40%;
    --radius: 0.75rem;
    --sidebar-background: 0 0% 100%;
    --sidebar-foreground: 220 10% 40%;
    --sidebar-primary: 174 72% 40%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 174 72% 95%;
    --sidebar-accent-foreground: 174 72% 30%;
    --sidebar-border: 220 14% 92%;
    --sidebar-ring: 174 72% 40%;
    --gradient-purple: linear-gradient(135deg, hsl(270 60% 60%) 0%, hsl(280 70% 50%) 100%);
    --gradient-green: linear-gradient(135deg, hsl(150 70% 45%) 0%, hsl(80 70% 50%) 100%);
    --gradient-pink: linear-gradient(135deg, hsl(340 80% 55%) 0%, hsl(20 90% 55%) 100%);
    --gradient-blue: linear-gradient(135deg, hsl(220 80% 55%) 0%, hsl(260 70% 60%) 100%);
    --gradient-teal: linear-gradient(135deg, hsl(174 72% 40%) 0%, hsl(160 60% 45%) 100%);
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground antialiased;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }
}

@layer components {
  .stat-card-purple { background: var(--gradient-purple); @apply text-white; }
  .stat-card-green { background: var(--gradient-green); @apply text-white; }
  .stat-card-pink { background: var(--gradient-pink); @apply text-white; }
  .stat-card-blue { background: var(--gradient-blue); @apply text-white; }
  .stat-card-teal { background: var(--gradient-teal); @apply text-white; }
  
  .wavy-pattern {
    position: relative;
    overflow: hidden;
  }
  .wavy-pattern::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 60%;
    height: 100%;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpath d='M0,50 Q25,30 50,50 T100,50 V100 H0 Z' fill='rgba(255,255,255,0.1)'/%3E%3C/svg%3E") no-repeat right center;
    background-size: cover;
    opacity: 0.5;
    pointer-events: none;
  }
  
  .data-table { @apply w-full text-sm; }
  .data-table th { @apply text-left font-medium text-muted-foreground py-3 px-4 border-b; }
  .data-table td { @apply py-3 px-4 border-b border-border/50; }
  .data-table tr:hover { @apply bg-muted/30; }
}
```

---

## Step 3: Update Tailwind Config

Update your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
```

---

## Step 4: Create the File Structure

Create these folders in your `src` directory:

```
src/
├── app/
│   ├── layout.jsx           # Root layout (already exists)
│   ├── page.jsx              # Dashboard page
│   ├── collections/
│   │   └── page.jsx
│   ├── agents/
│   │   └── page.jsx
│   ├── wallet/
│   │   └── page.jsx
│   ├── usage/
│   │   └── page.jsx
│   ├── investors/
│   │   └── page.jsx
│   ├── governance/
│   │   └── page.jsx
│   └── yield/
│       └── page.jsx
├── components/
│   ├── layout/
│   │   ├── Sidebar.jsx
│   │   └── DashboardLayout.jsx
│   └── ui/
│       ├── StatCard.jsx
│       └── DataTable.jsx
└── lib/
    └── utils.js
```

---

## Step 5: Copy Components (Convert to JSX)

### 5.1 Create `src/lib/utils.js`:

```jsx
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
```

### 5.2 Create `src/components/layout/Sidebar.jsx`:

```jsx
"use client";

import { useState, createContext, useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

const SidebarContext = createContext(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({ children }) => {
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
  const pathname = usePathname();

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
            const isActive = pathname === item.path;
            const Icon = item.icon;

            return (
              <li key={item.path}>
                <Link
                  href={item.path}
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
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg w-full text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-200 group"
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
```

### 5.3 Create `src/components/layout/DashboardLayout.jsx`:

```jsx
"use client";

import { Search, Bell, MoreVertical } from "lucide-react";
import { AppSidebar, SidebarProvider } from "./Sidebar";

const LayoutContent = ({ children, title, showSearch = true }) => {
  return (
    <>
      <AppSidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="sticky top-0 z-30 bg-background border-b border-border flex-shrink-0">
          <div className="flex items-center justify-between h-16 px-6">
            <h1 className="text-xl font-semibold text-foreground truncate">
              {title || "Overview"}
            </h1>

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

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 animate-fade-in">
          {children}
        </main>
      </div>
    </>
  );
};

export const DashboardLayout = ({ children, title, showSearch = true }) => {
  return (
    <SidebarProvider>
      <LayoutContent title={title} showSearch={showSearch}>
        {children}
      </LayoutContent>
    </SidebarProvider>
  );
};

export default DashboardLayout;
```

### 5.4 Create `src/components/ui/StatCard.jsx`:

```jsx
const gradientClasses = {
  purple: "stat-card-purple",
  green: "stat-card-green",
  pink: "stat-card-pink",
  blue: "stat-card-blue",
  teal: "stat-card-teal",
};

export const StatCard = ({ title, value, subtitle, gradient, icon }) => {
  return (
    <div className={`relative rounded-xl p-5 wavy-pattern overflow-hidden ${gradientClasses[gradient]}`}>
      <div className="relative z-10">
        <p className="text-sm font-medium opacity-90">{title}</p>
        <p className="text-3xl font-bold mt-1">{value}</p>
        {subtitle && <p className="text-sm opacity-75 mt-1">{subtitle}</p>}
      </div>
      {icon && <div className="absolute top-4 right-4 opacity-50">{icon}</div>}
    </div>
  );
};

export default StatCard;
```

### 5.5 Create `src/components/ui/DataTable.jsx`:

```jsx
import { Download, ExternalLink } from "lucide-react";

export function DataTable({ columns, data, showActions = false }) {
  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      <div className="overflow-x-auto">
        <table className="data-table">
          <thead>
            <tr className="bg-muted/30">
              {columns.map((col) => (
                <th key={String(col.key)}>{col.header}</th>
              ))}
              {showActions && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={columns.length + (showActions ? 1 : 0)} className="text-center py-12 text-muted-foreground">
                  No data available
                </td>
              </tr>
            ) : (
              data.map((item, index) => (
                <tr key={index}>
                  {columns.map((col) => (
                    <td key={String(col.key)}>
                      {col.render ? col.render(item, index) : String(item[col.key] ?? "")}
                    </td>
                  ))}
                  {showActions && (
                    <td>
                      <div className="flex items-center gap-2">
                        <button className="p-1.5 hover:bg-muted rounded-lg transition-colors text-primary">
                          <Download className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 hover:bg-muted rounded-lg transition-colors text-primary">
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;
```

---

## Step 6: Create Page Files

### Example: `src/app/page.jsx` (Dashboard):

```jsx
"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/ui/StatCard";
// ... copy the Dashboard component content from src/pages/Dashboard.tsx
// Remove all TypeScript type annotations

export default function Dashboard() {
  return (
    <DashboardLayout title="Overview">
      {/* Copy the JSX content here */}
    </DashboardLayout>
  );
}
```

### Example: `src/app/agents/page.jsx`:

```jsx
"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/ui/StatCard";
import { DataTable } from "@/components/ui/DataTable";
import { Plus } from "lucide-react";

// Copy mock data here...

export default function AgentsList() {
  return (
    <DashboardLayout title="Agent List">
      {/* Copy JSX content */}
    </DashboardLayout>
  );
}
```

---

## Step 7: Key Differences (React Router → Next.js)

| React (Vite) | Next.js (App Router) |
|--------------|---------------------|
| `import { Link } from "react-router-dom"` | `import Link from "next/link"` |
| `<Link to="/path">` | `<Link href="/path">` |
| `useLocation().pathname` | `usePathname()` from `next/navigation` |
| Files in `src/pages/` | Files in `src/app/*/page.jsx` |
| No directive needed | Add `"use client"` at top of client components |

---

## Step 8: Update Root Layout

Update `src/app/layout.jsx`:

```jsx
import "./globals.css";

export const metadata = {
  title: "FRACTIQ Dashboard",
  description: "Tokenized asset management dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

---

## Checklist

- [ ] Install dependencies: `lucide-react`, `recharts`, `clsx`, `tailwind-merge`, `class-variance-authority`, `tailwindcss-animate`
- [ ] Copy CSS variables to `globals.css`
- [ ] Update `tailwind.config.js`
- [ ] Create component files (Sidebar, DashboardLayout, StatCard, DataTable)
- [ ] Create page files for each route
- [ ] Add `"use client"` to all interactive components
- [ ] Replace `Link to=` with `Link href=`
- [ ] Replace `useLocation` with `usePathname`
- [ ] Remove all TypeScript type annotations (`: string`, `: number`, `interface`, etc.)

---

## Need Help?

If you encounter issues, check:
1. All `"use client"` directives are at the very top of client components
2. All imports use the correct Next.js equivalents
3. The `tailwindcss-animate` plugin is installed and configured
