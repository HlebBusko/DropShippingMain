import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

function StickerSwiper({ swiperFields }) {
  return (
    <div className="w-full bg-black z-20">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{
          clickable: true,
          bulletClass: "custom-bullet",
          bulletActiveClass: "custom-bullet-active",
        }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="w-full"
      >
        {swiperFields.map((field, i) => (
          <SwiperSlide key={i}>
            <div className="flex justify-center items-center gap-1  pt-2 pb-5">
              <img src={field.img} alt="Field Image" />
              <h1 className="text-white text-sm">{field.title}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default StickerSwiper;
