import { Card, Row, Col } from 'antd';

const { Meta } = Card;

const prodArr =  [...Array(5)];
// const prodArr = [1, 2, 3, 4, 5, 6, 7, 8]
export default function Products() {
  const prodElems = prodArr.map((elem, index) => {
    return (
      <Col flex={0, 1, '200px'}>
        <Card
        key={index}
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
        <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Col>
    )
  });
  console.log(prodElems)
  return (
    <Row gutter={16}>
      {prodElems}
    </Row>
  )
}