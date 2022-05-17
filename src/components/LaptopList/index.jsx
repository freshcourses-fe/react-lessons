import React, { useEffect, useState } from 'react';
import { useData } from '../../hooks';

const LaptopsList = (props) => {
  const getLaptops = () =>
    fetch('/laptops.json').then((response) => response.json());

  const { data: laptops, isLoading, error } = useData(getLaptops);

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
