import style from './Header.module.css';
import { Menu, Dropdown, Button, layout } from 'antd';
import { Col, Row, Input, Space } from 'antd';
import { DownOutlined, WechatOutlined, MessageOutlined, SkypeOutlined 
} from '@ant-design/icons';


const { Search } = Input;


const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="https://www.antgroup.com">Одесса</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="https://www.aliyun.com">Николаев</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">Херсон</Menu.Item>
  </Menu>
);

const other = (
  <Menu>
    <Menu.Item key="4">
      Доставка
    </Menu.Item>
    <Menu.Item key="5">
      <a href="https://www.aliyun.com">Возврат</a>
    </Menu.Item>
  
    <Menu.Item key="3">Блог</Menu.Item>
  </Menu>
);

const contacts = (
  <Menu>
    <Menu.Item key="6">
      <a href="https://www.antgroup.com">
      <WechatOutlined />
      Чат на сайте
      </a>
    </Menu.Item>
    <Menu.Item key="7">
      <a href="https://www.antgroup.com">
      <MessageOutlined />
      </a>
      Месенджер
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="8">
    <SkypeOutlined />
      Skype
    </Menu.Item>
  </Menu>
);

export default function HeaderFirstLine() {
  return (

     <>
       <Row  align="center" justify="middle" style={{'background-color': '#fff'}}>
        <Col span={4}>
          <div className={style.logo}>
          <img className={style.logoImg} src="https://findvectorlogo.com/wp-content/uploads/2019/10/comfy-ua-vector-logo.png" />
          </div>
        </Col>
        <Col span={2}>
          <Dropdown overlay={menu} trigger={['click']}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              Киев 
              <DownOutlined />
            </a>
          </Dropdown>
        </Col>
        <Col span={2} offset={4}>
          <Button type="primary" danger shape="round">
          Акции
          </Button>
        </Col>
        <Col span={12}>
        <Menu mode="horizontal" className={style.menu}>
            <Menu.Item key="1">Магазины</Menu.Item>
            <Menu.Item key="2">Найти заказ</Menu.Item>
            <Menu.Item key="3">
              <Dropdown overlay={other}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                  Еще <DownOutlined />
                </a>
              </Dropdown>
            </Menu.Item>
            <Menu.Item key="3">
              <Dropdown overlay={contacts}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                  Связаться <DownOutlined />
                </a>
              </Dropdown>
            </Menu.Item>
           
            <Menu.Item>
              <div className={style.languagesSwitcher}>
                <span> РУС </span>
                <span> УКР </span>
              </div>
            </Menu.Item>
          </Menu>
        </Col>

       </Row>

       
     </>                                                       
  )
}