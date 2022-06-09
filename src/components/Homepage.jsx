import React from 'react'
import { Typography, Row, Col, Statistic} from 'antd'
import { Link} from 'react-router-dom'
import Cryptocurrencies from './Cryptocurrencies'
import News from './News'


//Need to add APIs to project - Coinranking no longer works

const { Title } = Typography;




const Homepage = () => {


  return (
    <>
      <Title level={2} className="heading">Global Crypto Stats</Title>
      <Row gutter={[32, 32]}>
        <Col span={12}><Statistic title="Total CryptoCurrencies" value="169" /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value="373" /></Col>
        <Col span={12}><Statistic title="Total Market Cap:" value="2.4T" /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value="127.4B" /></Col>
        <Col span={12}><Statistic title="Total Markets" value="83.1K" /></Col>
        <Col span={12}><Statistic title="Total CryptoCurrencies" value="169"/></Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title"> Top 10 Cryptos</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3} className="show-more"><Link to="/news">Show More</Link></Title>
      </div>
      <News simplified />
    </>
  )
}

export default Homepage