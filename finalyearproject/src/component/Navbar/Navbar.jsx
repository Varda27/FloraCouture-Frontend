import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/1741534887310.png";
import search from "../../assets/search1.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <img src={logo} alt="" className="logo" />

      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/craftitems">Craft Items</Link>
        </li>
        <li>
          <Link to="/Jewels">Jewels</Link>
        </li>
      </ul>

      <div className="Login">
        <button>Login</button>
      </div>

      <div className="search-box">
        <input type="text" placeholder="search" />
        <img src={search} alt="" className="search" />
      </div>
    </div>
  );
};

export default Navbar;
