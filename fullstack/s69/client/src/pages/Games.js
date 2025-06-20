import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import GameCard from "../components/GameCard";
import UserContext from "../UserContext";
import { Row, Col } from "react-bootstrap";

export default function Games() {
  const { user } = useContext(UserContext);
  const [games, setGames] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:4000/games/all", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.games) {
          setGames(data.games);
        } else {
          setGames([]);
        }
      })
      .catch((error) => console.log(`Fetch error:`, error));
  };

  useEffect(() => {
    if (user && user.id) {
      fetchData();
    } else {
      setGames([]); // Clear games if logged out
    }
  }, [user]);

  if (!user || !user.id) {
    return (
      <>
        <h1>You are not logged in</h1>
        <Link className="btn btn-primary" to={"/login"}>
          Login to View
        </Link>
      </>
    );
  }

  return (
    <>
      {games.length > 0 ? (
        <>
          <h1 className="text-center mt-5">Games</h1>
          <Row>
            {games.map((game) => (
              <Col md={3} key={game._id}>
                <GameCard game={game} reload={fetchData} />
              </Col>
            ))}
          </Row>
        </>
      ) : (
        <h1>No Games Found</h1>
      )}
    </>
  );
}
