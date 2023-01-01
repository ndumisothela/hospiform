import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Homepage from "./Components/Homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
