import React, { PureComponent } from 'react'
import NavbarComponent from './Navbar.Component'


export default class NavbarContainer extends PureComponent {
  handleRemoveFromCart = (index) => {
    const { onRemoveFromCart } = this.props;
    onRemoveFromCart(index);
  };
  calculateTotal = () => {
    const { cart } = this.props;
    let total = 0;
    cart.forEach((item) => {
      total += item.cost;
    });
    return total;
  };
 
  render() {
    const { cart } = this.props;
    return (
      <div>
        <NavbarComponent 
        cart={cart}
        handleRemoveFromCart={this.handleRemoveFromCart}
        calculateTotal={this.calculateTotal}
        />
      </div>
    )
  }
}
