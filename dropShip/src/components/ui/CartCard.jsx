import bin from "../../assets/bin.svg";
import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function CartCard({ item }) {
  const { removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);

  return (
    <div className="flex flex-col justify-center">
      <div className="lg:hidden font-bold w-full flex">
        <div>{item.title}</div>
        <button
          onClick={() => removeFromCart(item)}
          className="ml-auto lg:hidden cursor-pointer"
        >
          <img className="w-8" src={bin} alt="" />
        </button>
      </div>
      {/*  */}
      <div className="flex items-center gap-4">
        <div className="">
          <img className="h-56 lg:h-80" src={item.image} alt="" />
        </div>
        {/*  */}
        <div className="flex flex-col gap-6">
          <div className="hidden lg:flex mb-auto text-lg">
            <div className="font-bold">{item.title}</div>
          </div>
          {/* Adjust quantity */}
          <div className="flex gap-2 items-center">
            <button
              onClick={() => decreaseQuantity(item)}
              className="flex justify-center items-center w-8 h-8 border rounded-lg cursor-pointer"
            >
              <img src={minus} alt="" />
            </button>
            <div className="text-xl">{item.quantity}</div>
            <button
              onClick={() => increaseQuantity(item)}
              className="flex justify-center items-center w-8 h-8 border rounded-lg cursor-pointer"
            >
              <img src={plus} alt="" />
            </button>
          </div>
          {/* Price */}
          <div className="flex flex-col gap-2">
            {item.quantity > 1 ? (
              <div>
                {item.quantity} * {item.price} &euro;
              </div>
            ) : (
              <div>{item.price} &euro;</div>
            )}

            {item.quantity > 1 && (
              <div>{(item.quantity * item.price).toFixed(2)} &euro;</div>
            )}
          </div>

          <button
            onClick={() => removeFromCart(item)}
            className="hidden lg:block cursor-pointer"
          >
            <img className=" w-8" src={bin} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
