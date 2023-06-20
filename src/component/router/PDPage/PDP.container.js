import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PDPComponent from "./PDPComponent";

const PDPcontainer = (props) => {
  const { handleAddToCart } = props;
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  console.log(id);
  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.log(error));
      
  },[id]);
  console.log(product)

  if (!product) {
    return <div>Loading...</div>;
  }

  return <PDPComponent handleAddToCart={handleAddToCart} product={product} />;
};

export default PDPcontainer;
