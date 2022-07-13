import React from 'react'
import { Row,  Col,Typography, Avatar } from 'antd'
import  binance from '../images/binance.png'
import  coinbase  from '../images/coinbase.png'
import ftx from '../images/ftx.png'
import kraken from '../images/kraken.png'
import gemini from '../images/gemini.png'
import crypto from '../images/crypto.png'

const { Text } = Typography


const Exchanges = () => {
  return (
    <>
      <Row>
        <Col span={4}>Exchange Rank</Col>
        <Col span={4}>Exchanges</Col>
        <Col span={4}>Exchange Score</Col>
        <Col span={4}>24h Trade Volume</Col>
        <Col span={4}>Markets</Col>
        <Col span={4}>Change</Col>
      </Row>
      <Row>
      <Col span={24}>
            
            <Row>
              <Col span={4}>
                <Text><strong># 1</strong></Text> </Col>
                <Col span={4}>
                <Avatar alt="Binance Avatar Logo" className="exchange-image" src={binance} />
                <Text><strong>Binance</strong></Text>
              </Col>
              <Col className="ex-box-2" span={4}>9.9</Col>
              <Col span={4}>$13,343,551,101.94</Col>
              <Col span={4}>1673</Col>
              <Col span={4} className="crypto-down_change"> -22.83%</Col>
            </Row>
  
          
          </Col> 
            <Col span={24}>
            
            <Row>
              <Col span={4}>
                <Text><strong># 2</strong></Text> </Col>
                <Col span={4}>
                <Avatar alt="Coinbase Avatar Logo" className="exchange-image" src={coinbase} />
                <Text><strong>Coinbase</strong></Text>
              </Col>
              <Col className="ex-box-2"span={4}>8.2</Col>
              <Col span={4}>$1,557,682,178</Col>
              <Col span={4}>519</Col>
              <Col span={4} className="crypto-down_change"> -22.95%</Col>
            </Row>
  
          
          </Col> 
          <Col span={24}>
            
            <Row>
              <Col span={4}>
                <Text><strong># 3</strong></Text> </Col>
                <Col span={4}>
                <Avatar alt="FTX Avatar Logo" className="exchange-image" src={ftx} />
                <Text><strong>FTX</strong></Text>
              </Col>
              <Col className="ex-box-2"span={4}>8.2</Col>
              <Col span={4}>$1,635,869,920</Col>
              <Col span={4}>420</Col>
              <Col span={4} className="crypto-down_change"> -23.05%</Col>
            </Row>
  
          
          </Col> 
          <Col span={24}>
            
            <Row>
              <Col span={4}>
                <Text><strong># 4</strong></Text> </Col>
                <Col span={4}>
                <Avatar alt="Kraken Avatar Logo" className="exchange-image" src={kraken} />
                <Text><strong>Kraken</strong></Text>
              </Col>
              <Col className="ex-box-1"span={4}>7.8</Col>
              <Col span={4}>$485,252,130</Col>
              <Col span={4}>556</Col>
              <Col span={4} className="crypto-down_change"> -28.83%</Col>
            </Row>
          
  
          
          </Col> 
          <Col span={24}>
            
            <Row>
              <Col span={4}>
                <Text><strong># 5</strong></Text> </Col>
                <Col span={4}>
                <Avatar alt="Gemini Avatar Logo" className="exchange-image" src={gemini} />
                <Text><strong>Gemini</strong></Text>
              </Col>
              <Col className="ex-box" span={4}>7.0</Col>
              <Col span={4}>$88,180,116</Col>
              <Col span={4}>121</Col>
              <Col span={4} className="crypto-down_change"> -22.25%</Col>
            </Row>
  
          
          </Col> 
          <Col span={24}>
            
            <Row>
              <Col span={4}>
                <Text><strong># 6</strong></Text> </Col>
                <Col span={4}>
                <Avatar alt="Crypto.com Avatar Logo" className="exchange-image" src={crypto} />
                <Text><strong>Crypto.com</strong></Text>
              </Col>
              <Col className="ex-box"span={4}>6.7</Col>
              <Col span={4}>$985,050,731</Col>
              <Col span={4}>464</Col>
              <Col span={4} className="crypto-down_change"> -3.25%</Col>
            </Row>
  
          
          </Col> 
      </Row>
    </>
  )
}

export default Exchanges