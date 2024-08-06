const SearchBar = ({ query, onQueryChange }) => (
    <div className="p-4">
      <input
        type="text"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Search by student name"
        className="w-full px-4 py-2 border border-gray-600 rounded bg-gray-700 text-gray-100"
      />
    </div>
  );
  
  export default SearchBar;
  