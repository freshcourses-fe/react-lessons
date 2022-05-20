import axios from 'axios';

export const getUsers = () =>
  fetch('https://randomuser.me/api/?results=10&seed=12345&page=1')
    .then((res) => res.json())
    .then((data) => data.results);

export const getLaptops = () =>
  fetch('/laptops.json').then((response) => response.json());

export async function getTodos() {
  const response = await axios.get('http://localhost:3000/api/tasks');

  return response.data;
}

export async function createTodo(todoText) {
  const response = await axios.post('http://localhost:3000/api/tasks', {
    text: todoText,
  });

  return response.data;
}

// http://localhost:3000/api/tasks
