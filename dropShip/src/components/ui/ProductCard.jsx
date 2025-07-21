import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import checkmarkAdded from "../../assets/checkmark-added.svg";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const { addToCart, displayConfirm } = useContext(CartContext);
  return (
    <Link
      to={`/products/details/${product.id}`}
      className="flex items-center justify-center"
    >
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
        <div className="h-14 flex flex-col">
          {displayConfirm[product.id] && (
            <div className={`flex `}>
              <img src={checkmarkAdded} alt="" />
              <div className="text-green-500">Added to cart</div>
            </div>
          )}
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-blue-400 text-white py-1 rounded-lg hover:bg-blue-300 cursor-pointer mt-auto"
          >
            Add to cart
          </button>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
