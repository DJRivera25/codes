import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Notyf } from "notyf";

import UserContext from "../context/UserContext";
import baseURL from "../api/baseURL"; // <-- added here

export default function CourseView() {
  const notyf = new Notyf();
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);

  const fetchCourse = async () => {
    try {
      const res = await fetch(`${baseURL}/courses/specific/${courseId}`); // <-- used baseURL here
      const data = await res.json();
      setCourse(data);
      console.log(data);
    } catch (error) {
      console.error("Failed to fetch course:", error);
    }
  };

  useEffect(() => {
    fetchCourse();
  }, [courseId]);

  async function enroll(courseId) {
    try {
      const res = await fetch(`${baseURL}/enrollments/enroll`, {
        // <-- used baseURL here
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          enrolledCourses: [{ courseId }],
          totalPrice: course.price,
        }),
      });
      const data = await res.json();
      if (data.message === "Enrolled successfully") {
        notyf.success(data.message);
        navigate("/courses");
      } else if (data.message === "Admin is forbidden") {
        notyf.error(data.message);
      } else {
        notyf.error("Internal Server Error. Notify System Admin");
      }
    } catch (error) {
      console.log(error);
    }
  }
  if (!course) {
    return <p>Loading course details...</p>;
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Body>
              <Card.Title>{course.name}</Card.Title>
              <Card.Subtitle>Description:</Card.Subtitle>
              <Card.Text>{course.description}</Card.Text>
              <Card.Subtitle>Price:</Card.Subtitle>
              <Card.Text>PHP {course.price}</Card.Text>
              <Card.Subtitle>Class Schedule:</Card.Subtitle>
              <Card.Text>8am to 5pm</Card.Text>
              <Button variant="primary" onClick={() => enroll(courseId)}>
                Enroll
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
