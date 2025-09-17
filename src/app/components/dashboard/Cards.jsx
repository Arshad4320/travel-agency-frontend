import React from "react";
import { Bus, Train, Plane, Ship } from "lucide-react";
const Cards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-blue-100 p-4 rounded-lg shadow flex items-center gap-4">
        <Bus size={32} className="text-blue-600" />
        <div>
          <h3 className="font-semibold text-lg">Total Buses</h3>
          <p className="text-gray-700">25 Buses available</p>
        </div>
      </div>
      <div className="bg-blue-100 p-4 rounded-lg shadow flex items-center gap-4">
        <Train size={32} className="text-blue-600" />
        <div>
          <h3 className="font-semibold text-lg">Total Trains</h3>
          <p className="text-gray-700">12 Trains available</p>
        </div>
      </div>
      <div className="bg-purple-100 p-4 rounded-lg shadow flex items-center gap-4">
        <Plane size={32} className="text-purple-600" />
        <div>
          <h3 className="font-semibold text-lg">Total Airplanes</h3>
          <p className="text-gray-700">8 Airplanes available</p>
        </div>
      </div>
      <div className="bg-teal-100 p-4 rounded-lg shadow flex items-center gap-4">
        <Ship size={32} className="text-teal-600" />
        <div>
          <h3 className="font-semibold text-lg">Total Ships</h3>
          <p className="text-gray-700">5 Ships available</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
