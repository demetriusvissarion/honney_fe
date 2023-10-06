import React from "react";
import "./App.css";
import { TodoPage } from "./Pages/TodoPage";
import { Show } from "./Pages/Show";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="image">
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
