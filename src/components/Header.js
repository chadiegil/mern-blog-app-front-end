import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>My Blog</h1>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
