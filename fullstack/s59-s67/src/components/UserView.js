import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import SearchCourses from "./SearchCourses";

export default function UserView({ coursesData }) {
  const [availableCourses, setAvailableCourses] = useState([]);
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    setAvailableCourses(coursesData);
    setAllCourses(coursesData);
  }, [coursesData]);

  return (
    <>
      <h1 className="text-center">Courses</h1>
      <SearchCourses coursesData={allCourses} setFilteredCourses={setAvailableCourses} />
      <div className="row justify-content-center">
        {Array.isArray(availableCourses) &&
          availableCourses.map((course) => (
            <div key={course._id} className="col-12 mb-4">
              <CourseCard courseProp={course} />
            </div>
          ))}
      </div>
    </>
  );
}
