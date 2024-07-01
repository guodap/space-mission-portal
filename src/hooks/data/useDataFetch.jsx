import { useEffect, useState } from "react";
import { getFormattedLaunchData } from "../../utils/getData";

/**
 * Custom hook that fetches Launch data from the API endpoint on initial render.
 */
export const useDataFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      // Reset loading and error states if this hook is re-used multiple times in the future
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
