import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  LineChart,
  Line,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 4000, expense: 2400 },
  { month: "Feb", revenue: 3000, expense: 2200 },
  { month: "Mar", revenue: 5000, expense: 2600 },
  { month: "Apr", revenue: 4500, expense: 2500 },
  { month: "May", revenue: 6000, expense: 3000 },
];

const genreData = [
  { name: "Action", value: 35 },
  { name: "Drama", value: 25 },
  { name: "Comedy", value: 20 },
  { name: "Sci-Fi", value: 20 },
];

const occupancyData = [
  { screen: "Screen 1", value: 80 },
  { screen: "Screen 2", value: 65 },
  { screen: "Screen 3", value: 90 },
];

const visitorData = [
  { time: "10 AM", visitors: 120 },
  { time: "1 PM", visitors: 260 },
  { time: "4 PM", visitors: 400 },
  { time: "7 PM", visitors: 600 },
  { time: "10 PM", visitors: 450 },
];

const COLORS = ["#f97316", "#22c55e", "#3b82f6", "#eab308"];

export default function Analytics() {
  return (
    <div className="p-6 space-y-6 text-black dark:text-white">
      <h2 className="text-xl font-semibold">Analytics</h2>

      {/* Revenue vs Expense */}
      <div className="bg-white dark:bg-[#1e293b] p-6 rounded-xl">
        <h3 className="mb-4">Revenue vs Expenses</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={revenueData}>
            <XAxis dataKey="month" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip />
            <Area
              dataKey="revenue"
              stroke="#f97316"
              fill="#f97316"
              fillOpacity={0.3}
            />
            <Area
              dataKey="expense"
              stroke="#22c55e"
              fill="#22c55e"
              fillOpacity={0.2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Bottom charts */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Genre Distribution */}
        <div className="bg-white dark:bg-[#1e293b] p-6 rounded-xl">
          <h3 className="mb-4">Movie Genres</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={genreData}
                dataKey="value"
                innerRadius={60}
                outerRadius={90}
              >
                {genreData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Screen Occupancy */}
        <div className="bg-white dark:bg-[#1e293b] p-6 rounded-xl">
          <h3 className="mb-4">Screen Occupancy</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={occupancyData}>
              <XAxis dataKey="screen" stroke="#94a3b8" />
              <Tooltip />
              <Bar dataKey="value" fill="#f97316" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Visitor Trend */}
      <div className="bg-white dark:bg-[#1e293b] p-6 rounded-xl">
        <h3 className="mb-4">Visitor Trend</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={visitorData}>
            <XAxis dataKey="time" stroke="#94a3b8" />
            <Tooltip />
            <Line
              dataKey="visitors"
              stroke="#f97316"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
