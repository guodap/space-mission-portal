import { useCallback, useMemo } from "react";
import { useDataFetch } from "./useDataFetch";
import { useDataSearch } from "./useDataSearch";
import { useDataPagination } from "./useDataPagination";
import { useDataSort } from "./useDataSort";

/**
 * Custom hook that combines fetching, sorting, filtering, and paginating of data.
 */
export const useData = () => {
  //Fetch data
  const { data, loading, error } = useDataFetch();

  //Sort fetched data
  const { sortedData, sortOrder, toggleSortOrder } = useDataSort(data);

  //Filter sorted data
  const { searchData, searchByName } = useDataSearch(sortedData);

  //Paginate sorted and filtered data
  const {
    paginatedData,
    totalPages,
    currentPage,
    setCurrentPage,
    handlePageChange,
  } = useDataPagination(searchData);

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
