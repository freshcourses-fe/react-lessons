import React from 'react';
import { getUsers } from '../../api';
import { useClicker, useData } from '../../hooks';

const UserList = (props) => {
  const { data: users, isLoading, error } = useData(getUsers);
  const clicks = useClicker();

  if (error) {
    return <div>ERROR HAPPENED</div>;
  }

  if (isLoading) {
    return <div>LOADING ...</div>;
  }
  return (
    <div>
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
