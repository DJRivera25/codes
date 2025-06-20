import { useState, useEffect, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import baseURL from "../api/baseURL"; // <-- added this import

export default function Login() {
  const { user, setUser } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isActive, setIsActive] = useState(false);

  function authenticate(e) {
    e.preventDefault();
    fetch(`${baseURL}/users/login`, {
      // <-- used baseURL here
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.access !== undefined) {
          console.log(data.access);
          localStorage.setItem("token", data.access);
          retrieveUserDetails(data.access);
          setEmail("");
          setPassword("");
          alert(`You are now logged in`);
        } else if (data.message === "Incorrect email or password") {
          alert(`Incorrect email or password`);
        } else {
          alert(`${email} does not exist`);
        }
      });
  }

  function retrieveUserDetails(token) {
    fetch(`${baseURL}/users/details`, {
      // <-- used baseURL here
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser({
          id: data._id,
          isAdmin: data.isAdmin,
        });
      });
  }

  useEffect(() => {
    if (email !== "" && password !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [email, password]);

  return user.id !== null ? (
    <Navigate to="/courses" />
  ) : (
    <Form onSubmit={(e) => authenticate(e)}>
      <h1 className="my-5 text-center">Login</h1>
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      {isActive ? (
        <Button variant="primary" type="submit" id="loginBtn">
          Login
        </Button>
      ) : (
        <Button variant="danger" type="submit" id="loginBtn" disabled>
          Login
        </Button>
      )}
    </Form>
  );
}
