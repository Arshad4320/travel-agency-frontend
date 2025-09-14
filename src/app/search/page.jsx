"use client";
import { useSearchParams } from "next/navigation";
import { useGetTransportsQuery } from "@/app/redux/features/transport/transportApi";
import Image from "next/image";

const SearchPage = () => {
  const searchParams = useSearchParams();

  const from = searchParams.get("from") || "";
  const to = searchParams.get("to") || "";
  const date = searchParams.get("date") || "";
  const transportType = searchParams.get("transportType") || "bus"; // default bus

  const { data, isLoading, isError } = useGetTransportsQuery(
    { from, to, date, transportType },
    { skip: !transportType }
  );

  console.log("data", data?.data);

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">
        {transportType.toUpperCase()} Results
      </h1>

      {isLoading && <p>Loading...</p>}
      {isError && <p className="text-red-600">Something went wrong</p>}

      {data?.data?.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data?.data?.map((t) => (
            <div
              key={t._id}
              className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
            >
              {/* ✅ Transport Image */}
              {t.transportImage && (
                <div className="relative w-full h-40 mb-4">
                  <img
                    src={t.transportImage}
                    alt={t.transportName}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              )}

              {/* Transport Name */}
              <h2 className="text-xl font-semibold mb-2">
                {t.transportName} ({t.busType || "General"})
              </h2>

              <p className="text-gray-700">
                {t.from} ➝ {t.to}
              </p>

              <p className="text-gray-600">Provider: {t.providerName}</p>
              <p className="text-gray-600">Bus No: {t.transportNumber}</p>

              {/* Departure & Arrival */}
              <p className="mt-1">
                Departure:{" "}
                {new Date(t.departureTime).toLocaleString("en-GB", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}
              </p>
              <p>
                Arrival:{" "}
                {new Date(t.arrivalTime).toLocaleString("en-GB", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}
              </p>

              {/* Extra info only if bus */}
              {transportType === "bus" && (
                <div className="mt-2 text-sm text-gray-700">
                  <p>Seats Available: {t.seatsAvailable}</p>
                  <p>Amenities: {t.amenities?.join(", ")}</p>
                </div>
              )}

              <p className="mt-2 font-bold text-green-600">৳ {t.price}</p>
            </div>
          ))}
        </div>
      ) : (
        !isLoading && <p>No transports found</p>
      )}
    </div>
  );
};

export default SearchPage;
