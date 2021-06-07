import { useState, useEffect } from "react";

const SERVER_ADDRESS = "http://localhost:8080";

const fetchApi = async (path, options = {}) => {
  const response = await fetch(`${SERVER_ADDRESS}${path}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  return await response.json();
};

export const useQueryItems = (queryString = "") => {
  const [previousQueryString, setPreviousQueryString] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!loading && !data && !error) {
      setLoading(true);
      fetchApi(`/api/items?filter=${queryString}`).then(
        ({ items }) => {
          setData(items);
          setLoading(false);
        },
        () => {
          // Failed to fetch from API endpoint
          setLoading(false);
          setError(true);
        }
      );
    }
  }, [loading, data, error, setData, setLoading]);

  if (previousQueryString !== queryString) {
    setPreviousQueryString(queryString);

    // Reset to initial state, trigger re-fetch if query has changed
    setLoading(false);
    setData(null);
    setError(false);
  }

  return {
    loading,
    data,
    error,
  };
};
