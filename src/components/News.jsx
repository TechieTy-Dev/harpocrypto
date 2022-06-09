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
              <Title className="news-title" level={4}>News Name</Title>

            </div>
            <p>News Description</p>
            <div className="provider-container">
              <div>
                <Avatar src={bm} alt="" />
                <Text className="provider-name">News Provider</Text>
              </div>
              <Text>Data Published</Text>
            </div>
          </a>
        </Card>
      </Col>
      <Col xs={24} sm={12} lg={8}>
        <Card hoverable className='news-card'>
          <a href="/">
            <div className='news-image-container'>
              <Title className="news-title" level={4}>News Name</Title>

            </div>
            <p>News Description</p>
            <div className="provider-container">
              <div>
                <Avatar src={cb} alt="" />
                <Text className="provider-name">News Provider</Text>
              </div>
              <Text>Data Published</Text>
            </div>
          </a>
        </Card>
      </Col>
      <Col xs={24} sm={12} lg={8}>
        <Card hoverable className='news-card'>
          <a href="/">
            <div className='news-image-container'>
              <Title className="news-title" level={4}>News Name</Title>
            </div>
            <p>News Description</p>
            <div className="provider-container">
              <div>
                <Avatar src={bm} alt="" />
                <Text className="provider-name">News Provider</Text>
              </div>
              <Text>Data Published</Text>
            </div>
          </a>
        </Card>
      </Col><Col xs={24} sm={12} lg={8}>
        <Card hoverable className='news-card'>
          <a href="/">
            <div className='news-image-container'>
              <Title className="news-title" level={4}>News Name</Title>
            </div>
            <p>News Description</p>
            <div className="provider-container">
              <div>
                <Avatar src={cb} alt="" />
                <Text className="provider-name">News Provider</Text>
              </div>
              <Text>Data Published</Text>
            </div>
          </a>
        </Card>
      </Col>
      <Col xs={24} sm={12} lg={8}>
        <Card hoverable className='news-card'>
          <a href="/">
            <div className='news-image-container'>
              <Title className="news-title" level={4}>News Name</Title>
            </div>
            <p>News Description</p>
            <div className="provider-container">
              <div>
                <Avatar src={bm} alt="" />
                <Text className="provider-name">News Provider</Text>
              </div>
              <Text>Data Published</Text>
            </div>
          </a>
        </Card>
      </Col>
      <Col xs={24} sm={12} lg={8}>
        <Card hoverable className='news-card'>
          <a href="/">
            <div className='news-image-container'>
              <Title className="news-title" level={4}>News Name</Title>
            </div>
            <p>News Description</p>
            <div className="provider-container">
              <div>
                <Avatar src={cb} alt="" />
                <Text className="provider-name">News Provider</Text>
              </div>
              <Text>Data Published</Text>
            </div>
          </a>
        </Card>
      </Col>
    </Row>
  )
}

export default News