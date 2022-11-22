import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./Home";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
