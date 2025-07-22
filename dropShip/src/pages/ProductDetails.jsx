import { useParams } from "react-router-dom";
import products from "../data/Products.js";
import HomeButton from "../components/ui/HomeButton.jsx";

function ProductDetails() {
  const { id } = useParams();

  const sizes = [70, 75, 80, 85, 90, 95, 100];

  if (!products || products.length === 0) {
    return <div>Loading products...</div>;
  }
  const clickedProduct = products.find((product) => id === product.id);

  if (!clickedProduct) {
    return <div className="pt-20 px-6">Product not found.</div>;
  }
  return (
    <div className="pt-20 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr] gap-6">
      <div className="grid grid-cols-1 border lg:grid-cols-2 gap-2">
        {clickedProduct.images.map((img, i) => (
          <div className="w-full overflow-hidden" key={i}>
            <img className="object-contain" src={img} />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-lg">{clickedProduct.title}</h1>
        <div>
          <span className="font-semibold">Product Description:</span> <br />
          {clickedProduct.description}
        </div>
        <div>
          &euro; <span className="font-bold">{clickedProduct.price}</span>
        </div>
        <div className="flex gap-2">
          {sizes.map((size, i) => (
            <div
              key={i}
              className="hover:border-black border-2 border-transparent py-2 px-6 text-center cursor-pointer bg-gray-100 hover:shadow-[inset_0_0_0_3px_white]"
            >
              {size}
            </div>
          ))}
        </div>
        <HomeButton>Add to Cart</HomeButton>
      </div>
    </div>
  );
}

export default ProductDetails;
