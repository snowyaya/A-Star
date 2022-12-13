// import PageNavbar from "./PageNavbar";
// // import config from "./config.json";

// import React, { useEffect, useState } from 'react';
// import { Table } from "antd";

// const RecommendationPage = () => {

//   const [major, setMajor] = useState("");
//   const [categoryResults, setCategoryResult] = useState([]);
//   const [regionResults, setRegionResult] = useState([]);

//   const categoryUrl = `http://127.0.0.1:8080/recommendation/company-category?major=${major}`
//   const regionUrl = `http://127.0.0.1:8080/recommendation/company-region?major=${major}`

//   const columns = [
//     {
//       title: 'Company Category',
//       dataIndex: 'category',
//       key: 'category'
//     },
//     {
//       title: 'Company Region',
//       dataIndex: 'region',
//       key: 'region'
//     }
//   ];


//   const changeMajorInput = (event) => {
//     setMajor(event.target.value);
//   }
  
//   const search = async()=> {
//     getCompanyCategory();
//     getCompanyRegion();
//   }


//   const getCompanyCategory = () => {
//       fetch(categoryUrl).then((categoryResults) => 
//       categoryResults.json()).then((categoryLists) => {
//       if (!categoryLists) return;
      
//       const results = categoryLists.results.map((result) => {
//         return{
//           key: result.category_code,
//           category: result.category_code
//         }
//       })
//       setCategoryResult(results);
//       console.log(categoryResults);
//     })
//   }

//   const getCompanyRegion = () => {
//       fetch(regionUrl).then((regionResults) => 
//       regionResults.json()).then((regionLists) => {
    
//       if (!regionLists) return;
//       const results = regionLists.results.map((result) => {
//         return{
//           key: result.region,
//           region: result.region
//         }
//       })
//       setRegionResult(results);
//     })
//   }


//   return (
//     <div className="RecommendationPage">
//       <PageNavbar active="recommendation"/>
//       <h1>Start Up Company Category and Location Recommendation</h1>
//         <input
//           onChange={changeMajorInput}
//           value={major}
//           placeholder={"Type your major"}
//         />
//         <h2> {major} </h2>
//         <button onClick={search}>Search</button>

        

//         <Table calss="table"
//         dataSource={regionResults}
//         columns={columns} />

        



//         <table>
//         <thead>
//             <tr>
//               <th>Company Category</th>
//             </tr>
//           </thead>
//           <tbody>
//             {categoryResults.map((item, index) => (
//             <tr key={index}>
//               <td>{item.category_code}</td>
//             </tr>
//             ))}
//           </tbody>

//           <thead>
//             <tr>
//               <th>Company Region</th>
//             </tr>
//           </thead>
//           <tbody>
//             {regionResults.map((item, index) => (
//             <tr key={index}>
//               <td>{item.region}</td>
//             </tr>
//             ))}
//           </tbody>
//         </table>
//     </div>
//   );
// };


// export default RecommendationPage;



import PageNavbar from "./PageNavbar";
// import config from "./config.json";
import { Table } from "antd";

import React, { useState } from 'react';

const RecommendationPage = () => {

  const [major, setMajor] = useState("");
  const [categoryResults, setCategoryResult] = useState([]);
  const [regionResults, setRegionResult] = useState([]);

  const categoryUrl = `http://127.0.0.1:8080/recommendation/company-category?major=${major}`
  const regionUrl = `http://127.0.0.1:8080/recommendation/company-region?major=${major}`

  const categoryColumn = [
    {
      title: 'Top 10 Company Categories',
      dataIndex: 'category',
      key: 'category'
    }
  ];

  const regionColumn = [
    {
      title: 'Top 10 Company Regions',
      dataIndex: 'region',
      key: 'region'
    }
  ];

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
  );
};

export default RecommendationPage;