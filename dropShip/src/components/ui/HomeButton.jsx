function HomeButton({ className, children }) {
  return (
    <button
      className={`py-3 px-10 rounded-3xl bg-blue-600 text-white cursor-pointer hover:text-blue-600 hover:bg-white hover:border hover:shadow-lg shadow font-semibold ${className}`}
    >
      {children}
    </button>
  );
}

export default HomeButton;
