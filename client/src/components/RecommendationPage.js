import PageNavbar from "./PageNavbar";
import config from "./../config.json";
import { Table } from "antd";

import React, { useState } from 'react';

const RecommendationPage = () => {

  const [major, setMajor] = useState("");
  const [categoryResults, setCategoryResult] = useState([]);
  const [regionResults, setRegionResult] = useState([]);

  const categoryUrl = `http://${config.server_host}:${config.server_port}/recommendation/company-category?major=${major}`
  const regionUrl = `http://${config.server_host}:${config.server_port}/recommendation/company-region?major=${major}`

  const categoryColumn = [
    {
      title: 'Recommended Company Categories',
      dataIndex: 'category',
      key: 'category'
    }
  ];

  const regionColumn = [
    {
      title: 'Recommended Company Regions',
      dataIndex: 'region',
      key: 'region'
    }
  ];

  const changeMajorInput = (event) => {
    setMajor(event.target.value);
  }
  
  const search = async()=> {
    getCompanyCategory();
    getCompanyRegion();
  }

  const getCompanyCategory = () => {
    fetch(categoryUrl).then((categoryResults) => 
    categoryResults.json()).then((categoryLists) => {

    if (!categoryLists) return;
    const results = categoryLists.results.map((result) => {
      return{
        key: result.category_code,
        category: result.category_code
      }
    })
    setCategoryResult(results);
  })
}

  const getCompanyRegion = () => {
      fetch(regionUrl).then((regionResults) => 
      regionResults.json()).then((regionLists) => {
    
      if (!regionLists) return;
      const results = regionLists.results.map((result) => {
        return{
          key: result.region,
          region: result.region
        }
      })
      setRegionResult(results);
    })
  }

  return (
    <div className="RecommendationPage">
      <PageNavbar active="recommendation"/>
      <div style={{width: '70vw', margin: '0 auto', marginTop: '2vh'}}>
      <h1>Start Up Company Category and Location Recommendation</h1>
        <input
          onChange={changeMajorInput}
          value={major}
          placeholder={"Type your major"}
        />
        <button onClick={search}>Search</button>

         <Table class="table"
         dataSource={categoryResults}
         columns={categoryColumn} />

         <Table class="table"
         dataSource = {regionResults}
         columns={regionColumn} />
      </div>
    </div>
  );
};

export default RecommendationPage;