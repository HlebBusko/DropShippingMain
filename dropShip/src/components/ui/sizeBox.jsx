function SizeBox({ children }) {
  return (
    <div
      className={`hover:border-black border-2 border-transparent py-2 min-w-16 text-center cursor-pointer bg-gray-100 hover:shadow-[inset_0_0_0_3px_white]`}
    >
      {children}
    </div>
  );
}

export default SizeBox;
