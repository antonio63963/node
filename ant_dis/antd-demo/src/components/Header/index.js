import style from './Header.module.css';
import { Menu } from 'antd';
import { Col, Row, Input, Space } from 'antd';
import { UserOutlined, MobileOutlined, HeartOutlined, DeploymentUnitOutlined, WalletOutlined, LikeOutlined } from '@ant-design/icons';

const { Search } = Input;

export default function MyHeader() {
  return (

     <>
       <Row >
          <Col span={20}>
            <Menu mode="horizontal" >
              <Menu.Item key="1">О нас</Menu.Item>
              <Menu.Item key="2">Обмен</Menu.Item>
              <Menu.Item key="3">Ремонт</Menu.Item>
              <Menu.Item key="4">Кредит</Menu.Item>
              <Menu.Item key="5">Блог</Menu.Item>
              <Menu.Item key="6">Контакты</Menu.Item>
            </Menu>
          </Col>
          <Col span={4}>
            <Menu mode="horizontal" className={style.myRoom}>
              <Menu.Item>
                <UserOutlined />
                <span>кабинет</span>
              </Menu.Item>
            </Menu>
          </Col>
       </Row>

       {/* INFO */}
       <Row>
         <Col flex="300px">
           <div className={style.info_block}>
            <img className={style.logo} src="./mobileplanet.png"  />
           </div>
         </Col>
         <Col flex={2}>
          <div className={style.info_block}>
            <Row>
              <Col span={8}>
              <div className={style.phoneWrapper}>
                <MobileOutlined />
                <a>(048) 702 96 98 </a>
              </div>
              <div className={style.phoneWrapper}>
                <MobileOutlined />
                <a>(048) 702 96 98 </a>
              </div>
              </Col>
              <Col span={8}>
              <div className={style.phoneWrapper}>
                <MobileOutlined />
                <a>(048) 702 96 98 </a>
              </div>
              <div className={style.phoneWrapper}>
                <MobileOutlined />
                <a>(048) 702 96 98 </a>
              </div>
              </Col>
              <Col span={8}>
              <div className={style.phoneWrapper}>
                <MobileOutlined />
                <a>(048) 702 96 98 </a>
              </div>
              <div className={style.phoneWrapper}>
                <MobileOutlined />
                <a>(048) 702 96 98 </a>
              </div>
              </Col>
            </Row>
            
            <Row>
            <div className={style.inputSearch}>
                <Search  placeholder="input search text" enterButton />
            </div>
            </Row>
          </div>
         </Col>
         <Col flex={2}>
           <div className={style.info_block}>
           <div className={style.storeIcons}>
           <LikeOutlined />
             <HeartOutlined />
             <DeploymentUnitOutlined />
             <WalletOutlined />
           </div>
        
           </div>
         </Col>

         
       </Row>
        
     </>                                                       
  )
}