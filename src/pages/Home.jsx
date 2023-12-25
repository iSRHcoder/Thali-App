import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <h1>
        Thali
        <span
          style={{
            color: "rgb(26, 201, 157)",
          }}
        >
          Point
        </span>
      </h1>
      <h2>Explore a best food from our menu</h2>
      <Button
        onClick={() => {
          navigate("/Menu");
        }}
      >
        Our Menu
      </Button>
    </div>
  );
};

export default Home;
