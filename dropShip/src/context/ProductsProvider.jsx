import { ProductsContext } from "./ProductsContext.jsx";
import products from "../data/Products.js";

function ProductsProvider({ children }) {
  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;
