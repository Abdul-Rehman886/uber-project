import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { CaptainDataContext } from "../context/CaptainContext";

import axios from "axios";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { captain, setCaptain } = React.useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const captain = { email: email, password: password };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/login`,
      captain
    );

    if (response.status === 200) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);

      navigate("/captain/home");
    }

    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div className="p-7 h-screen flex flex-col justify-between">
        <div>
          <img
            className="w-20 mb-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVCO4w_adxK32rCXFeKq3_NbLcR9b_js14w&s"
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
            Join a Fleet?{" "}
            <Link to="/captain/signup" className="text-blue-600">
              Register as a Captain
            </Link>
          </p>
        </div>
        <div>
          <Link
            to="/login"
            className="bg-[#e3e323] flex items-center justify-center text-white font-semibold mb-5 rounded-md px-4 py-2   w-full text-lg placeholder:text-base"
          >
            Sign In as User
          </Link>
        </div>
      </div>
    </>
  );
};

export default CaptainLogin;
