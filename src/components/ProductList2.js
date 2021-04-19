import { Row, Col } from "antd";
import ProductItem2 from "./ProductItem2";

export default function ProductList2({products}) {
  return (
    <Row gutter={[32, 32]}>
    {products.map(product => (
        <Col 
          key={product.id} 
          sm={{ span: 12 }} 
          lg={{ span: 12 }}
          xl={{ span: 12 }}
          xxl={{ span: 12 }}
        >
          <ProductItem2 product={product}/>
        </Col>
      ))}
    </Row>
  );
}

