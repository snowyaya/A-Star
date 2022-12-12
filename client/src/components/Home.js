import React from "react";
import PageNavbar from "./PageNavbar";
import "../style/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
    };
  }

  render() {
    return (
      <div>
        <body
          background-image="sy.png"
          style={{ backgroundSize: "100%" }}
          >
          <div>
            <PageNavbar active="home" />
          </div>
            <div class="lander">
              <h1 id="title">A-STAR Investment</h1>
              <h4>Helping you grow your business</h4>
          </div>
          <div
            style={{
              height: "100px",
            }}
          >
          </div>
        </body>
      </div>
    );
  }
}

