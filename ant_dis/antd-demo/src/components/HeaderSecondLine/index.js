
import { AppstoreOutlined, DownOutlined } from '@ant-design/icons';
import { Row, Col, Typography, Input, Button } from 'antd';
import style from './HeaderSecond.module.css';
const { Title } = Typography;
const { Search } = Input;


export default function HeaderSecondLine() {
  return (
    <Row align="middle" className={style.greenBG}>
      <Col span={ 6 }>
        <div className={style.catalogTitle}>
        <AppstoreOutlined style={{ 'font-size': '18px' }}/>
          <span >Каталог товаров</span>
          <DownOutlined />
        </div>
      </Col>
      <Col span={ 10 }>
        <div className={style.inputWrapper}>
          <Search style={{  'border-radius': '5px'}}/>
        </div>
      </Col>
      <Col>
        <Button type="primary" className={style.enterBtn}> Войти </Button>
      </Col>
    </Row>
  )
}
