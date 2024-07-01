import { useMemo, useState, useCallback } from "react";
import { ITEMS_PER_PAGE } from "../../constants/constants";

/**
 * Custom hook that paginates data. This happens after it has been fetched from API and sorted, once the user sorts the data again and once the user searches.
 * Default number of items per page is 10.
 */
export const useDataPagination = (data) => {
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedData = useMemo(() => {
    if (!data?.length) return; // Skip first render and only paginate when data is ready

    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return data.slice(start, start + ITEMS_PER_PAGE);
  }, [data, currentPage]);

  const totalPages = useMemo(() => {
    return Math.ceil(data ? data?.length / ITEMS_PER_PAGE : 0);
  }, [data]);

  const handlePageChange = useCallback((event, page) => {
    setCurrentPage(page);
  }, []);

  return {
    paginatedData,
    totalPages,
    currentPage,
    setCurrentPage,
    handlePageChange,
  };
};
