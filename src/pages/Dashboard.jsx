import StatCard from "../components/StatCard";
import { Users, Ticket, DollarSign, Film } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 4500 },
  { month: "May", revenue: 6000 },
];

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6 text-black dark:text-white">
      {/* Stat Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <StatCard
          title="Users"
          value="12,450"
          change="+12%"
          icon={<Users />}
        />
        <StatCard
          title="Tickets"
          value="8,320"
          change="+18%"
          icon={<Ticket />}
        />
        <StatCard
          title="Revenue"
          value="$84,200"
          change="+9%"
          icon={<DollarSign />}
        />
        <StatCard
          title="Movies"
          value="24"
          change="Active"
          icon={<Film />}
        />
      </div>

      {/* Revenue Chart */}
      <div className="bg-white dark:bg-[#1e293b] p-6 rounded-xl">
        <h3 className="mb-4 font-semibold">Revenue Overview</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <XAxis dataKey="month" stroke="#64748b" />
            <Tooltip />
            <Area
              dataKey="revenue"
              stroke="#f97316"
              fill="#f97316"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
