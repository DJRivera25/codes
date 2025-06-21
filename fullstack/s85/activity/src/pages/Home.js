import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import WorkoutCard from "../components/WorkoutCard";
import AddWorkoutModal from "../components/AddWorkoutModal";

const Home = () => {
  const [workouts, setWorkouts] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newWorkout, setNewWorkout] = useState({
    name: "",
    duration: "",
  });

  const token = localStorage.getItem("token");
  const fetchWorkouts = async () => {
    try {
      const res = await axios.get("https://fitnessapp-api-ln8u.onrender.com/workouts/getMyWorkouts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data);
      if (res.data.message) {
      }
      setWorkouts(res.data.workouts);
    } catch (error) {
      console.log(error.message);
      toast.error("No Workouts Found. add workout!");
    }
  };

  useEffect(() => {
    fetchWorkouts();
  }, [newWorkout]);

  const handleAddWorkout = async () => {
    try {
      const res = await axios.post("https://fitnessapp-api-ln8u.onrender.com/workouts/addWorkout", newWorkout, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Workout added successfully!");
    } catch (error) {
      console.log(error.message);
      toast.error("Failed to add workout");
    }
  };

  return (
    <div className="min-h-screen py-10 px-4 ">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-violet-700">Your Workouts</h1>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-5 py-2 rounded shadow transition"
          >
            + Add Workout
          </button>
        </div>

        <WorkoutCard workouts={workouts} fetchWorkouts={fetchWorkouts} />
      </div>
      <AddWorkoutModal
        showAddModal={showAddModal}
        setShowAddModal={setShowAddModal}
        newWorkout={newWorkout}
        setNewWorkout={setNewWorkout}
        handleAddWorkout={handleAddWorkout}
      />
    </div>
  );
};

export default Home;
