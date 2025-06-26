import ProductCard from "../components/ui/productCard.jsx";
import products from "../data/Products.js";

function Home() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-4 lg:gap-4 px-2 pt-18 ">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Home;
