import React from 'react';
import { getCompanyAngelSeedFunding } from '../fetcher'

import {
    Table,
} from 'antd'

// const FundingPage = () => {
//     const [fundingResults] = useState([])

//     const useMountEffect = (func) => useEffect(func, []);

//     func getCompanyAngelSeedFunding() {
//         fetch("http://localhost:8081/funding", {")
//     }

// }


const fundingColumns = [
    {
        title: 'company',
        dataIndex: 'company',
        key: 'company'
    },
    {
        title: 'category_code',
        dataIndex: 'category_code',
        key: 'category_code'
    },
    {
        title: 'funding',
        dataIndex: 'funding',
        key: 'funding'
    }
]

class FundingPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fundingResults: []
        }

        this.fundingOnChange = this.fundingOnChange.bind(this)
    }

    fundingOnChange() {
        getCompanyAngelSeedFunding().then(data => {
            this.setState({
                fundingResults: data.results
            })
        })
    }

    componentDidMount() {
        getCompanyAngelSeedFunding().then(data => {
            console.log("***** 🔆 Mount: Funding Results ", this.state.fundingResults)
            this.setState({
                fundingResults: data.results
            })
        })
    }

    render() {
        const fundingResults = this.state.fundingResults

        return (
            <>
            <h3>Company Funding</h3>
            
            {this.fundingResults ? 
            <div className="funding-results-container"></div> 
            : <div className="funding-results-container"></div>}
            <Table
                columns={fundingColumns}
                dataSource={fundingResults}
                pagination={true}
                scroll={{ y: 1000 }} />
            </>
        )
    }
}

export default FundingPage
