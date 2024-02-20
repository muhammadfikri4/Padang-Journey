import { useState } from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Wisata from "./components/Pages/Wisata";
import Navbar from "./components/Fragments/Navbar";
import DetailWisata from "./components/Pages/DetailWisata";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wisata" element={<Wisata />} />
          <Route path="/wisata/:id" element={<DetailWisata />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
