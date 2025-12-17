import { Search, Bell } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Topbar() {
  return (
    <header className="flex justify-between items-center px-6 py-4
      bg-white dark:bg-[#0f172a]
      border-b border-gray-200 dark:border-slate-800">

      {/* Search */}
      <div className="flex items-center gap-2 px-4 py-2 rounded-lg w-72
        bg-gray-100 dark:bg-slate-800">
        <Search size={16} className="text-gray-500 dark:text-gray-400" />
        <input
          placeholder="Search movies, bookings..."
          className="bg-transparent outline-none text-sm
            text-black dark:text-gray-300 w-full"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-4
        text-gray-600 dark:text-gray-400">
        <ThemeToggle />
        <Bell />
        <div className="w-9 h-9 bg-orange-500 rounded-full
          text-white font-semibold flex items-center justify-center">
          A
        </div>
      </div>
    </header>
  );
}
