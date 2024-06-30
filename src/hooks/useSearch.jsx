import { useState, useCallback, useEffect } from "react";
import { filterItemsByName } from "../utils/filterData";

export const useSearch = (data) => {
  const [searchData, setSearchData] = useState(data);

  const searchByName = useCallback(
    (input) => {
      setSearchData(input ? filterItemsByName(data, input) : data);
    },
    [data]
  );

  useEffect(() => {
    setSearchData(data);
  }, [data]);

  return { searchData, searchByName };
};
