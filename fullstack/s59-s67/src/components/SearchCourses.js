import { useEffect, useState } from "react";
import axios from "axios";
import baseURL from "../api/baseURL"; // 👈 import baseURL

export default function SearchCourses({ coursesData, setFilteredCourses }) {
  const [searchName, setSearchName] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // <-- new state

  async function searchCoursesByName() {
    const requestBody = {};
    if (searchName) {
      requestBody.name = searchName;
    }

    if (minPrice > 0) {
      requestBody.minPrice = minPrice;
    }

    if (maxPrice > 0) {
      requestBody.maxPrice = maxPrice;
    }

    try {
      const res = await axios.post(`${baseURL}/courses/search`, requestBody); // 👈 use baseURL here
      setFilteredCourses(res.data);
      setErrorMessage(""); // Clear error on success
    } catch (error) {
      setFilteredCourses([]); // Clear results on error
      setErrorMessage("Course not found"); // Show error message
    }
  }

  useEffect(() => {
    if (searchName || minPrice || maxPrice) {
      searchCoursesByName();
    } else {
      setFilteredCourses(coursesData);
      setErrorMessage(""); // Clear error if no filter
    }
  }, [searchName, minPrice, maxPrice, coursesData]);

  return (
    <div className="mb-4 d-flex flex-column align-items-center">
      <div className="d-flex justify-content-between align-items-center" style={{ width: "100%" }}>
        {/* Search bar aligned left */}
        <input
          type="search"
          placeholder="Search courses by name..."
          className="form-control"
          style={{ maxWidth: "500px" }}
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          aria-label="Search courses"
        />

        {/* Min and Max price inputs grouped on the right */}
        <div className="d-flex gap-2" style={{ minWidth: "220px", justifyContent: "flex-end" }}>
          <input
            type="number"
            placeholder="Min Price"
            className="form-control"
            style={{ maxWidth: "150px" }}
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            aria-label="Minimum price"
          />
          <input
            type="number"
            placeholder="Max Price"
            className="form-control"
            style={{ maxWidth: "150px" }}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            aria-label="Maximum price"
          />
        </div>
      </div>

      {/* Error message display */}
      {errorMessage && <div style={{ color: "red", marginTop: "8px", fontWeight: "bold" }}>{errorMessage}</div>}
    </div>
  );
}
