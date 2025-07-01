import { dashboardStats } from "./DashboardData";
import StatCard from "./StatCard";

export default function DashboardHome() {
  return (
    <div className="space-y-6">
      <div className="text-sm text-gray-500 border-b pb-2">
        Home / <span className="text-gray-800 font-medium">Dashboard</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardStats.map((item, index) => (
          <StatCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
