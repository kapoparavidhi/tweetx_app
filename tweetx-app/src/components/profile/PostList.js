// PostList.js
import React, { useEffect, useState } from "react";

const PostList = ({ userId }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`./src/constant/post.json?userId=${userId}`);
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, [userId]);

  return (
    <div>
      <div>
        <h2>Posts:</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.post_id}>
              {post.description} - {post.timeAgo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostList;
