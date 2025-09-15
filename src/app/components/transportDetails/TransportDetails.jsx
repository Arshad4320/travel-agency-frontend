"use client";
import {
  Luggage,
  Briefcase,
  Hamburger,
  AirVent,
  BedDouble,
} from "lucide-react";

const TransportDetails = ({ transport }) => {
  switch (transport.transportName) {
    case "Airplane":
      return (
        <div className="flex flex-col gap-2 mt-2">
          <div className="flex gap-2 items-center">
            <Luggage size={20} /> <span>{transport.baggageLimitKg} kg</span>
            <Briefcase size={20} /> <span>{transport.handLuggageKg} kg</span>
            <Hamburger size={20} />{" "}
            {transport.inFlightMeal && <span>In-flight Meal Available</span>}
          </div>
        </div>
      );
    case "Bus":
      return (
        <div className="mt-2 flex gap-2 items-center">
          <AirVent size={24} /> <span> {transport.busType}</span>
        </div>
      );
    case "Train":
      return (
        <div className="mt-2 flex gap-2 items-center">
          <BedDouble size={20} /> {transport.coachClass}
        </div>
      );
    case "Ship":
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
