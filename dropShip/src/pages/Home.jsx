import heroPhoto from "../assets/heroPhoto.avif";
import heroDesktop from "../assets/heroDesktop.avif";
import heroMobile from "../assets/heroMobile.avif";

function Home() {
  return (
    <section className="mt-16">
      <div className="absolute z-30 top-40 left-15 hidden sm:block">
        <h1 className="text-5xl mb-6 text-white font-semibold">
          Catch the Wave
        </h1>
        <div className="text-white mb-6 font-semibold ">
          Comfortable briefs, cute swimwear, tighties race shorts
        </div>
        <button className="py-3 px-8 rounded-3xl bg-red-500 text-white cursor-pointer hover:text-red-500 hover:bg-white">
          Shop Now
        </button>
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
        <button className="py-3 px-8 rounded-3xl bg-red-500 text-white cursor-pointer hover:text-red-500 hover:bg-white">
          Shop Now
        </button>
      </div>
    </section>
  );
}

export default Home;
