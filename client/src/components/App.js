import React from "react";
import Home from "./Home";
import RecommendationPage from "./RecommendationPage";
import FundingPage from './FundingPage';
import VCPage from './VCPage';
import Dashboard from "./Dashboard";

import {
	BrowserRouter as Router,
	Route,
	Routes
} from 'react-router-dom';
import MapChart from "./MapChart";


const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          console.log("Entered App.js");
          <Route exact path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/recommendation" element={<RecommendationPage/>} />
          <Route path="/funding" element={<FundingPage />} />
          <Route path="/vc" element={<VCPage/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
