// Navbar.js
import React from "react";

const Navbar = ({ onSelect }) => {
  return (
    <div className="navbar">
      <button onClick={() => onSelect("posts")}>Posts</button>
      <button onClick={() => onSelect("followers")}>Followers</button>
      <button onClick={() => onSelect("following")}>Following</button>
    </div>
  );
};

export default Navbar;
