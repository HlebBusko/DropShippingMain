import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import CartCard from "../components/ui/CartCard.jsx";
import CheckOutButton from "../components/ui/CheckoutButton.jsx";
import CartSummary from "../components/cart/CartSummary.jsx";

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div className="pb-16 lg:pb-0">
      <div className="lg:hidden fixed bottom-0 bg-white shadow w-full px-4 py-3">
        <CheckOutButton className={`w-full`}>
          Continue to checkout
        </CheckOutButton>
      </div>
      <div className="pt-20 grid grid-cols-1 lg:grid-cols-[2fr_1fr] px-4 gap-6 lg:gap-0 pb-6">
        {/* Items grid */}
        <div className="flex flex-col gap-8">
          <div className="text-center font-bold text-xl">MY CART</div>
          {cart.map((item) => (
            <CartCard key={item.id} item={item}></CartCard>
          ))}
        </div>
        {/* Summary */}
        <div className="">
          <div className="text-center font-bold text-xl mb-4">SUMMARY</div>
          <CartSummary></CartSummary>
          <CheckOutButton className={`w-full hidden lg:block mt-2`}>
            Continue to checkout
          </CheckOutButton>
        </div>
      </div>
    </div>
  );
}

export default Cart;
