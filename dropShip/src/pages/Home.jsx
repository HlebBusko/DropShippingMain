import heroPhoto from "../assets/heroPhoto.avif";
import heroDesktop from "../assets/heroDesktop.avif";
import heroMobile from "../assets/heroMobile.avif";
import HomeButton from "../components/ui/HomeButton.jsx";
import HomeSlider from "../components/ui/HomeSlider.jsx";
import StickerSwiper from "../components/ui/StickerSwiper.jsx";
import checkmark from "../assets/checkmark.svg";
import mail from "../assets/mail.svg";
import lorry from "../assets/lorry.svg";

function Home() {
  const swiperFields = [
    { title: "Free delivery on orders over €60", img: lorry },
    { title: "Free returns within the EU", img: checkmark },
    { title: "10% off if signed up", img: mail },
  ];

  return (
    <section className="mt-16 pb-20">
      <StickerSwiper swiperFields={swiperFields}></StickerSwiper>

      <div className="absolute z-30 top-55 left-15 hidden sm:block">
        <h1 className="text-5xl mb-6 text-white font-semibold">
          Catch the Wave
        </h1>
        <div className="text-white mb-6 font-semibold ">
          Comfortable briefs, cute swimwear, tighties race shorts
        </div>
        <HomeButton>Shop Now</HomeButton>
      </div>

      <picture className="relative">
        <source media="(min-width:1024px)" srcSet={heroDesktop} />
        <source media="(min-width:640px)" srcSet={heroPhoto} />
        <img className="z-0" src={heroMobile} alt="Hero" />
      </picture>
      <div className="sm:hidden flex flex-col items-center mt-2">
        <div className="text-5xl mb-6 ">Catch the Wave</div>
        <div className="mb-8">
          Comfortable briefs, cute swimwear, tighties race shorts
        </div>
        <HomeButton>Shop Now</HomeButton>
      </div>
      <div className="mt-4">
        <h1 className="font-semibold text-4xl text-blue-500 text-center mb-2">
          New Arrivals
        </h1>
        <HomeSlider></HomeSlider>
      </div>
    </section>
  );
}

export default Home;
