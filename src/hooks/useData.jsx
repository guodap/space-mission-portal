import { useEffect, useState } from "react";
import { getData } from "../utils/getData";

export const useData = (url) => {
  const [data, setData] = useState(null);
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
  }, []);

  return { data, loading, error };
};
