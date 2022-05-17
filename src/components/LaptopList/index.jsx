import React, { useEffect, useState } from 'react';

const LaptopsList = (props) => {
  const [laptops, setLaptops] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/laptops.json')
      .then((response) => response.json())
      .then((laptops) => {
        setLaptops(laptops);
        setError(null);
      })
      .catch((e) => {
        setError(e);
        setLaptops([]);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      {isLoading && <div>LOADING...</div>}
      {error && <div>ERROR</div>}
      {laptops.map((laptop) => (
        <div key={laptop.id}>{JSON.stringify(laptop)}</div>
      ))}
    </div>
  );
};

export default LaptopsList;
