import { Sidebar, Navbar } from './Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect,useState } from 'react';
const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex bg-gradient-to-r from-blue-500 to-indigo-700">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen } data-aos="fade-left"/>

      <div className="flex-1 flex flex-col md:ml-64 p-4 md:p-8">
      <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <div className="mt-40 text-white text-center">
          <h1 className="text-4xl font-bold mb-4" data-aos="fade-up">Doctor's Home Page</h1>
          <div
            className="bg-gradient-to-br from-gray-600 via-gray-500 to-black bg-opacity-50 p-6 rounded-lg shadow-xl md:flex md:gap-8 md:flex-row md:items-center backdrop-blur-lg"
            data-aos="fade-left"
          >
            <div className="md:w-1/2" data-aos="fade-up">
              <h2 className="text-3xl font-semibold mb-2">Dr. John Doe</h2>
              <p className="text-lg text-gray-200 mb-4">Specialization: Cardiologist</p>
              <p className="text-base text-gray-300">
                Experienced cardiologist with over 10 years of expertise in diagnosing and treating heart diseases. Dedicated to providing the best care to every patient.
              </p>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 " data-aos="zoom-in">
              <img src="/doctor.webp" alt="Doctor" className="w-full h-auto rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
        <div className="mt-12" data-aos="fade-up">
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 bg-opacity-50 p-6 rounded-lg shadow-xl backdrop-blur-lg">
            <h2 className="text-3xl font-semibold mb-4">Experience & Stats</h2>
            <ul className="space-y-2">
              <li className="text-lg">Experience: 10+ Years</li>
              <li className="text-lg">100+ Patients Treated</li>
              <li className="text-lg">20+ Successful Operations</li>
              <li className="text-lg">Specialization: Cardiologist</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6" data-aos="fade-up">
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 bg-opacity-50 px-4 py-10 text-white p-6 rounded-lg shadow-xl backdrop-blur-lg w-full md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">Contact Form</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-lg">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 mt-2 rounded-lg border border-gray-600 bg-gray-900 text-white"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 mt-2 rounded-lg border border-gray-600 bg-gray-900 text-white"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg">Message</label>
                <textarea
                  id="message"
                  className="w-full p-2 mt-2 rounded-lg border border-gray-600 bg-gray-900 text-white"
                  rows="4"
                  placeholder="Enter your message"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-lg mt-4 hover:bg-indigo-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="md:w-1/2" data-aos="zoom-in">
            <img src="/img5.webp" alt="Doctor's Contact" className="w-full h-auto rounded-lg shadow-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
