import { FaBars, FaTimes, FaChartBar, FaUserInjured, FaUserMd, FaCalendarAlt, FaFileInvoiceDollar, FaFileAlt, FaAmbulance, FaCog } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <aside className={`fixed md:relative z-60 bg-white h-full w-64 p-5 shadow-md transform ${sidebarOpen ? "translate-x-0 z-60" : "-translate-x-full "} md:translate-x-0 transition-transform duration-300`}>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700 flex items-center gap-3">
          <img className="w-12 h-12 items-center object-cover" src="/img6.webp" />
        <p>MediCare+</p>
        </h1>
        <button onClick={() => setSidebarOpen(false)} className="md:hidden text-xl">
          <FaTimes />
        </button>
      </div>
      <nav className="mt-6 space-y-4">
        <NavItem to="/" Icon={FaChartBar} label="Dashboard" active />
        <NavItem to="/patients" Icon={FaUserInjured} label="Patients" />
        <NavItem to="/doctors" Icon={FaUserMd} label="Doctors" />
        <NavItem to="/home" Icon={FaCalendarAlt} label="Appointments" />
        <NavItem to="/" Icon={FaFileInvoiceDollar} label="Billing" />
        <NavItem to="/" Icon={FaFileAlt} label="Reports" />
        <NavItem to="/" Icon={FaAmbulance} label="Emergency" />
        <NavItem to="/" Icon={FaCog} label="Settings" />
      </nav>
    </aside>
  );
};

const Navbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const homeview = () => {
    navigate("/home");
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white p-4 shadow-md md:px-8 flex items-center justify-between z-50">
      <button onClick={toggleSidebar} className="md:hidden text-2xl">
        <FaBars />
      </button>
      <input type="text" placeholder="Search..." className="w-full md:w-96 px-4 py-2 border rounded-lg ml-[30%]" />
      <div className="flex items-center space-x-4 ">
        <span className="hidden md:flex text-gray-700 font-semibold">Dr. Marcus Kim</span>
        <img onClick={homeview} src="/img3.webp" alt="User Avatar" className="rounded-full w-10 h-10 border cursor-pointer" />
      </div>
    </header>
  );
};

const NavItem = ({ Icon, label, active, to }) => (
  <Link to={to}>
    <div className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${active ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:bg-gray-200"}`}>
      <Icon className="text-lg" />
      {label}
    </div>
  </Link>
);

export { Navbar, Sidebar };
