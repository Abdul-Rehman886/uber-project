import React, { useState, useContext } from "react";

import { UserDataContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});
  const { user, setUser } = useContext(UserDataContext);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = { email: email, password: password };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      userData
    );
    if (response.status === 200) {
      const data = response.data;

      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }

    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div className="p-7 h-screen flex flex-col justify-between">
        <div>
          <img
            className="w-16 mb-10"
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
            alt=""
          />
          <form onSubmit={(e) => submitHandler(e)}>
            <h3 className="text-lg font-medium mb-2">What's Your Email?</h3>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="email@example.com"
              className="bg-[#eeeeee] mb-7 rounded-md px-4 py-2  border w-full text-lg placeholder:text-base"
            />

            <h3 className="text-lg font-medium mb-2">Enter Password</h3>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              className="bg-[#eeeeee] mb-7 rounded-md px-4 py-2  border w-full text-lg placeholder:text-base"
            />
            <button className="bg-[#111] text-white font-semibold mb-3 rounded-md px-4 py-2   w-full text-lg placeholder:text-base">
              Login
            </button>
          </form>
          <p className="text-center">
            New Here?{" "}
            <Link to="/signup" className="text-blue-600">
              Create new account
            </Link>
          </p>
        </div>
        <div>
          <Link
            to="/captain/login"
            className="bg-[#62bd62] flex items-center justify-center text-white font-semibold mb-5 rounded-md px-4 py-2   w-full text-lg placeholder:text-base"
          >
            Sign In as Captain
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
