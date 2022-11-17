import React from "react"
import {
	BrowserRouter as Router,
  Routes,
	Route
} from 'react-router-dom';
import Home from "./Home";

class App extends React.Component {
  render() {
    return (
      // <h1>Hello {this.state.name}!</h1>
      <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/Home"element={<Home />}/>
        </Routes>
      </Router>
    </div>
    )
  }
}

export default App
