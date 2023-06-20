import React, { PureComponent } from "react";
import "./main.scss";
import { Link } from "react-router-dom";
export default class Productscomponent extends PureComponent {
  render() {
    const { products ,selectedCategory} = this.props;
    {console.log(products)}


    return (
      <div>
        <div className="category">
        <button onClick={()=>this.props.filterProduct(selectedCategory)}>All</button>
          <button onClick={()=>this.props.filterProduct("fruits")}>Fruits</button>
          <button onClick={()=>this.props.filterProduct("dryfruits")}>DryFruits</button>
          <button onClick={()=>this.props.filterProduct("vegetables")}>Vegetables</button>
          <button onClick={()=>this.props.filterProduct("juices")}>Juices</button>
        </div>
        <div className="div-f">
          <div className="menu-list">
            <div className="list">
              <section>
                <div>FILTER</div>
              </section>
              <div>
                <section>Categories</section>
              </div>
              <section className="sec">{selectedCategory}</section>
              <section>PRICE</section>
              <section>OFFERS</section>
              <section>DISCOUNT</section>
              <section>CUSTOMER RATINGS</section>
              <section>AVALIBILITY</section>
            </div>
          </div>

          <div className="menu-data">
            <div className="card" id="root">
              <div id="root">
                {products.map((item) => {
                  console.log(item)
                  const { image, type, cost, off, prize, id, quantity } = item;
                  return (
                    <Link  to={`${id}`} className="data">
                      <div key={id} className="data">
                        <img src={image} alt="img" />
                        <p>{type}</p>
                        <h4>
                          ₹.{cost}.0{" "}
                          <strike style={{ opacity: 0.5, fontSize: 15 }}>
                            ₹.{prize}
                          </strike>
                        </h4>
                        <h3>Qty: {quantity}.kg</h3>
                        <h6>off: {off}%</h6>
                        <button>Add to Cart</button>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
