import React from "react";

const AddMovieModal = ({ showAddModal, setShowAddModal, newMovie, setNewMovie, handleAddMovie }) => {
  if (!showAddModal) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg space-y-4 animate-fade-in-up">
        <h2 className="text-xl font-bold text-violet-700">Add Movie</h2>

        <form onSubmit={handleAddMovie} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={newMovie.title || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="e.g. Inception"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Director</label>
            <input
              type="text"
              name="director"
              value={newMovie.director || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="e.g. Christopher Nolan"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Year</label>
            <input
              type="number"
              name="year"
              value={newMovie.year || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="e.g. 2010"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Genre</label>
            <input
              type="text"
              name="genre"
              value={newMovie.genre || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="e.g. Science Fiction"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={newMovie.description || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="A mind-bending thriller about dreams within dreams."
              rows={3}
              required
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => setShowAddModal(false)}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-violet-600 text-white rounded hover:bg-violet-700 transition">
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMovieModal;
