export const getUsers = () =>
  fetch('https://randomuser.me/api/?results=10&seed=12345&page=1')
    .then((res) => res.json())
    .then((data) => data.results);

export const getLaptops = () =>
  fetch('/laptops.json').then((response) => response.json());
