import { useState, useEffect } from "react";
import axios from "axios";
import { CardGroup, Spinner } from "react-bootstrap";
import PreviewCourses from "./PreviewCourses";
import baseURL from "../api/baseURL"; // 👈 import baseURL

export default function FeaturedCourses() {
  const [previews, setPreviews] = useState([]);
  const [loadingCourses, setLoadingCourses] = useState(true); // Local loading state

  useEffect(() => {
    const fetchData = async () => {
      setLoadingCourses(true); // Start spinner
      try {
        const res = await axios.get(`${baseURL}/courses/`); // 👈 use baseURL here
        const courses = res.data;

        const selectedCourses = [];
        const usedIndexes = new Set();

        while (selectedCourses.length < 5 && usedIndexes.size < courses.length) {
          const randomIndex = Math.floor(Math.random() * courses.length);
          if (!usedIndexes.has(randomIndex)) {
            usedIndexes.add(randomIndex);
            selectedCourses.push(courses[randomIndex]);
          }
        }

        setPreviews(selectedCourses);
        setTimeout(() => {
          setLoadingCourses(false);
        }, 200);
      } catch (error) {
        console.error("Failed to fetch courses", error);
        setLoadingCourses(false);
      }
    };

    fetchData();
  }, []);

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
      <h2 className="text-center my-4">Featured Courses</h2>
      <CardGroup className="justify-content-center flex-wrap">
        {previews.map((course) => (
          <PreviewCourses key={course._id} course={course} breakPoint={2} />
        ))}
      </CardGroup>
    </>
  );
}
