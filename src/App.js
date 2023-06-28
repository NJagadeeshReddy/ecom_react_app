import React, { PureComponent } from "react";
import { Route, Routes } from "react-router-dom";
import NavbarContainer from "./component/components/Navbarcomponent/index";
import Homecontainer from "./component/router/Homecomponent/index";
//import Productscontainer from "./component/router/Products/index";
import PDPcontainer from "./component/router/PDPage/index";
import CatageroiesContainer from "./component/components/Categoriescomponent/index";
export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
  }
  handleAddToCart = (item) => {
    const { cart } = this.state;
    let x = document.getElementById("textmsg");
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (existingItemIndex !== -1) {
      this.setState((prevState) => {
        const updatedCart = [...prevState.cart];
        const existingItem = updatedCart[existingItemIndex];
        existingItem.qty += 1;
        return { cart: updatedCart };
        
      });
    } else {
      this.setState((prevState) => ({
        cart: [...prevState.cart, { ...item, qty: 1, cost: item.cost }],
      }));
    }
    let data = `<div class="added">
        successfully added 
        </div>`;
      x.insertAdjacentHTML("beforeend", `${data}`);
  };

  handleRemoveFromCart = (index) => {
    this.setState((prevState) => {
      const updatedCart = [...prevState.cart];
      const removedItem = updatedCart[index];
      if (removedItem.qty > 1) {
        removedItem.qty -= 1;
      } else {
        updatedCart.splice(index, 1);
      }

      return { cart: updatedCart };
    });
  };

  calculateTotal = () => {
    const { cart } = this.state;
    let total = 0;
    cart.forEach((item) => {
      total += item.qty * item.cost;
    });
    return total;
  };

  render() {
    const { cart } = this.state;

    return (
      <>
        <NavbarContainer
          cart={cart}
          handleAddToCart={this.handleAddToCart}
          onRemoveFromCart={this.handleRemoveFromCart}
          calculateTotal={this.calculateTotal}
        />
        <CatageroiesContainer/>
         
        <Routes>
          <Route  path="/" element={<Homecontainer  />} />
          {/* <Route path="products" element={<Productscontainer />} />  */}
          <Route
            path="/:item/:id/:type"
            element={<PDPcontainer handleAddToCart={this.handleAddToCart} />}
          />
        </Routes>
      </>
    );
  }
}
