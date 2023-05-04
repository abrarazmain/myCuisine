import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const handleSignOut = () => {
    logOut()
      .then()
      .catch(error => {
      console.log(error);
    })
  }
  return (
    // <div>
    //   <div className="navbar  bg-purple-400 text-white">
    //     <div className="navbar-start">
    //       <div className="dropdown">
    //         <label tabIndex={0} className="btn btn-ghost lg:hidden">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-5 w-5"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M4 6h16M4 12h8m-8 6h16"
    //             />
    //           </svg>
    //         </label>
    //         <ul
    //           tabIndex={0}
    //           className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
    //         >
    //           <li>
    //             <Link>Home</Link>
    //           </li>

    //           <li>
    //             <Link>Blog</Link>
    //           </li>
    //         </ul>
    //       </div>
    //       <Link to='/' className="btn btn-ghost normal-case text-xl">MyCuisine</Link>
    //     </div>
    //     <div className="navbar-center hidden lg:flex">
    //       <ul className="menu menu-horizontal px-1">
    //         <li>
    //           <Link to='/'>Home</Link>
    //         </li>

    //         <li>
    //           <Link to='/blog'>Blog</Link>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="navbar-end">
    //     {user && <div className="w-10 rounded mr-4">
    //       <img  title={user.displayName} src={user.photoURL} />
    //     </div>}
    //       {user ? <Link  onClick={handleSignOut} className="btn bg-purple-600 border-none">Logout</Link> : <Link to='/login' className="btn bg-purple-600 border-none">Login</Link>}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Navbar;
