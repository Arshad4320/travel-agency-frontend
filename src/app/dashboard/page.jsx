"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  Truck,
  Train,
  Plane,
  Ship,
} from "lucide-react";
import Link from "next/link";
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

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true); // Large screen toggle
  const [openMenus, setOpenMenus] = useState({});

  const menuItems = [
    {
      title: "Bus",
      icon: <Truck size={20} />,
      subMenu: [
        { title: "Add Bus", href: "/dashboard/bus/add" },
        { title: "Bus List", href: "/dashboard/bus/list" },
      ],
    },
    {
      title: "Train",
      icon: <Train size={20} />,
      subMenu: [
        { title: "Add Train", href: "/dashboard/train/add" },
        { title: "Train List", href: "/dashboard/train/list" },
      ],
    },
    {
      title: "Airplane",
      icon: <Plane size={20} />,
      subMenu: [
        { title: "Add Plane", href: "/dashboard/airplane/add" },
        { title: "Airplane List", href: "/dashboard/airplane/list" },
      ],
    },
    {
      title: "Ship",
      icon: <Ship size={20} />,
      subMenu: [
        { title: "Add Ship", href: "/dashboard/ship/add" },
        { title: "Ship List", href: "/dashboard/ship/list" },
      ],
    },
  ];

  const toggleMenu = (title) => {
    setOpenMenus((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const sampleData = [
    { name: "Jan", Buses: 20, Trains: 12, Planes: 8, Ships: 5 },
    { name: "Feb", Buses: 25, Trains: 15, Planes: 10, Ships: 7 },
    { name: "Mar", Buses: 18, Trains: 10, Planes: 6, Ships: 4 },
    { name: "Apr", Buses: 30, Trains: 20, Planes: 12, Ships: 8 },
  ];

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <div
        className={`fixed z-20 inset-y-0 left-0 bg-white shadow-lg transform transition-all duration-300 ease-in-out ${
          sidebarOpen ? "w-64" : "w-20"
        } md:static md:inset-0`}
      >
        <div className="flex flex-col h-full p-4">
          {/* Sidebar toggle buttons */}
          <div className="flex gap-2 mb-4">
            <button
              className="flex-1 px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm"
              onClick={() => setSidebarOpen(true)}
            >
              Expand
            </button>
            <button
              className="flex-1 px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm"
              onClick={() => setSidebarOpen(false)}
            >
              Collapse
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto">
            {menuItems.map((item, idx) => (
              <div key={idx} className="mb-2">
                <button
                  onClick={() => toggleMenu(item.title)}
                  className={`w-full flex justify-between items-center px-2 py-2 rounded hover:bg-gray-100 transition-colors ${
                    sidebarOpen ? "text-gray-700" : "justify-center"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    {sidebarOpen && <span>{item.title}</span>}
                  </div>
                  {sidebarOpen &&
                    (openMenus[item.title] ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    ))}
                </button>

                {/* Submenu */}
                <div
                  className={`flex flex-col ml-8 mt-1 overflow-hidden transition-all duration-300 ${
                    openMenus[item.title]
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {sidebarOpen &&
                    item.subMenu.map((sub, i) => (
                      <Link
                        key={i}
                        href={sub.href}
                        className="text-gray-600 hover:text-blue-600 py-1 text-sm transition-colors"
                      >
                        {sub.title}
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </nav>

          {/* Logout */}
          <button
            className={`mt-auto bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors ${
              !sidebarOpen && "w-full"
            }`}
          >
            {sidebarOpen ? "Logout" : "⏻"}
          </button>
        </div>
      </div>

      {/* Main content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 overflow-auto ${
          sidebarOpen ? "md:ml-64" : "md:ml-20"
        }`}
      >
        {/* Mobile toggle */}
        <div className="md:hidden bg-white shadow px-4 py-3 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Dashboard</h2>
          <button
            className="text-gray-700"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Dashboard content */}
        <div className="p-6 space-y-6 min-h-full">
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-100 p-4 rounded-lg shadow flex items-center gap-4 hover:shadow-lg transition-shadow">
              <Truck size={32} className="text-blue-600" />
              <div>
                <h3 className="font-semibold text-lg">Total Buses</h3>
                <p className="text-gray-700">25 Buses available</p>
              </div>
            </div>
            <div className="bg-green-100 p-4 rounded-lg shadow flex items-center gap-4 hover:shadow-lg transition-shadow">
              <Train size={32} className="text-green-600" />
              <div>
                <h3 className="font-semibold text-lg">Total Trains</h3>
                <p className="text-gray-700">12 Trains available</p>
              </div>
            </div>
            <div className="bg-purple-100 p-4 rounded-lg shadow flex items-center gap-4 hover:shadow-lg transition-shadow">
              <Plane size={32} className="text-purple-600" />
              <div>
                <h3 className="font-semibold text-lg">Total Airplanes</h3>
                <p className="text-gray-700">8 Airplanes available</p>
              </div>
            </div>
            <div className="bg-teal-100 p-4 rounded-lg shadow flex items-center gap-4 hover:shadow-lg transition-shadow">
              <Ship size={32} className="text-teal-600" />
              <div>
                <h3 className="font-semibold text-lg">Total Ships</h3>
                <p className="text-gray-700">5 Ships available</p>
              </div>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-4">
                Monthly Transport Stats
              </h3>
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
                  <Line
                    type="monotone"
                    dataKey="Buses"
                    stroke="#3b82f6"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="Trains"
                    stroke="#10b981"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="Planes"
                    stroke="#8b5cf6"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="Ships"
                    stroke="#14b8a6"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Additional content */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
