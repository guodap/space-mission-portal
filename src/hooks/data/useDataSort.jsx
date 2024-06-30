import { useEffect, useState, useCallback } from "react";
import { sortByTimestamp } from "../../utils/sortData";

export const useDataSort = (data) => {
  const [sortOrder, setSortOrder] = useState("descending");
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    // Skip first mount and only set state when data is fetched or user clicks sort button
    if (!data) return;

    const newSortedData = sortByTimestamp(data, sortOrder);
    setSortedData(newSortedData);
  }, [data, sortOrder]); //on load and data mount

  const toggleSortOrder = useCallback(() => {
    setSortOrder((prevSortOrder) =>
      prevSortOrder === "descending" ? "ascending" : "descending"
    );
  }, []);

  return { sortedData, sortOrder, toggleSortOrder };
};
