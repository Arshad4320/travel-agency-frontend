"use client";
import { Luggage, Briefcase } from "lucide-react";

const TransportDetails = ({ transport }) => {
  switch (transport.transportName) {
    case "plane":
      return (
        <div className="flex flex-col gap-2 mt-2">
          <div className="flex gap-2 items-center">
            <Luggage size={20} /> <span>{transport.baggageLimitKg} kg</span>
            <Briefcase size={20} /> <span>{transport.handLuggageKg} kg</span>
          </div>
          {transport.inFlightMeal && <p>In-flight Meal Available</p>}
        </div>
      );
    case "bus":
      return (
        <div className="mt-2">
          <p>Bus Type: {transport.busType}</p>
        </div>
      );
    case "train":
      return (
        <div className="mt-2">
          <p>Coach Class: {transport.coachClass}</p>
        </div>
      );
    case "ship":
      return (
        <div className="mt-2">
          <p>Cabin Type: {transport.cabinType}</p>
        </div>
      );
    default:
      return null;
  }
};

export default TransportDetails;
