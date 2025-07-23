function SearchAndFilter({ searchValue, handleSortValue, handleSearch }) {
  return (
    <div className="w-full flex flex-col sm:flex-row mt-2 mb-4">
      <div>
        <h1 className="text-lg mb-1">Find product:</h1>
        <input
          type="search"
          onChange={(e) => handleSearch(e)}
          value={searchValue}
          className="border h-11 px-4 rounded-xl focus:border-blue-500 w-full"
          placeholder="Search"
        />
      </div>
      <div className="sm:ml-auto">
        <div className="text-lg mb-1">Sort by:</div>
        <select
          className="border w-full h-11 px-4 rounded-xl"
          onChange={(e) => handleSortValue(e)}
        >
          <option value="relevance">Relevance</option>
          <option value="highest">Price from highest to lowest</option>
          <option value="lowest">Price from lowest to highest</option>
        </select>
      </div>
    </div>
  );
}

export default SearchAndFilter;
