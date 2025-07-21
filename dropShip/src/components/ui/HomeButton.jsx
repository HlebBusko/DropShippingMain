function HomeButton({ className, children }) {
  return (
    <button
      className={`py-3 px-10 rounded-3xl bg-blue-600 text-white cursor-pointer border border-transparent hover:text-blue-600 hover:bg-white hover:border-blue-600 hover:shadow-lg shadow font-semibold ${className}`}
    >
      {children}
    </button>
  );
}

export default HomeButton;
