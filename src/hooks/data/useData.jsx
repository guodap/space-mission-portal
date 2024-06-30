import { useCallback, useMemo } from "react";
import { useDataFetch } from "./useDataFetch";
import { useDataSearch } from "./useDataSearch";
import { useDataPagination } from "./useDataPagination";
import { useDataSort } from "./useDataSort";

export const useData = () => {
  //Fetch
  const { data, loading, error } = useDataFetch();

  //Search
  const { searchData, searchByName } = useDataSearch(data);

  //Sort
  const { sortedData, sortOrder, toggleSortOrder } = useDataSort(searchData);

  //Paginate
  const { paginatedData, totalPages, currentPage, setCurrentPage } =
    useDataPagination(sortedData);

  const handlePageChange = useCallback(
    (event, page) => {
      setCurrentPage(page);
    },
    [setCurrentPage]
  );

  const handleSearchInput = useCallback(
    (input) => {
      searchByName(input);
      setCurrentPage(1);
    },
    [searchByName, setCurrentPage]
  );

  // Memoize the values to prevent unnecessary re-renders
  const memoizedValues = useMemo(
    () => ({
      paginatedData,
      loading,
      error,
      sortOrder,
      toggleSortOrder,
      currentPage,
      totalPages,
      handlePageChange,
      handleSearchInput,
    }),
    [
      paginatedData,
      loading,
      error,
      sortOrder,
      toggleSortOrder,
      currentPage,
      totalPages,
      handlePageChange,
      handleSearchInput,
    ]
  );

  return memoizedValues;
};
