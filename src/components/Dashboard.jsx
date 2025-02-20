
import { RandomGraph, PatientStatisticsChart } from "./RandomGraphs";
import { Sidebar,Navbar } from "./Navbar";
import { useState } from "react";
const Dashboard = () => {
      const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex min-h-screen bg-yellow-100">
     <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col">
      <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <div className="relative mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
          <StatCard title="Total Patients" value="2,453" change="+12%" />
          <StatCard title="Active Doctors" value="186" change="+8%" />
          <StatCard title="Today's Appointments" value="48" change="+24%" />
          <StatCard title="Monthly Revenue" value="$124,563" change="+18%" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
          <div className="bg-white p-4 rounded-lg shadow-md col-span-2">
            <RandomGraph />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="font-semibold mb-2">Upcoming Appointments</h2>
            <UpcomingAppointment name="Sarah Johnson" time="09:00 AM" department="Cardiology" />
            <UpcomingAppointment name="Robert Wilson" time="10:30 AM" department="Neurology" />
            <UpcomingAppointment name="Emma Davis" time="11:45 AM" department="Pediatrics" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <PatientStatisticsChart />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="font-semibold mb-2">Recent Activities</h2>
            <Activity name="Dr. Sarah Lee" action="Updated patient records" time="10 min ago" />
            <Activity name="Nurse Johnson" action="Administered medication" time="25 min ago" />
            <Activity name="Dr. Michael Chen" action="Completed surgery" time="1 hour ago" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="font-semibold mb-2">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-2">
              <QuickAction label="Add Patient" />
              <QuickAction label="Schedule" />
              <QuickAction label="Lab Results" />
              <QuickAction label="Vitals" />
              <QuickAction label="Reports" />
              <QuickAction label="Documents" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, change }) => (
  <div className="bg-white p-4 rounded-lg shadow-md flex flex-col space-y-2">
    <h2 className="text-gray-600">{title}</h2>
    <p className="text-2xl font-semibold">{value}</p>
    <span className="text-green-500">{change}</span>
  </div>
);

const UpcomingAppointment = ({ name, time, department }) => (
  <div className="flex justify-between items-center py-2 border-b last:border-none">
    <div>
      <h3 className="font-semibold">{name}</h3>
      <p className="text-gray-500 text-sm">{department}</p>
    </div>
    <span className="text-blue-600">{time}</span>
  </div>
);

const Activity = ({ name, action, time }) => (
  <div className="py-2 border-b last:border-none">
    <p className="text-gray-700 font-semibold">{name}</p>
    <p className="text-gray-500 text-sm">{action}</p>
    <p className="text-gray-400 text-xs">{time}</p>
  </div>
);

const QuickAction = ({ label }) => (
  <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg text-sm hover:bg-gray-200">{label}</button>
);

export default Dashboard;