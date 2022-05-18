import React, { useEffect, useRef, useState } from 'react';
import { getUsers } from 'api';
import { useClicker, useData } from 'hooks';

const UserList = (props) => {
  const elemRef = useRef(null);
  const clicks = useClicker(elemRef);
  const { data: users, isLoading, error } = useData(getUsers);

  return (
    <div ref={elemRef}>
      {isLoading && <div>LOADING ...</div>}
      {error && <div>ERROR HAPPENED</div>}
      <p>Clicks: {clicks}</p>
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
