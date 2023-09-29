import React from "react";
import "./App.css";
import { TodoPage } from "./Pages/TodoPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<TodoPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
