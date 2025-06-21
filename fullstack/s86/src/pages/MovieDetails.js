import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { toast } from "react-toastify";
import UserContext from "../context/UserContext";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useContext(UserContext);

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [commentInput, setCommentInput] = useState("");
  const [commentLoading, setCommentLoading] = useState(false);

  const fetchMovie = async () => {
    try {
      const res = await axios.get(`https://movieapp-api-lms1.onrender.com/movies/getMovie/${id}`);
      setMovie(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch movie:", err.message);
      setError("Failed to load movie details.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, [id]);

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!commentInput.trim()) {
      toast.error("Comment cannot be empty.");
      return;
    }

    try {
      setCommentLoading(true);
      await axios.patch(
        `https://movieapp-api-lms1.onrender.com/movies/addComment/${id}`,
        { comment: commentInput },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Comment added!");
      setCommentInput("");
      fetchMovie(); // Reload updated movie with new comments
    } catch (error) {
      console.error("Failed to add comment:", error.message);
      toast.error("Failed to post comment.");
    } finally {
      setCommentLoading(false);
    }
  };

  if (loading || !movie) {
    return <div className="text-center py-20 text-violet-600 text-xl font-semibold">Loading movie details...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-red-500 text-lg font-semibold">{error}</div>;
  }

  return (
    <div className="min-h-screen px-4 py-10 bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-6">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-violet-600 hover:underline"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        {/* Movie Info */}
        <h1 className="text-3xl font-bold text-violet-700">{movie.title}</h1>
        <div className="space-y-2 text-gray-700">
          <p>
            <strong>🎬 Director:</strong> {movie.director}
          </p>
          <p>
            <strong>📅 Year:</strong> {movie.year}
          </p>
          <p>
            <strong>🎭 Genre:</strong> {movie.genre}
          </p>
          <p>
            <strong>📝 Description:</strong>
          </p>
          <p className="pl-4 border-l-4 border-violet-300 text-gray-600">{movie.description}</p>
        </div>

        <p className="text-sm text-gray-400 mt-4">
          Added on:{" "}
          {new Date(movie.dateAdded).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        {/* Comments Section */}
        <div className="mt-10">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-violet-700 mb-4">
            <MessageCircle size={20} />
            Comments
          </h2>

          {/* Add Comment Form */}
          <form onSubmit={handleAddComment} className="mb-6">
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              rows="3"
              placeholder="Write a comment..."
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
            />
            <button
              type="submit"
              disabled={commentLoading}
              className="mt-2 px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition"
            >
              {commentLoading ? "Posting..." : "Post Comment"}
            </button>
          </form>

          {/* List of Comments */}
          {Array.isArray(movie.comments) && movie.comments.length > 0 ? (
            <ul className="space-y-4">
              {movie.comments.map((c, index) => (
                <li key={index} className="border rounded-lg p-4 bg-gray-50 shadow-sm">
                  <p className="text-gray-700">💬 {c.comment}</p>
                  <div className="text-sm text-gray-500 mt-2">
                    <span>👤 {c.userEmail || "Anonymous"}</span>
                    {" • "}
                    <span>{new Date(c.date).toLocaleDateString()}</span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No comments yet. Be the first to share your thoughts!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
