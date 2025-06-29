import bin from "../../assets/bin.svg";
import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";

function CartCard({ item }) {
  return (
    <div className="flex flex-col justify-center">
      <div className="lg:hidden font-bold w-full flex">
        <div>{item.title}</div>
        <div className="ml-auto lg:hidden">
          <img className="w-8" src={bin} alt="" />
        </div>
      </div>
      {/*  */}
      <div className="flex items-center gap-4">
        <div className="">
          <img className="h-56 lg:h-80" src={item.image} alt="" />
        </div>
        {/*  */}
        <div className="flex flex-col gap-6">
          <div className="hidden lg:flex mb-auto text-lg">
            <div className="font-bold">{item.title}</div>
          </div>
          {/*  */}
          <div className="flex gap-2 items-center">
            <button className="flex justify-center items-center w-8 h-8 border rounded-lg cursor-pointer">
              <img src={minus} alt="" />
            </button>
            <div className="text-xl">{item.quantity}</div>
            <button className="flex justify-center items-center w-8 h-8 border rounded-lg cursor-pointer">
              <img src={plus} alt="" />
            </button>
          </div>
          {/*  */}
          <div className="">&euro; {item.price}</div>
          <div>
            <img className="hidden lg:block w-8" src={bin} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
