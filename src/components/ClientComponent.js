import { useEffect, useState } from 'react';
import axios from 'axios';

const LOG = '[CLIENT COMPONENT]';

export const ClientComponent = () => {
  const [userList, setUserList] = useState([]);

  const fetchUsers = async () => {
    const users = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    setUserList(users.data);
    console.log(LOG, 'fetched users', users);
  }

  const showUser = (user) => {
    return (
      <li key={user.id}>
        {JSON.stringify(user)}
      </li>
    );
  }

  useEffect(() => {
    console.log(LOG, 'mounted');
    fetchUsers();
  }, []);

  useEffect(() => {
    console.log(LOG, 'updated');
  })

  useEffect(() => {
    console.log(LOG, 'userList updated', userList);
  }, [userList])

  return (
    <div>
      <ul>
        {userList.map((user) => showUser(user))}
      </ul>
    </div>
  )
}