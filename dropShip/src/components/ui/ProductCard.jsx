import products from "../../data/Products.js";

function ProductCard() {
  return (
    <div>
      {products.map((product) => (
        <ol key={product.id} className="">
          <div>
            <img src={product.image} className="w-[316px]" alt="" />
          </div>
          <div>{product.title}</div>
          <div>{product.price} &euro;</div>
          <div>
            <button className="border">Add to cart</button>
          </div>
        </ol>
      ))}
    </div>
  );
}

export default ProductCard;
