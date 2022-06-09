import React from 'react'
import {  Typography, Row, Col, Avatar, Card } from 'antd'

import bm from '../images/bm.png'
import cb from '../images/cb.png'

const { Text, Title } = Typography



const News = () => {
  return (
    <Row gutter={[24, 24]}>

      <Col xs={24} sm={12} lg={8}>
        <Card hoverable className='news-card'>
          <a href="/">
            <div className='news-image-container'>
              <Title className="news-title" level={4}>
NEWS
FINTECH STARTUP EDGE RELEASE FIRST CONFIDENTIAL BITCOIN MASTERCARD</Title>

            </div>
            <p>Edges new card will not collect KYC data used to determine a persons identity giving complete privacy and instant transfers with no fees.</p>
            <div className="provider-container">
              <div>
                <Avatar src={bm} alt="" />
                <Text className="provider-name">Bitcoin Magazine</Text>
              </div>
              <Text>06/08/2022</Text>
            </div>
          </a>
        </Card>
      </Col>
      <Col xs={24} sm={12} lg={8}>
        <Card hoverable className='news-card'>
          <a href="/">
            <div className='news-image-container'>
              <Title className="news-title" level={4}>Trade thousands of tokens on your choice of network in Coinbase Wallet</Title>

            </div>
            <p>Coinbase Wallet makes it simple to trade tokens on your choice of network. This month, we expanded our trading features to support token swaps on BNB Chain and Avalanche.</p>
            <div className="provider-container">
              <div>
                <Avatar src={cb} alt="" />
                <Text className="provider-name">The Coinbase Blog</Text>
              </div>
              <Text>05/23/2022</Text>
            </div>
          </a>
        </Card>
      </Col>
      <Col xs={24} sm={12} lg={8}>
        <Card hoverable className='news-card'>
          <a href="/">
            <div className='news-image-container'>
              <Title className="news-title" level={4}>BITCOIN IS THE ANSWER TO FINANCIAL BURNOUT</Title>
            </div>
            <p>Burnout is experienced in numerous fields and finance is no exception. Bitcoin offers a viable and non-correlated alternative to a system known for burnout.</p>
            <div className="provider-container">
              <div>
                <Avatar src={bm} alt="" />
                <Text className="provider-name">Bitcoin Magazine</Text>
              </div>
              <Text>06/07/2022</Text>
            </div>
          </a>
        </Card>
      </Col><Col xs={24} sm={12} lg={8}>
        <Card hoverable className='news-card'>
          <a href="/">
            <div className='news-image-container'>
              <Title className="news-title" level={4}>Coinbase Commits $1 Million for Public Goods in partnership with Gitcoin</Title>
            </div>
            <p>Coinbase commits $1 million for Public Goods through Gitcoin, including $200,000 for upcoming Grants Round 14.</p>
            <div className="provider-container">
              <div>
                <Avatar src={cb} alt="" />
                <Text className="provider-name">The Coinbase Blog</Text>
              </div>
              <Text>06/01/2022</Text>
            </div>
          </a>
        </Card>
      </Col>
      <Col xs={24} sm={12} lg={8}>
        <Card hoverable className='news-card'>
          <a href="/">
            <div className='news-image-container'>
              <Title className="news-title" level={4}>365 DAYS OF FINANCIAL FREEDOM: THE STORIES OF BITCOIN ADOPTION IN EL SALVADOR</Title>
            </div>
            <p>A year after the introduction of bitcoin as legal tender in El Salvador, we can reflect on the stories of those who’ve experienced the adoption firsthand.</p>
            <div className="provider-container">
              <div>
                <Avatar src={bm} alt="" />
                <Text className="provider-name">Bitcoin Magazine</Text>
              </div>
              <Text>06/8/2022</Text>
            </div>
          </a>
        </Card>
      </Col>
      <Col xs={24} sm={12} lg={8}>
        <Card hoverable className='news-card'>
          <a href="/">
            <div className='news-image-container'>
              <Title className="news-title" level={4}>Building a more open financial system: How Coinbase detects bad actors</Title>
            </div>
            <p>At Coinbase, we take our responsibility to build a more open, accessible financial system very seriously. We’re deeply committed to our asset listing policies and processes, and we’ll continue to innovate as our dynamic space evolves.</p>
            <div className="provider-container">
              <div>
                <Avatar src={cb} alt="" />
                <Text className="provider-name">The Coinbase Blog</Text>
              </div>
              <Text>05/19/2022</Text>
            </div>
          </a>
        </Card>
      </Col>
    </Row>
  )
}

export default News