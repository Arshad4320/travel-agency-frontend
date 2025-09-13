"use client";

import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import {
  useDeleteTransportMutation,
  useGetTransportsQuery,
} from "@/app/redux/features/transport/transportApi";
import { useState } from "react";
import DeleteModal from "@/app/modal/deleteModal";

export default function TransportList() {
  const { data: transports, isLoading, isError } = useGetTransportsQuery({});
  const [deleteTransport] = useDeleteTransportMutation();
  const [openModal, setOpenModal] = useState(false);
  const [selectedId, setSelectedId] = useState();

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (isError)
    return (
      <p className="text-center text-red-500">Failed to load transports.</p>
    );

  const handleDeleteClick = (id) => {
    setSelectedId(id);
    setOpenModal(true);
  };

  const confirmDelete = async () => {
    if (selectedId) {
      await deleteTransport(selectedId);
      setSelectedId(null);
      setOpenModal(false);
    }
  };

  const getRelevantFields = (transport) => {
    const common = [
      { label: "Transport No", value: transport.transportNumber },
      { label: "Provider", value: transport.providerName },
      { label: "From", value: transport.from },
      { label: "To", value: transport.to },
      {
        label: "Depart",
        value: new Date(transport.departureTime).toLocaleString("en-US", {
          year: "2-digit",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
      {
        label: "Arrival",
        value: new Date(transport.arrivalTime).toLocaleString("en-US", {
          year: "2-digit",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
      { label: "Duration (min)", value: transport.durationMinutes },
      { label: "Price", value: `৳${transport.price}` },
      { label: "Seats", value: transport.seatsAvailable },
    ];

    if (transport.transportName === "Plane") {
      return [
        ...common,
        { label: "Baggage (Kg)", value: transport.baggageLimitKg },
        { label: "Hand Luggage (Kg)", value: transport.handLuggageKg },
        { label: "Meal", value: transport.inFlightMeal ? "Yes" : "No" },
      ];
    }

    if (transport.transportName === "Bus") {
      return [...common, { label: "Bus Type", value: transport.busType }];
    }

    if (transport.transportName === "Train") {
      return [...common, { label: "Coach", value: transport.coachClass }];
    }

    if (transport.transportName === "Ship") {
      return [...common, { label: "Cabin", value: transport.cabinType }];
    }

    return common;
  };

  return (
    <>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {transports?.data?.map((transport) => (
          <div
            key={transport._id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition flex flex-col overflow-hidden"
          >
            {/* Image */}
            <div className="relative w-full h-40 sm:h-44 lg:h-48">
              <img
                src={transport.transportImage || "/placeholder.jpg"}
                alt={transport.transportName}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
                {transport.transportName}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-between p-3 sm:p-4">
              <div>
                <h2 className="text-center font-semibold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">
                  {transport.transportName} ({transport.transportNumber})
                </h2>
                <p className="text-center text-gray-500 text-xs sm:text-sm mb-2">
                  {transport.providerName}
                </p>

                <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-xs sm:text-sm text-gray-700">
                  {getRelevantFields(transport).map((field, idx) => (
                    <p key={idx} className="truncate">
                      <span className="font-medium">{field.label}:</span>{" "}
                      {field.value ?? "-"}
                    </p>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-3 flex justify-center sm:justify-end space-x-2">
                <Link
                  href={`/dashboard/transport/update-transport/${transport._id}`}
                  className="inline-flex items-center px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-xs sm:text-sm"
                >
                  <Pencil size={14} className="mr-1" /> Edit
                </Link>
                <button
                  onClick={() => handleDeleteClick(transport._id)}
                  className="inline-flex items-center px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-xs sm:text-sm"
                >
                  <Trash2 size={14} className="mr-1" /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <DeleteModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onConfirm={confirmDelete}
        message="Are you sure you want to delete this transport?"
      />
    </>
  );
}
