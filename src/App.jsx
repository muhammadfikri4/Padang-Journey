import { useState } from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Pages/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
