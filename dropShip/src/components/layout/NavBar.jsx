import logo from "../../assets/swimZone2.png";
import close from "../../assets/close.svg";
import menu from "../../assets/menu.svg";
import bag from "../../assets/bag.svg";
import person from "../../assets/person.svg";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

function NavBar() {
  const links = [
    { title: "Home", id: uuidv4(), route: "home" },
    { title: "Men", id: uuidv4(), route: "men" },
    { title: "Women", id: uuidv4(), route: "women" },
    { title: "Kids", id: uuidv4(), route: "kids" },
    { title: "Equipment", id: uuidv4(), route: "equipment " },
  ];

  return (
    <nav className="flex items-center">
      {/* left section */}
      <div className="mr-auto">
        <div className="w-28">
          <img src={logo} alt="" />
        </div>
      </div>
      {/* middle section */}
      <div className="flex">
        <div className="md:hidden">
          <img src={close} alt="" />
        </div>
        <ul className="flex gap-2">
          {links.map((link) => (
            <li className="cursor-pointer" key={link.id}>
              <Link to={`/${link.route}`}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* right section */}
      <div className="flex ml-auto">
        <img className="md:hidden w-8" src={menu} alt="" />

        <img className="w-8" src={person} alt="" />

        <img className="w-8" src={bag} alt="" />
      </div>
    </nav>
  );
}

export default NavBar;
