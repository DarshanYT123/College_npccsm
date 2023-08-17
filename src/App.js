import "./App.css";
import Home from "./Components/Homepage/Home";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Aboutus from "./Components/Aboutus/Aboutus";
import Contactus from "./Components/Contactus/Contactus";
import ChairmanDesk from "./Components/ChairmanDesk/ChairmanDesk";
import ChairmanTeam from "./Components/ChairmanTeam/ChairmanTeam";
import Syllabus from "./Components/Syllabus/Syllabus";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // for aos
  AOS.init();

  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutSVKM" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/desk" element={<ChairmanDesk />} />
          <Route path="/team" element={<ChairmanTeam />} />
          <Route path="/syllabus" element={<Syllabus />} />
        </Routes>
      </Router>
      <Footer />

      {/* 
    <Navbar1/>
    <Home/>
    <Footer/>

    */}
    </div>
  );
}

export default App;
