import { Link } from "react-router-dom";
function HomeButton({ className, children }) {
  return (
    <Link
      to="/deals/new"
      className={`py-3 px-10 rounded-3xl bg-blue-600 text-white cursor-pointer border border-transparent hover:text-blue-600 hover:bg-white hover:border-blue-600 hover:shadow-lg shadow font-semibold transition-all duration-300 ease-in-out ${className}`}
    >
      {children}
    </Link>
  );
}

export default HomeButton;
