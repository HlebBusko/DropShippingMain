import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import bin from "../assets/bin.svg";
import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div className="pb-12 lg:pb-0">
      <div className="lg:hidden fixed bottom-0 bg-white shadow w-full px-4 py-3 oveflow-hidden">
        <button className="w-full bg-blue-500 py-3 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-400">
          Continue to checkout
        </button>
      </div>
      <div className="pt-20 grid grid-cols-1 lg:grid-cols-[2fr_1fr] px-4 gap-6 lg:gap-0 pb-6">
        {/* Items grid */}
        <div className="flex flex-col gap-8">
          <div className="text-center font-bold text-xl">MY CART</div>
          {cart.map((item) => (
            <div key={item.id} className="flex flex-col justify-center">
              {/*  */}
              <div className="lg:hidden font-bold w-full flex">
                <div>{item.title}</div>
                <div className="ml-auto lg:hidden">
                  <img className="w-8" src={bin} alt="" />
                </div>
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
                  {/*  */}
                  <div className="flex gap-2 items-center">
                    <button className="flex justify-center items-center w-8 h-8 border rounded-lg cursor-pointer">
                      <img src={minus} alt="" />
                    </button>
                    <div className="text-xl">{item.quantity}</div>
                    <button className="flex justify-center items-center w-8 h-8 border rounded-lg cursor-pointer">
                      <img src={plus} alt="" />
                    </button>
                  </div>
                  {/*  */}
                  <div className="">&euro; {item.price}</div>
                  <div>
                    <img className="hidden lg:block w-8" src={bin} alt="" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Summary */}
        <div className="">
          <div className="text-center font-bold text-xl mb-4">SUMMARY</div>
          <div className="flex flex-col gap-2">
            <div className="flex w-full ">
              <div>Subtotal</div>
              <div className="ml-auto">&euro;112.46</div>
            </div>
            <div className="flex w-full ">
              <div>Shipping costs</div>
              <div className="ml-auto">&euro;12</div>
            </div>
            <hr />
            <div className="flex w-full ">
              <div>Total</div>
              <div className="ml-auto">&euro;112.46</div>
            </div>
          </div>
          <button className="hidden lg:block mt-2 w-full bg-blue-500 py-3 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-400">
            Continue to checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
