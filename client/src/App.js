import React from "react";
import FundingPage from './pages/FundingPage';
import ReactDOM from 'react-dom'; 

import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

class App extends React.Component {
  // state = {
  //   name: ""
  // }

  // componentDidMount() {
  //   fetch("http://localhost:3000")
  //     .then(res => res.json())
  //     .then(data => this.setState({ name: data.name }))
  // }

  render() {
    // return (
    //   <h1>Hello {this.state.name}!</h1>
    // )
    return <FundingPage />
    // return (
    //   <div>
    //     <Router>
    //       <Switch>
    //         <Route exact
    //             path="/"
    //             render={() => (
    //               <FundingPage />
    //             )}/>   
    //       </Switch> 
    //     </Router>

    //   </div>
    // )
  }
}

export default App
