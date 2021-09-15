import React, { useState } from "react";
import "./Header.css";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="container">
      <h1>Start BootStrap</h1>
      <a className="site_name" href="#page-top"></a>
      <ul className="nav_bar">
        <li>
          <a href="">Services</a>
        </li>
        <li>
          <a href="">Portfolio</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Team</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
      <ul className="nav_mobile">
        <li onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span role="img" aria-label="hamburger">
           MENU &#9776;
          </span>
        </li>
        {isMobileMenuOpen && (
          <>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Portfolio</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Team</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
