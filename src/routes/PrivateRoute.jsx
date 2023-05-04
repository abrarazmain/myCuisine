import React,{ useContext } from "react";
import { AuthContext } from "../components/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return ;
  }
  if (user) {
    return children;
  } else {
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
  }
 
};

export default PrivateRoute;
