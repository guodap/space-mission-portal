import { useMemo, useState, useCallback } from "react";

import { sortByTimestamp } from "../../utils/sortData";
import { DEFAULT_SORT_ORDER } from "../../constants/constants";

/**
 * Custom hook that sorts data by timestamp once it has been fetched from the API or once the user has pressed the "sort" button.
 * Default sort order is descending, showing most recent available data first.
 */
export const useDataSort = (data) => {
  const [sortOrder, setSortOrder] = useState(DEFAULT_SORT_ORDER);

  const sortedData = useMemo(() => {
    if (!data?.length) return; // Skip first render and only sort when data is ready

    return sortByTimestamp(data, sortOrder);
  }, [data, sortOrder]);

  const toggleSortOrder = useCallback(() => {
    setSortOrder((prevOrder) =>
      prevOrder === "descending" ? "ascending" : "descending"
    );
  }, []);

  return { sortedData, sortOrder, toggleSortOrder };
};
