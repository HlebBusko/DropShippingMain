function CartField({ field }) {
  return (
    <div className="flex w-full ">
      <div>{field.title}</div>
      <div className="ml-auto">&euro;{field.price}</div>
    </div>
  );
}

export default CartField;
