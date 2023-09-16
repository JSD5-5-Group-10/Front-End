import ActivityForm from "./component/Activity";
import { Dashboard } from "./component/Dashboard";
import { Navbar } from "./component/Navber";
import { Login } from "./component/login-registration/Login";
import { Registration } from "./component/login-registration/Registration";


function App() {
  return (
    <>
      <Login/>
      <Registration/>
      {/* <Navbar /> */}
      <Dashboard />
      {/* <ActivityForm /> */}
    </>
  );
}

export default App;
