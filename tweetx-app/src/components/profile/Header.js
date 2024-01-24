// Header.js
import React, { useState } from "react";

const Header = () => {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div className="header">
      {currentUser ? (
        <p>Welcome, {currentUser.username}!</p>
      ) : (
        <p>Login or Sign Up</p>
      )}
    </div>
  );
};

export default Header;
