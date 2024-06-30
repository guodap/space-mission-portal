import { useEffect, useState, useCallback } from "react";
import { sortByTimestamp } from "../../utils/sortData";

export const useDataSort = (data) => {
  const [sortOrder, setSortOrder] = useState("descending");
  const [sortedData, setSortedData] = useState([]);

  // Runs when data is fetched or user clicks sort button
  useEffect(() => {
    // Skip first mount and only run when data is fetched
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
