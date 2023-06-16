import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
export default class Vegetablescomponent extends PureComponent {
  render() {
    const { vegetables } = this.props;
    return (
      <div>
        <div className="div-f">
          <div className="menu-list">
            <div className="list">
              <section>
                <div>FILTER</div>
              </section>
              <div>
                <section>Categories</section>
              </div>
              <section className="sec">Vegetables</section>
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
                {vegetables.map((item, index) => {
                  const { image, type, cost, off, prize, id, quantity } = item;
                  return (
                    <Link to={`${id}`} className="data" key={index}>
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
