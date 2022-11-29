import React from "react";
import Home from "./Home";
import RecommendationPage from "./RecommendationPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          console.log("Entered App.js");
          <Route exact path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/recommendation" element={<RecommendationPage/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
