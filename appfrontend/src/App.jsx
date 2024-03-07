import "./App.css";
import React from "react";
import Home from "./screens/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
