import { Card } from "antd"
import { Link } from 'react-router-dom';

export default function ProductItem2({ product }) {
    return (
        <Card className="bg-gray product" hoverable>
            <Link to={`/product/${product.id}`} >
                <img className="product-pic"
                    style={{ width: '100%' }}
                    src={product.image}
                    alt={product.name} />
                <h2 className="product-text">{product.name}</h2>
            </Link>
        </Card>
    );
}

// Link to={`/product/${product.id}`}