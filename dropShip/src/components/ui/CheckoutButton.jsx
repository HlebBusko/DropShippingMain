function CheckOutButton({ className }) {
  return (
    <button
      className={`${className} w-full bg-blue-500 py-3 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-400`}
    >
      Continue to checkout
    </button>
  );
}

export default CheckOutButton;
