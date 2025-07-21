import HomeButton from "../ui/HomeButton.jsx";
import facebookIcon from "../../assets/facebookIcon.svg";
import instagramIcon from "../../assets/instagramIcon.svg";
import Return from "../../assets/return.svg";
import exclamation from "../../assets/exclamation.svg";
import questionMark from "../../assets/questionMark.svg";
import plane from "../../assets/plane.svg";
import { v4 as uuidv4 } from "uuid";
import NavItem from "../ui/NavLink.jsx";

function Footer() {
  const footerLinks = [
    { title: "Contact Us", id: uuidv4(), img: exclamation },
    { title: "Help Centre & FAQs", id: uuidv4(), img: questionMark },
    { title: "Returns", id: uuidv4(), img: Return },
    { title: "Delivery", id: uuidv4(), img: plane },
  ];

  const homeLinks = [
    { title: "Home", id: uuidv4(), route: "" },
    { title: "Men", id: uuidv4(), route: "men" },
    { title: "Women", id: uuidv4(), route: "women" },
    { title: "Kids", id: uuidv4(), route: "kids" },
    { title: "Equipment", id: uuidv4(), route: "equipment" },
  ];

  return (
    <footer className="mt-auto ">
      <hr />
      {/* First section */}
      <div className="grid sm:grid-cols-2 sm:px-8 px-4 sm:gap-8 gap-4 py-6">
        <div>
          <h1 className="mb-4 font-semibold">
            Sign up to our newsletters and receive the latest exclusive discount
            and deals
          </h1>
          <HomeButton>Sign Up</HomeButton>
        </div>
        <div>
          <h1 className="font-semibold">Connect with us</h1>
          <div className="flex">
            <img className="w-10 cursor-pointer" src={facebookIcon} alt="" />
            <img className="w-11 cursor-pointer" src={instagramIcon} alt="" />
          </div>
        </div>
      </div>
      {/* Second section */}
      <div className="border-t border-gray-300 py-6 sm:px-8 px-4 grid sm:grid-cols-2 sm:gap-8 gap-4">
        <div>
          <h1 className="text-lg font-semibold mb-2">Help & Information</h1>
          <div className="flex flex-col gap-1">
            {footerLinks.map((link) => (
              <div
                key={link.id}
                className="flex py-1 hover:bg-gray-200 cursor-pointer"
              >
                <img src={link.img} alt="" />
                <h2>{link.title}</h2>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-lg font-semibold mb-2">Explore</h1>
          {homeLinks.map((link) => (
            <div key={link.id} className="mb-1 w-full">
              <NavItem
                link={link}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? `text-blue-500`
                      : `block w-full hover:text-blue-500`
                  }`
                }
              >
                {link.title}
              </NavItem>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-gray-300 py-6 sm:px-8 px-4">
        <p>© {new Date().getFullYear()} SwimZone. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
