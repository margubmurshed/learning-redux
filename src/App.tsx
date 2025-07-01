import { Outlet } from "react-router";
import Navbar from "./components/layout/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default App;