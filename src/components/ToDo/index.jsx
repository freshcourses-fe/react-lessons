import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';

const ToDo = (props) => {
  const [todos, setTodos] = useState([]);

  const addTodo = async (todoText) => {
    const newTodo = {
      text: todoText,
      isDone: false,
      id: Date.now(),
    };

    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    // filter
  };

  const toggleTodoCompletion = (id) => {
    // map
  };

  const onSubmit = (values, formikBag) => {
    // todo
    addTodo(values.text);
    formikBag.resetForm();
  };
  return (
    <article>
      <div>
        <Formik initialValues={{ text: '' }} onSubmit={onSubmit}>
          <Form>
            <Field name="text" placeholder="todo text" />
            <button type="submit">Add task</button>
          </Form>
        </Formik>
      </div>
      <div>
        <h2>Tasks:</h2>
        <ul>
          {todos.map((todo) => (
            <li>
              {JSON.stringify(todo)}
              <button onClick={() => removeTodo(todo.id)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ToDo;
