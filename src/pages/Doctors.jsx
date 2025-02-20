import { Navbar,Sidebar } from '../components/Navbar';
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
    <div className="flex bg-gradient-to-r from-gray-500 to-teal-700 min-h-screen">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} data-aos="fade-left" />

      <div className="flex-1 flex flex-col">
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <div className="mt-40 text-white text-center p-4">
          <h1 className="text-4xl font-bold mb-4" data-aos="fade-up">doctor's Profile</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {doctors.map((doctor, index) => (
    <div
      key={index}
      className="bg-gradient-to-br from-gray-600 via-gray-500 to-black bg-opacity-50 p-6 rounded-lg shadow-xl flex flex-col md:flex-row md:gap-8 items-center backdrop-blur-lg"
      data-aos="fade-left"
    >
      <div className="md:w-1/2 text-center md:text-left" data-aos="fade-up">
        <h2 className="text-3xl font-semibold mb-2">{doctor.name}</h2>
        <p className="text-lg text-gray-200 mb-4">Age: {doctor.age}</p>
        <p className="text-base text-gray-300">{doctor.description}</p>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center" data-aos="zoom-in">
        <img src={doctor.image} alt={doctor.name} className="w-full max-w-xs h-auto rounded-lg shadow-2xl" />
      </div>
    </div>
  ))}
</div>
        </div>

        <div className="mt-12 p-4" data-aos="fade-up">
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 bg-opacity-50 p-6 rounded-lg shadow-xl backdrop-blur-lg">
            <h2 className="text-3xl font-semibold mb-4">Medical Records & Stats</h2>
            <ul className="space-y-2">
              <li className="text-lg">Last Checkup: 1 Week Ago</li>
              <li className="text-lg">Medication: Ongoing</li>
              <li className="text-lg">Upcoming Appointment: 10th March</li>
              <li className="text-lg">Recovery Status: Stable</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 p-4" data-aos="fade-up">
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 bg-opacity-50 px-4 py-10 text-white p-6 rounded-lg shadow-xl backdrop-blur-lg w-full md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">Update Medical Info</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="condition" className="block text-lg">Current Condition</label>
                <input
                  type="text"
                  id="condition"
                  className="w-full p-2 mt-2 rounded-lg border border-gray-600 bg-gray-900 text-white"
                  placeholder="Enter doctor's condition"
                />
              </div>
              <div>
                <label htmlFor="medication" className="block text-lg">Medication</label>
                <input
                  type="text"
                  id="medication"
                  className="w-full p-2 mt-2 rounded-lg border border-gray-600 bg-gray-900 text-white"
                  placeholder="Enter prescribed medication"
                />
              </div>
              <div>
                <label htmlFor="appointment" className="block text-lg">Next Appointment</label>
                <input
                  type="date"
                  id="appointment"
                  className="w-full p-2 mt-2 rounded-lg border border-gray-600 bg-gray-900 text-white"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-2 rounded-lg mt-4 hover:bg-teal-700 transition"
              >
                Update Info
              </button>
            </form>
          </div>
          <div className="md:w-1/2" data-aos="zoom-in">
            <img src="/clinik.webp" alt="doctor Care" className="w-full h-auto rounded-lg shadow-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;