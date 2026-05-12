import { useNavigate } from "react-router-dom";

function NavigationBar() {
  const navigate = useNavigate();

  return (
    <nav className="nav-bar">
      <button onClick={() => navigate("/login")} className="nav-button">
        Sign In
      </button>
      <button onClick={() => navigate("/about")} className="nav-button">
        About
      </button>
      <button onClick={() => navigate("/poems")} className="nav-button">
        Poems
      </button>
      <button onClick={() => navigate("/")} className="nav-button">
        Home
      </button>
    </nav>
  );
}

export default NavigationBar;
