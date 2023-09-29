import React from "react";
import "./App.css";
import { TodoPage } from "./Pages/TodoPage";
import { Show } from "./Pages/Show";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<TodoPage />}></Route>
        </Routes>

        <Routes>
          <Route path="/:id" element={<Show />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
