// UserList.js
import React, { useEffect, useState } from "react";

const UserList = ({ type, userId }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        `https://api.example.com/${type}?userId=${userId}`
      );
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, [type, userId]);

  return (
    <div>
      <h2>{type === "followers" ? "Followers" : "Following"}:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
