import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="flex items-center justify-center">
      <div>
        <div className="w-full h-full">
          <img
            src={product.image}
            className="w-full h-full max-w-[316px]"
            alt=""
          />
        </div>
        <div className="h-12">{product.title}</div>
        <div>{product.price} &euro;</div>
        <div className="w-full">
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-blue-400 text-white py-1 rounded-lg hover:bg-blue-300 cursor-pointer"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
