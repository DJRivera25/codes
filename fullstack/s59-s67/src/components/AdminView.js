import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import UserContext from "../context/UserContext";
import EditCourse from "./EditCourse";
import { FaEdit, FaTrash, FaArchive, FaCheck } from "react-icons/fa";
import { Notyf } from "notyf";
import SearchCourses from "./SearchCourses";
import baseURL from "../api/baseURL"; // 👈 Using your env-based baseURL

export default function AdminView({ coursesData, refreshCourses }) {
  const notyf = new Notyf();
  const { users } = useContext(UserContext);
  const [courses, setCourses] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    setCourses(coursesData);
    setAllCourses(coursesData);
  }, [coursesData]);

  async function editCourse(courseId) {
    const courseToEdit = courses.find((c) => c._id === courseId);
    if (courseToEdit) {
      setSelectedCourse(courseToEdit);
      setEditForm({
        name: courseToEdit.name,
        description: courseToEdit.description,
        price: courseToEdit.price,
      });
      setShowModal(true);
    }
  }

  async function submitEdit(e) {
    e.preventDefault();
    const res = await axios.patch(
      `${baseURL}/courses/${selectedCourse._id}`,
      {
        name: editForm.name,
        description: editForm.description,
        price: editForm.price,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    setShowModal(false);
    refreshCourses();
    notyf.success(res.data.message);
  }

  function handleChange(e) {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  }

  async function archiveCourse(courseId) {
    const res = await axios.patch(
      `${baseURL}/courses/${courseId}/archive`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    refreshCourses();
    notyf.success(res.data.message);
  }

  async function activateCourse(courseId) {
    const res = await axios.patch(
      `${baseURL}/courses/${courseId}/activate`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    refreshCourses();
    notyf.success(res.data.message);
  }

  async function deleteCourse(courseId) {
    const res = await axios.delete(`${baseURL}/courses/${courseId}/delete`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    refreshCourses();
    notyf.success(res.data.message);
  }

  return (
    <>
      <h1 className="text-center my-4">Admin Dashboard</h1>
      <SearchCourses coursesData={allCourses} setFilteredCourses={setCourses} />

      {/* ✅ Reusable Modal Component */}
      <EditCourse
        show={showModal}
        onHide={() => setShowModal(false)}
        formData={editForm}
        handleChange={handleChange}
        handleSubmit={submitEdit}
      />

      <div className="d-flex flex-wrap justify-content-center gap-4">
        <Table striped bordered hover responsive>
          <thead className="table-primary">
            <tr className="flex text-center align-middle">
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price (Php)</th>
              <th>Enrollees</th>
              <th>Availability</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(courses) &&
              courses.map((course) => (
                <tr key={course._id}>
                  <td>{course._id}</td>
                  <td>{course.name}</td>
                  <td>{course.description}</td>
                  <td>{course.price.toFixed(2)}</td>
                  <td>{/* ❗ Fix: Replace duplicated price with real enrollees count if available */}</td>
                  <td>
                    {course.isActive ? (
                      <span className="text-success">Available</span>
                    ) : (
                      <span className="text-danger">Unavailable</span>
                    )}
                  </td>
                  <td>
                    <div className="d-flex gap-1">
                      <Button variant="primary" size="sm" onClick={() => editCourse(course._id)}>
                        <FaEdit />
                      </Button>
                      {course.isActive ? (
                        <Button variant="danger" size="sm" onClick={() => archiveCourse(course._id)}>
                          <FaArchive />
                        </Button>
                      ) : (
                        <Button variant="success" size="sm" onClick={() => activateCourse(course._id)}>
                          <FaCheck />
                        </Button>
                      )}
                      <Button variant="secondary" size="sm" className="me-2" onClick={() => deleteCourse(course._id)}>
                        <FaTrash />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
