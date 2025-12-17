import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

// Movie screening events (sample data)
const events = [
  {
    title: "Avengers: Endgame – Screen 1",
    start: new Date(2025, 0, 18, 10, 0),
    end: new Date(2025, 0, 18, 13, 0),
  },
  {
    title: "Inception – Screen 2",
    start: new Date(2025, 0, 19, 14, 0),
    end: new Date(2025, 0, 19, 17, 0),
  },
  {
    title: "Interstellar – Screen 3",
    start: new Date(2025, 0, 20, 18, 0),
    end: new Date(2025, 0, 20, 21, 0),
  },
  {
    title: "Jawan – Screen 1",
    start: new Date(2025, 0, 21, 11, 0),
    end: new Date(2025, 0, 21, 14, 0),
  },
];

export default function CalendarPage() {
  return (
    <div className="p-6">
      <h2 className="text-white text-xl font-semibold mb-4">
        Movie Screening Calendar
      </h2>

      <div className="bg-[#1e293b] p-4 rounded-xl">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          views={["month", "week", "day", "agenda"]}
          defaultView="month"
          style={{ height: 600 }}
          popup
          eventPropGetter={() => ({
            style: {
              backgroundColor: "#f97316",
              borderRadius: "6px",
              color: "#fff",
              border: "none",
            },
          })}
        />
      </div>
    </div>
  );
}
