import logo from "../../assets/swimZone2.png";
import menu from "../../assets/menu.svg";
import bag from "../../assets/bag.svg";
import person from "../../assets/person.svg";
import { v4 as uuidv4 } from "uuid";
import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function NavBar() {
  const [isDroppedDown, setIsDroppedDown] = useState(false);
  const dropDownRef = useRef(null);
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
      <nav className="flex items-center fixed top-0 left-0 bg-white w-full shadow h-16 z-40">
        {/* left section */}
        <div className="mr-auto">
          <div className="w-28">
            <NavLink to="/">
              <img src={logo} alt="" />
            </NavLink>
          </div>
        </div>
        {/* middle section */}
        <div className="flex h-full flex-row">
          <ul className="sm:flex h-full flex-row hidden ">
            {links.map((link) => (
              <NavLink
                key={link.id}
                end={!link.route}
                className={({ isActive }) =>
                  `px-2 hover:text-blue-500 w-full bg-white h-full flex items-center h-12 ${
                    isActive
                      ? "underline underline-offset-16 text-blue-500"
                      : ""
                  }`
                }
                to={link.route ? `/products/${link.route}` : "/"}
              >
                {link.title}
              </NavLink>
            ))}
          </ul>
        </div>
        {/* right section */}
        <div className="flex ml-auto">
          <button className="cursor-pointer" onClick={handleDropDown}>
            <img className="sm:hidden w-8" src={menu} alt="" />
          </button>

          <img className="w-8" src={person} alt="" />

          <img className="w-8" src={bag} alt="" />
        </div>
      </nav>
      {/* Phone version of dropdown menu */}

      <div
        className={`fixed top-0 w-full bg-white shadow-lg ${
          isDroppedDown ? "translate-y-16" : "-translate-y-60"
        } transition-all ease-in-out duration-700`}
      >
        {links.map((link) => (
          <NavLink
            onClick={handleDropDown}
            end={!link.route}
            className={({ isActive }) =>
              `flex flex-col w-full justify-center items-center py-2 hover:bg-blue-500 hover:text-white ${
                isActive ? "bg-blue-500 text-white" : ""
              }`
            }
            key={link.id}
            to={link.route ? `/products/${link.route}` : "/"}
          >
            {link.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
