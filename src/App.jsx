import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import CalendarPage from "./pages/CalendarPage";
import KanbanPage from "./pages/KanbanPage";
import BookingsTable from "./pages/BookingsTable";
import Movies from "./pages/Movies"; // ✅ NEW

export default function App() {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-[#0f172a]">
      <Sidebar />
      <div className="flex-1">
        <Topbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/kanban" element={<KanbanPage />} />
          <Route path="/bookings" element={<BookingsTable />} />
          <Route path="/movies" element={<Movies />} /> {/* ✅ NEW */}
        </Routes>
      </div>
    </div>
  );
}
