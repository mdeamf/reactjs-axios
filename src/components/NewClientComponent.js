import { useEffect, useState } from 'react';
import axios from 'axios';

const LOG = '[NEW CLIENT COMPONENT]';

export const NewClientComponent = () => {
  const [newUser, setNewUser] = useState('');

  useEffect(() => {
    console.log(LOG, 'mounted');
  }, []);

  useEffect(() => {
    console.log(LOG, 'updated');
  });

  useEffect(() => {
    console.log(LOG, 'newUser updated', newUser);
  }, [newUser]);

  const submitUser = (e) => {
    console.log(LOG, 'submitUser', e);
    e.preventDefault();

    const postUser = async () => {
      const user = await axios.post(
        `https://jsonplaceholder.typicode.com/users`,
        { name: newUser }
      );
      console.log(LOG, 'post user', user);
    };
    postUser();
  };

  return (
    <div>
      <form onSubmit={submitUser}>
        <label>
          Name:
          <input
            type="text"
            value={newUser}
            onChange={(e) => setNewUser(e.target.value)}
          />
        </label>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};
