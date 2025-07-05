function CartField({ field }) {
  return (
    <div className="flex w-full ">
      <div>{field.title}</div>
      <div className="ml-auto">
        {field.price > 0 ? (
          <div>{field.price.toFixed(2)} € </div>
        ) : (
          <div>FREE</div>
        )}
      </div>
    </div>
  );
}

export default CartField;
