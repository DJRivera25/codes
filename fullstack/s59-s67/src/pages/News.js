import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Form, Button, Spinner } from "react-bootstrap";
import NewsCard from "../components/NewsCard";
import UserContext from "../context/UserContext";
import baseURL from "../api/baseURL"; // <-- added this

export default function News() {
  const { user } = useContext(UserContext);

  const [newsList, setNewsList] = useState([]);
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isActive, setIsActive] = useState(false);

  function sendFeedback(e) {
    e.preventDefault();
    setEmail("");
    setFeedback("");
    alert("Thank you for your feedback. We'll get back to you as soon as we can.");
  }

  useEffect(() => {
    setIsActive(email !== "" && feedback !== "");
  }, [email, feedback]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${baseURL}/news`); // <-- used baseURL here
        setNewsList(res.data);
      } catch (err) {
        console.error("Error fetching news:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-center my-4">News</h1>

      {newsList.length > 0 ? (
        newsList.map((news) => <NewsCard key={news._id} newsProp={news} />)
      ) : (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
          <Spinner animation="border" role="status" variant="primary">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}

      {user.id !== null && (
        <Form onSubmit={sendFeedback} className="mt-5">
          <h2 className="text-center my-4">Feedback</h2>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Feedback</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Let us know what you think."
              required
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
          </Form.Group>

          <Button variant={isActive ? "primary" : "secondary"} type="submit" disabled={!isActive}>
            Send Feedback
          </Button>
        </Form>
      )}
    </>
  );
}
