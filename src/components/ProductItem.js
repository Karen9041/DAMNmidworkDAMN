import { Card } from "antd"
import { Link } from 'react-router-dom';

export default function ProductItem({ product }) {
    return (
        <Card className="bg-gray product" hoverable>
            <Link to={`/${product.category}`} >
                <img className="product-pic"
                    style={{ width: '100%' }}
                    src={product.image}
                    alt={product.name} />
                <h2 className="product-text">{product.name}</h2>
            </Link>
        </Card>
    );
}
