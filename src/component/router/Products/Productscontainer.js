import React, { PureComponent } from "react";
import Productscomponent from "./Productscomponent";

export default class Productscontainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      allProducts: [],
      filteredProducts:[],
      selectedCategory: "",
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          allProducts: data,
          filteredProducts:data,
        });
      })
      .catch((error) => console.log(error));
  }
  filterProduct = (cat) => {
    const { allProducts, selectedCategory } = this.state;
    if (selectedCategory === cat) {
      this.setState({
        filteredProducts:allProducts,
        selectedCategory:"",
      });
    } else {
      const updatedList = allProducts.filter((x) => x.category === cat);
      this.setState({
        filteredProducts: updatedList,
        selectedCategory: cat,
      });
    }
  };
  render() {
    const { filteredProducts} = this.state;
    return (
      <div>
        <Productscomponent
          filterProduct={this.filterProduct}
          products={filteredProducts}
          selectedCategory={this.state.selectedCategory}
        />
      </div>
    );
  }
}
