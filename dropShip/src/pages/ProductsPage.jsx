import { useEffect, useState } from "react";
import ProductCard from "../components/ui/productCard.jsx";
import products from "../data/Products.js";
import { useParams } from "react-router-dom";

function ProductsPage() {
  const { category } = useParams();
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart((prev) => [...prev, { ...product, quantity: 1 }]);
    }
  }

  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

  useEffect(() => {
    console.log(cart);
    console.log(cart.length);
  }, [cart]);

  if (filteredProducts.length === 0) {
    return (
      <div className="pt-16">No products were found for this category</div>
    );
  }
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-4 lg:gap-4 px-2 pt-18 ">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          onClick={() => addToCart(product)}
          product={product}
        />
      ))}
    </div>
  );
}

export default ProductsPage;
