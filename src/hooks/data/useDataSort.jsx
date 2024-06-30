import { useMemo, useState, useCallback } from "react";
import { sortByTimestamp } from "../../utils/sortData";
import { DEFAULT_SORT_ORDER } from "../../constants/constants";

export const useDataSort = (data) => {
  const [sortOrder, setSortOrder] = useState(DEFAULT_SORT_ORDER);

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
