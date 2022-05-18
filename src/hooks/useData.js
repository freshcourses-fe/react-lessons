import { useEffect, useState } from 'react';

export default function useData(getData) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData()
      .then((data) => {
        setData(data);
        setError(null);
      })
      .catch((e) => {
        setError(e);
        setData([]);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return { data, isLoading, error };
}