import React from 'react';
import { useEffect } from 'react';
import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'DATA_RESPONSE_SUCCESS': {
      const {
        data: { users, messages },
      } = action;

      const usersMap = new Map();

      users.forEach((user) => usersMap.set(user.id, user));

      const msgWithAuthors = messages.map((msg) => {
        const newMessage = {
          ...msg,
          author: usersMap.get(msg.authorId),
        };

        return newMessage;
      });

      const newState = {
        ...state,
        messages: msgWithAuthors,
        users
      };

      return newState;
    }
    default:
      return state;
  }
}

const Chat = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    messages: [],
    users: [],
  });

  useEffect(() => {
    fetch('/chat.json')
      .then((res) => res.json())
      .then((data) => {
        const action = {
          data,
          type: 'DATA_RESPONSE_SUCCESS',
        };
        console.log(action);
        dispatch(action);
      });
  }, []);

  return (
    <article>
      <h2>Chat</h2>
      {state.messages.map((message) => (
        <div key={message.id}>{JSON.stringify(message)}</div>
      ))}
    </article>
  );
};

export default Chat;
