import CartField from "./CartField.jsx";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";
function CartSummary() {
  const { cart } = useContext(CartContext);
  const subtotal = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  const shipping = subtotal > 60 ? 0 : 10;
  const total = shipping + subtotal;
  const fields = [
    { title: "Subtotal", price: subtotal, id: uuidv4() },
    {
      title: "Shipping cost",
      free: true,
      price: shipping,
      id: uuidv4(),
    },
    { title: "Total", price: total, id: uuidv4() },
  ];
  return (
    <div className="flex flex-col gap-2">
      {fields.map((field) => (
        <div key={field.id}>
          <CartField field={field}></CartField>
          {field.price === shipping && (
            <div>
              <div className="text-gray-400 text-xs mb-2">
                * Free delivery on orders over &euro; 60
              </div>
              <hr />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default CartSummary;
