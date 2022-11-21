import React from 'react';

import { getCompanyAngelSeedFunding } from '../fetcher'

import {
    Form,
    Table,
    Row,
    Col,
    Divider,
    Slider,
    Rate 
} from 'antd'

const usersParam = ['companyName', 'category', 'funding_amount'];

const fundingColumns = [
    {
        title: 'companyName',
        dataIndex: 'companyName',
        key: 'companyName'
    },
    {
        title: 'category',
        dataIndex: 'category',
        key: 'category'
    },
    {
        title: 'funding_amount',
        dataIndex: 'funding_amount',
        key: 'funding_amount'
    }
]

class FundingPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            companyName: '',
            category: '',
            funding_amount: 0
        }

        this.updateSearchResults = this.updateSearchResults.bind(this)
    }

    updateSearchResults() {
        getCompanyAngelSeedFunding().then(data => {
            this.setState({
                companyName: data.companyName,
                category: data.category,
                funding_amount: data.funding_amount
            })
        })
    }

    componentDidMount() {
        getCompanyAngelSeedFunding().then(data => {
            this.setState({
                companyName: data.companyName,
                category: data.category,
                funding_amount: data.funding_amount
            })
        })
    }

    render() {
        const inputData = this.state
        console.log("***** 🔆 Render successful ", inputData)
        return (
            
            <div style={{ width: '70vw', margin: '0 auto', marginTop: '2vh' }}>
                <h3>Company Funding</h3>
            </div>
        )
    }
}

export default FundingPage
