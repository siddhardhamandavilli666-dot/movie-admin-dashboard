import { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([
    { id: 1, title: "Inception", genre: "Sci-Fi", duration: 148 },
    { id: 2, title: "Interstellar", genre: "Sci-Fi", duration: 169 },
  ]);

  const addMovie = (movie) => {
    setMovies([...movies, { ...movie, id: Date.now() }]);
  };

  const updateMovie = (updatedMovie) => {
    setMovies(
      movies.map((m) => (m.id === updatedMovie.id ? updatedMovie : m))
    );
  };

  return (
    <MovieContext.Provider value={{ movies, addMovie, updateMovie }}>
      {children}
    </MovieContext.Provider>
  );
};
