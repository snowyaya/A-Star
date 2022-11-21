import React from "react";
import FundingPage from './pages/FundingPage';
import HomePage from './pages/HomePage';
import ReactDOM from 'react-dom'; 

import {
  BrowserRouter,
	BrowserRouter as Router,
	Route,
	Routes
} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/funding" element={<FundingPage />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App
