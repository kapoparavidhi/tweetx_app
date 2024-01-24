// Profile.js
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import PostList from "./PostList";
import UserList from "./UserList";

const Profile = ({ userId }) => {
  const [selectedTab, setSelectedTab] = useState("posts");
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const currentUserPosts = storedPosts.filter(
      (post) => post.userId === userId
    );
    setUserPosts(currentUserPosts);
  }, [userId]);

  return (
    <div>
      <Navbar onSelectTab={setSelectedTab} />
      <div>
        {selectedTab === "posts" && <PostList posts={userPosts} />}
        {selectedTab === "followers" && (
          <UserList type="followers" userId={userId} />
        )}
        {selectedTab === "following" && (
          <UserList type="following" userId={userId} />
        )}
      </div>
    </div>
  );
};

export default Profile;
