import { useEffect, useState } from "react";
import ProductCard from "../components/ui/productCard.jsx";
import products from "../data/Products.js";
import { useParams } from "react-router-dom";

function ProductsPage() {
  const { category } = useParams();
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState("");

  const filteredProducts = products.filter(
    (product) =>
      product.category === category &&
      product.title
        .toLocaleLowerCase()
        .includes(searchValue.toLocaleLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortValue === "highest") {
      return b.price - a.price;
    } else if (sortValue === "lowest") {
      return a.price - b.price;
    } else {
      return 0;
    }
  });

  function handleSearch(e) {
    const { value } = e.target;
    setSearchValue(value);
  }
  function handleSortValue(e) {
    const { value } = e.target;
    setSortValue(value);
  }

  useEffect(() => {
    setSearchValue("");
  }, [category]);

  if (filteredProducts.length === 0) {
    return (
      <div className="pt-16">No products were found for this category</div>
    );
  }
  return (
    <div className="px-4 pt-18">
      <div className="w-full flex my-2">
        <input
          type="search"
          onChange={(e) => handleSearch(e)}
          value={searchValue}
          className="border py-2 px-4 rounded-xl focus:border-blue-500"
          placeholder="Search"
        />
        <select
          className="border ml-auto py-2 px-4 rounded-xl"
          onChange={(e) => handleSortValue(e)}
        >
          <option value="/" disabled hidden>
            Sort by
          </option>
          <option value="relevance">Relevance</option>
          <option value="highest">Price from highest to lowest</option>
          <option value="lowest">Price from lowest to highest</option>
        </select>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-4 lg:gap-4 ">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
