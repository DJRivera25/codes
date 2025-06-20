import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import AppNavbar from "./components/AppNavbar";
import Courses from "./pages/Courses";
import Home from "./pages/Home";
import Login from "./pages/Login";
import News from "./pages/News";
import Register from "./pages/Register";
import Logout from "./pages/Logout";
import Error from "./pages/Error";
import Profile from "./pages/Profile";
import CourseView from "./pages/CourseView";
import AddCourse from "./pages/AddCourse";
import baseURL from "./api/baseURL"; // <-- import baseURL here

function App() {
  const [user, setUser] = useState({
    id: null,
    isAdmin: null,
  });

  // Updated unsetUser to also reset state
  function unsetUser() {
    localStorage.clear();
  }

  const [loadingUser, setLoadingUser] = useState(true);

  async function fetchUser() {
    setLoadingUser(true);
    if (localStorage.getItem("token")) {
      const res = await fetch(`${baseURL}/users/details`, {
        // <-- use baseURL
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      const data = await res.json();
      setUser({ id: data._id, isAdmin: data.isAdmin });
    } else {
      setUser({ id: null, isAdmin: null });
    }
    setLoadingUser(false);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserProvider value={{ user, setUser, unsetUser, loadingUser }}>
      <Router>
        <AppNavbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:courseId" element={<CourseView />} />
            <Route path="/addCourse" element={<AddCourse />} />
            <Route path="*" element={<Error />} />
            <Route path="/news" element={<News />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </Container>
      </Router>
    </UserProvider>
  );
}

export default App;
