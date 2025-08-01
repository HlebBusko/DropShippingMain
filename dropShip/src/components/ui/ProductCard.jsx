import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import checkmarkAdded from "../../assets/checkmark-added.svg";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const { addToCart, displayConfirm } = useContext(CartContext);
  const mainImage = product.images[0];
  return (
    <Link
      to={`/products/details/${product.id}`}
      className="flex items-center justify-center"
    >
      <div>
        <div className="w-full h-full">
          <img
            src={mainImage}
            className="w-full h-full max-w-[316px]"
            alt="Product Image"
            loading="lazy"
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
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              addToCart(product);
            }}
            className="w-full bg-blue-400 font-semibold text-white py-1 rounded-lg hover:bg-blue-500 hover:shadow-lg cursor-pointer mt-auto transition-all ease-in-out duration-300"
          >
            Add to cart
          </button>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
