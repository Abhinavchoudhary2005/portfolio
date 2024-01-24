import "./Home.css";
import pfp from "./images/pfp.png";
import linkedin from "./images/linkedin.webp";
import github from "./images/github.png";
import twitter from "./images/twitter.png";
import cv from "./AbhinavChoudharyResume.pdf";
import "bootstrap/dist/css/bootstrap.css";

export default function NavBar() {
  return (
    <div className="home">
      <div className="about-container">
        <div className="about-text">
          <div className="hello">Hello, I'm</div>
          <div className="name">Abhinav Choudhary</div>
          <div className="tech">Frontend developer</div>
        </div>
        <div className="button-home">
          <button
            className="btn btn-color-2 button-1-home"
            onClick={() => {
              window.open(cv);
            }}
          >
            Download CV
          </button>
          <button
            className="btn btn-color-2 button-2-home"
            onClick={() => {
              window.location.href = "#contact";
            }}
          >
            Contact Info
          </button>
        </div>
        <div className="socials">
          <img
            className="linkedin"
            src={linkedin}
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/abhinavchoudhary2005/")
            }
          />
          <img
            className="github"
            src={github}
            onClick={() =>
              (window.location.href = "https://github.com/Abhinavchoudhary2005")
            }
          />
          <img
            className="twitter"
            src={twitter}
            onClick={() =>
              (window.location.href = "https://twitter.com/CSAbhinav")
            }
          />
        </div>
      </div>
      <img className="pfp-image" src={pfp} />
    </div>
  );
}
