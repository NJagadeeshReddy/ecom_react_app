import React, { PureComponent } from "react";
import "./Navbar.scss";
import AddCart from "../../images/add-cart.png";
import { Link } from "react-router-dom";
export default class NavbarComponent extends PureComponent {
  render() {
    const { handleRemoveFromCart, calculateTotal } = this.props;
    const { cart } = this.props;
    const itemCount = cart.length;
    return (
      <div>
        <p id="textmsg"></p>
        <nav>
          <div className="icon">
            <img
              src="https://ecom.ngo/resource/site/images/ecom_main.jpg"
              alt="ldg"
            />
          </div>
         <ol>
         <li>
              <Link className="lin" to="/">
                Home
              </Link>
            </li>
            {/* <li>
              <Link className="procat" to="products">
                Product
              </Link>
            </li> */}
         </ol>
          <div className="search_box">
            <input type="text" placeholder="search your favorite" />
            <span className="fa fa-search"></span>
          </div>
          <ol className="navbar-menu">
            
            <li>
              <a href="" className="login">
                Login
              </a>
            </li>
            <li className="cart" id="jaga001">
              <img className="img2" src={AddCart} alt="loading" />
              <sup id="count">{itemCount}</sup>
              <div id="jaga1" className="sidebar">
                <div className="head">
                  <p>Welcome to cart:</p>
                </div>
                <div className="cart-items">
                  {console.log(cart)}
                  {cart.map((item, index) => (
                    <div className="cart-item" key={index}>
                      <h4>{index + 1}.</h4>
                      <div className="row-img">
                        <img className="rowing" src={item.image} alt="img" />
                      </div>
                      <p>{item.type} .</p>
                      <h4>  qty:
                        {item.qty}×₹.{item.cost} = ₹.{item.qty * item.cost}
                      </h4>
                      <button onClick={() => handleRemoveFromCart(index)}>
                        remove
                      </button>
                    </div>
                  ))}
                </div>
                <div className="foot">
                  <h3>Total</h3>
                  <h2 id="total">₹.{calculateTotal().toFixed(2)}</h2>
                </div>
              </div>
            </li>
          </ol>
        </nav>
        
      </div>
    );
  }
}
