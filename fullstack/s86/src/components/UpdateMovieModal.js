import React from "react";

const UpdateMovieModal = ({
  showUpdateModal,
  setShowUpdateModal,
  currentMovie,
  setCurrentMovie,
  handleUpdateMovie,
}) => {
  if (!showUpdateModal) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentMovie({ ...currentMovie, [name]: value });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg space-y-4 animate-fade-in-up">
        <h2 className="text-xl font-bold text-violet-700">Update Movie</h2>

        <form onSubmit={handleUpdateMovie} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={currentMovie.title || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="e.g. Inception"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Director</label>
            <input
              type="text"
              name="director"
              value={currentMovie.director || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="e.g. Christopher Nolan"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Year</label>
            <input
              type="number"
              name="year"
              value={currentMovie.year || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="e.g. 2010"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Genre</label>
            <input
              type="text"
              name="genre"
              value={currentMovie.genre || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="e.g. Science Fiction"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={currentMovie.description || ""}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="A mind-bending thriller about dreams within dreams."
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => setShowUpdateModal(false)}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-violet-600 text-white rounded hover:bg-violet-700 transition">
              Update Movie
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateMovieModal;
