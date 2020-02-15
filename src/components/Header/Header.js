import React from "react";

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper blue lighten-2">
        <a href="/" className="brand-logo">
          Table With Form
        </a>
        <ul id="" className="right">
          <li>
            <a href="/Authors">Authors</a>
          </li>
          <li>
            <a href="/Books">Books</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;