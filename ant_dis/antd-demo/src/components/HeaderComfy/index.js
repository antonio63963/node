import HeaderFirstLine from '../HeaderFirstLine';
import HeaderSecondLine from '../HeaderSecondLine';
import {Row, Col} from 'antd'


export default function HeaderComfy() {
  return (
    <Row>
      <Col xs={{span: 0}} lg={{span: 24}}>
        <HeaderFirstLine />
        <HeaderSecondLine />
      </Col>

    </Row>
  )
}