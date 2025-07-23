import { useParams } from "react-router-dom";
import products from "../data/Products.js";
import { CartContext } from "../context/CartContext.jsx";
import { useContext, useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import SizeBox from "../components/ui/sizeBox.jsx";

function ProductDetails() {
  const { id } = useParams();
  const [isDesktop, setIsDesktop] = useState(false);

  const { addToCart } = useContext(CartContext);

  const menSizes = [70, 75, 80, 85, 90, 95, 100];
  const womenSizes = [30, 32, 34, 36, 38, 40, 42];
  const kidsSizes = ["2-3", "4-5", "6-7", "8-9", "9-10"];
  const equipmentSize = ["Fits all sizes"];

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
              <img
                className="object-contain"
                src={img}
                alt="Product Image"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        {isDesktop && (
          <div>
            <Swiper
              className="w-full md:hidden"
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              spaceBetween={20}
              navigation
              pagination={{ clickable: true }}
              loop={true}
            >
              {clickedProduct.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="flex items-center justify-center">
                    <img src={img} alt="Product Image" loading="lazy" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
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
            {clickedProduct.category === "men" &&
              menSizes.map((size, i) => <SizeBox key={i}>{size}</SizeBox>)}
            {clickedProduct.category === "women" &&
              womenSizes.map((size, i) => <SizeBox key={i}>{size}</SizeBox>)}
            {clickedProduct.category === "kids" &&
              kidsSizes.map((size, i) => <SizeBox key={i}>{size}</SizeBox>)}
            {clickedProduct.category === "equipment" &&
              equipmentSize.map((size, i) => <SizeBox key={i}>{size}</SizeBox>)}
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
