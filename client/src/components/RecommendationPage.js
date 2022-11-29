import PageNavbar from "./PageNavbar";
// import config from "./config.json";

import React, { useState } from 'react';

const RecommendationPage = () => {

  const [major, setMajor] = useState("");
  const [categoryResults, setCategoryResult] = useState([]);
  const [regionResults, setRegionResult] = useState([]);

  const categoryUrl = `http://127.0.0.1:8080/recommendation/company-category?major=${major}`
  const regionUrl = `http://127.0.0.1:8080/recommendation/company-region?major=${major}`

  const changeMajorInput = (event) => {
    setMajor(event.target.value);
  }
  
  const search = async()=> {
    getCompanyCateogry();
    getCompanyRegion();
  }

  const getCompanyCateogry = () => {
      fetch(categoryUrl).then((categoryResults) => 
      categoryResults.json()).then((categoryLists) => {
      if (!categoryLists) return;
      setCategoryResult(categoryLists.results);
    })
  }

  const getCompanyRegion = () => {
      fetch(regionUrl).then((regionResults) => 
      regionResults.json()).then((regionLists) => {
      // console.log(regionLists);
      // console.log(regionLists.results);
      if (!regionLists) return;
      setRegionResult(regionLists.results);
    })
  }

  return (
    <div className="RecommendationPage">
      <PageNavbar active="recommendation"/>
      <h1>Start Up Company Category and Location Recommendation</h1>
        <input
          onChange={changeMajorInput}
          value={major}
          placeholder={"Type your major"}
        />
        <h2> {major} </h2>
        <button onClick={search}>Search</button>
        <table>
          <thead>
            <tr>
              <th>Company Catogory</th>
            </tr>
          </thead>
          <tbody>
            {categoryResults.map((item, index) => (
            <tr key={index}>
              <td>{item.category_code}</td>
            </tr>
            ))}
          </tbody>
        </table>

        <table>
          <thead>
            <tr>
              <th>Company Region</th>
            </tr>
          </thead>
          <tbody>
            {regionResults.map((item, index) => (
            <tr key={index}>
              <td>{item.region}</td>
            </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
};

export default RecommendationPage;