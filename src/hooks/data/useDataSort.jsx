import { useMemo, useState, useCallback } from "react";
import { sortByTimestamp } from "../../utils/sortData";

export const useDataSort = (data) => {
  const [sortOrder, setSortOrder] = useState("descending");

  const sortedData = useMemo(() => {
    if (!data) return []; // Skip first mount and only run when data is fetched
    return sortByTimestamp(data, sortOrder);
  }, [data, sortOrder]);

  const toggleSortOrder = useCallback(() => {
    setSortOrder((prevOrder) =>
      prevOrder === "descending" ? "ascending" : "descending"
    );
  }, []);

  return { sortedData, sortOrder, toggleSortOrder };
};
