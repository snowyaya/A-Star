import React from "react";
import "../style/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Posters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <div>
        <body
          background="https://www.legalshield.com/sites/default/files/styles/large_1366w/public/image/2020-08/House.jpg?itok=znvQkY-q"
          style={{ backgroundSize: "100%" }}
        >

          <div
            style={{
              height: "950px",
            }}
          >
            <div class="lander">
              <h1 id="title">A-star Investment Advisor</h1>
              <h3>Helping you grow your business</h3>
            </div>
            <div
              style={{
                height: "100px",
              }}
            ></div>
          </div>
        </body>
      </div>
    );
  }
}
