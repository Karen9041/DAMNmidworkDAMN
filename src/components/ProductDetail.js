import { useState } from "react";
import { Row } from "antd";
import { Select } from 'antd';
import AddToCart from "./AddToCart"

const { Option } = Select;

function ProductDetail({ product }) {
   const [qty, setQty] = useState(product.countInStock > 0 ? 1 : 0);
   const [color, setColor] = useState(product.countInStock > 0 ? product.color[0] : "none");
   return (
      <Row gutter={[32, 32]}>
         <h2 className="subtitle subtitle-detail"><strong className="strong">|</strong> {product.name}</h2>
         <img
            alt=""
            className="product-image"
            src={product.image}
         />           
        
         <div className="product-info--detail">
            <div className="product-description">
               <p >{product.description_long}</p>
            </div>
            <div className="product-price-wrap">
               <p className="product-price product-price--large">
               <h2 className="subtitle "><strong className="strong">|</strong> 價格: <strong className="strong"> NTD${product.price}.00</strong></h2>
               </p>
               <Row>
               <p className="product-status">
                  狀態: {product.countInStock > 0 ? "在庫" : "尚無存貨"}
               </p>
               <p className="product-color">
                     顏色: {"   "}
                     <Select 
                        defaultValue={color} 
                        className="select-style"
                        onChange={val=>setColor(val)}
                     >
                        {[...Array(product.color.length).keys()].map((x) => (
                           <Option value={product.color[x]}>
                              {product.color[x]}
                           </Option>
                        ))}
                     </Select>
                  </p>
               </Row>
               <Row>
                  <p className="product-qty">
                     數量: {"   "}
                     <Select 
                        defaultValue={qty} 
                        className="select-style"
                        onChange={val=>setQty(val)}
                     >
                        {[...Array(product.countInStock).keys()].map((x) => (
                           <Option key={x + 1} value={x + 1}>
                              {x + 1}
                           </Option>
                        ))}
                     </Select>
                  </p>
               </Row>
               <Row>
                  <p className="product-qty">
                     總計:$ {product.price * qty}
                  </p>           
               </Row>
            </div>
         </div>           
         <AddToCart />
      </Row>
   );
}

export default ProductDetail;