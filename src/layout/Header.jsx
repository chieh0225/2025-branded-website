import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav className="headerNav fw-bold">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          首頁
        </NavLink>
        <NavLink
          to="/blogPage"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          部落格
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
