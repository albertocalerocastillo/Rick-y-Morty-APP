import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CharacterPage from "./pages/CharacterPage";
import EpisodePage from "./pages/EpisodePage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/character/:id" element={<CharacterPage />} />

        <Route path="/episode/:id" element={<EpisodePage />} />
      </Routes>
    </Router>
  );
}

export default App;