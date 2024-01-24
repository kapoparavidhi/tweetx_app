import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const details = JSON.parse(localStorage.getItem("selectedUser") || "{}");

  const { firstName, lastName } = useMemo(() => details.name, [details.name]);
  return (
    <div>
      <div className="header">
        <p className="h-12 w-12 bg-[red] rounded-full ">
          {firstName.charAt(0)} {lastName.charAt(0)}
        </p>
        <p>
          {firstName} {lastName}
        </p>
      </div>
      <div class="hidden w-full md:block md:w-auto mr-20" id="navbar-default">
        <ul class="font-medium text-base flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <NavLink
              to="/posts"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200
                                 ${isActive ? "text-pink-500" : "text-gray-600"}
                                 border-b border-gray-100 text-base  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-pink-600 lg:p-0`
              }>
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/followers"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200
                                 ${isActive ? "text-pink-500" : "text-gray-700"}
                                 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-pink-600 lg:p-0`
              }>
              Followers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/following"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200
                                 ${isActive ? "text-pink-500" : "text-gray-700"}
                                 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-pink-600 lg:p-0`
              }>
              Following
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
