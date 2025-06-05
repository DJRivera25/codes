import { useState, useEffect, useContext } from "react";
import axios from "axios";
import AdminView from "../components/AdminView";
import UserView from "../components/UserView";
import UserContext from "../context/UserContext";
import { Spinner } from "react-bootstrap";
import baseURL from "../api/baseURL"; // 👈 import baseURL

export default function Courses() {
  const { user } = useContext(UserContext);
  const [courses, setCourses] = useState([]);
  const [loadingCourses, setLoadingCourses] = useState(true);

  async function fetchCourses(showSpinner = false) {
    try {
      if (showSpinner) setLoadingCourses(true);

      const url = user.isAdmin
        ? `${baseURL}/courses/all` // 👈 use baseURL here
        : `${baseURL}/courses/`; // 👈 use baseURL here

      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setCourses(res.data);
    } catch (error) {
      console.error("Failed to fetch courses", error);
    } finally {
      if (showSpinner) setTimeout(() => setLoadingCourses(false), 200);
    }
  }

  useEffect(() => {
    if (user) {
      fetchCourses(true);
    }
  }, [user]);

  if (loadingCourses) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <>
      {user.isAdmin ? (
        <AdminView coursesData={courses} refreshCourses={fetchCourses} />
      ) : (
        <UserView coursesData={courses} refreshCourses={fetchCourses} />
      )}
    </>
  );
}
