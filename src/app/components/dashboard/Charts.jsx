import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";
const Charts = () => {
  const sampleData = [
    { name: "Jan", Buses: 20, Trains: 12, Planes: 8, Ships: 5 },
    { name: "Feb", Buses: 25, Trains: 15, Planes: 10, Ships: 7 },
    { name: "Mar", Buses: 18, Trains: 10, Planes: 6, Ships: 4 },
    { name: "Apr", Buses: 30, Trains: 20, Planes: 12, Ships: 8 },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold text-lg mb-4">Monthly Transport Stats</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={sampleData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="Buses" fill="#3b82f6" />
            <Bar dataKey="Trains" fill="#10b981" />
            <Bar dataKey="Planes" fill="#8b5cf6" />
            <Bar dataKey="Ships" fill="#14b8a6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold text-lg mb-4">Flow of Transport</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={sampleData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
            <Line type="monotone" dataKey="Buses" stroke="#3b82f6" />
            <Line type="monotone" dataKey="Trains" stroke="#10b981" />
            <Line type="monotone" dataKey="Planes" stroke="#8b5cf6" />
            <Line type="monotone" dataKey="Ships" stroke="#14b8a6" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;
