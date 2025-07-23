import { useEffect, useState } from "react";
import ProductCard from "../components/ui/productCard.jsx";
import products from "../data/Products.js";
import { useParams } from "react-router-dom";
import { useDebounce } from "../components/UseDebounceHook.jsx";
import SearchAndFilter from "../components/ui/SearchAndFilter.jsx";

function ProductsPage() {
  const { category, dealType } = useParams();
  const productType = category || dealType;
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState("");

  const debouncedSearchValue = useDebounce(searchValue, 300);

  const filteredProducts = products.filter((product) =>
    productType === category
      ? product.category === category &&
        product.title
          .toLocaleLowerCase()
          .includes(debouncedSearchValue.toLocaleLowerCase())
      : product.new &&
        product.title
          .toLocaleLowerCase()
          .includes(debouncedSearchValue.toLocaleLowerCase())
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
      <div className="px-4 pt-18">
        <SearchAndFilter
          searchValue={searchValue}
          handleSearch={handleSearch}
          handleSortValue={handleSortValue}
        ></SearchAndFilter>
        <div className="text-3xl font-semibold text-center">
          No products were found for this category
        </div>
      </div>
    );
  }
  return (
    <div className="px-4 pt-18">
      <SearchAndFilter
        searchValue={searchValue}
        handleSearch={handleSearch}
        handleSortValue={handleSortValue}
      ></SearchAndFilter>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-4 lg:gap-4 ">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
