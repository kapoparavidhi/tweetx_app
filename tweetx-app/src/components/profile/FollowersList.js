import React from "react";

const FollowersList = () => {
  const loggedInUserData = JSON.parse(localStorage.getItem("selectedUser"));
  const followers = loggedInUserData ? loggedInUserData.followers : [];
  const following = loggedInUserData ? loggedInUserData.following : [];
  const allUsersData = JSON.parse(localStorage.getItem("users")) || [];

  const filteredUsers = allUsersData.filter((user) =>
    followers.includes(user.userId)
  );

  const handleFollow = (userId) => {
    console.log(`Followed user with ID ${userId}`);
  };
  localStorage.setItem("selectedUser", JSON.stringify(loggedInUserData));
  localStorage.setItem("users", JSON.stringify(allUsersData));
  return (
    <div>
      <div className="flex justify-center items-center ">
        <div className="flex flex-col justify-between w-[500px] mt-10">
          <ul>
            {filteredUsers.map((user) => (
              <li key={user.userId}>
                <div className="flex mt-10">
                  <div className="h-16 min-w-16 border border-gray-500 rounded-full flex items-center justify-center">
                    {loggedInUserData.name.firstName.charAt(0)}
                    {loggedInUserData.name.lastName.charAt(0)}
                  </div>
                  <div className="flex flex-col justify-start">
                    <div className=" ml-5 w-[200px] ">
                      <div className="text-gray-400 font-medium text-2xl">
                        {user.name.firstName} {user.name.lastName}
                      </div>
                    </div>
                    <div className="ml-5">
                      following:
                      {user.following?.length}
                    </div>
                  </div>
                  {following.includes(user.userId) ? (
                    <button className="mt-5 ml-[200px] text-white bg-pink-500 hover:bg-pink-400 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2 dark:bg-pink-500 dark:hover:bg-pink-400 focus:outline-none dark:focus:ring-pink-500">
                      Following
                    </button>
                  ) : (
                    <div>
                      <button
                        className="mt-5 ml-[200px] text-white bg-pink-500 hover:bg-pink-400 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2 dark:bg-pink-500 dark:hover:bg-pink-400 focus:outline-none dark:focus:ring-pink-500"
                        onClick={() => handleFollow(user.userId)}
                      >
                        Follow
                      </button>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FollowersList;
