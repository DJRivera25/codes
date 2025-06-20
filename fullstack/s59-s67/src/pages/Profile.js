import { useState, useEffect, useContext } from "react";
import { Container, Card, ListGroup, Spinner, Row, Col, Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";

import UserContext, { UserProvider } from "../context/UserContext";
import EditProfile from "../components/EditProfile";
import ResetPassword from "../components/ResetPassword";
import baseURL from "../api/baseURL"; // <-- added baseURL import

export default function Profile() {
  const { user } = useContext(UserProvider);
  const [details, setDetails] = useState({});
  const [loadingUser, setLoadingUser] = useState(true);
  const [checkingUser, setCheckingUser] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCheckingUser(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const fetchUserDetails = async () => {
    try {
      setLoadingUser(true);
      const response = await fetch(`${baseURL}/users/details`, {
        // <-- used baseURL here
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const data = await response.json();

      if (data && typeof data === "object") {
        setDetails(data);
        setTimeout(() => setLoadingUser(false), 300);
      } else if (data?.error === "User not found") {
        alert("User not found.");
      } else {
        alert("Something went wrong, kindly contact us for assistance.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Failed to fetch user details. Please try again later.");
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  if (!user?.id && !checkingUser) {
    return <Navigate to="/courses" />;
  }

  return (
    <Container className="mt-5">
      <h1 className="mb-5 text-center display-5 fw-bold">My Profile</h1>

      {loadingUser ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "30vh" }}>
          <Spinner animation="border" role="status" variant="primary">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <Row className="justify-content-center">
          <Col md={10} lg={8} xl={6}>
            <Card className="shadow-lg border-0 rounded-4">
              <Card.Header className="d-flex justify-content-between align-items-center bg-primary text-white py-3 px-4 rounded-top-4">
                <h4 className="mb-0 fw-semibold">User Information</h4>
                <EditProfile details={details} refresh={fetchUserDetails} />
              </Card.Header>

              <ListGroup variant="flush" className="fs-5 px-4 py-3">
                <ListGroup.Item className="py-3">
                  <strong>Name:</strong> {details.firstName} {details.lastName}
                </ListGroup.Item>
                <ListGroup.Item className="py-3">
                  <strong>Email:</strong> {details.email}
                </ListGroup.Item>
                <ListGroup.Item className="py-3">
                  <strong>Mobile No:</strong> {details.mobileNo}
                </ListGroup.Item>
              </ListGroup>

              <ResetPassword />
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
}
