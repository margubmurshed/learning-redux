import { Outlet } from "react-router";
import { ModeToggle } from "./components/mode-toggle";

const App = () => {
  return (
    <div className="p-5">
      <ModeToggle />
      <Outlet />
    </div>
  );
};

export default App;