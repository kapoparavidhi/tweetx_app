import React, { useEffect, useState, useMemo } from "react";

function PostList() {
  const [userPosts, setUserPosts] = useState([]);
  const details = JSON.parse(localStorage.getItem("selectedUser") || "{}");

  const { firstName, lastName } = useMemo(() => details.name, [details.name]);
  const postData = JSON.parse(localStorage.getItem("posts"));
  const loginUserData = JSON.parse(localStorage.getItem("selectedUser"));

  console.log("postData", userPosts);

  useEffect(() => {
    const filteredPosts = postData.filter(
      (post) => post.user_id === loginUserData.userId
    );
    setUserPosts(filteredPosts);
  }, [loginUserData.userId, postData]);

  return (
    <div>
      <div className="flex flex-col gap-5 max-w-[800px] mx-auto">
        <ul className="flex flex-col gap-5 my-10">
          {userPosts.map((post) => (
            <li key={post.post_id}>
              <div className="shadow-lg rounded-xl p-8 ">
                <div className="flex gap-7">
                  <div className="h-16 min-w-16 border border-gray-500 rounded-full flex items-center justify-center">
                    {firstName.charAt(0)} {lastName.charAt(0)}
                  </div>
                  <p>{post.description}</p>
                  <p>{post.created_time}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PostList;
