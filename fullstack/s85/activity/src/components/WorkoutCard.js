import React, { useState } from "react";
import { Edit3, Trash2 } from "lucide-react";
import UpdateWorkoutModal from "./UpdateWorkoutModal";
import { toast } from "react-toastify";
import axios from "axios";

const WorkoutCard = ({ workouts, fetchWorkouts }) => {
  const [currentWorkout, setCurrentWorkout] = useState({
    name: "",
    duration: "",
    id: "",
  });
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const formatDate = (dateString) => {
    if (!dateString) return "Date not available";
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const token = localStorage.getItem("token");

  const handleUpdateWorkout = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.patch(
        `https://fitnessapp-api-ln8u.onrender.com/workouts/updateWorkout/${currentWorkout.id}`,
        currentWorkout,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Workout updated successfully!");
      setShowUpdateModal(false);
      fetchWorkouts();
    } catch (error) {
      console.log(error.message);
      toast.error("Failed to update workout.");
    }
  };

  const handleCompleteWorkout = async (id) => {
    try {
      const res = await axios.patch(
        `https://fitnessapp-api-ln8u.onrender.com/workouts/completeWorkoutStatus/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Congratulations! Workout Completed");
      fetchWorkouts();
    } catch (error) {
      console.log(error.message);
      toast.error("Failed to update workout status.");
    }
  };

  const handleDeleteWorkout = async (id) => {
    try {
      const res = await axios.delete(`https://fitnessapp-api-ln8u.onrender.com/workouts/deleteWorkout/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Workout deleted successfully!");
      fetchWorkouts();
    } catch (error) {
      console.log(error.message);
      toast.error("Failed to delete workout.");
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.isArray(workouts) &&
          workouts.map((w) => (
            <div
              key={w._id}
              className="relative bg-white rounded-2xl shadow-md p-6 space-y-4 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Edit/Delete Icons */}
              <div className="absolute top-3 right-3 flex gap-2">
                <button
                  onClick={() => {
                    setShowUpdateModal(true);
                    setCurrentWorkout({
                      name: w.name,
                      duration: w.duration,
                      id: w._id,
                    });
                  }}
                  className="text-gray-400 hover:text-violet-600 transition"
                  title="Edit"
                >
                  <Edit3 size={18} />
                </button>
                <button
                  onClick={() => handleDeleteWorkout(w._id)}
                  className="text-gray-400 hover:text-red-500 transition"
                  title="Delete"
                >
                  <Trash2 size={18} />
                </button>
              </div>

              {/* Content */}
              <div>
                <h2 className="text-xl font-bold text-violet-700">{w.name}</h2>
                <p className="text-gray-600 text-sm mt-1">{w.status || "No description provided."}</p>
                <p className="text-sm text-violet-600 mt-2 font-medium">Duration: {w.duration}</p>
                <p className="text-xs text-gray-500 mt-1">Added on: {formatDate(w.dateAdded)}</p>
              </div>

              <button
                onClick={() => handleCompleteWorkout(w._id)}
                className="w-full px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
              >
                Complete
              </button>
            </div>
          ))}
      </div>
      <UpdateWorkoutModal
        showUpdateModal={showUpdateModal}
        setShowUpdateModal={setShowUpdateModal}
        currentWorkout={currentWorkout}
        setCurrentWorkout={setCurrentWorkout}
        handleUpdateWorkout={handleUpdateWorkout}
      />
    </>
  );
};

export default WorkoutCard;
