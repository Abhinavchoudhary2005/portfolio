import React from "react";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.css";

export default function NavBar() {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const [isButtonClicked, setButtonClicked] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    setButtonClicked(!isButtonClicked);
  };

  return (
    <div>
      <nav className="nav-p">
        <h2 className="logo">
          <span style={{ color: "Red" }}>A</span>bhinav.
        </h2>
        <div className="navlinkdiv">
          <a className="nav-link-p" href="#about">
            About
          </a>
          <a className="nav-link-p" href="#skill">
            Tech-Stack
          </a>
          <a className="nav-link-p" href="#project">
            Project
          </a>
          <a className="nav-link-p" href="#contact">
            Contact
          </a>
        </div>
      </nav>
      <nav className="hamburger-nav">
        <h2 className="hamburger-logo">
          <span style={{ color: "Red" }}>A</span>bhinav.
        </h2>
        <div className="button-box">
          <button
            className={`hamburger-button ${isButtonClicked ? "clicked" : ""}`}
            onClick={toggleMenu}
          >
            ☰
          </button>

          {isMenuOpen && (
            <div className="hamburger-menu">
              <div className="navlinkdiv-hamburger">
                <ul>
                  <li>
                    <a className="nav-link-p-hamburger" href="#about">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="nav-link-p-hamburger" href="#skill">
                      Tech-Stack
                    </a>
                  </li>
                  <li>
                    <a className="nav-link-p-hamburger" href="#project">
                      Project
                    </a>
                  </li>
                  <li>
                    <a className="nav-link-p-hamburger" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
