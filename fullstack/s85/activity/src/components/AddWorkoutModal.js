import React from "react";

const AddWorkoutModal = ({ showAddModal, setShowAddModal, newWorkout, setNewWorkout, handleAddWorkout }) => {
  if (!showAddModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg space-y-4 animate-fade-in-up">
        <h2 className="text-xl font-bold text-violet-700">Add New Workout</h2>

        <form onSubmit={handleAddWorkout} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Workout Name</label>
            <input
              type="text"
              name="name"
              value={newWorkout.name}
              onChange={(e) => setNewWorkout({ ...newWorkout, name: e.target.value })}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="e.g. Push-Up Challenge"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Duration</label>
            <input
              type="text"
              name="duration"
              value={newWorkout.duration}
              onChange={(e) => setNewWorkout({ ...newWorkout, duration: e.target.value })}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="e.g. 30 mins"
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
              Add Workout
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddWorkoutModal;
