import React from "react";
import { Navigate, Outlet } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

function PrivateRoute({ name }) {
  // console.log(props.name);
  return name ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
