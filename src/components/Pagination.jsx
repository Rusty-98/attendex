const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
  
    return (
      <div className="flex justify-center py-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => onPageChange(i + 1)}
            className={`px-3 py-2 mx-1 border rounded ${
              currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-700 text-blue-400'
            } border-gray-600`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    );
  };
  
  export default Pagination;
  