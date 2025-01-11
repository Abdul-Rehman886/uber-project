import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FinishRide from "../components/FinishRide";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);
  useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishRidePanel]
  );
  return (
    <>
      <div className="h-screen relative">
        <div className="fixed top-0  p-6 flex items-center justify-between w-screen">
          <img
            className="w-16"
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
            alt=""
          />
          <Link
            to="/home"
            className=" w-10 h-10 bg-white flex justify-center items-center rounded-full"
          >
            <i className="text-lg font-medium ri-logout-box-r-line"></i>
          </Link>
        </div>
        <div className="h-4/5">
          <img
            className="h-full w-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJA08A8nC2TN9Vnv5zLo0Z7gqZOxxFbji6Ew&s"
            alt=""
          />
        </div>
        <div
          className="h-1/5 p-6 flex items-center justify-between relative bg-yellow-400 pt-10"
          onClick={() => {
            setFinishRidePanel(true);
          }}
        >
          <h5
            className="p-1 text-center w-[90%] absolute top-0"
            onClick={() => {}}
          >
            <i className="text-3xl text-gray-800  ri-arrow-up-wide-line "></i>
          </h5>
          <h4 className="text-xl  font-semibold ">4 Km Away</h4>
          <button className="bg-green-600 text-white font-semibold p-3 px-10 rounded-lg">
            Complete Ride
          </button>
        </div>
        <div
          ref={finishRidePanelRef}
          className="fixed w-full z-10 bottom-0 h-screen translate-y-full px-3 py-6 pt-12 bg-white"
        >
          <FinishRide setFinishRidePanel={setFinishRidePanel} />
        </div>
      </div>
    </>
  );
};

export default CaptainRiding;
