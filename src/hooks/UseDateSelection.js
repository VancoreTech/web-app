import { useState } from 'react';

export const useDateSelection = (initialDate = '') => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(initialDate);

  const handleDateSelect = (event) => {
    setSelectedDate(event.target.value);
    setShowCalendar(false);
  };

  const formatDisplayDate = (dateString) => {
    if (!dateString) return 'Select Date';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const closeCalendar = () => {
    setShowCalendar(false);
  };

  return {
    showCalendar,
    selectedDate,
    handleDateSelect,
    formatDisplayDate,
    toggleCalendar,
    closeCalendar,
    setSelectedDate
  };
};