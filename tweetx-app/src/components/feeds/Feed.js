import React, { useState, useEffect } from "react";
import Popup from "./Popup";
import posts from "../../constant/post.json";

const Feed = ({ formData }) => {
  const [userPosts, setUserPosts] = useState(posts);
  const [isPopupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(userPosts));
    console.log(posts);
  }, [userPosts]);

  const handlePost = (post) => {
    setUserPosts([...userPosts, post]);
  };

  const getPostdata = JSON.parse(localStorage.getItem("posts"));
  console.log("getPostdata", getPostdata);

  return (
    <div>
      <button onClick={() => setPopupOpen(true)}>Write</button>

      {isPopupOpen && (
        <Popup onClose={() => setPopupOpen(false)} onPost={handlePost} />
      )}

      <div>
        <h2>Posts:</h2>
        <ul>
          {userPosts.map((post) => (
            <li key={post.post_id}>
              <strong>{post.details}</strong> - {post.description} -
              {post?.created_time?.toLocaleString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Feed;
