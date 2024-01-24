import "./About.css";
import achivement from "./images/achivement.jpg";
import people from "./images/2people.png";
import "bootstrap/dist/css/bootstrap.css";

export default function About() {
  return (
    <div className="about-about" id="about">
      <div>
        <p className="title-1-about">Get To Known More</p>
        <h1 className="title-2-about">About Me</h1>
      </div>
      <div className="boxes-about">
        <div className="box-about experience">
          <img className="achivement" src={achivement} />
          <h1>Experience</h1>
          <p>
            Fresher
            <br />
            Frontend Development
          </p>
        </div>
        <div className="box-about education">
          <img className="people" src={people} />
          <h1>Education</h1>
          <p>
            1<sup>st</sup> Year
            <br />
            B.Tech in Information Technology
          </p>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p className="detail">
          I am currently a first-year student pursuing a Bachelor's degree in
          Information Technology at PCE Nagpur, and I'm passionate about web
          development. My tech stack includes
          <b> JavaScript, HTML, CSS, React, and Bootstrap. </b> As a frontend
          developer, I love transforming ideas into visually appealing and
          functional interfaces. Eager to learn and contribute!
        </p>
      </div>
    </div>
  );
}
