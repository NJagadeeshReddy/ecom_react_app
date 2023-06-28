import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import PDPComponent from "./PDPComponent";

const PDPContainerWrapper = (props) => {
  const navigate = useNavigate();
  const params = useParams();

  return <PDPContainer navigate={navigate} params={params} {...props} />;
};
class PDPContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }
    
  componentDidMount() {
    this.fetchProductData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.params.id !== this.props.params.id) {
      this.fetchProductData();
    }
  }
 

  fetchProductData() {
    const { id } = this.props.params;
    fetch(`http://localhost:3000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ product: data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { handleAddToCart} = this.props;
    const { product  } = this.state;

    if (!product) {
      return <div>Loading...</div>;
    }

    return <PDPComponent handleAddToCart={handleAddToCart} product={product} />;
  }
}

export default PDPContainerWrapper;
