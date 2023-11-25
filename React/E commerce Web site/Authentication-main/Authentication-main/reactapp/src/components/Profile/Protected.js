import React from "react";
import { Navigate } from "react-router-dom";

const Protected = ({ isLoggedIn, children }) => {
  console.log("Protect mein isLoggedIn ",isLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/auth" replace />;
  } 
    return children;
  
};

export default Protected;
