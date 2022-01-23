import "./styles.css";
import { Routes, Route } from "react-router-dom";
//components
import Admin from "./components/MainComponents/Admin.jsx";
import Home from "./components/MainComponents/Home.jsx";
import About from "./components/MainComponents/About.jsx";
import Contact from "./components/MainComponents/Contact.jsx";
import Curriculum from "./components/MainComponents/Curriculum.jsx";
import Projects from "./components/MainComponents/Projects.jsx";
export default function App() {
  return (
    <div className="App">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Curriculum />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}
