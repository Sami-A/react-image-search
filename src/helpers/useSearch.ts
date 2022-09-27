import { useCallback, useEffect, useState } from "react";
import { get, ImageResponse } from "./api";

const useSearch = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [data, setData] = useState<ImageResponse | null>(null);

  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<{}>({});

  const fetchData = useCallback(async (url: string) => {
    setIsLoading(true);
    const data = await get(url);
    setData(data || []);
    setIsLoading(false);
  }, []);

  const search = (url: string) => {
    fetchData(url);
  };

  return { search, isLoading, data };
};

export default useSearch;
