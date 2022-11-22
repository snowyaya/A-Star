import React, { useEffect, useState } from 'react';
import { getCompanyAngelSeedFunding } from '../fetcher'
import config from './../config.json'


import {
    Table,
    Button
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
                console.log("✅ Query successfull! ✅");
                console.log(res);
                return res.json();
            },
            (err) => {
                // Print the error if there is one.
                console.log(err);
            }
        )
        .then (
            (data) => {
                console.log("***** 🔆 data: ");
                console.log(data);
                if (!data) return;
                
                setFundingColumns([
                    {
                        title: 'company',
                        dataIndex: 'company',
                        key: 'company',
                    },
                    {
                        title: 'category_code',
                        dataIndex: 'category_code',
                        key: 'category_code',
                    },
                    {
                        title: 'funding',
                        dataIndex: 'funding',
                        key: 'funding',
                    },
                ])
                
                // Populate the state of the component with the result of the HTTP response from the server.
                const fundingResults = data.results.map((result) => {
                    return {
                        key: result.company,
                        company: result.company,
                        category_code: result.category_code,
                        funding: result.funding,
                    }
                })

                setFundingResults(fundingResults)
                console.log("***** 🔆 Funding Results: ");
                console.log(fundingResults)
                isCancelled.current = true
            }
        )
    }

    return (
        <>
        <h1>Funding Page</h1>
        {/* Display fundingresults in a table */}
        <Table columns={fundingColumns} dataSource={fundingResults} />
        </>
    )
    
}

export default FundingPage;
