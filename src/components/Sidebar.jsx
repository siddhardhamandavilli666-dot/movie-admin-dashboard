import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Calendar,
  Kanban,
  BarChart3,
  Ticket,
  Film, // ✅ ADDED
} from "lucide-react";

export default function Sidebar() {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-lg transition
    ${
      isActive
        ? "bg-orange-500 text-white"
        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800"
    }`;

  return (
    <aside className="w-64 min-h-screen p-6
      bg-white dark:bg-[#121826]
      border-r border-gray-200 dark:border-slate-800">

      <h1 className="text-xl font-bold mb-8
        text-black dark:text-white">
        🎬 CineAdmin
      </h1>

      <nav className="space-y-2">
        <NavLink to="/" className={linkClass}>
          <LayoutDashboard size={18} /> Dashboard
        </NavLink>

        {/* ✅ ADDED: Movies link */}
        <NavLink to="/movies" className={linkClass}>
          <Film size={18} /> Movies
        </NavLink>

        <NavLink to="/calendar" className={linkClass}>
          <Calendar size={18} /> Calendar
        </NavLink>

        <NavLink to="/kanban" className={linkClass}>
          <Kanban size={18} /> Kanban
        </NavLink>

        <NavLink to="/analytics" className={linkClass}>
          <BarChart3 size={18} /> Analytics
        </NavLink>

        <NavLink to="/bookings" className={linkClass}>
          <Ticket size={18} /> Bookings
        </NavLink>
      </nav>
    </aside>
  );
}
