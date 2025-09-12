"use client";
import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  Bus,
  Train,
  Plane,
  Ship,
  LayoutDashboard,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true); // desktop default open
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false); // mobile toggle
  const [openMenus, setOpenMenus] = useState({});

  const menuItems = [
    {
      title: "Transport",
      icon: <Bus size={20} />,
      subMenu: [
        { title: "Add Transport", href: "/dashboard/transport/add-transport" },
        { title: "Transport List", href: "/dashboard/transport/list" },
      ],
    },
    {
      title: "Bus",
      icon: <Bus size={20} />,
      subMenu: [
        { title: "Available Bus", href: "/dashboard/bus/add" },
        { title: "Booked Bus Seat", href: "/dashboard/bus/list" },
      ],
    },
    {
      title: "Train",
      icon: <Train size={20} />,
      subMenu: [
        { title: "Available Train", href: "/dashboard/train/add" },
        { title: "Booked Train Seat", href: "/dashboard/train/list" },
      ],
    },
    {
      title: "Airplane",
      icon: <Plane size={20} />,
      subMenu: [
        { title: "Available Plane", href: "/dashboard/airplane/add" },
        { title: "Booked Airplane Seat", href: "/dashboard/airplane/list" },
      ],
    },
    {
      title: "Ship",
      icon: <Ship size={20} />,
      subMenu: [
        { title: "Available Ship", href: "/dashboard/ship/add" },
        { title: "Booked Ship Seat", href: "/dashboard/ship/list" },
      ],
    },
  ];

  const toggleMenu = (title) => {
    setOpenMenus((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const handleMobileMenuClick = () => {
    if (mobileSidebarOpen) {
      setMobileSidebarOpen(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <div
        className={`fixed md:relative top-0 left-0 h-full bg-white shadow-lg z-50
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "w-64" : "w-20"}
          ${
            mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
      >
        <div className="flex flex-col h-full p-4">
          {/* Dashboard Button */}
          <button
            className="flex items-center gap-2 mb-4 px-2 py-1 hover:bg-gray-100 rounded"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Link href={"/dashboard"}>
              <LayoutDashboard size={20} />
            </Link>
            {sidebarOpen && (
              <Link className="font-medium" href={"/dashboard"}>
                Dashboard
              </Link>
            )}
            {sidebarOpen && <ChevronLeft size={16} />}
          </button>

          {/* Menu */}
          <nav className="flex-1 overflow-y-auto mt-2">
            {menuItems.map((item, idx) => (
              <div key={idx} className="mb-1">
                <button
                  onClick={() => toggleMenu(item.title)}
                  className="w-full flex justify-between items-center px-2 py-2 rounded hover:bg-gray-100 transition-colors"
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
                        onClick={handleMobileMenuClick}
                        className="text-gray-800 hover:text-gray-500 py-1 text-sm font-normal transition-colors"
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
            onClick={handleMobileMenuClick}
          >
            {sidebarOpen ? "Logout" : "⏻"}
          </button>
        </div>
      </div>

      {/* Main content */}
      <div
        className={`flex-1 flex flex-col overflow-auto transition-all duration-300 ease-in-out
          ${sidebarOpen && "md:ml-3"}
          ${mobileSidebarOpen ? "ml-3" : ""}`}
      >
        {/* Mobile top bar */}
        <div className="md:hidden bg-white shadow px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <LayoutDashboard size={20} />
            <span className="font-medium text-lg">Dashboard</span>
          </div>
          <button
            className="text-gray-700"
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          >
            {mobileSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="p-4 md:p-6 space-y-6 min-h-full">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
