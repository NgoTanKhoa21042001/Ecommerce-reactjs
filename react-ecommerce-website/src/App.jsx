import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      {/* Chứa những cái children còn lại */}
      <nav>Nav</nav>
      <Outlet />
    </>
  );
}

export default App;
