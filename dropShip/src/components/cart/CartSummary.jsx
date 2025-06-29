import CartField from "./CartField.jsx";
import { v4 as uuidv4 } from "uuid";
function CartSummary() {
  const fields = [
    { title: "Subtotal", price: 122, id: uuidv4() },
    { title: "Shipping cost", hr: true, price: 2, id: uuidv4() },
    { title: "Total", price: 124, id: uuidv4() },
  ];
  return (
    <div className="flex flex-col gap-2">
      {fields.map((field) => (
        <div key={field.id}>
          <CartField field={field}></CartField>
          {field.hr && <hr className="mt-2" />}
        </div>
      ))}
    </div>
  );
}

export default CartSummary;
