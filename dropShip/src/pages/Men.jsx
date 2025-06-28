import ProductCard from "../components/ui/productCard.jsx";
import products from "../data/Products.js";
import { useParams } from "react-router-dom";

function Men() {
  const { category } = useParams();

  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

  if (filteredProducts.length === 0) {
    return (
      <div className="pt-16">No products were found for this category</div>
    );
  }
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-4 lg:gap-4 px-2 pt-18 ">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Men;
