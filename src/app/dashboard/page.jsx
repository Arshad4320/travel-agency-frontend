"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  Truck,
  Train,
  Airplane,
  Ship,
} from "lucide-react";
import Link from "next/link";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({}); // which menu is open

  const menuItems = [
    {
      title: "Bus",
      icon: <Truck size={18} />,
      subMenu: [
        { title: "Add Bus", href: "/dashboard/bus/add" },
        { title: "Bus List", href: "/dashboard/bus/list" },
      ],
    },
    {
      title: "Train",
      icon: <Train size={18} />,
      subMenu: [
        { title: "Add Train", href: "/dashboard/train/add" },
        { title: "Train List", href: "/dashboard/train/list" },
      ],
    },
    {
      title: "Airplane",
      icon: <Airplane size={18} />,
      subMenu: [
        { title: "Add Airplane", href: "/dashboard/airplane/add" },
        { title: "Airplane List", href: "/dashboard/airplane/list" },
      ],
    },
    {
      title: "Ship",
      icon: <Ship size={18} />,
      subMenu: [
        { title: "Add Ship", href: "/dashboard/ship/add" },
        { title: "Ship List", href: "/dashboard/ship/list" },
      ],
    },
  ];

  const toggleMenu = (title) => {
    setOpenMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed z-20 inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:inset-0`}
      >
        <div className="flex flex-col h-full p-6">
          <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

          <nav className="flex-1 overflow-y-auto">
            {menuItems.map((item, idx) => (
              <div key={idx} className="mb-2">
                <button
                  onClick={() => toggleMenu(item.title)}
                  className="w-full flex justify-between items-center px-3 py-2 font-semibold text-gray-700 rounded hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <span>{item.title}</span>
                  </div>
                  {openMenus[item.title] ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </button>

                {/* Submenu with smooth animation */}
                <div
                  className={`flex flex-col ml-6 mt-1 overflow-hidden transition-all duration-300 ${
                    openMenus[item.title]
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {item.subMenu.map((sub, i) => (
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

          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-auto transition-colors">
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:ml-64">
        {/* Mobile Toggle */}
        <div className="md:hidden bg-white shadow px-4 py-3 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Dashboard</h2>
          <button
            className="text-gray-700"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Page content */}
        <div className="p-6 overflow-auto">
          {children || <div>Dashboard Content</div>}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
