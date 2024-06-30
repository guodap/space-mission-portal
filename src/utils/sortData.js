import { DEFAULT_SORT_ORDER } from "../constants/constants";

/**
 * Sorts an array of objects by a timestamp property.
 * @param {Array} data - The array of objects to sort.
 * @param {string} order - The order to sort by ("ascending" or "descending"). By default, data is sorted in descending order to show the most recent data.
 * @returns {Array} - The sorted array.
 */
export const sortByTimestamp = (data = [], order = DEFAULT_SORT_ORDER) => {
  if (!Array.isArray(data)) return [];

  // Parse and validate dates
  const parseDate = (dateString) => {
    const date = new Date(dateString);
    return isNaN(date) ? null : date;
  };

  // Sort the array based on parsed dates
  return [...data].sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);

    // Treat invalid dates as equal
    if (!dateA || !dateB) return 0;

    return order === "ascending" ? dateA - dateB : dateB - dateA;
  });
};
