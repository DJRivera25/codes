import { useState, useEffect, useContext } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { useNavigate, Navigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { Notyf } from "notyf";
import baseURL from "../api/baseURL"; // 👈 import baseURL

export default function AddCourse() {
  const notyf = new Notyf();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (name.trim() !== "" && description.trim() !== "" && Number(price) > 0) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [name, description, price]);

  if (!user) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (!user.isAdmin) {
    return <Navigate to="/courses" replace />;
  }

  async function addCourse(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${baseURL}/courses/`, {
        // 👈 use baseURL here
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          name,
          description,
          price: Number(price),
        }),
      });

      const data = await res.json();

      if (data.message === "Course already exists") {
        notyf.error(data.message);
      } else if (data.message === "Course added successfully") {
        notyf.success(data.message);
        setName("");
        setDescription("");
        setPrice("");
      } else {
        notyf.error("Unsuccessful Course Creation");
      }
    } catch (error) {
      console.error(error);
      notyf.error("Network error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form onSubmit={addCourse}>
      <h1 className="my-5 text-center">Add Course</h1>

      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          min="0"
          required
        />
      </Form.Group>

      <Button variant={isActive ? "primary" : "secondary"} type="submit" disabled={!isActive || loading}>
        {loading ? "Adding..." : "Add Course"}
      </Button>
    </Form>
  );
}
