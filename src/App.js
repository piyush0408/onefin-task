import React, { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Movie from "./Movie";
import Modal from "./Modal";

function App() {
  const [token, setToken] = useState("");

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/movie" element={<Movie />} />

          <Route path="/home" element={<Modal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
