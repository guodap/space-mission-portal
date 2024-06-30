import { useState, useCallback, useMemo } from "react";
import { filterItemsByName } from "../../utils/filterData";

export const useDataSearch = (initialData) => {
  const [searchInput, setSearchInput] = useState("");

  const searchData = useMemo(() => {
    if (!searchInput.trim()) return initialData; // Reset searchData to initialData when input is empty
    return filterItemsByName(initialData, searchInput); // Perform search only when there's input
  }, [initialData, searchInput]);

  const searchByName = useCallback((input) => {
    setSearchInput(input);
  }, []);

  return { searchData, searchByName };
};
