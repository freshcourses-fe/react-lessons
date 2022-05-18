import { useEffect, useState } from 'react';

export default function useClicker(elemRef) {
  const [clicks, setClicks] = useState(0);

  function handleClick() {
    setClicks((click) => click + 1);
  }

  useEffect(() => {
    const elem = elemRef.current;
    elem.addEventListener('click', handleClick);

    return () => {
      elem.removeEventListener('click', handleClick);
    };
  }, [elemRef]);

  return clicks;
}
