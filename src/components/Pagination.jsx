export default function Pagination({
  currentPage,
  totalPages,
  entriesPerPage,
  setEntriesPerPage,
  onPageChange,
  indexOfFirstProduct,
  indexOfLastProduct,
  totalEntries,
}) {
  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };
  return (
    <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
      <div className="text-sm text-gray-500">
        {" "}
        Showing {indexOfFirstProduct + 1}–
        {Math.min(indexOfLastProduct, totalEntries)} of {totalEntries} entries
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Show</span>
          <select
            value={entriesPerPage}
            onChange={(e) => setEntriesPerPage(Number(e.target.value))}
            className="border border-gray-300 rounded  px-2 py-0.5 text-sm"
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
          <span className="text-sm text-gray-500">entries</span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            className={`px-3 py-0.3 border border-gray-300 rounded-lg text-base hover:bg-gray-50 ${
              currentPage === 1
                ? "bg-[#F7F9FC] text-gray-600 font-medium"
                : "hover:bg-gray-50"
            }`}
            onClick={handlePrev}
            disabled={currentPage === 1}
          >
            ‹
          </button>
          <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">
            1
          </button>
          <button
            className={`px-3 py-0.3 border border-gray-300 rounded-lg text-base hover:bg-gray-50 ${
              currentPage === 1
                ? "bg-[#F7F9FC] text-gray-600 font-medium"
                : "hover:bg-gray-50"
            }`}
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
