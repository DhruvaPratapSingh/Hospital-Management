import {Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";

const App = () => {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/home"  element={<Home/>}/>
        </Routes>
      </div>
  );
};

export default App;