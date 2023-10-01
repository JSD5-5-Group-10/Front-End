import Navbar from "../../component/Navbar";
import { Registration } from "../login-registration/Registration";

export const RegistrationPage = () => {
  return (
    <div className="md:flex">
      <div>
        <Navbar />
      </div>

      <div className="mx-auto">
        <Registration />
      </div>
    </div>
  );
};
