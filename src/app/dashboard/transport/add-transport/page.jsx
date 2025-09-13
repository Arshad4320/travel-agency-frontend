"use client";

import { useForm, Controller } from "react-hook-form";
import { useState } from "react";

export default function AddTransportForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
    control,
  } = useForm();

  const transportType = watch("transportName"); // watch transport type

  const onSubmit = async (data) => {
    try {
      if (data.amenities) {
        data.amenities = data.amenities.split(",").map((a) => a.trim());
      }

      const res = await fetch("/api/transports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to add transport");

      alert("✅ Transport added successfully!");
      reset();
    } catch (error) {
      console.error(error);
      alert("❌ Error adding transport");
    }
  };

  return (
    <div className="max-w-6xl mx-auto bg-gray-50 shadow-xl rounded-2xl p-8 md:p-12 border border-gray-100">
      <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-800">
        Add Transport
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Transport Type */}
          <div>
            <label className="block font-medium mb-2 text-gray-700">
              Transport Type
            </label>
            <select
              {...register("transportName", { required: "Required" })}
              className="w-full border border-gray-200 rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            >
              <option value="">Select</option>
              <option value="Airplane">✈ Airplane</option>
              <option value="Bus">🚌 Bus</option>
              <option value="Ship">🚢 Ship</option>
              <option value="Train">🚆 Train</option>
            </select>
          </div>
          {/* Transport Number */}
          <div>
            <label className="block font-medium mb-2 text-gray-700">
              Transport Number
            </label>
            <input
              {...register("transportNumber", { required: "Required" })}
              className="w-full border border-gray-200 rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              placeholder="e.g. TR-102"
            />
            {errors.transportNumber && (
              <p className="text-red-500 text-sm mt-1">
                {errors.transportNumber.message}
              </p>
            )}
          </div>

          {/* Provider Name */}
          <div>
            <label className="block font-medium mb-2 text-gray-700">
              Provider Name
            </label>
            <input
              {...register("providerName", { required: "Required" })}
              className="w-full border border-gray-200 rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              placeholder="e.g. Biman Bangladesh"
            />
          </div>

          {/* Transport Image */}
          <div>
            <label className="block font-medium mb-2 text-gray-700">
              Transport Image URL
            </label>
            <input
              {...register("transportImage")}
              className="w-full border border-gray-200 rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* From */}
          <div>
            <label className="block font-medium mb-2 text-gray-700">From</label>
            <input
              {...register("from", { required: "Required" })}
              className="w-full border border-gray-200 rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              placeholder="Dhaka"
            />
          </div>

          {/* To */}
          <div>
            <label className="block font-medium mb-2 text-gray-700">To</label>
            <input
              {...register("to", { required: "Required" })}
              className="w-full border border-gray-200 rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              placeholder="Chittagong"
            />
          </div>

          {/* Departure Time */}
          <div>
            <label className="block font-medium mb-2 text-gray-700">
              Departure Time
            </label>
            <input
              type="datetime-local"
              {...register("departureTime", { required: "Required" })}
              className="w-full border border-gray-200 rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Arrival Time */}
          <div>
            <label className="block font-medium mb-2 text-gray-700">
              Arrival Time
            </label>
            <input
              type="datetime-local"
              {...register("arrivalTime", { required: "Required" })}
              className="w-full border border-gray-200 rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block font-medium mb-2 text-gray-700">
              Price
            </label>
            <input
              type="number"
              {...register("price", {
                required: "Required",
                valueAsNumber: true,
              })}
              className="w-full border border-gray-200 rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              placeholder="5000"
            />
          </div>

          {/* Seats */}
          <div>
            <label className="block font-medium mb-2 text-gray-700">
              Seats Available
            </label>
            <input
              type="number"
              {...register("seatsAvailable", { valueAsNumber: true })}
              className="w-full border border-gray-200 rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              placeholder="50"
            />
          </div>

          {/* Conditional Fields */}
          {transportType === "Airplane" && (
            <>
              <div>
                <label className="block font-medium mb-2 text-gray-700">
                  Baggage Limit (Kg)
                </label>
                <input
                  type="number"
                  {...register("baggageLimitKg", { valueAsNumber: true })}
                  className="w-full border border-gray-200 rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                  placeholder="30"
                />
              </div>
              <div>
                <label className="block font-medium mb-2 text-gray-700">
                  Hand Luggage (Kg)
                </label>
                <input
                  type="number"
                  {...register("handLuggageKg", { valueAsNumber: true })}
                  className="w-full border border-gray-200 rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                  placeholder="7"
                />
              </div>
              <div>
                <label className="block font-medium mb-2 text-gray-700">
                  In-Flight Meal
                </label>
                <input
                  type="checkbox"
                  {...register("inFlightMeal")}
                  className="mr-2"
                />
              </div>
            </>
          )}

          {transportType === "Bus" && (
            <div>
              <label className="block font-medium mb-2 text-gray-700">
                Bus Type
              </label>
              <select
                {...register("busType")}
                className="w-full border border-gray-200 rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              >
                <option value="">Select</option>
                <option value="AC">AC</option>
                <option value="Non-AC">Non-AC</option>
                <option value="Sleeper">Sleeper</option>
                <option value="Seater">Seater</option>
              </select>
            </div>
          )}

          {transportType === "Train" && (
            <div>
              <label className="block font-medium mb-2 text-gray-700">
                Coach Class
              </label>
              <select
                {...register("coachClass")}
                className="w-full border border-gray-200 rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              >
                <option value="">Select</option>
                <option value="First Class">First Class</option>
                <option value="AC">AC</option>
                <option value="Sleeper">Sleeper</option>
                <option value="General">General</option>
              </select>
            </div>
          )}

          {transportType === "Ship" && (
            <div>
              <label className="block font-medium mb-2 text-gray-700">
                Cabin Type
              </label>
              <select
                {...register("cabinType")}
                className="w-full border border-gray-200 rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              >
                <option value="">Select</option>
                <option value="Luxury">Luxury</option>
                <option value="Economy">Economy</option>
                <option value="Shared">Shared</option>
              </select>
            </div>
          )}

          {/* Amenities */}
          <div className="lg:col-span-4">
            <label className="block font-medium mb-2 text-gray-700">
              Amenities (comma separated)
            </label>
            <input
              {...register("amenities")}
              className="w-full border border-gray-200 rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              placeholder="WiFi, AC, Meal"
            />
          </div>
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 active:scale-95 text-white rounded-lg p-3 font-semibold transition-all shadow-lg"
          >
            ➕ Add Transport
          </button>
        </div>
      </form>
    </div>
  );
}
