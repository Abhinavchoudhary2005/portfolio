import "./Skill.css";
import tick from "./images/tick.jpg";
import "bootstrap/dist/css/bootstrap.css";

export default function Skill() {
  return (
    <div className="experience-container" id="skill">
      <div>
        <p className="title-1-skill">Explore my</p>
        <h1 className="title-2-skill">Experience</h1>
      </div>
      <div className="boxes-skill">
        <div className="box-skill">
          <h1>Tech-Stack</h1>
          <div className="skill">
            <div className="skill-list">
              <article className="container">
                <img src={tick} className="tick"></img>
                <div>
                  <h2>HTML</h2>
                  <p className="subscript">Intermediate</p>
                </div>
              </article>
              <article className="container">
                <img src={tick} className="tick"></img>
                <div>
                  <h2>CSS</h2>
                  <p className="subscript">Basic</p>
                </div>
              </article>
              <article className="container">
                <img src={tick} className="tick"></img>
                <div>
                  <h2>JavaScript</h2>
                  <p className="subscript">Basic</p>
                </div>
              </article>
              <article className="container">
                <img src={tick} className="tick"></img>
                <div>
                  <h2>Bootstrap</h2>
                  <p className="subscript">Basic</p>
                </div>
              </article>
            </div>
            <div className="skill-list">
              <article className="container">
                <img src={tick} className="tick"></img>
                <div>
                  <h2>React</h2>
                  <p className="subscript">Basic</p>
                </div>
              </article>
              <article className="container">
                <img src={tick} className="tick"></img>
                <div>
                  <h2>Docker</h2>
                  <p className="subscript">Basic</p>
                </div>
              </article>
              <article className="container">
                <img src={tick} className="tick"></img>
                <div>
                  <h2>APIs</h2>
                  <p className="subscript">Basic</p>
                </div>
              </article>
              <article className="container">
                <img src={tick} className="tick"></img>
                <div>
                  <h2>Git</h2>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
