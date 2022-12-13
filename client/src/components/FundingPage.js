import React, { useEffect, useState } from 'react';
import config from './../config.json'
import PageNavbar from "./PageNavbar";
import { useTable, usePagination } from 'react-table';
import { ButtonToolbar, Button } from "react-bootstrap";
import {
    Table,
    Select
  } from 'antd'

const FundingPage = () => {
    const url = `http://${config.server_host}:${config.server_port}/funding`

    const [fundingResults, setFundingResults] = useState([])
    const [fundingColumns, setFundingColumns] = useState([])

    const isCancelled = React.useRef(false)

    // Add a useEffect hook to fetch data from the server to avoid blocking the main thread
    useEffect(() => {
        getCompanyAngelSeedFunding();

        return () => {
            isCancelled.current = true
        }

    }, [])

    const getCompanyAngelSeedFunding = () => {
        if (isCancelled.current) {
            return;
        }
        fetch(url, {
            method: "GET", // The type of HTTP request.
        })
        .then(
            (res) => {
                // Convert the response data to a JSON.
                // console.log("✅ Query successfull! ✅");
                // console.log(res);
                return res.json();
            },
            (err) => {
                // Print the error if there is one.
                console.log(err);
            }
        )
        .then (
            (data) => {
                // console.log("***** 🔆 data: ");
                // console.log(data);
                if (!data) return;
                
                setFundingColumns([
                    {
                        title: 'company',
                        dataIndex: 'company',
                    },
                    {
                        title: 'category_code',
                        dataIndex: 'category_code',
                    },
                    {
                        title: 'funding',
                        dataIndex: 'funding',
                    },
                ])
                
                // Populate the state of the component with the result of the HTTP response from the server.
                const fundingResults = data.results.map((result) => {
                    return {
                        company: result.company,
                        category_code: result.category_code,
                        funding: result.funding,
                    }
                })

                setFundingResults(fundingResults)
                // console.log("***** 🔆 Funding Results: ");
                // console.log(fundingResults)
                isCancelled.current = true
            }
        )
    }

    const columns = [
        {
            title: 'Company',
            dataIndex: 'company',
            key: 'company',
        },
        {
            title: 'Category',
            dataIndex: 'category_code',
            key: 'category_code',
        },
        {
            title: 'Funding',
            dataIndex: 'funding',
            key: 'funding',
        }
    ]

    return (
        <div>
        <PageNavbar active="funding" />
        <div class="container" style = {{ width: '70vw', margin: '0 auto', marginTop: '2vh' }}>
        <h1>Funding Page</h1>
        <Table class="table"
        columns={columns} 
        dataSource={fundingResults} 
        pagination={{ pageSizeOptions:[10, 10], 
          defaultPageSize: 10, 
          showQuickJumper:true }}/>
        </div>
        </div>
    )
}

export default FundingPage;