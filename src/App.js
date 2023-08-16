import "./App.css";
import Home from "./Components/Homepage/Home";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Aboutus from "./Components/Aboutus/Aboutus";
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
