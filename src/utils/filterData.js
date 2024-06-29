/**
 * Filters an array of items by a search term matching their name property.
 * @param {Array} items - The array of items to filter.
 * @param {string} searchTerm - The search term to filter items by.
 * @return {Array} The filtered array of items.
 */
export const filterItemsByName = (items = [], searchTerm = "") => {
  if (!validateFilterParams(items, searchTerm)) return [];

  // Normalize the search term by trimming whitespace and converting to lowercase
  const normalizedSearchTerm = searchTerm.trim().toLowerCase();
  if (!normalizedSearchTerm) return items;

  // Filter items based on the normalized search term matching the name property
  return items.filter(({ name }) => {
    if (typeof name !== "string") return false;
    return name.toLowerCase().includes(normalizedSearchTerm);
  });
};

/**
 * Validates the input parameters for the filterItemsByName function.
 * @param {Array} items - The array of items to validate.
 * @param {string} searchTerm - The search term to validate.
 * @return {boolean} - True if the parameters are valid, false otherwise.
 */
const validateFilterParams = (items, searchTerm) => {
  return Array.isArray(items) && typeof searchTerm === "string";
};
