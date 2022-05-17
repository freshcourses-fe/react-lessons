import { useEffect, useState } from 'react';

export function useData(getData) {
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

export function useClicker() {
  const [clicks, setClicks] = useState(0);

  function handleClick() {
    setClicks((click) => click + 1);
  }

  useEffect(() => {
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return clicks;
}
