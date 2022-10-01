import { useCallback, useState } from "react";
import { get } from "./api";

const useSearch = <T>() => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [data, setData] = useState<T | null>(null);

  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fetchData = useCallback(async (query: string) => {
    setIsLoading(true);
    setIsError(false);
    try {
      const data = await get<T>(query);
      setData(data);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      setIsError(true);
      setError(String(e));
    }
  }, []);

  const search = (query: string) => {
    fetchData(query);
  };

  return { search, isLoading, data, isError, error };
};

export default useSearch;
