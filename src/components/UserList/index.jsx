import React, { useRef } from 'react';
import { getUsers } from 'api';
import { useClicker, useData } from 'hooks';

const UserList = (props) => {
  const divRef = useRef(null);
  const inputRef = useRef(null);

  const { data: users, isLoading, error } = useData(getUsers);
  const clicks = useClicker();

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div ref={divRef}>
      {isLoading && <div>LOADING ...</div>}
      {error && <div>ERROR HAPPENED</div>}
      <p>Clicks: {clicks}</p>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus on input pls</button>
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
