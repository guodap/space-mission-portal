import { useEffect, useState, useCallback } from "react";
import { getData } from "../utils/getData";
import { filterItemsByName } from "../utils/filterData";

// const filteredData = spaceData.data.map((launch) => ({
//   id: launch.id,
//   name: launch.name,
//   description: launch.details,
//   date: convertTimestampToDate(launch.date_local),
//   imagePath: launch.links.patch.small,
//   link: launch.links.webcast,
//   linkName: "Youtube",
//   status: launch.success ? "Success" : "Failure",
// }));

export const useData = (url) => {
  const [data, setData] = useState(null);
  const [searchData, setSearchData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const handleData = async () => {
      setError(false);
      setLoading(true);
      try {
        const spaceData = await getData(url);
        setData(spaceData);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    handleData();
  }, [url]);

  const searchByName = useCallback(
    (input) => {
      setSearchData(input ? filterItemsByName(data, input) : null);
    },
    [data]
  );

  return { data: searchData || data, loading, error, searchByName };
};
