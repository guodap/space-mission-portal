import { useState, useCallback, useMemo } from "react";
import { filterItemsByName } from "../../utils/filterData";

/**
 * Custom hook that filters launch data based on the user's search input (launch name) whenever the user updates the search box input.
 */
export const useDataSearch = (initialData) => {
  const [searchInput, setSearchInput] = useState("");

  const searchData = useMemo(() => {
    if (!initialData?.length) return; // Skip first render and only search when data is ready

    if (!searchInput.trim()) return initialData; // Reset searchData to initialData when input is empty
    return filterItemsByName(initialData, searchInput); // Perform search only when there's input
  }, [initialData, searchInput]);

  const searchByName = useCallback((input) => {
    setSearchInput(input);
  }, []);

  return { searchData, searchByName };
};
