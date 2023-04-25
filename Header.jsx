import { NavLink } from "react-router-dom";
const Header = () => {
  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "red" : "",
    fontSize: "30px",
    textDecoration: "none",
  });
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        background: "black",
        color: "white",
        padding: "20px 0",
        textDecoration: "none",
      }}
    >
      <NavLink to="/" style={getActiveStyle}>
        Home
      </NavLink>
      <NavLink to="/donetodos" style={getActiveStyle}>
        DoneTodos
      </NavLink>
      <NavLink to="/opentodos" style={getActiveStyle}>
        OpenTodos
      </NavLink>
    </div>
  );
};

export default Header;
