import React, { PureComponent } from 'react'
import NavbarComponent from './Navbar.Component'
export default class NavbarContainer extends PureComponent {
  handleRemoveFromCart = (index) => {
    const { onRemoveFromCart } = this.props;
    onRemoveFromCart(index);
  };

  render() {
    const { cart } = this.props;
    const { calculateTotal } = this.props
    return (
      <div>
        <NavbarComponent
          cart={cart}
          handleRemoveFromCart={this.handleRemoveFromCart}
          calculateTotal={calculateTotal}
        />
      </div>
    )
  }
}
