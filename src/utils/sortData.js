/**
 * Sorts an array of objects by a timestamp property.
 * @param {Array} data - The array of objects to sort.
 * @param {string} order - The order to sort by ("ascending" or "descending").
 * @returns {Array} - The sorted array.
 */
export const sortByTimestamp = (data = [], order = "descending") => {
  if (!Array.isArray(data) || data.length === 0) return [];

  // Validate the order parameter
  const validOrder = order === "ascending" ? "ascending" : "descending";

  // Helper function to parse and validate dates
  const parseDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date)) return null;
    return date;
  };

  // Clone the array to avoid mutating the original
  const dataClone = [...data];

  // Sort the cloned array
  try {
    const sorted = dataClone.sort((a, b) => {
      console.log(a, b);
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);

      if (!dateA || !dateB) return 0; // Treat invalid dates as equal for sorting purposes

      if (validOrder === "ascending") return dateA - dateB;
      return dateB - dateA;
    });

    return sorted;
  } catch {
    return [];
  }
};
