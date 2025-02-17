import {Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Patients from "./pages/Patient";
import Doctors from "./pages/Doctors";

const App = () => {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/home"  element={<Home/>}/>
          <Route path="/patients" element={<Patients/>} />
          <Route path="/doctors" element={<Doctors/>} />
          
        </Routes>
      </div>
  );
};

export default App;