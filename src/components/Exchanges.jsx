import React from 'react'
import { Collapse, Row,  Col,Typography, Avatar } from 'antd'

const { Text } = Typography
const { Panel } = Collapse

const Exchanges = () => {
  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      <Row>
        <Col span={24}>
          <Collapse>
            <Panel showArrow={false} header={(
              <Row>
                <Col span={6}>
                  <Text><strong>Exchange Ranking</strong></Text>
                  <Avatar className="exchange-image" src="" />
                  <Text><strong>Exchange Name</strong></Text>
                </Col>
                <Col span={6}>Exchange Volume</Col>
                <Col span={6}># of Markets</Col>
                <Col span={6}> Market Share</Col>
              </Row>
            )}>

            </Panel>
          
          </Collapse>
        </Col>
      </Row>
    </>
  )
}

export default Exchanges