import React, { useState } from "react";
import UserForm from "./UserForm";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-2xl mb-4">Users</h1>

      <UserForm onAddUser={addUser} />

      <ul className="mt-6 w-full max-w-md space-y-2">
        {users.length === 0 ? (
          <p className="text-gray-400 text-center">No users yet</p>
        ) : (
          users.map((user, index) => (
            <li
              key={index}
              className="bg-gray-800 p-3 rounded flex justify-between"
            >
              <span>{user.name}</span>
              <span>{user.age}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;