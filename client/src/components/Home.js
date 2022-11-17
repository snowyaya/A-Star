import React from "react";
import { getStateDistribution } from '../fetcher'
// import MapChart from "./MapChart";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateDistributionResults: [],
    }
  }

  componentDidMount() {
    getStateDistribution().then(res => {
      this.setState({ matchesResults: res.results })
    })
  }
  
  render() {
    return (
      this.state.matchesResults
    )
  }
}
