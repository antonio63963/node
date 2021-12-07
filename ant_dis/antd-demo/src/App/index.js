import React from 'react';
import { Row, Col, Button, Image, Typography,Carousel  } from 'antd';
import HeaderComfy from '../components/HeaderComfy';
import Catalog from '../components/Catalog';
import Products from '../containers/Products';
import MainLayout from '../containers/MainLayout'

import "antd/dist/antd.css";
import style from './app.module.css';

const { Text } = Typography;

// carousel
function onChange(a, b, c) {
  console.log(a, b, c);
}

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

function App() {
  return (
    <div className="App" >
      <MainLayout />
    </div>
  )
}


// function App() {
//   return (
//     <div className={style.App}>
//       <HeaderComfy />

//       <Row >
//         <Col span={6} >
//           <Catalog />
//         </Col>
//         <Col span={18} style={{'padding': '20px'}}>
//           {/* ad block */}
//           <Row justify='space-between'>
//             <Col flex='0 1 200px'>
//               <Button  className={style.btnAd}>
//                 <Image 
//                 src="https://cdn.comfy.ua/media/blb/ucenka.svg"/>
//                 <Text style={{marginLeft: '20px'}}> Уцененные товары </Text>
//               </Button>
//             </Col>
//             <Col flex='0 1 200px'>
//               <Button  className={style.btnAd}>
//                 <Image 
//                 src="https://cdn.comfy.ua/media/blb/ucenka.svg"/>
//                 <Text style={{marginLeft: '20px'}}> Уцененные товары </Text>
//               </Button>
//             </Col>
//             <Col flex='0 1 200px'>
//               <Button  className={style.btnAd}>
//                 <Image 
//                 src="https://cdn.comfy.ua/media/blb/ucenka.svg"/>
//                 <Text style={{marginLeft: '20px'}}> Уцененные товары </Text>
//               </Button>
//             </Col>
//           </Row>
//           {/* carousel */}
//           <Row>
//           <Col >
//               <Carousel afterChange={onChange}>
//                 <div>
//                   <h3 style={contentStyle}>1</h3>
//                 </div>
//                 <div>
//                   <h3 style={contentStyle}>2</h3>
//                 </div>
//                 <div>
//                   <h3 style={contentStyle}>3</h3>
//                 </div>
//                 <div>
//                   <h3 style={contentStyle}>4</h3>
//                 </div>
//               </Carousel>
//           </Col>
//           </Row>
//         </Col>
//       </Row>
      
//       {/* Products */}
      
        
//           <Products />
        
 
//     </div>
//   );
// }

export default App;
