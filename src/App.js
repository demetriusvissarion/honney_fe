import React from "react";
import "./App.css";
import { TodoPage } from "./Pages/TodoPage";
import { Show } from "./Pages/Show";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import backgroundImage from "./background.avif";

function App() {
  return (
    <div className="App">
      <div
        class="image"
        style={{
          height: "400px",
          width: "550px",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          display: "block",
          "margin-left": "auto",
          "margin-right": "auto",
        }}
      >
        <h1>Todos</h1>
        <Router>
          <Routes>
            <Route path="/" element={<TodoPage />} />
            <Route path="/:id" element={<Show />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
