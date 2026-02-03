import { ReactNode } from "react";

type GradientType = "purple" | "green" | "pink" | "blue" | "teal";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  gradient: GradientType;
  icon?: ReactNode;
}

const gradientClasses: Record<GradientType, string> = {
  purple: "stat-card-purple",
  green: "stat-card-green",
  pink: "stat-card-pink",
  blue: "stat-card-blue",
  teal: "stat-card-teal",
};

export const StatCard = ({ title, value, subtitle, gradient, icon }: StatCardProps) => {
  return (
    <div
      className={`relative rounded-xl p-5 wavy-pattern overflow-hidden ${gradientClasses[gradient]}`}
    >
      <div className="relative z-10">
        <p className="text-sm font-medium opacity-90">{title}</p>
        <p className="text-3xl font-bold mt-1">{value}</p>
        {subtitle && (
          <p className="text-sm opacity-75 mt-1">{subtitle}</p>
        )}
      </div>
      {icon && (
        <div className="absolute top-4 right-4 opacity-50">
          {icon}
        </div>
      )}
    </div>
  );
};

export default StatCard;
