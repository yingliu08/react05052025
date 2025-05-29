import { useState, useEffect } from "react";

export default function useFetch(api_url: string) {
  const [data, setData] = useState<any[] | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState<string | null>(null);
  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const res = await fetch(api_url);
        const resData = await res.json();
        setData(resData);
        setError(null);
      } catch (err) {
        setError("error");
        setData(null);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [api_url]);

  return { data, isLoading, isError };
}
