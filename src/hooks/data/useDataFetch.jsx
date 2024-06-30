import { useEffect, useState } from "react";
import { getFormattedLaunchData } from "../../utils/getData";

export const useDataFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
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

    fetchData();
  }, []);

  return { data, loading, error };
};
