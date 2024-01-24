import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
