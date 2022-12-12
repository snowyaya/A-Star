import React, { useEffect, useState } from 'react';
import config from './../config.json'
import PageNavbar from "./PageNavbar";
import { useTable, usePagination } from 'react-table';
import { ButtonToolbar, Button } from "react-bootstrap";


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
                // console.log("***** 🔆 data: ");
                console.log(data);
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
                console.log(fundingResults)
                isCancelled.current = true
            }
        )
    }
    const columns = React.useMemo(
        () => [
          {
            Header: 'company',
            accessor: 'company', // accessor is the "key" in the data
          },
          {
            Header: 'category_code',
            accessor: 'category_code',
          },
          {
            Header: 'funding',
            accessor: 'funding', // accessor is the "key" in the data
          },
        ],
        []
    )
    // const data_array = []
    // for (let i = 0; i < fundingResults.length; i++) {
    //     data_array.push(fundingResults[i])
    // }

    const data = React.useMemo(
        () => fundingResults, []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
      state: { pageIndex, pageSize }
    } = useTable({ columns, data }, usePagination)

    console.log("***** 🔆 columns: ", columns);
    console.log("***** 🔆 data: ", data);

    return (
        <div>
            <PageNavbar active="funding"/>

            <table {...getTableProps()} style={{ border: 'solid 1px black'}}>
                <thead>
                        {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th
                            {...column.getHeaderProps()}
                            style={{
                                borderBottom: 'solid 2px black',
                                color: 'black',
                            }}
                        >
                            {column.render('Header')}
                        </th>
                    ))}
                    </tr>
                ))}
                </thead>
                
                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                    prepareRow(row)

                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                            return (
                                <td
                                    {...cell.getCellProps()}
                                    style={{
                                        padding: '10px',
                                        border: 'solid 1px gray',
                                    }}
                                >
                                    {cell.render('Cell')}
                                </td>
                            )
                            })}
                        </tr>
                    )
                    })}
                </tbody>
            </table>
            
            <div className="pagination" style={{ display: "inline-block" }}>
            <ButtonToolbar>
                <Button
                variant="light"
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
                size="small"
                >
                <span>&lt;&lt;</span>
                </Button>
                <Button
                variant="light"
                onClick={previousPage}
                disabled={!canPreviousPage}
                size="small"
                >
                <span>&lt;</span>
                </Button>
                <select
                value={pageSize}
                onChange={e => {
                    setPageSize(Number(e.target.value));
                }}
                >
                {[5, 10, 20, 30, 40, 50].map(pageSize => (
                    <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                    </option>
                ))}
                </select>
                <Button
                variant="light"
                onClick={nextPage}
                disabled={!canNextPage}
                size="small"
                >
                <span>&gt;</span>
                </Button>
                <Button
                variant="light"
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
                size="small"
                >
                <span>&gt;&gt;</span>
                </Button>
            </ButtonToolbar>
            <span>
                Page <strong>{pageOptions.length === 0 ? 0 : pageIndex + 1}</strong>{" "}
                of <strong>{pageOptions.length}</strong>
            </span>
            </div>
        </div>
    );

    // return (
        
    //     <div class="container">
    //     <PageNavbar active="funding" />
    //     <h1>Funding Page</h1>
    //     {/* Display fundingresults in a table */}
    //     <Table class="table"
    //     columns={fundingColumns} 
    //     dataSource={fundingResults} 
    //     pagination={{ pageSizeOptions:[10, 10], 
    //       defaultPageSize: 10, 
    //       showQuickJumper:true }}/>
    //     </div>
    // )
    
}

export default FundingPage;