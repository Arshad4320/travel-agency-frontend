// "use client";
// import { useSearchParams } from "next/navigation";
// import { useGetTransportsQuery } from "@/app/redux/features/transport/transportApi";
// import { Clock, MapPin, User } from "lucide-react";
// import TransportDetails from "../components/transportDetails/TransportDetails";

// const SearchPage = () => {
//   const searchParams = useSearchParams();

//   const from = searchParams.get("from") || "";
//   const to = searchParams.get("to") || "";
//   const date = searchParams.get("date") || "";
//   const transportType = searchParams.get("transportType") || "bus";

//   const { data, isLoading, isError } = useGetTransportsQuery(
//     { from, to, date, transportType },
//     { skip: !transportType }
//   );
//   console.log(data?.data);
//   return (
//     <div className="max-w-7xl mx-auto py-10 px-4">
//       <h1 className="text-3xl font-bold mb-6">
//         {transportType.toUpperCase()} Results
//       </h1>

//       {isLoading && <p>Loading...</p>}
//       {isError && <p className="text-red-600">Something went wrong</p>}

//       {data?.data?.length > 0 ? (
//         <div>
//           {data.data.map((t) => (
//             <div
//               key={t._id}
//               className="p-3 bg-white rounded-lg border-b border-b-blue-300 border-r border-r-blue-300 shadow hover:shadow-lg transition"
//             >
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 {/* Image */}
//                 <div className="md:w-48 h-full">
//                   <img
//                     className="rounded-md w-full h-full object-cover"
//                     src={t.transportImage}
//                     alt={t.transportName}
//                   />
//                 </div>

//                 {/* General Info */}
//                 <div className="mt-2 md:mt-0 flex flex-col gap-2">
//                   <div className="flex items-center gap-2">
//                     <User size={20} /> <p>{t.providerName}</p>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <User size={20} /> <p>{t.transportNumber}</p>
//                   </div>
//                   <div className="flex gap-2">
//                     <MapPin size={20} /> <span>{t.from}</span> to{" "}
//                     <span>{t.to}</span>
//                   </div>
//                 </div>

//                 {/* Type-specific & Price */}
//                 <div className="flex flex-col justify-between">
//                   <div className="flex flex-col gap-2">
//                     <div className="flex items-center gap-2">
//                       <Clock size={20} />
//                       <span>
//                         {new Date(t.departureTime).toLocaleString("US", {
//                           dateStyle: "medium",
//                           timeStyle: "short",
//                         })}
//                       </span>
//                       <span>
//                         {new Date(t.arrivalTime).toLocaleString("US", {
//                           dateStyle: "medium",
//                           timeStyle: "short",
//                         })}
//                       </span>
//                     </div>

//                     {/* Conditional fields */}
//                     <TransportDetails transport={t} />
//                   </div>

//                   <p className="mt-2 font-bold text-blue-600">
//                     <span className="text-2xl font-semibold">৳</span> {t.price}
//                   </p>

//                   <div className="flex md:justify-end">
//                     <button className="px-2 mt-2 rounded-md py-2 bg-blue-600 hover:bg-blue-500 text-white">
//                       Booking
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         !isLoading && <p>No transports found</p>
//       )}
//     </div>
//   );
// };

// export default SearchPage;

"use client";
import { useSearchParams } from "next/navigation";
import { useGetTransportsQuery } from "@/app/redux/features/transport/transportApi";
import { Clock, MapPin, User } from "lucide-react";
import TransportDetails from "../components/transportDetails/TransportDetails";
import Button from "../components/button/Button";

const SearchPage = () => {
  const searchParams = useSearchParams();

  const from = searchParams.get("from") || "";
  const to = searchParams.get("to") || "";
  const date = searchParams.get("date") || "";
  const transportType = searchParams.get("transportType") || "bus";

  const { data, isLoading, isError } = useGetTransportsQuery(
    { from, to, date, transportType },
    { skip: !transportType }
  );

  const filteredTransports =
    data?.data?.filter(
      (t) => t.transportName.toLowerCase() === transportType.toLowerCase()
    ) || [];

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">
        {transportType.toUpperCase()} Results
      </h1>

      {isLoading && <p>Loading...</p>}
      {isError && <p className="text-red-600">Something went wrong</p>}

      {filteredTransports.length > 0 ? (
        <div>
          {filteredTransports.map((t) => (
            <div
              key={t._id}
              className="p-3 bg-white rounded-lg border-b border-b-blue-300 border-r border-r-blue-300 shadow hover:shadow-lg transition"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Image */}
                <div className="md:w-48 h-full">
                  <img
                    className="rounded-md w-full h-full object-cover"
                    src={t.transportImage}
                    alt={t.transportName}
                  />
                </div>

                {/* General Info */}
                <div className="mt-2 md:mt-0 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <User size={20} /> <p>{t.providerName}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={20} /> <p>{t.transportNumber}</p>
                  </div>
                  <div className="flex gap-2">
                    <MapPin size={20} /> <span>{t.from}</span> to{" "}
                    <span>{t.to}</span>
                  </div>
                </div>

                {/* Type-specific & Price */}
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <Clock size={20} />
                      <span>
                        {new Date(t.departureTime).toLocaleString("en-US", {
                          dateStyle: "medium",
                          timeStyle: "short",
                        })}
                      </span>
                      <span>
                        {new Date(t.arrivalTime).toLocaleString("en-US", {
                          dateStyle: "medium",
                          timeStyle: "short",
                        })}
                      </span>
                    </div>

                    {/* Conditional fields */}
                    <TransportDetails transport={t} />
                  </div>

                  <p className="mt-2 font-bold text-blue-600">
                    <span className="text-2xl font-semibold">৳</span> {t.price}
                  </p>

                  <div className="flex md:justify-end">
                    {/* <button className="px-2 mt-2 rounded-md py-2 bg-blue-600 hover:bg-blue-500 text-white">
                      Booking
                    </button> */}
                    <Button title={"Booking"} />
                  </div>
                </div>
              </div>
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
