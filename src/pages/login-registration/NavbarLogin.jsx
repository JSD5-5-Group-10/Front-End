import React from "react";
import { Link } from "react-router-dom";

const NavbarLogin = () => {
  return (
    <div className="navbar bg-[#8278d9] max-w-[1360px] fixed rounded-b-lg shadow-2xl">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-white text-xl">
          Thor Exercise Tracking
        </Link>
      </div>
      <div className="flex-none">
        <ul className="hidden lg:menu lg:menu-horizontal text-white px-1">
          <Link to="/aboutus">
            <li>
              <a>About Us</a>
            </li>
          </Link>
          <Link to="/Registration">
            <li>
              <a>Register</a>
            </li>
          </Link>
          <Link to="/login">
            <li>
              <a>Login</a>
            </li>
          </Link>
        </ul>
        <ul className="menu menu-horizontal text-white px-1 lg:hidden">
          <li>
            <details>
              <summary>Menu</summary>
              <ul className="p-1 bg-[#8278d9]/80">
                <Link to="/aboutus">
                  <li>
                    <a>About Us</a>
                  </li>
                </Link>
                <Link to="/Registration">
                  <li>
                    <a>Register</a>
                  </li>
                </Link>
                <Link to="/login">
                  <li>
                    <a>Login</a>
                  </li>
                </Link>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarLogin;
