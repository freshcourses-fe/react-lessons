import React from 'react';
import { getUsers } from '../../api';
import { useData } from '../../hooks';

const UserList = (props) => {


  const { data: users, isLoading, error } = useData(getUsers);

  if (error) {
    return <div>ERROR HAPPENED</div>;
  }

  if (isLoading) {
    return <div>LOADING ...</div>;
  }
  return (
    <div>
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
