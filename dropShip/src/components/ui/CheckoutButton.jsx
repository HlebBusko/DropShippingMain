function CheckOutButton({ className, children, onClick, type }) {
  return (
    <button
      className={`${className} bg-blue-500 py-4 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-600 transition-all ease-in-out duration-300 hover:shadow-lg`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default CheckOutButton;
