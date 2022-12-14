import React, { useEffect, useState } from "react";
import "../style/Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "@material-ui/core";
import PageNavbar from "./PageNavbar";
import ReactTooltip from "react-tooltip";
import MapChart from "./MapChart";


const Dashboard = () => {
  const [statesQueryRes, setStatesQueryRes] = useState([]);
  const [content, setContent] = useState("");
  const [minVal, setMin] = useState("");
  const [maxVal, setMax] = useState("");

  const useMountEffect = (func) => useEffect(func, []);
  
  function getCompanyDistributions() {
    fetch("http://127.0.0.1:8080/home/companydistributions", {
      method: "GET", // The type of HTTP request.
    })
      .then(
        (res) => {
          // Convert the response data to a JSON.
          return res.json();
        },
        (err) => {
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

          // Initialize min and max  number of companies
          let minCompanies = Number.MAX_SAFE_INTEGER; 
          let maxCompanies = Number.MIN_SAFE_INTEGER; 
          console.log("Content", content);

          // Find min and max number of companies
          for (const [key, value] of Object.entries(newObj)) { 
            if (value.Companies != null) {
              minCompanies = value.Companies < minCompanies ? value.Companies : minCompanies;
              maxCompanies = value.Companies > maxCompanies ? value.Companies : maxCompanies;
            }
          }
          setMin(minCompanies);
          setMax(maxCompanies);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  return (
    <div className="Dashboard">
      <PageNavbar active="dashboard" />
      <br></br>
      <br></br>
      <div>
        <div>
          <Button
            className="choice"
            variant="contained"
            style={{
              float: "left",
              marginLeft: "100px",
              color: "white",
              backgroundColor: "#acb6e5",
              fontWeight: "bold",
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
            <p style={{color: 'white', marginRight: '10px'}}>
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
            <p style={{color: 'white', marginLeft: '10px'}}>
              Max:
              {maxVal}
            </p>
          </div>
        </div>
      <br></br>
      <br></br>
      <br></br>
        <div
          style={{
            margin: "auto",
          }}
        >
          <MapChart
            setTooltipContent={setContent}
            statesQueryRes={statesQueryRes}
            minComp = {minVal}
            maxComp = {maxVal}
          />
          <ReactTooltip html={true}> {content} </ReactTooltip>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
