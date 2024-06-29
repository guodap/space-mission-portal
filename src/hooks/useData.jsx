import { useEffect, useState, useCallback } from "react";
import { getFormattedLaunchData } from "../utils/getData";
import { filterItemsByName } from "../utils/filterData";

export const useData = () => {
  const [data, setData] = useState(null);
  const [searchData, setSearchData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const handleData = async () => {
      setError(false);
      setLoading(true);
      try {
        const spaceData = await getFormattedLaunchData();
        setData(spaceData);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    handleData();
  }, []);

  const searchByName = useCallback(
    (input) => {
      setSearchData(input ? filterItemsByName(data, input) : null);
    },
    [data]
  );

  return { data: searchData || data, loading, error, searchByName };
};
