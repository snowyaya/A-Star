import React, { useEffect, useState } from 'react';
import {
  Table,
  Select
} from 'antd'

// TODO:
import { getVCFundingCategory } from '../fetcher'
// const { Column, ColumnGroup } = Table;
const { Option } = Select;


const VCColumns = [
    {
      title: 'Funded Business Category',
      dataIndex: 'category_code',
      key: 'category_code',
      sorter: (a, b) => a.category_code.localeCompare(b.category_code),
    },
    {
      title: 'Number Of Investment',
      dataIndex: 'number_of_investment',
      key: 'number_of_investment',
      sorter: (a, b) => a.number_of_investment - b.number_of_investment
    }
];

const VCPage = () => {
    const [VCfundingResults, setVCfundingResults] = useState([]);
    const [investorId, setInvestorId] = useState([17]);

    useEffect(()=>{    
      getVCFundingCategory(investorId).then(res => {
      const VCFundingResults = res.results.map((result, i) => {
        return {
            key: i,
            number_of_investment: result.number_of_investment,
            category_code: result.category_code,
        }
    })

      setVCfundingResults(VCFundingResults);
      })
    },[investorId])

    function handleInvestorChange(e){
      setInvestorId(e);
    }

    return (
      <div>
        <div style={{ width: '70vw', margin: '0 auto', marginTop: '2vh' }}>
          <h1>Top VC's preferred 10 invested industries</h1>
          <Select defaultValue="17" style={{ width: 250 }} onChange={handleInvestorChange}>
            <Option value="17">Sequoia Capital</Option>
            <Option value="4">Accel Partners</Option>
            <Option value="48">Benchmark</Option>
            <Option value="367">Intel Capital</Option>
            <Option value="3127">Andreessen Horowitz</Option>
            <Option value="316">New Enterprise Associates</Option>
            <Option value="66">Khosla Ventures</Option>
            <Option value="94">Lightspeed Venture Partners</Option>
            <Option value="41">Kleiner Perkins Caufield & Byers</Option>
            <Option value="42">Bessemer Venture Partners</Option>
          </Select>
          
          <Table 
          dataSource={VCfundingResults} 
          columns={VCColumns}
          pagination={{ pageSizeOptions:[10, 10], 
          defaultPageSize: 10, 
          showQuickJumper:true }}/>
        </div>
      </div>
    )

}

export default VCPage

