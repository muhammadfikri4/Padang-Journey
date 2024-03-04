import { useState } from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Wisata from "./components/Pages/Wisata";
import Navbar from "./components/Fragments/Navbar";
import DetailWisata from "./components/Pages/DetailWisata";
import NotFound from "./components/Fragments/NotFound";
import Kuliner from "./components/Pages/Kuliner";
import DetailKuliner from "./components/Pages/DetailKuliner";
import Favorit from "./components/Pages/Favorit";
import About from "./components/Pages/About";

function App() {
  const [navActive, setNavActive] = useState(false);
  return (
    <>
      <Router>
        <Navbar navActive={navActive} setNavActive={setNavActive} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/wisata"
            element={
              <Wisata navActive={navActive} setNavActive={setNavActive} />
            }
          />
          <Route path="/wisata/:id" element={<DetailWisata />} />
          <Route path="/kuliner" element={<Kuliner />} />
          <Route path="/kuliner/:id" element={<DetailKuliner />} />
          <Route path="/favorit" element={<Favorit />} />
          <Route
            path="*"
            element={
              <div className="flex justify-center mt-32">
                <NotFound />
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
