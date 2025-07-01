import { Outlet } from "react-router";
import { Button } from "./components/ui/button";

const App = () => {
  return (
    <div className="p-5">
      <Button>This is a button</Button>
      <Outlet />
    </div>
  );
};

export default App;