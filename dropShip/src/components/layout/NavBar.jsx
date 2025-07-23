import logo from "../../assets/swimZone2.png";
import menu from "../../assets/menu.svg";
import bag from "../../assets/bag.svg";
import person from "../../assets/person.svg";
import { v4 as uuidv4 } from "uuid";
import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState, useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import NavItem from "../ui/NavLink.jsx";

function NavBar() {
  const [isDroppedDown, setIsDroppedDown] = useState(false);
  const dropDownRef = useRef(null);
  const { cartQuantity } = useContext(CartContext);
  function handleDropDown() {
    setIsDroppedDown((prev) => !prev);
  }
  const links = [
    { title: "Home", id: uuidv4(), route: "" },
    { title: "Men", id: uuidv4(), route: "men" },
    { title: "Women", id: uuidv4(), route: "women" },
    { title: "Kids", id: uuidv4(), route: "kids" },
    { title: "Equipment", id: uuidv4(), route: "equipment" },
  ];

  useEffect(() => {
    function handleUX(e) {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setIsDroppedDown(false);
      }
    }
    if (isDroppedDown) {
      document.addEventListener("click", handleUX);
    }

    return () => {
      document.removeEventListener("click", handleUX);
    };
  }, [isDroppedDown]);
  return (
    <div ref={dropDownRef}>
      <nav className="flex items-center fixed top-0 left-0 bg-white w-full shadow h-16 z-40 pr-4 pl-1">
        {/* left section */}
        <div className="mr-auto">
          <div className="w-28">
            <NavLink to="/" onClick={handleDropDown}>
              <img src={logo} alt="Logo Image" />
            </NavLink>
          </div>
        </div>
        {/* middle section */}
        <div className="flex h-full flex-row">
          <ul className="sm:flex h-full flex-row hidden ">
            {links.map((link) => (
              <NavItem
                className={({ isActive }) =>
                  `px-2 lg:px-4 hover:text-blue-500 w-full bg-white h-full flex items-center h-12 ${
                    isActive
                      ? "underline underline-offset-16 text-blue-500"
                      : ""
                  }`
                }
                key={link.id}
                link={link}
              ></NavItem>
            ))}
          </ul>
        </div>
        {/* right section */}
        <div className="flex ml-auto">
          <button className="cursor-pointer" onClick={handleDropDown}>
            <img className="sm:hidden w-8" src={menu} alt="Dropdown Menu" />
          </button>
          <NavLink to="/login" onClick={handleDropDown}>
            <img className="w-8" src={person} alt="Login Page" />
          </NavLink>

          <NavLink to="/cart" className="relative" onClick={handleDropDown}>
            <img className="w-8" src={bag} alt="Cart" />
            {cartQuantity > 0 && (
              <div className="text-xs font-bold absolute top-4 right-3 bg-red-600 w-6 h-6 text-white flex justify-center items-center rounded-[50%]">
                {cartQuantity}
              </div>
            )}
          </NavLink>
        </div>
      </nav>
      {/* Phone version of dropdown menu */}

      <div
        className={`fixed z-30 top-0 w-full bg-white shadow-lg ${
          isDroppedDown ? "translate-y-16" : "-translate-y-60"
        } transition-all ease-in-out duration-700`}
      >
        {links.map((link) => (
          <NavItem
            className={({ isActive }) =>
              `flex flex-col w-full justify-center items-center py-2 hover:bg-blue-500 hover:text-white ${
                isActive ? "bg-blue-500 text-white" : ""
              }`
            }
            link={link}
            key={link.id}
            onClick={handleDropDown}
          ></NavItem>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
