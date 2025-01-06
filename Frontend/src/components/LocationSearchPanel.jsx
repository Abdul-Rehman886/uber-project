import React from "react";

const LocationSearchPanel = (props) => {
  // sample array for location
  const locations = [
    "157 M, C8W9+3HH, 157 Madar-e-Millat Road, Civic Center, Lahore",
    "157 M, C8W9+3HH, 157 Madar-e-Millat Road, Civic Center, Lahore",
    "157 M, C8W9+3HH, 157 Madar-e-Millat Road, Civic Center, Lahore",
  ];
  return (
    <>
      {/* This is sample data */}
      {locations.map(function (element, index) {
        return (
          <div
            key={index}
            onClick={() => {
              props.setVehiclePanel(true);
              props.setPanelOpen(false);
            }}
            className="flex gap-4 my-2 border-gray-100  active:border-black  border-2 p-3 rounded-xl  items-center justify-start "
          >
            <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{element}</h4>
          </div>
        );
      })}
    </>
  );
};

export default LocationSearchPanel;
