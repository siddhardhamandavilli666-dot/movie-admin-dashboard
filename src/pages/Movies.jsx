import { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import MovieForm from "../components/MovieForm";
import Notification from "../components/Notification";

export default function Movies() {
  const { movies, addMovie, updateMovie } = useContext(MovieContext);

  const [editingMovie, setEditingMovie] = useState(null);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("success");
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);

  const rowsPerPage = 3;

  const handleSubmit = (movie, error) => {
    if (error) {
      setType("error");
      setMessage(error);
      return;
    }

    if (movie.id) {
      updateMovie(movie);
      setMessage("Movie updated successfully");
    } else {
      addMovie(movie);
      setMessage("Movie added successfully");
    }

    setType("success");
    setEditingMovie(null);
  };

  const filteredMovies = movies.filter((m) =>
    m.title.toLowerCase().includes(filter.toLowerCase())
  );

  const totalPages = Math.ceil(filteredMovies.length / rowsPerPage);
  const visibleMovies = filteredMovies.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <div className="p-6">
      <Notification message={message} type={type} />

      <MovieForm editingMovie={editingMovie} onSubmit={handleSubmit} />

      <input
        className="input mb-4"
        placeholder="Filter by movie title..."
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
          setPage(1);
        }}
      />

      <div className="bg-white dark:bg-[#1e293b] rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-400">
              <th className="p-4">Title</th>
              <th className="p-4">Genre</th>
              <th className="p-4">Duration</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {visibleMovies.map((m) => (
              <tr key={m.id} className="border-t border-slate-700">
                <td className="p-4">{m.title}</td>
                <td className="p-4">{m.genre}</td>
                <td className="p-4">{m.duration} min</td>
                <td className="p-4">
                  <button
                    onClick={() => setEditingMovie(m)}
                    className="text-blue-400"
                  >
                    Edit
                  </button>
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
          className="px-3 py-1 bg-slate-800 text-gray-300 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="px-2 text-gray-400">
          {page} / {totalPages}
        </span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="px-3 py-1 bg-slate-800 text-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
