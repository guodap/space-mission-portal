import { useEffect, useState } from "react";
import { sortByTimestamp } from "../utils/sortData";

export const useDataSort = (data) => {
  const [sortOrder, setSortOrder] = useState("descending");
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    const newSortedData = sortByTimestamp(data, sortOrder);
    setSortedData(newSortedData);
  }, [data, sortedData, sortOrder]);

  const toggleSortOrder = () => {
    setSortOrder((sortOrder) =>
      sortOrder === "descending" ? "ascending" : "descending"
    );
  };

  return { sortedData, sortOrder, toggleSortOrder };
};
