import { AppstoreOutlined, DownOutlined, ScanOutlined, HeartOutlined, ShoppingOutlined } from '@ant-design/icons';
import { Row, Col, Button, Menu } from 'antd';
import style from './Catalog.module.css';




export default function Catalog() {
  return (
  <Menu  className={style.menu}>
    <Menu.Item key="0">
    <ScanOutlined style={{'font-size': '18px' }}/>
    Новинки Apple
    </Menu.Item>
    <Menu.Item key="1">
    <HeartOutlined style={{'font-size': '18px' }} />
    Смартфоны и телефоны
    </Menu.Item>

    <Menu.Item key="3">
    <ShoppingOutlined style={{'font-size': '18px' }} />
    Ноутбуки, планшеты и компьютерная техника
    </Menu.Item>
  </Menu>

  )
}