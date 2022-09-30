import { useCallback, useState } from "react";
import { get } from "./api";

const useSearch = <T>() => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [data, setData] = useState<T | null>(null);

  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fetchData = useCallback(async (url: string) => {
    setIsLoading(true);
    setIsError(false);
    setError("");
    try {
      const data = await get<T>(url);
      setData(data);
      setIsLoading(false);
    } catch (e: unknown) {
      setIsLoading(false);
      setIsError(true);
      setError(String(e));
    }
  }, []);

  const search = (url: string) => {
    fetchData(url);
  };

  return { search, isLoading, data, isError, error };
};

export default useSearch;
