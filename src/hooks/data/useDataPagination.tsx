import { useEffect, useState, useCallback } from "react";
import { ITEMS_PER_PAGE } from "../../constants/constants";

export const useDataPagination = (data) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState([]);

  useEffect(() => {
    // Skip first mount and only set state when data is fetched
    if (!data) return;

    const slicedData = data.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    );

    setPaginatedData(slicedData);
  }, [data, currentPage]);

  const totalPages = Math.ceil((data ? data.length : 0) / ITEMS_PER_PAGE);

  const handlePageChange = useCallback(
    (event, page) => {
      setCurrentPage(page);
    },
    [setCurrentPage]
  );

  return {
    paginatedData,
    totalPages,
    currentPage,
    setCurrentPage,
    handlePageChange,
  };
};
