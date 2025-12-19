import { useState } from "react";
import { Plus, Trash2, Edit } from "lucide-react";

const initialBookings = [
  {
    id: 1,
    customer: "Rahul",
    movie: "Inception",
    seats: 2,
    amount: 400,
    status: "Confirmed",
  },
  {
    id: 2,
    customer: "Anjali",
    movie: "Interstellar",
    seats: 3,
    amount: 600,
    status: "Pending",
  },
  {
    id: 3,
    customer: "Suresh",
    movie: "Jawan",
    seats: 1,
    amount: 200,
    status: "Cancelled",
  },
];

export default function BookingsTable() {
  const [bookings, setBookings] = useState(initialBookings);
  const [filter, setFilter] = useState("All");
  const [page, setPage] = useState(1);

  const rowsPerPage = 2;

  const filteredBookings =
    filter === "All"
      ? bookings
      : bookings.filter((b) => b.status === filter);

  const totalPages = Math.ceil(filteredBookings.length / rowsPerPage);

  const visibleRows = filteredBookings.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const addBooking = () => {
    setBookings([
      ...bookings,
      {
        id: Date.now(),
        customer: "New User",
        movie: "New Movie",
        seats: 1,
        amount: 200,
        status: "Confirmed",
      },
    ]);
  };

  const deleteBooking = (id) => {
    setBookings(bookings.filter((b) => b.id !== id));
  };

  return (
    <div className="p-6 text-black dark:text-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Bookings</h2>
        <button
          onClick={addBooking}
          className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg"
        >
          <Plus size={16} /> Add Booking
        </button>
      </div>

      {/* Filter */}
      <div className="mb-4">
        <select
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            setPage(1);
          }}
          className="bg-gray-100 dark:bg-[#1e293b]
          text-black dark:text-gray-300
          px-3 py-2 rounded-lg outline-none"
        >
          <option>All</option>
          <option>Confirmed</option>
          <option>Pending</option>
          <option>Cancelled</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white dark:bg-[#1e293b] rounded-xl">
        <table className="w-full text-left">
          <thead className="border-b border-gray-200 dark:border-slate-700
            text-gray-500 dark:text-gray-400">
            <tr>
              <th className="p-4">Customer</th>
              <th className="p-4">Movie</th>
              <th className="p-4">Seats</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {visibleRows.map((b) => (
              <tr
                key={b.id}
                className="border-b border-gray-200 dark:border-slate-700
                text-gray-700 dark:text-gray-300"
              >
                <td className="p-4">{b.customer}</td>
                <td className="p-4">{b.movie}</td>
                <td className="p-4">{b.seats}</td>
                <td className="p-4">₹{b.amount}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      b.status === "Confirmed"
                        ? "bg-green-500/20 text-green-500"
                        : b.status === "Pending"
                        ? "bg-yellow-500/20 text-yellow-500"
                        : "bg-red-500/20 text-red-500"
                    }`}
                  >
                    {b.status}
                  </span>
                </td>
                <td className="p-4 flex gap-3">
                  <Edit
                    className="cursor-pointer text-blue-500"
                    size={18}
                  />
                  <Trash2
                    className="cursor-pointer text-red-500"
                    size={18}
                    onClick={() => deleteBooking(b.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end gap-2 mt-4">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-3 py-1
          bg-gray-200 dark:bg-slate-800
          text-gray-700 dark:text-gray-300
          rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="px-2 text-gray-500 dark:text-gray-400">
          {page} / {totalPages}
        </span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="px-3 py-1
          bg-gray-200 dark:bg-slate-800
          text-gray-700 dark:text-gray-300
          rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
