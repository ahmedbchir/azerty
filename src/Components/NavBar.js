import React, { useState } from "react";
export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const changeBg = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBg);
  return (
    <>
      {/* <nav className="navbar navbar-expand-sm fixed-top "> */}
      <nav
        className={
          navbar
            ? "navbar active navbar-expand-sm-fixed-top"
            : "navbar active-expand-fixed-top"
        }
      >
        <a href="" className="navbar-brand">
          <span>E</span>asy Gym
        </a>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Gym
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
