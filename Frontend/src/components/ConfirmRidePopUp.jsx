import React, { useState } from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopUp = (props) => {
  const [otp, setOtp] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div>
        <h5
          onClick={() => {
            props.setConfirmRidePopUpPanel(false);
          }}
          className="p-1 text-center absolute top-0 w-[93%]"
        >
          {" "}
          <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
        </h5>
        <h3 className="font-semibold mb-5 text-2xl">
          Confirm this Ride to Start
        </h3>
        <div
          className="
        flex items-center justify-between mt-4 p-3 bg-yellow-400 rounded-lg"
        >
          <div
            className="
        flex items-center gap-3"
          >
            <img
              className="h-12 w-12 rounded-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-17O1ilowE8NmMnG6dgiMEt4QbunQR6SJkw&s"
              alt=""
            />
            <h2 className="text-lg font-medium">Alina</h2>
          </div>
          <h5 className="text-lg font-semibold">2.2 Km</h5>
        </div>
        <div className="flex gap-2 justify-between items-center flex-col">
          <div className="w-full mt-5">
            <div className="flex items-center gap-5 p-3 border-b-2">
              <i className="text-lg ri-map-pin-user-fill"></i>
              <div>
                <h3 className="text-lg font-medium"> 562/11-A</h3>
                <p className="text-sm text-gray-600 -mt-1">Lahore Fort</p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3 border-b-2">
              <i className="text-lg ri-map-pin-2-fill"></i>
              <div>
                <h3 className="text-lg font-medium"> 562/11-A</h3>
                <p className="text-sm text-gray-600 -mt-1">Lahore Fort</p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3">
              <i className="text-lg ri-currency-line"></i>
              <div>
                <h3 className="text-lg font-medium"> 193 Rs.</h3>
                <p className="text-sm text-gray-600 -mt-1">Cash Cash</p>
              </div>
            </div>
          </div>
          <form></form>
          <div className="mt-6 w-full">
            <form
              onSubmit={(e) => {
                submitHandler(e);
              }}
            >
              <input
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                type="text"
                placeholder="Enter OTP"
                className="px-6 py-4 font-mono text-lg rounded-lg w-full mt-3 bg-[#eee]"
              />
              <Link
                to="/captain/riding"
                className="w-full flex justify-center text-lg  mt-5 bg-green-600 text-white font-semibold p-3 rounded-lg"
              >
                Confirm
              </Link>

              <button
                onClick={() => {
                  props.setConfirmRidePopUpPanel(false);
                  props.setRidePopUpPanel(false);
                }}
                className="w-full mt-2 text-white text-lg bg-red-600 font-semibold p-3 rounded-lg"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmRidePopUp;
