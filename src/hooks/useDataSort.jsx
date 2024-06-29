import { useEffect, useState, useCallback } from "react";
import { sortByTimestamp } from "../utils/sortData";

export const useDataSort = (data) => {
  const [sortOrder, setSortOrder] = useState("descending");
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    if (data) {
      const newSortedData = sortByTimestamp(data, sortOrder);
      setSortedData(newSortedData);
    }
  }, [data, sortOrder]);

  const toggleSortOrder = useCallback(() => {
    setSortOrder((prevSortOrder) =>
      prevSortOrder === "descending" ? "ascending" : "descending"
    );
  }, []);

  return { sortedData, sortOrder, toggleSortOrder };
};
