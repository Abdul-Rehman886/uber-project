import React, { useState } from "react";

import { Link } from "react-router-dom";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };
  return (
    <>
      <div className="py-5 px-5 h-screen flex flex-col justify-between">
        <div>
          <img
            className="w-20 mb-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVCO4w_adxK32rCXFeKq3_NbLcR9b_js14w&s"
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
              Signup
            </button>
          </form>
          <p className="text-center">
            Already Have an Account?{" "}
            <Link to="/captain/login" className="text-blue-600">
              Log In Here
            </Link>
          </p>
        </div>
        <div>
          <p className="text-[10px] leading-tight">
            This site is protected by reCAPTCHA and the{" "}
            <span className="underline">Google Privacy Policy</span> and the{" "}
            <span className="underline">Terms of Service</span> apply.
          </p>
        </div>
      </div>
    </>
  );
};

export default CaptainSignup;
