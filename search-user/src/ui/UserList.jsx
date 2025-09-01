import { useState } from 'react'
import ListItem from './ListItem';
import SearchBox from './SearchBox';

const UserList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>User List</h2>
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className='list'>
        {filteredUsers.length === 0 ?
          <div>No users found.</div>
        : filteredUsers.map((user) =>
          <ListItem key={user.id} user={user} searchTerm={searchTerm}  />
        )}
      </div>
    </div>
  )
}

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" }
];

export default UserList