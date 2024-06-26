import { useEffect, useState } from "react";
import { ITEMS_PER_PAGE } from "../constants/constants";

export const usePagination = (data: []) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState([]);

  useEffect(() => {
    setPaginatedData(
      data?.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
      )
    ); //have loading and error states? Needed?
  }, [data, currentPage, paginatedData]);

  const totalPages = Math.ceil(data?.length / ITEMS_PER_PAGE);

  const canGetPrevious = currentPage > 1;
  const canGetNext = currentPage < totalPages;

  //REUSE DATA?
  //   const handlePageChange = (oldPage, direction) => {
  //     setCurrentPage(direction === "next" ? oldPage + 1 : oldPage - 1);
  //   };

  const getNext = () => {
    if (canGetNext) setCurrentPage((oldPage) => oldPage + 1);
  };

  const getPrevious = () => {
    if (canGetPrevious) setCurrentPage((oldPage) => oldPage - 1);
  };

  return {
    currentPage,
    paginatedData,
    setPaginatedData,
    totalPages,
    canGetNext,
    canGetPrevious,
    getNext,
    getPrevious,
  };
};
