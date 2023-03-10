import { useState } from "react";
import "./Navbar.css";
import { FcFlashOn } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    navigate();
  };
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <FcFlashOn />
            <span>Wiki Potter</span>
            <FcFlashOn />
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search Character"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button type="submit">Submit</button>
        </form>
      </nav>
    </div>
  );
}

export default Navbar;
