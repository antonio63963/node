
import { AppstoreOutlined, DownOutlined, ScanOutlined, HeartOutlined, ShoppingOutlined } from '@ant-design/icons';
import { Row, Col, Typography, Input, Button, Menu } from 'antd';
import style from './HeaderSecond.module.css';
const { Title } = Typography;
const { Search } = Input;

const menu = (
  <Menu mode="horizontal">
    <Menu.Item key="0">
    <ScanOutlined style={{color: '#fff', 'font-size': '18px' }}/>
    </Menu.Item>
    <Menu.Item key="1">
    <HeartOutlined style={{color: '#fff', 'font-size': '18px' }} />
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">
    <ShoppingOutlined style={{color: '#fff', 'font-size': '18px' }} />
    </Menu.Item>
  </Menu>
);

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
      <Col span={ 2 }>
        <Button type="primary" className={style.enterBtn}> Войти </Button>
      </Col>
   
      <Col span={6} >
        
        <div className={ style.menuWrapper}>
          <div className={ style.iconWrapper }>
            <ScanOutlined style={{color: '#fff', 'font-size': '18px' }}/>
          </div>
          <div className={ style.iconWrapper }>
            <HeartOutlined style={{color: '#fff', 'font-size': '18px' }} />
          </div>
          <div className={ style.store }>
            <ShoppingOutlined style={{color: '#fff', 'font-size': '18px' }} />
            Корзина
          </div>
        </div>
      </Col>
     
    </Row>
  )
}
