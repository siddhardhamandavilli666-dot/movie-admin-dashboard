import { useEffect, useState } from "react";

export default function MovieForm({ editingMovie, onSubmit }) {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [duration, setDuration] = useState("");

  useEffect(() => {
    if (editingMovie) {
      setTitle(editingMovie.title);
      setGenre(editingMovie.genre);
      setDuration(editingMovie.duration);
    }
  }, [editingMovie]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !genre || !duration) {
      return onSubmit(null, "All fields are required");
    }

    if (duration <= 0) {
      return onSubmit(null, "Duration must be greater than 0");
    }

    onSubmit(
      {
        id: editingMovie?.id,
        title,
        genre,
        duration: Number(duration),
      },
      null
    );

    setTitle("");
    setGenre("");
    setDuration("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-[#1e293b] p-4 rounded-xl mb-6"
    >
      <h3 className="text-lg font-semibold mb-4">
        {editingMovie ? "Edit Movie" : "Add Movie"}
      </h3>

      <div className="grid md:grid-cols-3 gap-4">
        <input
          className="input"
          placeholder="Movie Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="input"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <input
          className="input"
          type="number"
          placeholder="Duration (min)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      </div>

      <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg">
        {editingMovie ? "Update Movie" : "Add Movie"}
      </button>
    </form>
  );
}
