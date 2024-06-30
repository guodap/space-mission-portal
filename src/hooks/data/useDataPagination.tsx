import { useMemo, useState, useCallback } from "react";
import { ITEMS_PER_PAGE } from "../../constants/constants";

export const useDataPagination = (data) => {
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedData = useMemo(() => {
    if (!data) return []; // Skip first mount and only set state when data is fetched
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
