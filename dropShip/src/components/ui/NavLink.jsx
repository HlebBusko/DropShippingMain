import { NavLink } from "react-router-dom";

function NavItem({ className, link, onClick }) {
  return (
    <NavLink
      end={!link.route}
      to={link.route ? `/products/${link.route}` : "/"}
      className={className}
      onClick={onClick}
    >
      {link.title}
    </NavLink>
  );
}

export default NavItem;
