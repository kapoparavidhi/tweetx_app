// // PostList.js
// import React from "react";

// const PostList = ({ posts, selectedUserId }) => {
//   const selectedUserPosts = posts.filter(
//     (post) => post.userid === selectedUserId
//   );

//   return (
//     <div>
//       {selectedUserPosts.length > 0 ? (
//         <ul>
//           {selectedUserPosts.map((post) => (
//             <li key={post.postId}>{post.description}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>No posts by this user.</p>
//       )}
//     </div>
//   );
// };

// export default PostList;

import React from "react";

function PostList() {
  return <div>PostList</div>;
}

export default PostList;
