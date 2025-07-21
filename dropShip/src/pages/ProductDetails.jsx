import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext.jsx";

function ProductDetails() {
  const { id } = useParams();
  const { products } = useContext(ProductsContext);
  const clickedProduct = products.find((product) => id === product.id);
  if (!clickedProduct) return <div className="pt-20">Loading...</div>;
  return (
    <div className="pt-20">
      <div>{clickedProduct.title}</div>
    </div>
  );
}

export default ProductDetails;
