function ProductCard({ product }) {
  return (
    <div className="flex items-center justify-center">
      <div key={product.id}>
        <div className="w-full h-full">
          <img
            src={product.image}
            className="w-full h-full max-w-[316px]"
            alt=""
          />
        </div>
        <div className="h-12">{product.title}</div>
        <div>{product.price} &euro;</div>
        <div>
          <button className="border">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
