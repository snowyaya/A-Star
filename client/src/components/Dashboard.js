import React, { useEffect, useState } from "react";
import "../style/Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "@material-ui/core";

import PageNavbar from "./PageNavbar";

import ReactTooltip from "react-tooltip";
import MapChart from "./MapChart.js";


// library to convert state abbreviations, e.g. AL to Alabama.
const allStates = require("us-state-converter");

const Dashboard = () => {
  // const [stateRows, setStateRows] = useState([]);

  const [statesQueryRes, setStatesQueryRes] = useState([]);

  const [content, setContent] = useState("");

  const [minVal, setMin] = useState("");
  const [maxVal, setMax] = useState("");
  const [mapStats, setMapStats] = useState("");

  // custom hook, we only need useEffect to run this function once similar to componentDidMount
  const useMountEffect = (func) => useEffect(func, []);

  //"http://localhost:8081/home/homevaluestate"
  function getCompanyDistributions() {
    // setSuffix("");
    setMapStats("homeValues");
    fetch("http://localhost:8081/home/companydistributions", {
      method: "GET", // The type of HTTP request.
    })
      .then(
        (res) => {
          // Convert the response data to a JSON.
          return res.json();
        },
        (err) => {
          // Print the error if there is one.
          console.log(err);
        }
      )
      .then(
        (stateList) => {
          console.log("StateList: ");
          console.log(stateList);
          if (!stateList) return;
          // map array of objects to object of objects so we can index by state initial e.g., "AL"...
          const newObj = Object.assign(
            {},
            ...stateList.map((item) => ({
              [item.State]: {
                Companies: item.Companies
              },
            }))
          );
          setStatesQueryRes(newObj);

          console.log("New obj:");
          console.log(newObj);
          let minAvg = 1000000000; //to-do: set to math.max
          let maxAvg = -1000000000; //to-do: set to math.min

          for (const [key, value] of Object.entries(newObj)) { 
            if (value.Companies != null) {
              minAvg = value.Companies < minAvg ? value.Companies : minAvg;
              maxAvg = value.Companies > maxAvg ? value.Companies : maxAvg;
            }
          }
          setMin(minAvg);
          setMax(maxAvg);
        },
        (err) => {
          // Print the error if there is one.
          console.log(err);
        }
      );
  }

  return (
    <div className="Dashboard">
      <PageNavbar active="dashboard" />
      <div>
        <div>
          <Button
            className="choice"
            variant="contained"
            style={{
              float: "left",
              marginLeft: "100px",
            }}
            onClick={() => getCompanyDistributions()}
          >
            Company Distributions
          </Button>
        </div>
        <div>
          <div
            style={{
              float: "left",
              marginLeft: "100px",
            }}
          >
            <p>
              Min: 
              {minVal}
            </p>
          </div>
          <div
            style={{
              width: "30px",
              height: "20px",
              float: "left",
              backgroundColor: "#ffedea",
            }}
          />
          <div
            style={{
              width: "30px",
              height: "20px",
              float: "left",
              backgroundColor: "#ffcec5",
            }}
          />
          <div
            style={{
              width: "30px",
              height: "20px",
              float: "left",
              backgroundColor: "#ffad9f",
            }}
          />
          <div
            style={{
              width: "30px",
              height: "20px",
              float: "left",
              backgroundColor: "#ff8a75",
            }}
          />
          <div
            style={{
              width: "30px",
              height: "20px",
              float: "left",
              backgroundColor: "#ff5533",
            }}
          />
          <div
            style={{
              width: "30px",
              height: "20px",
              float: "left",
              backgroundColor: "#e2492d",
            }}
          />
          <div
            style={{
              width: "30px",
              height: "20px",
              float: "left",
              backgroundColor: "#be3d26",
            }}
          />
          <div
            style={{
              width: "30px",
              height: "20px",
              float: "left",
              backgroundColor: "#9a311f",
            }}
          />
          <div
            style={{
              width: "30px",
              height: "20px",
              float: "left",
              backgroundColor: "#782618",
            }}
          />
          <div
            style={{
              float: "left",
            }}
          >
            <p>
              Max:
              {maxVal}
            </p>
          </div>
        </div>

        <div
          style={{
            margin: "auto",
          }}
        >
          <MapChart
            setTooltipContent={setContent}
            statesQueryRes={statesQueryRes}
            mapStats={mapStats}
          />
          <ReactTooltip html={true}> {content} </ReactTooltip>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;