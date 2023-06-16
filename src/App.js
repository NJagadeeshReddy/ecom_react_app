import React, { PureComponent } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarContainer from "./component/components/Navbarcomponent/index";
import Homecontainer from "./component/router/Homecomponent/index";
import Categoriescontainer from "./component/components/Categories/index";
import Vegetablescontainer from "./component/router/Vegetables/index";
import Dryfruitscontainer from "./component/router/Dryfruits/index";
import Juicecontainer from "./component/router/Juices/index";
import Fruitscontainer from "./component/router/Fruits/index";
import PDPcontainer from "./component/router/PDPage/PDP.container";
export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
  }
  handleAddToCart = (item) => {
    this.setState((prevState) => ({
      cart: [...prevState.cart, item],
    }));
  };

  handleRemoveFromCart = (index) => {
    this.setState((prevState) => {
      const updatedCart = [...prevState.cart];
      updatedCart.splice(index, 1);
      return { cart: updatedCart };
    });
  };

  render() {
    const { cart } = this.state;

    return (
      <BrowserRouter>
        <div>
          <NavbarContainer
            cart={cart}
            onRemoveFromCart={this.handleRemoveFromCart}
          />
          <Categoriescontainer />
          <Routes>
            <Route path="/" element={<Homecontainer />} />
            <Route path="fruits" element={<Fruitscontainer />} />
            <Route path="vegetables" element={<Vegetablescontainer />} />
            <Route path="dryfruits" element={<Dryfruitscontainer />} />
            <Route path="juices" element={<Juicecontainer />} />
            <Route
              path="fruits/:id"
              element={<PDPcontainer handleAddToCart={this.handleAddToCart} />}
            />
            <Route
              path="dryfruits/:id"
              element={<PDPcontainer handleAddToCart={this.handleAddToCart} />}
            />
            <Route
              path="vegetables/:id"
              element={<PDPcontainer handleAddToCart={this.handleAddToCart} />}
            />
            <Route
              path="juices/:id"
              element={<PDPcontainer handleAddToCart={this.handleAddToCart} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
