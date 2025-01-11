import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <>
      <div className="h-screen">
        <Link
          to="/home"
          className="fixed top-2 right-2 w-10 h-10 bg-white flex justify-center items-center rounded-full"
        >
          <i className="text-lg font-medium ri-home-4-line"></i>
        </Link>
        <div className="h-1/2">
          <img
            className="h-full w-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJA08A8nC2TN9Vnv5zLo0Z7gqZOxxFbji6Ew&s"
            alt=""
          />
        </div>
        <div className="h-1/2 p-4">
          <div className="flex justify-between items-center">
            <img
              className="h-12"
              src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
              alt=""
            />
            <div className="text-right">
              <h2 className="text-lg font-medium">Ali</h2>
              <h4 className="text-xl font-semibold -mt-1 -mb-1">ABP 1234</h4>
              <p className="text-sm text-gray-600">Suzuki Alto</p>
            </div>
          </div>
          <div className="flex gap-2 justify-between items-center flex-col">
            <div className="w-full mt-5">
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
          </div>

          <button className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">
            Make a Payment
          </button>
        </div>
      </div>
    </>
  );
};

export default Riding;
