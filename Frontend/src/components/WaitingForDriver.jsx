import React from "react";

const WaitingForDriver = (props) => {
  return (
    <>
      <h5
        onClick={() => {
          props.waitingForDriver(false);
        }}
        className="p-1 text-center absolute top-0 w-[93%]"
      >
        {" "}
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
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
      </div>
    </>
  );
};

export default WaitingForDriver;