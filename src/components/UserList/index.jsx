import React, { useEffect, useRef, useState } from 'react';
import { getUsers } from 'api';
import { useClicker, useData } from 'hooks';

const UserList = (props) => {
  const [text, setText] = useState('');
  const prevText = useRef(null);

  useEffect(()=> {
    prevText.current = text;
  }, [text])

  const { data: users, isLoading, error } = useData(getUsers);
  const clicks = useClicker();

  return (
    <div>
      {isLoading && <div>LOADING ...</div>}
      {error && <div>ERROR HAPPENED</div>}
      <p>Clicks: {clicks}</p>
      <input
        value={text}
        onChange={({ target: { value } }) => setText(value)}
      />
      <p>Current text is : {text}</p>
      <p>Previous text is : {prevText.current}</p>
      <hr />
      <ul>
        {users.map((user) => (
          <li key={user.login.uuid}>
            <pre>{JSON.stringify(user, null, 4)}</pre>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
