import { useEffect, useState } from "react";
import { ITEMS_PER_PAGE } from "../constants/constants";

export const usePagination = (data) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState([]);

  useEffect(() => {
    if (data) {
      setPaginatedData(
        data.slice(
          (currentPage - 1) * ITEMS_PER_PAGE,
          currentPage * ITEMS_PER_PAGE
        )
      );
    }
  }, [data, currentPage]);

  const totalPages = Math.ceil((data ? data.length : 0) / ITEMS_PER_PAGE);

  return {
    paginatedData,
    totalPages,
    currentPage,
    setCurrentPage,
  };
};
