import { useEffect, useState } from "react";
import { ITEMS_PER_PAGE } from "../constants/constants";

export const usePagination = (data: [], sortOrder) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState([]);

  useEffect(() => {
    setPaginatedData(
      data?.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
      )
    ); //have loading and error states? Needed?
  }, [data, currentPage, sortOrder]); //fixes logic paginatedData

  const totalPages = Math.ceil(data?.length / ITEMS_PER_PAGE);

  return {
    paginatedData,
    totalPages,
    setCurrentPage,
  };
};
