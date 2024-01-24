import "./Project.css";
import amazon from "./images/Amazon-clone.png";
import amazon2 from "./images/amazon2.png";
import todo from "./images/to-do.png";
import tictactoe from "./images/tic-tac-toe.png";
import "bootstrap/dist/css/bootstrap.css";

export default function project() {
  return (
    <div className="project-container" id="project">
      <div>
        <p className="title-1-project">Browse My Recent</p>
        <h1 className="title-2-project">Projects</h1>
      </div>
      <div className="boxes-project">
        <div className="box-project">
          <div className="amazon">
            <img src={amazon2} className="amazon1" />
            <img src={amazon} className="amazon2" />
          </div>
          <h2 className="project-name">Amazon-Clone</h2>
          <p>HTML - CSS</p>
          <div className="button-project">
            <button
              className="btn btn-color-2 button-1-project"
              onClick={() =>
                window.open(
                  "https://github.com/Abhinavchoudhary2005/Amazon-Clone",
                  "_blank"
                )
              }
            >
              GitHub
            </button>
            <button
              className="btn btn-color-2 button-1-project"
              onClick={() =>
                window.open(
                  "https://amozon-clone-abhinav.netlify.app/",
                  "_blank"
                )
              }
            >
              Live Demo
            </button>
          </div>
        </div>
        <div className="box-project">
          <img src={todo} className="todo" />
          <h2 className="project-name">To-Do-List</h2>
          <p>HTML - CSS- JS</p>
          <div className="button-project">
            <button
              className="btn btn-color-2 button-1-project"
              onClick={() =>
                window.open(
                  "https://github.com/Abhinavchoudhary2005/to-do-list",
                  "_blank"
                )
              }
            >
              GitHub
            </button>
            <button
              className="btn btn-color-2 button-1-project"
              onClick={() =>
                window.open("https://to-do-list-abhinav.netlify.app/", "_blank")
              }
            >
              Live Demo
            </button>
          </div>
        </div>
        <div className="box-project">
          <img src={tictactoe} className="tictactoe" />
          <h2 className="project-name">Tic-Tac-Toe</h2>
          <p>HTML - CSS - JS</p>
          <div className="button-project">
            <button
              className="btn btn-color-2 button-1-project"
              onClick={() =>
                window.open(
                  "https://github.com/Abhinavchoudhary2005/tic-tac-toe",
                  "_blank"
                )
              }
            >
              GitHub
            </button>
            <button
              className="btn btn-color-2 button-1-project"
              onClick={() =>
                window.open(
                  "https://tic-tac-toe-abhinav-1.netlify.app/",
                  "_blank"
                )
              }
            >
              Live Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
