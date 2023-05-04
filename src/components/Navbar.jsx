import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import "react-tooltip/dist/react-tooltip.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then()
      .catch((error) => {
   
      });
  };
  return (
    <div>
      <div className="navbar  bg-purple-400 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink>Home</NavLink>
              </li>

              <li>
                <NavLink>Blog</NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost normal-case text-xl">
            MyCuisine
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink className="mr-3" to="/">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user && (
            <div className="w-10 rounded mr-4 group relative  flex justify-center">
              <img src={user.photoURL} />
              <span className="absolute top-10 scale-0 rounded bg-gray-800 p-4 text-xs text-white group-hover:scale-100">
                {user.displayName}{" "}
              </span>
            </div>
          )}
          {user ? (
            <NavLink
              onClick={handleSignOut}
              className="btn btn-primary border-none"
            >
              Logout
            </NavLink>
          ) : (
            <NavLink to="/login" className="btn btn-primary border-none">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
