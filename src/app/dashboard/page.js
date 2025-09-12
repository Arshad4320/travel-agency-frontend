"use client";

import Cards from "../components/dashboard/Cards";
import Charts from "../components/dashboard/Charts";

const DashboardHome = () => {
  return (
    <div className="space-y-6">
      <Cards />
      <Charts />
    </div>
  );
};

export default DashboardHome;
