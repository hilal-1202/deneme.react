import "./Header.css";
import Nav from "../nav/Nav.jsx";
const Header = () => {
  return (
    <div className="Header">
      <div className="headerRight">
        <h3>
          <span className="steve">Hilal</span>
          Frontend Developer
        </h3>
      </div>

      <Nav />
    </div>
  );
};

export default Header;
