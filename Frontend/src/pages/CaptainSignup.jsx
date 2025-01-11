import React, { useState, useContext } from "react";

import { Link, useNavigate } from "react-router-dom";

import { CaptainDataContext } from "../context/CaptainContext";

import axios from "axios";

const CaptainSignup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const { captain, setCaptain } = React.useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      captainData
    );

    if (response.status === 201) {
      const data = response.data;

      setCaptain(data.captain);
      localStorage.setItem("token", data.token);

      navigate("/captain/home");
    }

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
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

            <h3 className="text-lg font-medium mb-2">Vehicle Information</h3>
            <div className="flex gap-4 ">
              <input
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
                type="text"
                required
                placeholder="Vehicle Color"
                className="bg-[#eeeeee] mb-6 rounded-md w-1/2 px-4 py-2  border  text-lg placeholder:text-base"
              />
              <input
                value={vehiclePlate}
                onChange={(e) => setVehiclePlate(e.target.value)}
                type="text"
                required
                placeholder="Vehicle Plate"
                className="bg-[#eeeeee] mb-6 rounded-md px-4 py-2  border w-1/2 text-lg placeholder:text-base"
              />
            </div>
            <div className="flex gap-4 mb-6">
              <input
                value={vehicleCapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
                type="number"
                required
                placeholder="Vehicle Capacity"
                className="bg-[#eeeeee] mb-6 rounded-md px-4 py-2  border w-1/2 text-lg placeholder:text-base"
              />
              <select
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                required
                className="bg-[#eeeeee] mb-6 rounded-md px-4 py-2  border w-1/2 text-lg placeholder:text-base"
              >
                <option value="" disabled>
                  Select Vehicle Type
                </option>
                <option value="car">Car</option>
                <option value="motorcycle">Motorcycle</option>
                <option value="auto">Auto</option>
              </select>
            </div>
            <button className="bg-[#111] text-white font-semibold mb-3 rounded-md px-4 py-2   w-full text-lg placeholder:text-base">
              Create Captain Account
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
          <p className="text-[10px] mt-6 leading-tight">
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
