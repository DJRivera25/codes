import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import MovieCard from "../components/MovieCard";
import AddMovieModal from "../components/AddMovieModal";
import UserContext from "../context/UserContext";

const Movie = () => {
  const { user } = useContext(UserContext);
  const [movies, setMovies] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newMovie, setNewMovie] = useState({
    title: "",
    director: "",
    year: "",
    description: "",
    genre: "",
  });

  const token = localStorage.getItem("token");
  console.log(user);
  const fetchMovies = async () => {
    try {
      const res = await axios.get("https://movieapp-api-lms1.onrender.com/movies/getMovies", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMovies(res.data.movies);
    } catch (error) {
      console.log(error.message);
      toast.error("No movies found. Try adding one!");
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [showAddModal]);

  const handleAddMovie = async (e) => {
    e.preventDefault(); // 🛑 prevent page refresh
    try {
      await axios.post("https://movieapp-api-lms1.onrender.com/movies/addMovie", newMovie, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Movie added successfully!");
      setShowAddModal(false); // 🔒 close modal after adding
      setNewMovie({
        title: "",
        director: "",
        year: "",
        description: "",
        genre: "",
      });
    } catch (error) {
      console.log(error.message);
      toast.error("Failed to add movie");
    }
  };

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-violet-700">Movies Catalog</h1>

          {/* ✅ Show Add button only for admins */}
          {user?.isAdmin && (
            <button
              onClick={() => setShowAddModal(true)}
              className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-5 py-2 rounded shadow transition"
            >
              + Add Movie
            </button>
          )}
        </div>

        <MovieCard movies={movies} fetchMovies={fetchMovies} />
      </div>

      {/* Modal (admin only) */}
      {user?.isAdmin && (
        <AddMovieModal
          showAddModal={showAddModal}
          setShowAddModal={setShowAddModal}
          newMovie={newMovie}
          setNewMovie={setNewMovie}
          handleAddMovie={handleAddMovie}
        />
      )}
    </div>
  );
};

export default Movie;
