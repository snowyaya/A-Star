import React from "react";
import FundingPage from './FundingPage';
import VCPage from './VCPage';
import Dashboard from "./Dashboard";
import Home from './Home';

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
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/funding" element={<FundingPage />} />
          <Route path="/vc" element={<VCPage/>} />
        </Routes>
      </Router>
    </div>
  )
}
export default App

