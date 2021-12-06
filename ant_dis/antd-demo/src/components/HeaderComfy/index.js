import HeaderFirstLine from '../HeaderFirstLine';
import HeaderSecondLine from '../HeaderSecondLine';
import {Row, Col} from 'antd'


export default function HeaderComfy() {
  return (
  <>
      <Row>
        <Col span={12}>
          <img src="https://cdn.comfy.ua/media/x/brending-bannera/brandering_1316.png" />
        </Col>
      </Row>
      <Row>
        <Col xs={{span: 0}} lg={{span: 24}}>
          <HeaderFirstLine />
          <HeaderSecondLine />
        </Col>
    
      </Row>
  </>
  )
}