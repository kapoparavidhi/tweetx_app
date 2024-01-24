import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const handleLogin = () => {
    // Retrieve user data from local storage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Find user with matching email and password
    const user = storedUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      // Set the current user in the parent component
      // onLogin(user);

      localStorage.setItem("selectedUser", JSON.stringify(user));
      // console.log({ user, email, password });
      // console.log(user.toString());
      // Redirect to the feed page (you need to define the route for the feed page)
      history("/feed");
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };
  return (
    <div className="ml-20 mt-20">
      <h1 className="flex items-center text-5xl font-extrabold dark:text-white text-pink-400 ">
        TweetX
      </h1>

      <Link to="/">
        <button
          type="button"
          className=" mt-20 flex justify-left ml-10 py-4 px-20 text-base font-medium  text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-500 hover:bg-black-500 hover:text-pink-400 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
          Create Account
        </button>
      </Link>
      <div className="flex justify-left ml-10 mt-10 ">
        <div className="max-w-lg w-full bg-white p-8 border border-gray-300 shadow-md rounded-md">
          <h2 className="flex justify-left text-4xl font-semibold mb-6">
            Login
          </h2>
          <form>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-10 p-4 w-full border rounded-md bg-gray-100"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type={password}
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-4 w-full border rounded-md mt-5 bg-gray-100"
                required
              />
              {/* <button
                className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                )}
              </button> */}
            </div>
            <div className="mb-4 flex items-center justify-between">
              <a href="#" className="text-base text-black-500 hover:underline">
                Forgot Password?
              </a>
            </div>
            <Link to="/feed">
              <button
                onClick={handleLogin}
                type="submit"
                className="float-right px-7 bg-pink-500 text-white p-2 rounded-md hover:bg-pink-600 focus:outline-none focus:ring focus:border-pink-300">
                Login
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
