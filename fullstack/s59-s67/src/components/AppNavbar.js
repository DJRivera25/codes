import { useState, useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Spinner } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import UserContext from "../context/UserContext";

export default function AppNavbar() {
  const { user, loadingUser } = useContext(UserContext);

  return (
    <Navbar expand="lg" className="bg-light">
      <Container className="d-flex justify-content-between align-items-center">
        {/* Brand aligned left */}
        <Navbar.Brand as={NavLink} to="/">
          Zuitt Booking
        </Navbar.Brand>

        {/* Hamburger toggle aligned right */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Nav links */}
        <Navbar.Collapse id="basic-navbar-nav" className="order-lg-1">
          <Nav className="me-auto">
            {loadingUser ? (
              <Nav className="mx-auto text-secondary d-flex align-items-center">
                <Spinner animation="border" size="sm" role="status" className="me-2" />
                Loading...
              </Nav>
            ) : user.id !== null ? (
              <>
                <Nav.Link as={NavLink} to="/" end>
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} to="/courses" end>
                  Courses
                </Nav.Link>
                <Nav.Link as={NavLink} to="/news" end>
                  News
                </Nav.Link>
                {user.isAdmin && (
                  <Nav.Link as={NavLink} to="/addCourse" end>
                    Add Course
                  </Nav.Link>
                )}
                <Nav.Link as={NavLink} to="/profile" end>
                  Profile
                </Nav.Link>
                <Nav.Link as={NavLink} to="/logout" end>
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={NavLink} to="/" end>
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} to="/courses" end>
                  Courses
                </Nav.Link>
                <Nav.Link as={NavLink} to="/news" end>
                  News
                </Nav.Link>
                <Nav.Link as={NavLink} to="/login" end>
                  Login
                </Nav.Link>
                <Nav.Link as={NavLink} to="/register" end>
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
