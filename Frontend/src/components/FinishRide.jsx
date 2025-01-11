import React from "react";
import { Link } from "react-router-dom";

const FinishRide = (props) => {
  return (
    <>
      <h5
        onClick={() => {
          props.setFinishRidePanel(false);
        }}
        className="p-1 text-center absolute top-0 w-[93%]"
      >
        {" "}
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="font-semibold mb-5 text-2xl">Finish this Ride</h3>
      <div
        className="
        flex items-center justify-between mt-4 p-4 border-2 border-yellow-400 rounded-lg"
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

        <div className="mt-10 w-full">
          <Link
            to="/captain/home"
            className="w-full flex justify-center text-lg  mt-5 bg-green-600 text-white font-semibold p-3 rounded-lg"
          >
            Finish Ride
          </Link>
        </div>
      </div>
    </>
  );
};

export default FinishRide;
