import { useEffect, useState } from "react";

export const usePagination = (data, itemsPerPage = 10) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState([]);

  useEffect(() => {
    setPaginatedData(
      data?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    ); //have loading and error states? Needed?
  }, [data, currentPage, paginatedData]);

  const totalPages = Math.ceil(data?.length / itemsPerPage);

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
