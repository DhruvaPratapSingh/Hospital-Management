import { Sidebar, Navbar } from "../components/Navbar"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { doctors } from '../constant/doctors';

const Doctors = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex bg-gradient-to-r from-blue-500 to-indigo-700 min-h-screen">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} data-aos="fade-left" />
      <div className="flex-1 flex flex-col p-4 md:p-8">
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <div className="mt-16 text-white text-center">
          <h1 className="text-4xl font-bold mb-4" data-aos="fade-up">Our Specialist Doctors</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-600 via-gray-500 to-black bg-opacity-50 p-6 rounded-lg shadow-xl flex flex-col md:flex-row md:gap-8 items-center backdrop-blur-lg"
              data-aos="fade-left">
              <div className="md:w-1/2 text-center md:text-left" data-aos="fade-up">
                <h2 className="text-3xl font-semibold mb-2">{doctor.name}</h2>
                <p className="text-lg text-gray-200 mb-2">Specialization: {doctor.specialization}</p>
                <p className="text-lg text-gray-200 mb-2">Experience: {doctor.experience}</p>
                <p className="text-lg text-gray-200 mb-2">Patients Treated: {doctor.patientsTreated}</p>
                <p className="text-lg text-gray-200 mb-2">Operations: {doctor.operations}</p>
                <p className="text-base text-gray-300">{doctor.description}</p>
              </div>
              <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center" data-aos="zoom-in">
                <img src={doctor.image} alt={doctor.name} className="w-full max-w-xs h-auto rounded-lg shadow-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
