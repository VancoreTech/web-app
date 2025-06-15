import React, { useEffect, useRef } from "react";
import { Calendar } from "lucide-react";

const DateSelector = ({
  showCalendar,
  selectedDate,
  handleDateSelect,
  formatDisplayDate,
  toggleCalendar,
  closeCalendar,
  className = "flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50",
  placeholder = "Select Date",
}) => {
  const calendarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        closeCalendar();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [closeCalendar]);

  return (
    <div className="relative" ref={calendarRef}>
      <button onClick={toggleCalendar} className={className}>
        <Calendar className="w-4 h-4 mr-2" />
        {formatDisplayDate(selectedDate) || placeholder}
      </button>

      {showCalendar && (
        <div className="absolute top-full right-0 mt-2 p-4 bg-white border border-gray-300 rounded-md shadow-lg z-10 min-w-[250px]">
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateSelect}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
          />
          <button
            onClick={closeCalendar}
            className="mt-2 w-full px-3 py-1 text-sm text-gray-600 hover:text-gray-800 transition-colors"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default DateSelector;