import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'


// Add API to have a Crypto List

const Cryptocurrencies = () => {


  return (
    <> 
    <div className='search-crypto'>
      <Input placeholder='Search Cryptocurrency' />
    </div>
    <Row gutter={[12, 24]} className="crypto-card-container">
        <Col lg={6} className="crypto-card">
          <Link to="/cryptocurrencies">
            <Card title="Bitcoin" extra="BTC" hoverable >
              <p>Price: $30,074.95</p>
              <p>Market Cap: $580.5B</p>
              <p>Daily Change: +2.34%</p>
            </Card>
            <Card title="Ethereum" extra="ETH" hoverable >
              <p>Price: $1,823.24</p>
              <p>Market Cap: $220.0B</p>
              <p>Daily Change: +2.32%</p>
            </Card>
          </Link>
        </Col>
        <Col lg={6} className="crypto-card">
          <Link to="/cryptocurrencies">
            <Card title="BNB" extra="BNB" hoverable >
              <p>Price: $289.49</p>
              <p>Market Cap: $47.2B</p>
              <p>Daily Change: -.93%</p>
            </Card>
            <Card title="Cardano" extra="ADA" hoverable >
              <p>Price: $.65</p>
              <p>Market Cap: $22.0B</p>
              <p>Daily Change: +2.02%</p>
            </Card>
          </Link>
        </Col>
        <Col lg={6} className="crypto-card">
          <Link to="/cryptocurrencies">
            <Card title="Solana" extra="SOL" hoverable >
              <p>Price: $39.19</p>
              <p>Market Cap: $13.3B</p>
              <p>Daily Change: +.77%</p>
            </Card>
            <Card title="Polkadot" extra="DOT" hoverable >
              <p>Price: $9.09</p>
              <p>Market Cap: $8.9B</p>
              <p>Daily Change: +2.32%</p>
            </Card>
          </Link>
        </Col>
        <Col lg={6} className="crypto-card">
          <Link to="/cryptocurrencies">
            <Card title="Avalanche" extra="AVAX" hoverable >
              <p>Price: $24.38</p>
              <p>Market Cap: $6.8B</p>
              <p>Daily Change: +2.34%</p>
            </Card>
            <Card title="Polygon" extra="MATIC" hoverable >
              <p>Price: $.61</p>
              <p>Market Cap: $4.8B</p>
              <p>Daily Change: +.42%</p>
            </Card>
          </Link>
        </Col>
    </Row> 
    
    </>
  )
}

export default Cryptocurrencies