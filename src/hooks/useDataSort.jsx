import { useEffect, useState } from "react";
import { sortByTimestamp } from "../utils/sortData";

export const useDataSort = (data, initialDirection = "descending") => {
  const [sortOrder, setSortOrder] = useState(initialDirection);
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    setSortedData(sortByTimestamp(data, sortOrder));
    console.log(sortOrder);
  }, [data, sortOrder]);

  const toggleSortOrder = () => {
    setSortOrder((currentSortOrder) =>
      currentSortOrder === "descending" ? "ascending" : "descending"
    );
  };

  return { sortedData, sortOrder, toggleSortOrder };
};
