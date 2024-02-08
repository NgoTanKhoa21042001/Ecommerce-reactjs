import { Link, Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      {/* Chứa những cái children còn lại */}
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
