import React, { useState, useContext } from "react";

import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

import { UserDataContext } from "../context/UserContext";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const { user, setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      newUser
    );

    if (response.status === 201) {
      const data = response.data;

      setUser(data.user);
      localStorage.setItem("token", data.token);

      navigate("/home");
    }

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
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
            <h3 className="text-lg font-medium mb-2">What's Your Name?</h3>
            <div className="flex gap-4 mb-6">
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                required
                placeholder="First Name"
                className="bg-[#eeeeee]  rounded-md px-4 py-2  border w-1/2 text-lg placeholder:text-base"
              />
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                required
                placeholder="Last Name"
                className="bg-[#eeeeee]  rounded-md px-4 py-2  border w-1/2 text-lg placeholder:text-base"
              />
            </div>
            <h3 className="text-lg font-medium mb-2">What's Your Email?</h3>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              placeholder="email@example.com"
              className="bg-[#eeeeee] mb-6 rounded-md px-4 py-2  border w-full text-lg placeholder:text-base"
            />

            <h3 className="text-lg font-medium mb-2">Enter Password</h3>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
              placeholder="password"
              className="bg-[#eeeeee] mb-6 rounded-md px-4 py-2  border w-full text-lg placeholder:text-base"
            />
            <button className="bg-[#111] text-white font-semibold mb-3 rounded-md px-4 py-2   w-full text-lg placeholder:text-base">
              Create Account
            </button>
          </form>
          <p className="text-center">
            Already Have an Account?{" "}
            <Link to="/login" className="text-blue-600">
              Log In Here
            </Link>
          </p>
        </div>
        <div>
          <p className="text-[10px] leading-tight">
            By proceeding, you consent to receiving calls, WhatsApp or SMS/RCS
            messages, including by automated means, from Uber and its affiliates
            to the number provided.
          </p>
        </div>
      </div>
    </>
  );
};

export default UserSignup;
