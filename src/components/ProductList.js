import { Row, Col } from "antd";
import ProductItem from "./ProductItem";

export default function ProductList({products}) {
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
          <ProductItem product={product}/>
        </Col>
      ))}
    </Row>
  );
}

