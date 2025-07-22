import { useParams } from "react-router-dom";
import products from "../data/Products.js";
import { CartContext } from "../context/CartContext.jsx";
import { useContext } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

function ProductDetails() {
  const { id } = useParams();

  const { addToCart } = useContext(CartContext);

  const sizes = [70, 75, 80, 85, 90, 95, 100];

  if (!products || products.length === 0) {
    return <div>Loading products...</div>;
  }
  const clickedProduct = products.find((product) => id === product.id);

  function handleAddToCart() {
    addToCart(clickedProduct);
    toast.success("Product added to cart!");
  }
  return (
    <div className="pt-20 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr] gap-6">
      <div>
        <div className="hidden md:grid items-center justify-center md:grid-cols-1 lg:grid-cols-2 gap-2">
          {clickedProduct.images.map((img, i) => (
            <div className="w-full flex flex-col" key={i}>
              <img className="object-contain" src={img} alt="Product Image" />
            </div>
          ))}
        </div>
        <div className="md:hidden">
          <Swiper
            className="w-full"
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            navigation
            pagination={{ clickable: true }}
            loop={true}
          >
            {clickedProduct.images.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="flex items-center justify-center">
                  <img src={img} alt="Product Image" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
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
        <div className="flex gap-2 flex-col">
          <h2 className="font-semibold">Sizes:</h2>
          <div className="flex flex-wrap gap-2">
            {" "}
            {sizes.map((size, i) => (
              <div
                key={i}
                className="hover:border-black border-2 border-transparent py-2 min-w-16 text-center cursor-pointer bg-gray-100 hover:shadow-[inset_0_0_0_3px_white]"
              >
                {size}
              </div>
            ))}
          </div>
          <h2 className="text-sm">
            Our sizes are based on FRENCH (F) sizing system
          </h2>
        </div>
        <button
          onClick={handleAddToCart}
          className={`w-86 shadow-lg w-full bg-blue-500 py-4 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-600 text-center mb-8`}
        >
          Add to cart
        </button>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default ProductDetails;
