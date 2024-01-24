import React, { useEffect, useState } from "react";

const Users = () => {
  const [userNames, setUserNames] = useState([]);

  useEffect(() => {
    const usersData = JSON.parse(localStorage.getItem("users")) || [];

    const names = usersData.map(
      (user) => `${user.name.firstName} ${user.name.lastName}`
    );

    setUserNames(names);
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {userNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
