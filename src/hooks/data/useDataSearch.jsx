import { useState, useCallback, useMemo } from "react";
import { filterItemsByName } from "../../utils/filterData";

export const useDataSearch = (initialData) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchData, setSearchData] = useState(initialData);

  const searchByName = useCallback((input) => {
    setSearchInput(input);
  }, []);

  useMemo(() => {
    // Skip first mount and only run when data is fetched
    if (!initialData) return;

    if (!searchInput.trim()) setSearchData(initialData); // Reset searchData to initialData when input is empty

    setSearchData(filterItemsByName(initialData, searchInput)); // Perform search only when there's input
  }, [initialData, searchInput]);

  return { searchData, searchByName };
};
