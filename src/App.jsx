import ActivityForm from "../src/component/Activity/ActivityForm";
import IndexActivity from "./component/Activity/IndexActivity";
import Navbar from "./component/Navbar";
import { Index } from "./pages/Index/Index";
import { Registration } from "./pages/login-registration/Registration";
import CalculateCalories from "./component/Activity/CalculateCalories";

function App() {
  return (
    <>
      <Index />
      {/* <Registration /> */}
      <CalculateCalories />
    </>
  );
}

export default App;
