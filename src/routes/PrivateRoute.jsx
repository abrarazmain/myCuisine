import React, { useContext } from "react";
import AuthProvider from "../components/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthProvider);
  console.log(user);
  if (loading) {
    return <>loading</>;
  }
  if (user) {
    return children;
  } else {
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
  }
 
};

export default PrivateRoute;
