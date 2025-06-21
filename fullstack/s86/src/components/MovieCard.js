import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Edit3, Trash2 } from "lucide-react";
import UpdateMovieModal from "./UpdateMovieModal";
import { toast } from "react-toastify";
import axios from "axios";
import UserContext from "../context/UserContext";

const MovieCard = ({ movies, fetchMovies }) => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const [currentMovie, setCurrentMovie] = useState({
    title: "",
    director: "",
    year: "",
    description: "",
    genre: "",
    id: "",
  });

  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const token = localStorage.getItem("token");

  const formatDate = (dateString) => {
    if (!dateString) return "Date not available";
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handleUpdateMovie = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.patch(
        `https://movieapp-api-lms1.onrender.com/movies/updateMovie/${currentMovie.id}`,
        currentMovie,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Movie updated successfully!");
      setShowUpdateModal(false);
      fetchMovies();
    } catch (error) {
      console.error(error.message);
      toast.error("Failed to update movie.");
    }
  };

  const handleDeleteMovie = async (id) => {
    try {
      const res = await axios.delete(`https://movieapp-api-lms1.onrender.com/movies/deleteMovie/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Movie deleted successfully!");
      fetchMovies();
    } catch (error) {
      console.error(error.message);
      toast.error("Failed to delete movie.");
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.isArray(movies) &&
          movies.map((movie) => (
            <div
              key={movie._id}
              className="relative bg-white rounded-2xl shadow-md p-6 space-y-4 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Admin-only Controls */}
              {user?.isAdmin && (
                <div className="absolute top-3 right-3 flex gap-2">
                  <button
                    onClick={() => {
                      setShowUpdateModal(true);
                      setCurrentMovie({
                        title: movie.title,
                        director: movie.director,
                        year: movie.year,
                        description: movie.description,
                        genre: movie.genre,
                        id: movie._id,
                      });
                    }}
                    className="text-gray-400 hover:text-violet-600 transition"
                    title="Edit"
                  >
                    <Edit3 size={18} />
                  </button>
                  <button
                    onClick={() => handleDeleteMovie(movie._id)}
                    className="text-gray-400 hover:text-red-500 transition"
                    title="Delete"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              )}

              {/* Movie Content */}
              <div>
                <h2 className="text-xl font-bold text-violet-700">{movie.title}</h2>
                <p className="text-sm text-gray-700">🎬 {movie.director}</p>
                <p className="text-sm text-gray-500">📅 {movie.year}</p>
                <p className="text-sm text-gray-600">🎭 {movie.genre}</p>
                <p className="text-sm text-gray-700 mt-2">{movie.description}</p>
                <p className="text-xs text-gray-400 mt-1">Added on: {formatDate(movie.dateAdded)}</p>
              </div>

              {/* View Button (everyone can see) */}
              <button
                onClick={() => navigate(`/movies/${movie._id}`)}
                className="w-full px-4 py-2 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition"
              >
                View Movie
              </button>
            </div>
          ))}
      </div>

      {/* Update Modal (admin only) */}
      {user?.isAdmin && (
        <UpdateMovieModal
          showUpdateModal={showUpdateModal}
          setShowUpdateModal={setShowUpdateModal}
          currentMovie={currentMovie}
          setCurrentMovie={setCurrentMovie}
          handleUpdateMovie={handleUpdateMovie}
        />
      )}
    </>
  );
};

export default MovieCard;
