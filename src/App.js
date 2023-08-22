import "./App.css";
import Home from "./Components/Homepage/Home";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Aboutus from "./Components/Aboutus/Aboutus";
import Contactus from "./Components/Contactus/Contactus";
import ChairmanDesk from "./Components/ChairmanDesk/ChairmanDesk";
import ChairmanTeam from "./Components/ChairmanTeam/ChairmanTeam";
import Syllabus from "./Components/Syllabus/Syllabus";
import PlacementPartner from "./Components/Placement/PlacementPartner";
import Ncc from "./Components/Ncc/Ncc";
import Nss from "./Components/Nss/Nss";
import Sports from "./Components/Sports/Sports";
import Bca from "./Components/BCA/Bca";
import Bba from "./Components/BBA/Bba";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inquiry from "./Components/Homepage/Inquiry";

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
          <Route path="/faculties" element={<ChairmanTeam />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/ncc" element={<Ncc />} />
          <Route path="/nss" element={<Nss />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/placementpartner" element={<PlacementPartner />} />
          <Route path="/bca" element={<Bca />} />
          <Route path="/bba" element={<Bba />} />
        </Routes>
      </Router>
      <Inquiry />
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
