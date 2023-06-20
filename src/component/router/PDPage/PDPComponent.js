import React, { PureComponent } from "react";
import "./productdetails.scss";
export default class PDPComponent extends PureComponent {
 
  handleCancel = ()=>{
    
  }
  render() {
    const {  handleAddToCart } = this.props;
    const { product } = this.props;

    {
      console.log(product);
    }

    return (
      <>
        <div className="pdp">
          <button className="cancel" onClick={this.handleCancel}>
            C
          </button>
          <div className="product-details">
            <div className="product-image">
              <img src={product.image} alt={product.type} />
            </div>
            <div className="product-info">
              <h2>{product.type}</h2>
              <h4>
                {" "}
                Cost: ₹.{product.cost}.0{" "}
                <strike style={{ opacity: 0.5, fontSize: 15 }}>
                  ₹.{product.prize}
                </strike>
              </h4>
              <h3>Qty: {product.qty}.kg</h3>
              <h6>Off: {product.off}%</h6>
              <button onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
              <p>
                <b style={{ color: "brown" }}>Details:</b>
                {product.details}
              </p>
              <button className="more">More</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
