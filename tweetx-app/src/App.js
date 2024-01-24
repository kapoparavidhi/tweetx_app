// import Header from "./layouts/dashboard/header/Header";
import "./App.css";
// import Profile from "./components/profile/Profile";
// import Navbar from "./layouts/dashboard/navbar/Navbar";
// // import Login from "./components/accounts/login/Login";
// import Signup from "./components/accounts/signup/Signup";
// //import Post from "./components/profile/Post";
// import Feed from "./components/feeds/Feed";
import { useState, useEffect } from "react";
import Feed from "./components/feeds/Feed";
//import ProfileLayout from "./router/ProfileLayout";
import Users from "./components/users/Users";
import Profile from "./components/profile/Profile";
import { Route, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Signup from "./components/accounts/signup/Signup";
import Login from "./components/accounts/login/Login";
import users from "./constant/users.json";
import Header from "./components/profile/Header";

function App() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  //   userId: "user123",
  // });
  const user_id = "user123";

  const [formData, setFormData] = useState(users);

  const handleSignUp = (user) => {
    setFormData([...formData, user]);
    console.log("user", formData);
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(formData));
    console.log(users);
  }, [formData]);

  const [currentUser, setCurrentUser] = useState(null);
  // setCurrentUser(loggedInUserData);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup onSignUp={handleSignUp} />} />
        <Route path="login" element={<Login />} />
        <Route
          path="feed"
          element={
            <>
              <Navbar /> <Feed formData={formData} />
            </>
          }
        />

        <Route
          path="users"
          element={
            <>
              <Navbar /> <Users formData={formData} />
            </>
          }
        />
        <Route
          path="profile"
          element={
            <>
              <Navbar />
              <Header />
              <Profile user={currentUser} />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
