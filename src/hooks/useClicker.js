import { useEffect, useState } from 'react';

export default function useClicker() {
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
