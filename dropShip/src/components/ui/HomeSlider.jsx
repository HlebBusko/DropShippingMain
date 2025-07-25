import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext.jsx";
import { Link } from "react-router-dom";

function HomeSlider() {
  const { products } = useContext(ProductsContext);
  const newProducts = products.filter((product) => product.new);
  return (
    <div className="w-full  px-6 relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {newProducts.map((product) => (
          <SwiperSlide key={product.id} className="flex flex-col items-center">
            <Link
              to={`/products/details/${product.id}`}
              className="pb-12 flex flex-col gap-2"
            >
              <img
                src={product.images[0]}
                alt="Product image"
                className="w-full object-cover"
                loading="lazy"
              />

              <h1>{product.title}</h1>
              <div className="font-bold text-blue-500">New</div>
              <div className="mt-auto">&euro;{product.price}</div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HomeSlider;
